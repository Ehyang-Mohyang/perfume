import axiosInstance from './axiosConfig';

export const getSavedCheck = async (id: number) => {
    try {
        const response = await axiosInstance.get('');
        console.log(response);
        return response.data;
    } catch (error) {
        console.error('Error getSavedCheck', error);
        throw error;
    }
};