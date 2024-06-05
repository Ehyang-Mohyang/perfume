import polygon from '../assets/icons/polygon.png';
import {FC} from 'react';

interface PerfumeContentProps {
    content: string;
}

const PerfumeContent: FC<PerfumeContentProps> = ({ content }) => {
    return (
        <div className='absolute z-50 ml-[241px]'>
            <div className='flex items-center'>
                <img src={polygon}/>
                <div className='flex items-center rounded-[10px] bg-chatGPT py-[22px] px-[43px] min-w-[520px] max-w-[520px] min-h-[126px]'>
                    {content}
                </div>
            </div>
        </div>
    );
};

export default PerfumeContent;