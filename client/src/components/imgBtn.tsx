import {FC} from 'react';

interface imgBtnProps {
    onClick: (event: any) => void,
    btnName: string,
    imgSrc: string,
}
const ImgBtn: FC<imgBtnProps> = ({onClick, btnName, imgSrc}) => {
    return (
        <button
            className='cursor-pointer'
            onClick={onClick}
            aria-label={btnName}
            style={{ border: 'none', padding: '0', background: 'none' }} // 기본 버튼 스타일 제거
        >
            <img src={imgSrc} />
        </button>
    );
}

export default ImgBtn;