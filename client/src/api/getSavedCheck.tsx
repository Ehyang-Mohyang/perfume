import axiosInstance from './axiosConfig';

export const getSavedCheck = async (id: number) => {
    try {
        console.log('getSavedCheck id: ', id);
        const response = await axiosInstance.get(`/api/myPage/perfumes/check/${id}`);
        console.log(response);
        return response.data;
    } catch (error) {
        console.error('Error getSavedCheck', error);
        throw error;
    }
};