import s from './ImageGalleryItem.module.css';
import PropTypes from 'prop-types';

const ImageGalleryItem = ({src, alt}) => (
    <div className={s.ImageGalleryItem}>
        <img src={src} alt={alt} className={s.ImageGalleryItemImage} />
    </div>
)

ImageGalleryItem.propTypes = {
    src: PropTypes.string,
    alt: PropTypes.string,
    
};

export default ImageGalleryItem;