import axiosInstance from './axiosConfig';

export const deletePerfumes = async (ids: number[]) => {
  try {
    const response = await axiosInstance.delete('/api/myPage/perfumes', {
      data: { ids },
    });
    return response.data;
  } catch (error) {
    throw new Error('Failed to delete perfumes');
  }
};
