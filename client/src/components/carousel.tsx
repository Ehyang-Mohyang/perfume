import { useEffect } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { perfumeCategories, getCategoryMessage } from '../data/perfumeData';
import CarouselButtons from './carouselButtons';
import CarouselItems from './carouselItems';
import PickHashtagSentence from './pickHashtagSentence';
import {
  matchedPerfumesState,
  selectedItemsState,
} from '../recoil/recoilState';
import { postHashtags } from '../api/perfumeMatching';
import useCarousel from '../hooks/useCarousel';
import { useNavigate } from 'react-router-dom';

interface CarouselProps {
  onCategoryChange: (category: string) => void;
  onShowModal: () => void;
}

const Carousel: React.FC<CarouselProps> = ({
  onCategoryChange,
  onShowModal,
}) => {
  const nav = useNavigate();
  const setMatchedPerfumes = useSetRecoilState(matchedPerfumesState);
  const setSelectedItems = useSetRecoilState(selectedItemsState);
  const categories = perfumeCategories.map((cat) => cat.category);
  const { activeIndex, handlePrev, handleNext, handleIndicatorClick } =
    useCarousel(categories);
  const selectedItems = useRecoilValue(selectedItemsState);

  useEffect(() => {
    onCategoryChange(categories[activeIndex]);
  }, [activeIndex, onCategoryChange, categories]);

  const handleSubmit = async () => {
    const hashtagsToSend = Array.from(selectedItems.values()).flat();
    if (hashtagsToSend.length === 0) {
      onShowModal();
      return;
    }

    try {
      const response = await postHashtags(hashtagsToSend);
      console.log('Submission successful:', response);
      setMatchedPerfumes(response); // Assuming response.data contains the matched perfumes
      console.log('Updated matchedPerfumes:', response); // 상태가 업데이트된 후의 값을 로그에 출력
      setSelectedItems(new Map());
    } catch (error) {
      console.error('Error submitting hashtags:', error);
    } finally {
      nav('/match');
    }
  };

  const renderMessage = (category: string) => {
    const { message, highlights } = getCategoryMessage(category);
    const parts = highlights.reduce<(string | JSX.Element)[]>(
      (acc, highlight) => {
        return acc.flatMap((part) => {
          if (typeof part === 'string') {
            return part.split(highlight).flatMap((splitPart, index, array) =>
              index < array.length - 1
                ? [
                    splitPart,
                    <span key={splitPart + highlight} className="font-semibold">
                      {highlight}
                    </span>,
                  ]
                : [splitPart],
            );
          }
          return part;
        });
      },
      [message],
    );

    return <span>{parts}</span>;
  };

  return (
    <div className="flex flex-col items-center flex-1 w-full h-full">
      <div className="flex flex-col items-center justify-center mt-[150px]">
        <span className="text-[20px] text-gray150">
          {activeIndex + 1} / {categories.length}
        </span>
        <div>
          {categories.map((_, index) => (
            <button
              key={categories[index]}
              type="button"
              className={`w-[50px] h-1 mx-[5px] mt-[25px] ${
                index <= activeIndex ? 'bg-black' : 'bg-gray150'
              }`}
              onClick={() => handleIndicatorClick(index)}
            ></button>
          ))}
        </div>
      </div>
      <div className="flex flex-col items-center justify-center flex-1 w-full">
        {categories.map((category, index) =>
          index === activeIndex ? (
            <div
              key={category}
              className="flex flex-col flex-1 w-full text-subtitle1 mt-[63px]"
            >
              <div className="text-center text-headline2">
                {renderMessage(category)}
              </div>
              <PickHashtagSentence />
              <div className="flex items-center justify-center flex-1">
                <CarouselItems category={category} />
              </div>
            </div>
          ) : null,
        )}
      </div>
      <div className="w-full mb-[150px]">
        <CarouselButtons
          onPrev={handlePrev}
          onNext={handleNext}
          isFirstPage={activeIndex === 0}
          isLastPage={activeIndex === categories.length - 1}
          onSubmit={handleSubmit}
        />
      </div>
    </div>
  );
};

export default Carousel;
