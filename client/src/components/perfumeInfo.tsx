import React, {FC} from 'react';
import saveAfter from '../assets/images/save_complete.png';
import saveDef from '../assets/images/save_default.png';
import {perfumesSavedType} from '../pages/result';
import {resultPerfumeData} from '../data/resultPerfumeData';

interface perfumeInfoProps {
    perfumeData: resultPerfumeData,
    perfumesSaved:  [perfumesSavedType] | undefined,
    saveClick: (id: number, event: React.MouseEvent<HTMLDivElement>) => Promise<void>;
}
const PerfumeInfo: FC<perfumeInfoProps> = ({perfumeData, perfumesSaved, saveClick}) => {
    return (
        <div className="w-[1180px] mx-auto">
            <div
                className="flex mx-auto h-[532px] mt-[52px] shadow-main-div border border-white rounded-[30px] bg-white-70">
                <div className="flex justify-between w-full">
                    <div className="ml-[100px]">
                        <div className="ml-1 mt-[85px] text-2xl font-medium text-caption1 tracking-caption1">
                            {perfumeData.brand}
                        </div>
                        <div className="mt-4 ml-1 text-5xl font-semibold leading-tight">
                            {perfumeData.name}
                        </div>
                        <div className="ml-1 mt-1.5 text-caption1 font-normal leading-tight text-[28px]">
                            {perfumeData.ename}
                        </div>
                        <div
                            className="w-[300px] h-20 bg-white-50 cursor-pointer border border-white rounded-[100px] pl-10 pr-10 mt-[100px] mb-20 pt-6 pb-[26px] shadow-home-button-hover"
                            onClick={(event) => saveClick(perfumeData.id, event)}
                        >
                            <div className="flex items-center justify-between">
                                {perfumesSaved && perfumesSaved[0].exists ? (
                                    <img src={saveAfter}/>
                                ) : (
                                    <img src={saveDef}/>
                                )}
                                <p className="mb-0 text-2xl text-save-button">
                                    내 향수 저장하기
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="w-[578px]">
                        <div className="flex items-center justify-center h-full">
                            <img
                                src={perfumeData.imageURL}
                                className="max-w-full max-h-full"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default PerfumeInfo;