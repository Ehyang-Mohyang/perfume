import axiosInstance from './axiosConfig';

export const getPerfumes = async (page: number, size: number) => {
  try {
    const response = await axiosInstance.get(
      `/api/myPage/perfumes?page=${page}&size=${size}`,
    );
    return response.data;
  } catch (error) {
    console.error('Error fetching perfumes:', error);
    throw error;
  }
};
