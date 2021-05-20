import './homeItem.scss';
import { homeItemProps } from '../../types/types';

const HomeItem = ({ title, imageUrl, size }: homeItemProps): JSX.Element => {
  return (
    <div
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
      className={`grid-item ${size}`}
    >
      <div className="grid-item-content">
        <h1 className="content-title">{title.toUpperCase()}</h1>
        <span className="content-subtitle">SHOP NOW</span>
      </div>
    </div>
  );
};

export default HomeItem;
