import CarouselButton from './carouselButton';
import NextIcon from '../assets/icons/icon_next.svg';

type CarouselButtonsProps = {
  onPrev: () => void;
  onNext: () => void;
  isFirstPage: boolean;
  isLastPage?: boolean;
  onSubmit?: () => void;
};

const CarouselButtons: React.FC<CarouselButtonsProps> = ({
  onPrev,
  onNext,
  isFirstPage,
  isLastPage,
  onSubmit,
}) => {
  const handlePrev = () => {
    window.scrollTo(150, 0);
    onPrev();
  };

  const handleNext = () => {
    window.scrollTo(150, 0);
    onNext();
  };

  const handleSubmit = () => {
    window.scrollTo(0, 0);
    if (onSubmit) {
      onSubmit();
    }
  };

  return (
    <div className="flex justify-center pb-[111px]">
      <CarouselButton
        onClick={handlePrev}
        text="Back"
        isHidden={isFirstPage}
        buttonClassName="text-modal-button text-gray176 bg-transparent"
        imgSrc={NextIcon}
        imgClassName="mr-[14px]"
      />

      <CarouselButton
        onClick={isLastPage ? handleSubmit : handleNext}
        text={isLastPage ? 'Submit' : 'Next'}
        buttonClassName="text-modal-button text-white bg-black flex-row-reverse"
        imgSrc={NextIcon}
        imgClassName="rotate-180 ml-[10px]"
      />

      {!isLastPage && (
        <CarouselButton
          onClick={handleNext}
          text="Skip"
          buttonClassName="text-modal-button text-gray176 bg-transparent"
        />
      )}
    </div>
  );
};

export default CarouselButtons;
