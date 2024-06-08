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
        buttonClassName="text-modal-button text-gray176"
        imgSrc={NextIcon}
        imgClassName="pr-[12px]"
      />

      <CarouselButton
        onClick={isLastPage ? handleSubmit : handleNext}
        text={isLastPage ? 'Submit' : 'Next'}
        buttonClassName="text-white text-modal-button bg-black"
        imgSrc={NextIcon}
        imgClassName="rotate-180 pr-[12px]"
        reverse
      />

      {!isLastPage ? (
        <CarouselButton
          onClick={handleNext}
          text="Skip"
          buttonClassName="text-modal-button pr-9 text-gray176"
        />
      ) : (
        <div className="w-[190px] h-[62px] mx-3"></div>
      )}
    </div>
  );
};

export default CarouselButtons;
