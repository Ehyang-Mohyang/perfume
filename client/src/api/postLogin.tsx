import axiosInstance from './axiosConfig';

export const postLogin = async () => {
  try {
    const response = await axiosInstance.post(
      '/api/oauth2/authorization/naver',
    );
    return response.data;
  } catch (error) {
    console.error('Error posting hashtags:', error);
    throw error;
  }
};
