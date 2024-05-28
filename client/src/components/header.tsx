import { useRecoilValue } from 'recoil';
import { Link } from 'react-router-dom';
import { naverTokenState } from '../recoil/recoilState';
import useLogout from '../hooks/useLogout';
import { useState } from 'react';
import LoginModal from './loginModal';

const Header = () => {
  const naverToken = useRecoilValue(naverTokenState);
  const logout = useLogout();
  const [isModalVisible, setIsModalVisible] = useState(false);

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
    <header className="fixed top-0 z-10 w-[1920px] font-pretendard h-[100px]">
      <nav>
        <ul className="flex items-center justify-between p-0 m-0">
          <li>
            <Link
              to="/"
              className="no-underline text-header-default text-[20px]"
            >
              <img
                src="/logo.png"
                alt="Logo"
                className="h-auto w-[130px] py-[11.1px] ml-[78px]"
              />
            </Link>
          </li>
          <ul className="mr-[90px] py-[20px]">
            {naverToken && (
              <li>
                <Link
                  to="/mypage"
                  className="no-underline text-header-default text-[20px] font-normal"
                >
                  MY PAGE
                </Link>
              </li>
            )}
            {naverToken ? (
              <li>
                <button
                  onClick={handleLogout}
                  className="no-underline text-header-default text-[20px] font-normal bg-transparent border-none cursor-pointer"
                >
                  LOGOUT
                </button>
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
