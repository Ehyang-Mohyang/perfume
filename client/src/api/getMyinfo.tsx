import axiosInstance from './axiosConfig';

export const getMyinfo = async () => {
  try {
    // const token = localStorage.getItem('naverToken');
    // if (!token) {
    //   throw new Error('No token found');
    // }
    const response = await axiosInstance.get(`/api/myPage/account`, {
      headers: {
        /*
                          Authorization: `Bearer ${token}`,
          */
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching Myinfo:', error);
    throw error;
  }
};
