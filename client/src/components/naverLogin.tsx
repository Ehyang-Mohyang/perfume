import { useState, useEffect } from 'react';
import naverDefault from '../assets/images/logo_green.png';
import naverHover from '../assets/images/logo_white.png';
import axios from 'axios';
import apiUrl from '../config';
import { useNavigate } from 'react-router-dom';

const NaverLogin = () => {
  const [isHover, setIsHover] = useState(false);
  const nav = useNavigate();

  const loginNaver = async () => {
    try {
      const response = await axios.get(
        apiUrl.apiUrl + 'oauth2/authorization/naver',
        {
          withCredentials: true,
          maxRedirects: 0, // 리디렉션을 거부
        },
      );

      // 수동으로 location 헤더에서 URL을 가져와 리디렉션
      const redirectUrl = response.headers.location;
      if (redirectUrl) {
        window.location.href = redirectUrl;
      }
    } catch (error) {
      const err = error as any; // 타입 변환
      if (err.response && err.response.status === 302) {
        // 302 응답의 location 헤더에서 URL을 가져와 리디렉션
        const redirectUrl = err.response.headers.location;
        if (redirectUrl) {
          window.location.href = redirectUrl;
        }
      } else {
        console.error('Error fetching login URL', err);
      }
    }
  };

  useEffect(() => {
    const handleLogin = (event: MessageEvent) => {
      console.log('Received message:', event);
      if (
        event.origin === window.location.origin &&
        event.data === 'loginSuccess'
      ) {
        console.log('Login successful, redirecting to /main');
        // 메인 페이지로 이동
        nav('/main');
      }
    };
    // 메시지 수신 등록
    window.addEventListener('message', handleLogin);

    // 메시지 수신 해제
    return () => {
      window.removeEventListener('message', handleLogin);
    };
  }, [nav]);

  return (
    <div className={'flex justify-center items-center mb-[15px]'}>
      <div id="naverIdLogin" className="hidden"></div>
      <div
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >
        {isHover ? (
          <div
            className="cursor-pointer inline-flex flex-col w-[460px] h-[94px] px-[103px] py-[27px] items-start gap-2.5 rounded-[15px] bg-naver-default border-2 border-naver-default"
            onClick={loginNaver}
          >
            <div className="flex flex-row justify-between w-full h-full">
              <img className="flex-shrink-0 mr-1" src={naverHover} />
              <p className="w-full h-full ml-1 text-center text-white text-naver-button text-naver-default">
                네이버 간편 로그인
              </p>
            </div>
          </div>
        ) : (
          <div className="cursor-pointer inline-flex flex-col w-[460px] h-[94px] px-[103px] py-[27px] items-start gap-2.5 rounded-[15px] border-2 border-naver-default">
            <div className="flex flex-row justify-between w-full h-full">
              <img className="flex-shrink-0 mr-1" src={naverDefault} />
              <p className="w-full h-full ml-1 text-center text-naver-button text-naver-default">
                네이버 간편 로그인
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default NaverLogin;
