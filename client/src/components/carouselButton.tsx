type CarouselButtonProps = {
  onClick: () => void;
  text: string;
  isHidden?: boolean;
  imgSrc?: string;
  imgClassName?: string;
  buttonClassName?: string;
};

const CarouselButton: React.FC<CarouselButtonProps> = ({
  onClick,
  text,
  isHidden = false,
  imgSrc,
  imgClassName,
  buttonClassName,
}) => {
  return (
    <div style={{ visibility: isHidden ? 'hidden' : 'visible' }}>
      <button
        onClick={onClick}
        className={`flex items-center justify-center mx-3 w-[190px] h-[62px] rounded-30 ${buttonClassName}`}
      >
        {imgSrc && <img src={imgSrc} alt="" className={imgClassName} />}
        {text}
      </button>
    </div>
  );
};

export default CarouselButton;
