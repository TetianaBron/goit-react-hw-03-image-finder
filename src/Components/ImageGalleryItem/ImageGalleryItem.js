import s from './ImageGalleryItem.module.css';
import PropTypes from 'prop-types';

const ImageGalleryItem = () => (
     <div>
        <li className={s.ImageGalleryItem}>
            <img src="" alt="" className={s.ImageGalleryItemImage} />
        </li>
    </div>
)

ImageGalleryItem.propTypes = {
//   onRemoveContact: PropTypes.func,
//   contacts: PropTypes.arrayOf(PropTypes.object),
};

export default ImageGalleryItem;