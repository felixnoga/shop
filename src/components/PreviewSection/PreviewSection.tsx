import { previewSectionProps } from '../../types/types';
import './previewSection.scss';
import PreviewItem from '../PreviewItem/PreviewItem';

const PreviewSection = ({ id, title, items, idx }: previewSectionProps) => {
  return (
    <div className="preview-container">
      <h2 className="preview-title">{title.toUpperCase()}</h2>
      <div className="preview-images">
        {items
          .filter((item, idx) => idx < 4)
          .map((item) => (
            <PreviewItem item={item} />
          ))}
      </div>
    </div>
  );
};

export default PreviewSection;
