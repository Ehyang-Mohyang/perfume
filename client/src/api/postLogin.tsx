import axiosInstance from './axiosConfig';

export const postLogin = async () => {
  try {
    const response = await axiosInstance.post(
      '/oauth2/authorization/naver',
    );
    window.location.href = response.data;
  } catch (error) {
    console.error('Error posting hashtags:', error);
    throw error;
  }
};
