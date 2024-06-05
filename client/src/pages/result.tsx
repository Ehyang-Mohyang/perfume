import saveAfter from "../assets/images/save_complete.png";
import subDef from "../assets/icons/sub_def.png";
import left from "../assets/icons/icon_left.png";
import right from "../assets/icons/icon_right.png";
import {useEffect, useState} from "react";
import SaveAlert from "../components/saveAlert";
import {useRecoilValue, useSetRecoilState} from "recoil";
import {matchedPerfumesState, showPerfumeContentState} from "../recoil/recoilState";
import {useNavigate} from 'react-router-dom';
import {resultPerfumeData} from '../data/resultPerfumeData';
import ResultPagination from '../components/resultPagination';
import PerfumeInfo from '../components/perfumeInfo';
import {useSavePerfume} from '../hooks/useSavePerfume';


const subPerfumePerPage = 3;
export default function Result() {
    const {mainPerfume, subPerfumes} = useRecoilValue(matchedPerfumesState);
    const setShowPerfumeContent = useSetRecoilState(showPerfumeContentState);
    const [currentPage, setCurrentPage] = useState(0);
    const ids = [mainPerfume.id, ...subPerfumes.map(v => v.id)];
    const navigate = useNavigate();
    const { saveAlert, perfumesSaved, saveClick, savedCheck } = useSavePerfume(ids);

    const prevClick = () => {
        setCurrentPage((prevPage) => Math.max(prevPage - 1, 0));
    };

    const nextClick = () => {
        setCurrentPage((prevPage) =>
            Math.min(prevPage + 1, subPerfumes.length - 3)
        );
    };

    const toInfo = (data: resultPerfumeData) => () => {
        navigate(`/detail/${data.id}`, { state: { perfume: data, ids: ids} });
    }

    useEffect(() => {
        console.log('result 페이지 ids: ', ids);
        savedCheck(ids);
    }, [mainPerfume, subPerfumes]);

    return (
        <div className="w-screen h-[1600px] flex flex-col bg-result-bg bg-center bg-cover font-pretendard" onClick={()=>setShowPerfumeContent(() => false)}>
            <div className="flex flex-col w-full h-full mx-auto mt-0 border px-auto">
                {/* 메인 제품 */}
                <div className="text-center mt-[187px] text-result-title font-normal not-italic">
                    이 <span className="font-bold">향수</span>를{" "}
                    <span className="font-bold">추천</span>드려요!
                </div>
                <PerfumeInfo perfumeData={mainPerfume} isSaved={perfumesSaved?.find(p => p.id === mainPerfume.id)?.exists} saveClick={saveClick} />

                {/* 비슷한 제품*/}
                <div className="mt-0.5 text-left mx-auto w-[1180px] text-result-subtitle mt-40">
                    내 향수와 <span className="font-semibold">비슷한 제품</span>들이에요
                </div>
                <div className="h-full mx-auto ">
                    {/* 서브 향수 리스트 */}
                    <div className="flex justify-between mt-14">
                        <ResultPagination style="mr-[42px]" onClick={prevClick} imgSrc={left} currentPage={currentPage} disabledCondition={currentPage === 0}/>
                        <div className="flex justify-center w-[1180px]">
                            {subPerfumes
                                .slice(currentPage, currentPage + subPerfumePerPage)
                                .map((data, index) => (
                                    <div
                                        key={data.id}
                                        className="relative group mx-[21px] w-[360px] h-[360px] flex-shrink-0 rounded-[20px] bg-white shadow-subPerfume-div flex justify-center items-center"
                                        onClick={toInfo(data)}
                                    >
                                        <img className="" src={data.imageURL} alt={data.name}/>
                                        <div
                                            className="absolute inset-0 hidden justify-center group-hover:flex group-hover:bg-black group-hover:bg-opacity-40 rounded-[20px] flex justify-center items-center">
                                            <div className="w-[290px] h-[290px]">
                                                <div className="flex justify-end">
                                                    {perfumesSaved && perfumesSaved.slice(1)[index]?.exists ?
                                                        <img src={saveAfter} className='cursor-pointer'
                                                             onClick={(event) => saveClick(data.id, event)}/>
                                                        : <img src={subDef} className='cursor-pointer'
                                                               onClick={(event) => saveClick(data.id, event)}/>}                                                </div>
                                                <div
                                                    className="flex flex-col items-center justify-center mt-12 text-white">
                                                  <span className="font-bold text-center text-sub-brand">
                                                    {data.brand}
                                                  </span>
                                                    <span className="mt-4 font-bold text-center text-sub-name">
                                                    {data.name}
                                                  </span>
                                                    <span className="font-medium text-center text-sub-eName">
                                                    {data.ename}
                                                  </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                        </div>
                        <ResultPagination style="ml-[42px]" onClick={nextClick} imgSrc={right} currentPage={currentPage} disabledCondition={currentPage >= subPerfumes.length - 3} />
                    </div>
                </div>
            </div>
            {/* 저장 알림 모달 */}
            {saveAlert && <SaveAlert/>}
        </div>
    );
}
