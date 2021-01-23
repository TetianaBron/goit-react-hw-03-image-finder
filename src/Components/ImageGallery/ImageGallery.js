import s from './ImageGallery.module.css';
import PropTypes from 'prop-types';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';

const ImageGallery = () => (
    <div>
         <ul className={s.ImageGallery}>
            <ImageGalleryItem />
        </ul>
    </div>
)

ImageGallery.propTypes = {
//   onRemoveContact: PropTypes.func,
//   contacts: PropTypes.arrayOf(PropTypes.object),
};
            
export default ImageGallery;