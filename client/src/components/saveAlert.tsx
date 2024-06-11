import check from '../assets/icons/gg_check.png';
import {FC, useEffect} from 'react';

interface SaveAlertProps {
    isSaved: boolean | undefined,
}

const SaveAlert: FC<SaveAlertProps> = ({isSaved}) => {
    useEffect(() => {
        console.log('saveAlert isSaved: ', isSaved);
    }, []);

    return (
        <div className='fixed inset-0 flex items-center justify-center '>
            <div className='flex justify-center items-center w-[600px] h-[100px] bg-black opacity-40 rounded-[50px] text-white'>
                <img src={check} />
                { !isSaved ?
                    <p className='text-save-alert mb-0'><span className='font-semibold'>MY PAGE</span>에 내 향수가 <span className='font-semibold'>저장</span>되었어요</p>
                    :
                    <p className='text-save-alert mb-0'><span className='font-semibold'>MY PAGE</span>에 내 향수가 <span className='font-semibold'>저장</span>되었어요</p>
                }
            </div>
        </div>
    );
};

export default SaveAlert;