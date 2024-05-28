interface ModalProps {
  title: string | React.ReactNode;
  content: string | React.ReactNode;
  negativeAnswer?: string;
  positiveAnswer: string;
  isVisible?: boolean;
  onClose?: () => void;
  onConfirm?: () => void;
}

const Modal: React.FC<ModalProps> = ({
  title,
  content,
  negativeAnswer,
  positiveAnswer,
  isVisible,
  onClose,
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
      <div className="bg-white rounded-[30px] shadow-modal-border bg-modal-bg w-[710px] min-h-[340px] flex flex-col items-center">
        <>{title}</>
        <div className="flex justify-center text-center text-mainbutton-default text-[24px]">
          {typeof content === 'string' ? <p>{content}</p> : content}
        </div>
        <div className="flex gap-[10px] mt-[49px] mb-[72px]">
          <button
            type="button"
            className="text-modal-button text-gray80 rounded-[10px] border border-gray229 bg-gray229 w-[260px] h-[80px]"
            onClick={onClose}
          >
            {negativeAnswer}
          </button>
          <button
            type="button"
            className="text-white bg-black text-modal-button w-[260px] h-[80px] rounded-[10px]"
            onClick={onConfirm}
          >
            {positiveAnswer}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
