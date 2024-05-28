import React from 'react';
import NaverLogin from './naverLogin';
import close from '../assets/icons/button_close.png';
import { useNavigate } from 'react-router-dom';

interface LoginModalProps {
  onClose?: () => void;
}

const LoginModal: React.FC<LoginModalProps> = ({ onClose }) => {
  const nav = useNavigate();
  const handleWithoutLogin = () => {
    nav('/main');
  };
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="flex items-center justify-center w-screen h-screen">
        <div className="w-[710px] h-[550px] bg-login-bg bg-center rounded-30 border-2 border-white text-center relative">
          <div className="absolute top-7 right-7">
            <img
              src={close}
              alt="Close"
              onClick={onClose}
              className="cursor-pointer"
            />
          </div>
          <div className="flex flex-col items-center justify-center w-full h-full font-pretendard">
            <img src="/logo.png" alt="Logo" className="mb-[17px] h-[67px]" />
            <div className="mb-3 font-semibold text-login-need">
              로그인이 필요해요!
            </div>
            <div className="font-normal text-login-simple mb-14">
              간편하게 로그인하고{' '}
              <span className="font-semibold">향수 추천</span>을 받아보세요
            </div>

            <NaverLogin />
            <button
              onClick={handleWithoutLogin}
              className="cursor-pointer inline-flex flex-col w-[460px] h-[94px] px-[103px] py-[27px] items-start gap-2.5 rounded-[15px] border-2 border-mainbutton-default hover:bg-white hover:shadow-home-button-hover"
            >
              <p className="w-full h-full ml-1 text-center text-naver-button text-mainbutton-default">
                로그인 없이 둘러보기
              </p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
