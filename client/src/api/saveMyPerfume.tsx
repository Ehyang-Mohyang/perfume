import axiosInstance from './axiosConfig';

export const saveMyPerfume = async (id: number) => {
    try {
        const token = 'your-auth-token'; // 실제 토큰을 사용해야 합니다.
        const response = await axiosInstance.post(`perfumes/${id}`, null, {
            headers: {
/*
                Authorization: `Bearer ${token}`,
*/
            },
        });
        return response.data;
    } catch (error) {
        console.error('Error posting saveMyPerfume:', error);
        throw error;
    }
};