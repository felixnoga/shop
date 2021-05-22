import './shopPage.scss';
import SHOP_DATA from '../shop.data';
import PreviewSection from '../components/PreviewSection/PreviewSection';

const ShopPage = () => {
  const data = SHOP_DATA;
  return (
    <div className="container">
      {data.map((section, idx) => (
        <PreviewSection
          key={section.id}
          title={section.title}
          id={section.id}
          items={section.items}
          idx={idx}
        />
      ))}
    </div>
  );
};

export default ShopPage;
