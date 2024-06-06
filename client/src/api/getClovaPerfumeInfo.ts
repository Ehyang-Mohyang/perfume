import axiosInstance from './axiosConfig';

/*
export const getClovaPerfumeInfo = async (id: number) => {
    try {
        console.log('getClovaPerfumeInfo id: ', id);
        const response = await axiosInstance.get(`/api/clova/perfume/${id}/explanation`);
        return response.data;
    } catch (error) {
        console.error('Error getClovaPerfumeInfo', error);
        throw error;
    }
};*/
export const getClovaPerfumeInfo = (id: number, onData: (data: string) => void) => {
    const fetchData = async () => {
        try {
            console.log('getClovaPerfumeInfo id: ', id);
            const response = await fetch(`https://perfume-bside.site/api/clova/perfume/${id}/explanation`, {
                headers: { 'Content-Type': 'application/json' },
                credentials: 'include',
            });
            const reader = response.body?.getReader();
            const decoder = new TextDecoder();
            let result = '';

            while (true) {
                const { done, value } = await reader?.read() || {};
                if (done) break;
                result += decoder.decode(value, { stream: true });
                onData(result);
            }

            const parsedResult = JSON.parse(result);
            const content = parsedResult.result.message.content;
            return content;
        } catch (error) {
            console.error('Error getClovaPerfumeInfo', error);
            throw error;
        }
    };
    fetchData();
};