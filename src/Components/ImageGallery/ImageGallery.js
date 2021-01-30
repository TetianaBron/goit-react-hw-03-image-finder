import { Component } from 'react';
import s from './ImageGallery.module.css';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import Button from '../Button/Button';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

export default class ImageGallery extends Component {
    static propTypes = {
    query: PropTypes.string.isRequired,
    };
    
    state = {
        item: null,
        error: null,
        status: 'idle'
    };

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.query !== this.props.query) {
            this.setState({ status: 'pending' })
                fetch(`https://pixabay.com/api/?q=${this.props.query}&page=1&key=19207978-b8cc5d5178f1c84e5ac39b1c7&image_type=photo&orientation=horizontal&per_page=12`)
                .then(response => response.json())
                .then(item => this.setState({ item, status: 'resolved' }))
                .catch(error => this.setState({ error, status: 'rejected' }))
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
            if (item.total > 0) {
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
                        <Button />
                    </>
                )
            } else {
                return <p className={s.MessageNotFound}><span className={s.Query}>{this.props.query}</span> is not found.</p>;
            }
        }
    }
}
            
