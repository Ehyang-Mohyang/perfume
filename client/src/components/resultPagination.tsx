import {FC, MouseEventHandler, useState} from 'react';

interface ResultPaginationProps {
    style: string;
    onClick: MouseEventHandler<HTMLButtonElement> | undefined;
    imgSrc: string;
    currentPage: number;
    disabledCondition: boolean;
    btnName: string;
}

const ResultPagination: FC<ResultPaginationProps> =({style, onClick, imgSrc, disabledCondition, btnName}) => {
        return (
        <button
            className={style}
            onClick={onClick}
            disabled={disabledCondition}
            aria-label={btnName}
            aria-disabled={disabledCondition}
        >
            <img src={imgSrc} alt={btnName} />
        </button>
    )
}
export default ResultPagination;