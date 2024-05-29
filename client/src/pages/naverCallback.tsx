import { useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function NaverCallback() {
  const nav = useNavigate();

  useEffect(() => {
    const url = new URL(window.location.href);
    const code = new URL(window.location.href).searchParams.get('code');
    const state = new URL(window.location.href).searchParams.get('state');
    console.log('Authorization code:', code);
    console.log('State:', state);

    axios
      .post('http://223.130.153.50:8080/login', {
        authorizationCode: code,
        state: state,
      })
      .then((response) => {
        console.log('Login response:', response);
        //spring에서 발급된 jwt 반환 localStorage 저장
        localStorage.setItem('accessToken', response.headers.accesstoken);
        console.log('Access token set in localStorage');
        // / 페이지에 메시지 보내기
        console.log('Sending message to opener:', window.opener);
        if (window.opener) {
          window.opener.postMessage('loginSuccess', window.location.origin);
          console.log('Message sent to opener');
        } else {
          console.log('No opener found');
        }

        // 팝업창 닫기
        console.log('Closing window');
        window.close();
      })
      .catch((err) => {
        //에러발생 시 경고처리 후 login 페이지로 전환
        alert(err.response.data.detail);
        localStorage.setItem('loginStatus', 'fail');
        if (window.opener) {
          window.opener.postMessage('loginFail', window.location.origin);
        }
        console.log('Login status set to fail');
        window.close();
      });
  }, [nav]);

  return <div>네이버 로그인 처리 중...</div>;
}
