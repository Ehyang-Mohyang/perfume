import axiosInstance from './axiosConfig';

export const getPerfumes = async (page: number, size: number) => {
  try {
    // const token = localStorage.getItem('naverToken');
    // if (!token) {
    //   throw new Error('No token found');
    // }
    const response = await axiosInstance.get(
      `/api/myPage/perfumes?page=${page}&size=${size}`,
      {
        headers: {
          /*
                          Authorization: `Bearer ${token}`,
          */
        },
      },
    );
    return response.data;
  } catch (error) {
    console.error('Error fetching perfumes:', error);
    throw error;
  }
};
