import React from 'react';

interface ButtonProps {
  text: string;
  type: string;

  onClick?: () => void;
  imgSrc?: string;
  imgClassName?: string;
}

const Button: React.FC<ButtonProps> = ({
  text,
  type,

  onClick = () => {},
  imgSrc,
  imgClassName,
}) => {
  return (
    <button
      onClick={onClick}
      className={`${type} flex items-center justify-center cursor-pointer whitespace-nowrap`}
    >
      {imgSrc && (
        <img
          src={imgSrc}
          alt=""
          className={`inline-block mr-2 ${imgClassName}`}
        />
      )}
      {text}
    </button>
  );
};

export default Button;
