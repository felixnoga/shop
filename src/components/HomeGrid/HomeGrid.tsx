import { useState } from 'react';

import HomeItem from '../HomeItem/HomeItem';
import './homeGrid.scss';
import { ISection } from '../../types/types';
import { sectionsData } from './data';

const HomeGrid = () => {
  const [sections, setSections] = useState<ISection[]>(sectionsData);
  return (
    <div className="home-grid">
      {sections.map(({ title, id, imageUrl, size }) => (
        <HomeItem
          key={id}
          title={title}
          imageUrl={imageUrl}
          size={size}
          id={id}
        />
      ))}
    </div>
  );
};

export default HomeGrid;
