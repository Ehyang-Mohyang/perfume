import axiosInstance from './axiosConfig';

export const saveMyPerfume = async (id: number) => {
    try {
        console.log('saveMyPerfume id', id);
        const response = await axiosInstance.post(`/api/myPage/perfumes/${id}`);
        console.log('saveMyPerfume: ', response.data);
        return response.data;
    } catch (error) {
        console.error('Error posting saveMyPerfume:', error);
        throw error;
    }
};