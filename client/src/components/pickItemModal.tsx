interface ModalProps {
  title: string | React.ReactNode;
  content: string | React.ReactNode;
  positiveAnswer: string;
  isVisible?: boolean;
  onConfirm?: () => void;
}

const Modal: React.FC<ModalProps> = ({
  title,
  content,
  positiveAnswer,
  isVisible,
  onConfirm,
}) => {
  if (!isVisible) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-opacity-50"
      role="dialog"
      aria-labelledby="modalLabel"
      aria-hidden={!isVisible}
    >
      <div className="rounded-[30px] border-2 bg-nochoice-bg bg-center border-white backdrop-blur-[17.8px] shadow-login-modal w-[710px] min-h-[340px] flex flex-col">
        <div className="flex items-center justify-center">
          <h5
            className="font-semibold text-pick-modal mt-[60px]"
            id="modalLabel"
          >
            {title}
          </h5>
        </div>
        <div className="flex justify-center text-center text-mainbutton-default font-normal text-[24px] mt-[12px]">
          {typeof content === 'string' ? <p>{content}</p> : content}
        </div>
        <button
          type="button"
          className="text-white mx-auto bg-black text-modal-button w-[260px] mt-[45px] h-[80px] rounded-[15px]"
          onClick={onConfirm}
        >
          {positiveAnswer}
        </button>
      </div>
    </div>
  );
};

export default Modal;
