import polygon from '../assets/icons/polygon.png';
import {FC, useEffect, useState} from 'react';

interface PerfumeContentProps {
    content: string;
}

const PerfumeContent: FC<PerfumeContentProps> = ({ content }) => {
    const [displayedContent, setDisplayedContent] = useState('');

    useEffect(() => {
        let index = 0;
        const intervalId = setInterval(() => {
            if (index < content.length) {
                setDisplayedContent((prev) => prev + content.charAt(index));
                index++;
            } else {
                clearInterval(intervalId);
            }
        }, 200);
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
                <div className='flex items-center rounded-[10px] bg-chatGPT py-[22px] px-[43px] min-w-[520px] max-w-[520px] min-h-[126px]'>
                    {formattedContent}
                </div>
            </div>
        </div>
    );
};

export default PerfumeContent;