import { useNavigate } from 'react-router-dom';
import LoginModal from './loginModal';
import { useState } from 'react';
import { useRecoilValue } from 'recoil';
import { isLoggedInState } from '../recoil/recoilState';

const GoToMain = () => {
  const navigate = useNavigate();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const isLoggedIn = useRecoilValue(isLoggedInState);

  const toMain = () => {
    navigate('/main');
  };

  const handleLogin = () => {
    setIsModalVisible(true);
  };

  const handleCloseModal = () => {
    setIsModalVisible(false);
  };

  const isLogin = (
    <button
      className="mt-[144px] flex w-384 h-90 py-2 px-67 justify-center items-center gap-2.5 mx-auto rounded-2xl border-2 border-white font-pretendard text-home-button bg-home-button shadow-home-button hover:bg-white hover:shadow-home-button-hover"
      onClick={toMain}
    >
      추천 받으러 가기
    </button>
  );

  const isNotLogin = (
    <>
      <button
        className="mt-[144px] flex w-384 h-90 py-2 px-67 justify-center items-center gap-2.5 mx-auto rounded-2xl border-2 border-white font-pretendard text-home-button bg-home-button shadow-home-button hover:bg-white hover:shadow-home-button-hover"
        onClick={handleLogin}
      >
        추천 받으러 가기
      </button>
      {isModalVisible && (
        <LoginModal
          onClose={handleCloseModal}
          isLogin={isLoggedIn}
          messageType="home"
        />
      )}
    </>
  );

  return <>{isLoggedIn ? isLogin : isNotLogin}</>;
};

export default GoToMain;
