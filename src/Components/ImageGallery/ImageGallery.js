import { Component } from 'react';
import s from './ImageGallery.module.css';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import Button from '../Button/Button';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Spinner from '../Spinner/Spinner';
import pixabayAPI from '../../services/pixabay-api';
import Modal from '../Modal/Modal';

const perPage = 12;

export default class ImageGallery extends Component {
    static propTypes = {
    query: PropTypes.string.isRequired,
    };
    
    state = {
        items: [],
        total: null,
        error: null,
        loading: false,
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
            this.fetch(this.props.query);
       }
    }
  
   

    fetch = (query) => {
        this.setState({ loading: true });

        pixabayAPI
            .fetchImg(query, this.state.page, perPage)
            .then((items) => {
                if (items.total === 0) {
                    toast.error(`${query} is not found. Try another one!`);
                } else if (this.state.page === 1) {
                    toast.error(`${items.total} pictures is found.`)
                }
                this.setState(prevState => ({
                    items: [...prevState.items, ...items.hits],
                    total: items.total,
                    page: prevState.page + 1,
                }))
            })
            .catch(error => {
                 toast.error(error.message);
                 this.setState({ error: error.message });
            })
         .finally(() => {
             this.setState({ loading: false });
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

    handleButtonClick = () => {
        this.fetch(this.props.query);
    }
    
    handleGalleryItemClick = (src, alt) => {
            this.setState({
                largeImage: { src, alt },
            });
            this.toggleModal();
    }

    render() {
        const { items, showModal, loading, largeImage, page, total } = this.state;
        const numberOfPages = total / perPage;
 
        return (
        <>
            {items.length > 0 &&
                (<ul className={s.ImageGallery}>
                {items.map(({ webformatURL, largeImageURL, tags }, index) => (
                        <li key={index}>
                          <ImageGalleryItem
                              webformatURL={webformatURL}
                              largeImageURL={largeImageURL}
                              tags={tags}
                              clickOnItem={() => this.handleGalleryItemClick(largeImageURL, tags)} />
                        </li>))}
                    </ul>)}
                
            {loading && <Spinner/>}
                                
            {showModal &&
                (<Modal
                        image={largeImage}
                        onClose={this.toggleModal}
                    />)}
                            
            {page - 1 < numberOfPages && !loading && (<Button onIncrement={() => this.handleButtonClick()} />)}
        </>
        )    
    }
}
            
