import polygon from '../assets/icons/polygon.png';
import {FC, useEffect, useState} from 'react';

interface PerfumeContentProps {
    id: number,
}

const PerfumeContent: FC<PerfumeContentProps> = ({id}) => {
    const [content, setContent] = useState('');

    useEffect(() => {
        const eventSource = new EventSource(`https://perfume-bside.site/api/clova/perfume/${id}/explanation/stream`, {
            withCredentials: true
        });

        eventSource.onmessage = (event) => {
            const result = JSON.parse(event.data);
            setContent((prevContent) => prevContent + result.message.content);
        };

        eventSource.onerror = (error) => {
            console.error('Error with SSE connection', error);
            eventSource.close();
        };

        return () => {
            eventSource.close();
        };
    }, [id]);

    const formattedContent = content.split('\n').map((str, index) => (
        <>
            {str}
            <br />
        </>
    ));

    return (
        <div className='absolute z-50 ml-[241px]' onClick={(event)=>event.stopPropagation()}>
            <div className='flex items-center'>
                <img src={polygon}/>
                <div className='flex items-center rounded-[10px] bg-chatGPT py-[22px] px-[43px] min-w-[520px] max-w-[520px] min-h-[126px]'>
                    {formattedContent}
                </div>
            </div>
        </div>
    );
};

export default PerfumeContent;