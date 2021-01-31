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
        item: [],
        error: null,
        status: Status.IDLE,
        page: 1
    };

    incrementPage = () => {
        this.state.page += 1;
        this.setState({ status: Status.PENDING })
        pixabayAPI
            .fetchImg(this.props.query, this.state.page)
             .then(item => this.setState({ item, status: Status.RESOLVED }))
                .catch(error => this.setState({ error, status: Status.REJECTED }))
    }
    
    resetPage = () => {
        this.state.page = 1;
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.query !== this.props.query) {
            this.setState({ status: Status.PENDING })
            this.resetPage();
            pixabayAPI
                .fetchImg(this.props.query, this.state.page)  
                .then(item => this.setState({ item, status: Status.RESOLVED }))
                .catch(error => this.setState({ error, status: Status.REJECTED }))
       }
       
    }
    
    render() {
        const { item, error, status } = this.state;

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
            if (item.hits.length > 0) {
                return (
                    <>
                        <ul className={s.ImageGallery}>
                            {item.hits.map(({ id, webformatURL, tags }) => (
                                <li key={id}>
                                    <ImageGalleryItem
                                        src={webformatURL}
                                        alt={tags} />
                                </li>
                            ))}
                        </ul>
                        { item.hits.length > 11 && <Button onIncrement={this.incrementPage} />}
                    </>
                )
            } else {
                return <p className={s.MessageNotFound}><span className={s.Query}>{this.props.query}</span> is not found.</p>;
            }
        }
    }
}
            
