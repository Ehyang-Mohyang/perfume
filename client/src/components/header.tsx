import { useRecoilValue, useSetRecoilState } from 'recoil';
import { useNavigate } from 'react-router-dom';
import { isLoggedInState } from '../recoil/recoilState';
import useLogout from '../hooks/useLogout';
import { useState, useEffect } from 'react';
import LoginModal from './loginModal';
import axiosInstance from '../api/axiosConfig';

const Header = () => {
  const isLoggedIn = useRecoilValue(isLoggedInState);
  const setIsLoggedIn = useSetRecoilState(isLoggedInState);
  const logout = useLogout();
  const navigate = useNavigate();
  const [isModalVisible, setIsModalVisible] = useState(false);

  useEffect(() => {
    const checkLoginStatus = async () => {
      try {
        const response = await axiosInstance.get('/api/login/check');
        setIsLoggedIn(response.status === 200);
      } catch (error) {
        setIsLoggedIn(false);
      }
    };

    checkLoginStatus();
  }, [setIsLoggedIn]);

  const handleLogout = () => {
    logout();
  };

  const handleLogin = () => {
    setIsModalVisible(true);
  };

  const handleCloseModal = () => {
    setIsModalVisible(false);
  };

  return (
    <header className="fixed top-0 z-10 w-full font-pretendard h-[100px]">
      <nav>
        <ul className="flex items-center justify-between p-0 m-0">
          <li>
            <button
              onClick={() => navigate('/')}
              className="no-underline text-header-default text-[20px]"
            >
              <img
                src="/logo.png"
                alt="Logo"
                className="h-auto w-[130px] py-[11.1px] ml-[78px]"
              />
            </button>
          </li>
          <ul className="mr-[90px] py-[20px] flex flex-row gap-[42px]">
            {isLoggedIn && (
              <li>
                <button
                  onClick={() => navigate('/mypage')}
                  className="no-underline text-header-default text-[20px] font-normal bg-transparent border-none cursor-pointer"
                >
                  MY PAGE
                </button>
              </li>
            )}
            {isLoggedIn ? (
              <li>
                <button
                  onClick={handleLogout}
                  className="no-underline text-header-default text-[20px] font-normal bg-transparent border-none cursor-pointer"
                >
                  LOGOUT
                </button>
                <a id="logout-link" href="/" style={{ display: 'none' }}>
                  Redirect
                </a>
              </li>
            ) : (
              <li>
                <button
                  onClick={handleLogin}
                  className="no-underline text-header-default text-[20px] font-normal bg-transparent border-none cursor-pointer"
                >
                  LOGIN
                </button>
              </li>
            )}
          </ul>
        </ul>
      </nav>
      {isModalVisible && <LoginModal onClose={handleCloseModal} />}
    </header>
  );
};

export default Header;
