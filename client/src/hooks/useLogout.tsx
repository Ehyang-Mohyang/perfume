import { useSetRecoilState } from 'recoil';
import { useNavigate } from 'react-router-dom';
import { naverTokenState } from '../recoil/recoilState';

const useLogout = () => {
  const setNaverToken = useSetRecoilState(naverTokenState);
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem('naverToken');
    setNaverToken(null);
    navigate('/');
  };

  return logout;
};

export default useLogout;
