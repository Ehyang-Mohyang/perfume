import React from 'react';
import { useRecoilState } from 'recoil';
import { perfumeCategories } from '../data/perfumeData';
import Button from './button';
import { selectedItemsState } from '../recoil/recoilState';
import './css/CarouselItems.css';

interface CarouselItemsProps {
  category: string;
}

const CarouselItems: React.FC<CarouselItemsProps> = ({ category }) => {
  const categoryData = perfumeCategories.find(
    (cat) => cat.category === category,
  );
  const [selectedItems, setSelectedItems] = useRecoilState(selectedItemsState);
  if (!categoryData) return null;

  const items = categoryData.items;

  const handleItemClick = (item: string) => {
    const newSelectedItems = new Map(selectedItems);
    newSelectedItems.set(category, item);
    setSelectedItems(newSelectedItems);
  };

  const renderButtons = (items: string[]) => (
    <div
      className={`flex flex-wrap items-center justify-center ${category}-container`}
    >
      {items.map((item) => {
        const isActive = selectedItems.get(category) === item;
        const buttonClass = `h-[90px] w-[300px] text-main-button font-medium border border-white border-2 rounded-[15px] shadow-main-button ${isActive ? 'bg-white text-black' : 'shadow-mypage-tap bg-mainbutton-bg text-mainbutton-default'} ${category}-button`;
        return (
          <Button
            key={item}
            text={item}
            type={buttonClass}
            onClick={() => handleItemClick(item)}
          />
        );
      })}
    </div>
  );

  const renderGrid = (items: string[]) => (
    <div className={`grid grid-cols-2 ${category}-grid`}>
      {items.map((item) => {
        const isActive = selectedItems.get(category) === item;
        const buttonClass = `h-[90px] w-[300px] text-main-button font-medium border border-white border-2 rounded-[15px] shadow-main-button ${isActive ? 'bg-white text-black' : 'bg-mainbutton-bg text-mainbutton-default'} ${category}-button`;
        return (
          <Button
            key={item}
            text={item}
            type={buttonClass}
            onClick={() => handleItemClick(item)}
          />
        );
      })}
    </div>
  );

  return (
    <div className={`${category}-container-wrapper`}>
      {items.length > 4 ? (
        <>
          <div>{renderButtons(items.slice(0, 3))}</div>
          <div>{renderButtons(items.slice(3, 7))}</div>
          <div>{items.length > 7 && renderButtons(items.slice(7))}</div>
        </>
      ) : items.length === 4 ? (
        <>{renderGrid(items)}</>
      ) : (
        <>{renderButtons(items)}</>
      )}
    </div>
  );
};

export default CarouselItems;
