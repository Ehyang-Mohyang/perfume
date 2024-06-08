import Button from './button';
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
  return (
    <div className="flex justify-center pb-[111px]">
      <div style={{ visibility: isFirstPage ? 'hidden' : 'visible' }}>
        <Button
          type="flex items-center text-modal-button justify-center mx-3 w-[190px] h-[62px] rounded-30 text-gray176"
          text="Back"
          onClick={onPrev}
          imgSrc={NextIcon}
          imgClassName="mr-[14px]"
        />
      </div>

      <Button
        type="flex flex-row-reverse text-modal-button items-center mx-3 justify-center w-[190px] h-[62px] pl-[10px] rounded-30 bg-black text-white"
        onClick={isLastPage ? onSubmit : onNext}
        text={isLastPage ? 'Submit' : 'Next'}
        imgSrc={NextIcon}
        imgClassName="rotate-180 ml-[10px]"
      />

      {!isLastPage ? (
        <Button
          type="flex items-center text-modal-button justify-center mx-3 w-[190px] h-[62px] rounded-30 text-gray176"
          text="Skip"
          onClick={onNext}
        />
      ) : (
        <div className="w-[190px] h-[62px]"></div>
      )}
    </div>
  );
};

export default CarouselButtons;
