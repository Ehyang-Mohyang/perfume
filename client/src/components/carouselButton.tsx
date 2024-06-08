type CarouselButtonProps = {
  onClick: () => void;
  text: string;
  isHidden?: boolean;
  imgSrc?: string;
  imgClassName?: string;
  buttonClassName?: string;
  reverse?: boolean;
};

const CarouselButton: React.FC<CarouselButtonProps> = ({
  onClick,
  text,
  isHidden = false,
  imgSrc,
  imgClassName,
  buttonClassName,
  reverse = false,
}) => {
  return (
    <div style={{ visibility: isHidden ? 'hidden' : 'visible' }}>
      <button
        onClick={onClick}
        className={`mx-3 w-[190px] h-[62px] rounded-30 ${buttonClassName}`}
      >
        <span className="flex items-center justify-center">
          {!reverse && imgSrc && (
            <img src={imgSrc} alt="" className={`${imgClassName}`} />
          )}
          {text}
          {reverse && imgSrc && (
            <img src={imgSrc} alt="" className={`${imgClassName}`} />
          )}
        </span>
      </button>
    </div>
  );
};

export default CarouselButton;
