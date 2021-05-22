import { previewItemProps } from '../../types/types';
import './previewItem.scss';

const PreviewItem = ({ item }: previewItemProps) => {
  return (
    <div className="item">
      <div
        className="item-image"
        style={{ backgroundImage: `url(${item.imageUrl})` }}
      ></div>
      <span className="item-name">{item.name}</span>
      <span className="item-price">{item.price} &euro;</span>
    </div>
  );
};

export default PreviewItem;
