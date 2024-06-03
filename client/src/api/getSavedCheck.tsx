import axiosInstance from './axiosConfig';

export const getSavedCheck = async (ids: number[]) => {
    try {
        console.log('getSavedCheck id: ', ids);
        const response = await axiosInstance.get(`/api/myPage/perfumes/check`,{
            params: { ids },
        });
        return response.data;
    } catch (error) {
        console.error('Error getSavedCheck', error);
        throw error;
    }
};