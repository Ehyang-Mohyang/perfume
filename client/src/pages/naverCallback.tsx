import { useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import apiUrl from '../config';

export default function NaverCallback() {
  const nav = useNavigate();

  useEffect(() => {
    const url = new URL(window.location.href);
    const code = new URL(window.location.href).searchParams.get('code');
    const state = new URL(window.location.href).searchParams.get('state');
    console.log('Authorization code:', code);
    console.log('State:', state);

    if (code) {
      const clientId = apiUrl.clientID;
      const clientSecret = apiUrl.clientSecret;
      const redirectUri = encodeURI(apiUrl.apiUrl + 'naver-callback');

      const tokenUrl = `https://nid.naver.com/oauth2.0/token?grant_type=authorization_code&client_id=${clientId}&client_secret=${clientSecret}&redirect_uri=${redirectUri}&code=${code}&state=${state}`;

      axios
        .get(tokenUrl)
        .then((response) => {
          const accessToken = response.data.access_token;
          console.log('Access token:', accessToken);
          axios
            .post('https://perfume-bside.site/api/auth/naver', { accessToken })
            .then(() => {
              window.opener.postMessage('loginSuccess', window.location.origin);
              window.close();
            })
            .catch((error) => {
              console.error('Error sending access token to backend:', error);
              window.opener.postMessage('loginFail', window.location.origin);
              window.close();
            });
        })
        .catch((error) => {
          console.error('Error getting access token:', error);
          window.opener.postMessage('loginFail', window.location.origin);
          window.close();
        });
    }
  }, [nav]);

  return <div>네이버 로그인 처리 중...</div>;
}
