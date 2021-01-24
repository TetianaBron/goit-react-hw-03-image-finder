import { Component } from 'react';
import s from './ImageGallery.module.css';
import PropTypes from 'prop-types';
import Loader from '../Loader/Loader';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';

export default class ImageGallery extends Component {
    static propTypes = {
    query: PropTypes.string.isRequired,
    };
    
    state = {
        item: null,
        loading: false
    };

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.query !== this.props.query) {
            this.setState({loading: true})
            fetch(`https://pixabay.com/api/?q=${this.props.query}&page=1&key=19207978-b8cc5d5178f1c84e5ac39b1c7&image_type=photo&orientation=horizontal&per_page=12`)
                .then(res => res.json())
                .then(item => this.setState({ item }))
                .finally(() => this.setState({loading: false}));
       }
    }
    
    render() {
        const { item, loading } = this.state;

        return (
            <div>
                {loading && <Loader/>}
                {item && (
                    <ul className={s.ImageGallery}>
                        {item.hits.map(({ id, webformatURL, tags }) => (
                             <li key={id}>
                             <ImageGalleryItem  
                                 src={webformatURL}
                                 alt={tags} />
                            </li>
                            ))}
                    </ul>)}
             </div>
        )
    }
}
            
