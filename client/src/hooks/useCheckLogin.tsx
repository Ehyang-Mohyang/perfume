import { useEffect } from 'react';
import { useSetRecoilState } from 'recoil';
import { isLoggedInState } from '../recoil/recoilState';
import { checkLoginStatus } from '../recoil/recoilState';

const useCheckLogin = () => {
  const setIsLoggedIn = useSetRecoilState(isLoggedInState);

  useEffect(() => {
    const checkLogin = async () => {
      const loggedIn = await checkLoginStatus();
      setIsLoggedIn(loggedIn);
    };

    checkLogin();
  }, [setIsLoggedIn]);
};

export default useCheckLogin;
