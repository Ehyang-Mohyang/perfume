import polygon from '../assets/icons/polygon.png';
import {FC, useEffect, useState} from 'react';

interface PerfumeContentProps {
    id: number,
}

const PerfumeContent: FC<PerfumeContentProps> = ({id}) => {
    const [content, setContent] = useState(' ');
    const [displayedContent, setDisplayedContent] = useState('');

    useEffect(() => {
        try {
            const eventSource = new EventSource(`https://perfume-bside.site/api/clova/perfume/${id}/explanation/stream`, {
                withCredentials: true
            });

            eventSource.onmessage = (event) => {
                const result = JSON.parse(event.data);
                const content = result.message.content;
                console.log('perfumeContent Clova Content: ', content);
                setContent((prevContent) => prevContent + content);
            };

            eventSource.onerror = (error) => {
                console.error('Error with SSE connection', error);
                eventSource.close();
            };
            return () => {
                eventSource.close();
            };
        } catch (error) {
            console.error('Error getClovaPerfumeInfo', error);
            throw error;
        }
    }, [id]);

    useEffect(() => {
        let index = 0;
        const intervalId = setInterval(() => {
            if (index < content.length) {
                setDisplayedContent((prev) => prev + content.charAt(index));
                index++;
            } else {
                clearInterval(intervalId);
            }
        }, 20);
        return () => clearInterval(intervalId);
    }, [content]);


    const formattedContent = displayedContent.split('\n').map((str, index) => (
        <>
            {str}
            <br />
        </>
    ));

    return (
        <div className='absolute z-50 ml-[241px]' onClick={(event)=>event.stopPropagation()}>
            <div className='flex items-center'>
                <img src={polygon}/>
                <div
                    className='flex items-center rounded-[10px] bg-chatGPT py-[22px] px-[43px] min-w-[520px] max-w-[520px] min-h-[126px]'
                    id={`perfume-content-${id}`}
                    aria-live="polite"
                >
                    {formattedContent}
                </div>
            </div>
        </div>
    );
};

export default PerfumeContent;