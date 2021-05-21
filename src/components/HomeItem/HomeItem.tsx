import './homeItem.scss';
import { homeItemProps } from '../../types/types';
import { increaseImage, decreaseImage } from '../../anims';

const HomeItem = ({
  title,
  imageUrl,
  size,
  id,
}: homeItemProps): JSX.Element => {
  return (
    <div
      className={`grid-item ${size}`}
      onMouseEnter={(e) => {
        increaseImage(e);
      }}
      onMouseLeave={(e) => {
        decreaseImage(e);
      }}
    >
      <div
        className="grid-item-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className="grid-item-content">
        <h1 className="content-title">{title.toUpperCase()}</h1>
        <span className="content-subtitle">SHOP NOW</span>
      </div>
    </div>
  );
};

export default HomeItem;
