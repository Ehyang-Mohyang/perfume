import axiosInstance from './axiosConfig';

export const cancelAccount = async () => {
  try {
    const response = await axiosInstance.delete('/api/myPage/account');
    return response.data;
  } catch (error) {
    console.error('Error deleting account:', error);
    throw error;
  }
};
