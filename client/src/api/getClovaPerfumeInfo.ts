import axiosInstance from './axiosConfig';

export const getClovaPerfumeInfo = async (id: number) => {
    try {
        console.log('getClovaPerfumeInfo id: ', id);
        const response = await axiosInstance.get(`/api/clova/perfume/${id}/explanation`);
        return response.data;
    } catch (error) {
        console.error('Error getClovaPerfumeInfo', error);
        throw error;
    }
};