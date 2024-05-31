import { useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function NaverCallback() {
  // const navigate = useNavigate();

  // useEffect(() => {
  //   const url = new URL(window.location.href);
  //   const code = url.searchParams.get('code');
  //   const state = url.searchParams.get('state');
  //   console.log('Authorization code:', code);
  //   console.log('State:', state);

  //   if (code) {
  //     axios
  //       .post('https://perfume-bside.site/api/auth/naver', { code, state })
  //       .then((response) => {
  //         console.log('Access token received:', response.data.access_token);
  //         localStorage.setItem('accessToken', response.data.access_token);
  //         navigate('/main');
  //       })
  //       .catch((error) => {
  //         console.error('Error during authentication:', error);
  //         navigate('/login');
  //       });
  //   } else {
  //     console.error('No authorization code found');
  //     navigate('/login');
  //   }
  // }, [navigate]);

  return <div>네이버 로그인 처리 중...</div>;
}
