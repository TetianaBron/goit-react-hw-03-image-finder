import s from './ImageGalleryItem.module.css';
import PropTypes from 'prop-types';

const ImageGalleryItem = ({webformatURL, tags, clickOnItem}) => (
    <div className={s.ImageGalleryItem}>
        <img
            src={webformatURL}
            alt={tags}
            onClick={clickOnItem}
            className={s.ImageGalleryItemImage} />
    </div>
)

ImageGalleryItem.propTypes = {
    webformatURL: PropTypes.string,
    tags: PropTypes.string.isRequired,
    clickOnItem: PropTypes.func,
};

export default ImageGalleryItem;