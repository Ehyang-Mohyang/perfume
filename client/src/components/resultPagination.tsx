import {FC, MouseEventHandler} from 'react';

interface ResultPaginationProps {
    style: string;
    onClick: MouseEventHandler<HTMLButtonElement> | undefined;
    imgSrc: string;
    currentPage: number;
    disabledCondition: boolean;
}

const ResultPagination: FC<ResultPaginationProps> =({style, onClick, imgSrc, disabledCondition}) => {
    return (
        <button
            className={style}
            onClick={onClick}
            disabled={disabledCondition}
        >
            <img src={imgSrc}/>
        </button>
    )
}
export default ResultPagination;