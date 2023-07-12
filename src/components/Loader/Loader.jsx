import Skeleton from 'react-loading-skeleton';
import ImageGallery from '../ImageGallery/ImageGallery';
import 'react-loading-skeleton/dist/skeleton.css';

const Loader = () => {
  const array = Array(12).fill(0);
  return (
    <ImageGallery>
      {array.map((el, idx) => (
        <li className="imageGalleryItem" key={idx}>
          <Skeleton style={{ width: 353 }} className="imageGalleryItem-image" />
        </li>
      ))}
    </ImageGallery>
      );
};

export default Loader;