import axiosInstance from '../api/axiosConfig';
import { useNavigate } from 'react-router-dom';

const useLogout = () => {
  const navigate = useNavigate();

  const logout = async () => {
    try {
      await axiosInstance.post('/api/logout');
      // 교체
      window.location.href = '/';

      // navigate('/');
      console.log('Logout successful');
    } catch (error) {
      console.error('Failed to logout', error);
    }
  };
  return logout;
};

export default useLogout;
