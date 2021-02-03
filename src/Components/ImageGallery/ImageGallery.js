import { Component } from 'react';
import s from './ImageGallery.module.css';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import Button from '../Button/Button';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import pixabayAPI from '../../services/pixabay-api';
import Modal from '../Modal/Modal';

const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

export default class ImageGallery extends Component {
    static propTypes = {
    query: PropTypes.string.isRequired,
    };
    
    state = {
        items: [],
        error: null,
        status: Status.IDLE,
        page: 1,
        showModal: false,

        largeImage: {
            src: "",
            alt: "",
        },
    };

    async componentDidUpdate(prevProps) {
        if (prevProps.query !== this.props.query ) {
            await this.setState({ items: [], page: 1 });
            this.fetch(this.props.query, 1);
       }
    }

    fetch = (query, page) => {
        this.setState({ status: Status.PENDING });

     pixabayAPI
            .fetchImg(query, page)
            .then(items =>
              this.setState(prevState => ({
                 items: [...prevState.items, ...items.hits],
                  status: Status.RESOLVED,
                  page: prevState.page + 1,
              })),
            )
            .catch(error => this.setState({ error, status: Status.REJECTED }))
        .finally(() => {
        window.scrollTo({
          top: document.documentElement.scrollHeight,
          behavior: 'smooth',
        });
      });
    }
    
    toggleModal = () => {
        this.setState(({showModal}) => ({
            showModal: !showModal
        }))
    }

    clickOnItem = (src, alt) => {
            this.setState({
                largeImage: { src, alt },
            });
            this.toggleModal();
    }

    render() {
        const { items, error, status, showModal, largeImage} = this.state;

        if (status === 'idle') {
            return <></>
        }

        if (status === 'pending') {
            return (
                <div className={s.Loader}>
                    <Loader
                         type="Puff"
                         color="#00BFFF"
                         height={260}
                         width={260}
                         timeout={3000}
                    />
                 </div>)
        }

        if (status === 'rejected') {
            return toast.error(`${error.message}`)
        }

        if (status === 'resolved') {
            if (items.length > 0) {
                return (
                    <>
                          <ul className={s.ImageGallery}>
                            {items.map(({ webformatURL, largeImageURL, tags}, index) => (
                                <li key={index}>
                                    <ImageGalleryItem
                                        webformatURL={webformatURL}
                                        largeImageURL={largeImageURL}
                                        tags={tags}
                                        clickOnItem={() => this.clickOnItem(largeImageURL, tags)}/>
                                </li>
                            ))}
                          </ul>
                        {showModal &&
                            <Modal
                                image={largeImage}
                                onClose={this.toggleModal}
                            />}
                        {items.length > 11  && <Button onIncrement={() => this.fetch(this.props.query, this.state.page)} />}
                    </>
                )
            } else {
                return <p className={s.MessageNotFound}><span className={s.Query}>{this.props.query}</span> is not found.</p>;
            }
        }
    }
}
            
