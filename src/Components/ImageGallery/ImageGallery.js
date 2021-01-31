import { Component } from 'react';
import s from './ImageGallery.module.css';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import Button from '../Button/Button';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import pixabayAPI from '../../services/pixabay-api';

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
        page: 1
    };

    fetch = () => {
     pixabayAPI
            .fetchImg(this.props.query, this.state.page)
            .then(items => this.setState(prevState => ({
          items: [...prevState.items, ...items.hits],
          status: Status.RESOLVED,})))
            .catch(error => this.setState({ error, status: Status.REJECTED }))
        .finally(() => {
        window.scrollTo({
          top: document.documentElement.scrollHeight,
          behavior: 'smooth',
        });
      });
}
    
    incrementPage = () => {
        this.setState(prevState => ({ page: (prevState.page += 1) }));
        this.fetch();
    }
    
    resetPage = () => {
        this.setState({ page: 1 });
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.query !== this.props.query) {
            this.setState({ status: Status.PENDING, items: []})
            this.resetPage();
            this.fetch();
       }
    }
    
    render() {
        const { items, error, status } = this.state;

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
                            {items.map(({ webformatURL, tags }, index) => (
                                <li key={index}>
                                    <ImageGalleryItem
                                        src={webformatURL}
                                        alt={tags} />
                                </li>
                            ))}
                        </ul>
                        { items.length > 11 && <Button onIncrement={() => this.incrementPage()} />}
                    </>
                )
            } else {
                return <p className={s.MessageNotFound}><span className={s.Query}>{this.props.query}</span> is not found.</p>;
            }
        }
    }
}
            
