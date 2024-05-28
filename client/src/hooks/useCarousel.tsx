import { useState } from 'react';

const useCarousel = (categories: string[]) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? categories.length - 1 : prevIndex - 1,
    );
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === categories.length - 1 ? 0 : prevIndex + 1,
    );
  };

  const handleIndicatorClick = (index: number) => {
    setActiveIndex(index);
  };

  return {
    activeIndex,
    handlePrev,
    handleNext,
    handleIndicatorClick,
  };
};

export default useCarousel;
