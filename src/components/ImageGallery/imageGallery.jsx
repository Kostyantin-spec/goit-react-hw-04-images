import { ImageGalleryItem } from 'components/ImageGalleryItem/imageGalleryItem';
import css from './imageGallery.module.css';

export const ImageGallery = ({ images }) => {
  return (
    <ul className={css.gallery}>
      {images.map(image => (
        <ImageGalleryItem image={image} key={image.id} />
      ))}
    </ul>
  );
};
