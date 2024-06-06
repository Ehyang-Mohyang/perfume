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
export const getClovaPerfumeInfo = async (id: number) => {
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
            const {done, value} = await reader?.read() || {};
            if (done) break;
            result += decoder.decode(value, {stream: true});
        }
        const parsedResult = JSON.parse(result);
        return parsedResult.result.message.content;
/*            // 임시적으로 모든 데이터를 파싱해서 `content` 추출
            try {
                const parsedResult = JSON.parse(result);
                const content = parsedResult.result.message.content;
                onData(content);
            } catch (e) {
                // 아직 전체 JSON이 도착하지 않았을 경우
                continue;
            }*/
    } catch (error) {
        console.error('Error getClovaPerfumeInfo', error);
        throw error;
    }
};