import axiosInstance from './axiosConfig';

export const getMyinfo = async () => {
  try {
    const response = await axiosInstance.get(`/api/myPage/account`);
    return response.data;
  } catch (error) {
    console.error('Error fetching Myinfo:', error);
    throw error;
  }
};
