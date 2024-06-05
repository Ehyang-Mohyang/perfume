import axiosInstance from './axiosConfig';

export const getGptPerfumeInfo = async (id: number) => {
    try {
        console.log('getGptPerfumeInfo id: ', id);
        const response = await axiosInstance.get(`/api/gpt/perfume/${id}/explanation`);
        return response.data;
    } catch (error) {
        console.error('Error getGptPerfumeInfo', error);
        throw error;
    }
};