import saveAfter from '../assets/images/save_complete.png';
import saveDef from '../assets/images/save_default.png';
import subDef from '../assets/icons/sub_def.png';
import left from '../assets/icons/icon_left.png';
import right from '../assets/icons/icon_right.png';
import {useState} from 'react';
import {mainPerMockData, resultPerfumeData, subPerMockData} from '../data/resultPerfumeData';
import SaveAlert from '../components/saveAlert';
import {useNavigate} from 'react-router-dom';
import {saveMyPerfume} from '../api/saveMyPerfume';

const subPerfumePerPage = 3;
export default function ResultTest() {
    const [saveComplete, setSaveComplete] = useState(false);
    const [saveAlert, setSaveAlert] = useState(false);
    const [currentPage, setCurrentPage] = useState(0);
    const navigate = useNavigate();

    const prevClick = () => {
        setCurrentPage((prevPage) => Math.max(prevPage - 1, 0));
    };

    const nextClick = () => {
        setCurrentPage((prevPage) => Math.min(prevPage + 1, subPerMockData.length - 3));
    };

    const SaveClick = (id: number) => async (event: React.MouseEvent<HTMLDivElement>) => {
        event.stopPropagation(); // 이벤트 전파 중단
        try {
            // await saveMyPerfume(id);
            setSaveComplete(true);
            setSaveAlert(true);
            setTimeout(() => {
                setSaveAlert(false);
            }, 2000);
        } catch (error) {
            console.error('Error saving perfume:', error);
        }
    };

    return (
        <div className='w-screen h-[1600px] flex flex-col bg-result-bg bg-center bg-cover font-pretendard'>
            <div className='flex flex-col h-full w-full mx-auto px-auto mt-0 border'>
                {/* 메인 제품 */}
                <div className='text-center mt-[187px] text-result-title font-normal not-italic'>이 <span
                    className='font-bold'>향수</span>를 <span className='font-bold'>추천</span>드려요!
                </div>
                <div
                    className='flex mx-auto w-[1180px] h-[532px] mt-[52px] shadow-main-div boredr border-white rounded-[30px] bg-white-70'>
                    <div className='ml-[100px]'>
                        <div
                            className='ml-1 mt-[85px] text-2xl font-medium text-caption1 tracking-caption1'>{mainPerMockData.brand}</div>
                        <div className='ml-1 mt-4 text-5xl font-semibold leading-tight'>{mainPerMockData.name}</div>
                        <div
                            className='ml-1 mt-1.5 text-caption1 font-normal leading-tight text-[28px]'>{mainPerMockData.eName}</div>
                        <div
                            className='w-[300px] h-20 bg-white-50 cursor-pointer border border-white rounded-[100px] pl-10 pr-10 mt-[100px] mb-20 pt-6 pb-[26px] shadow-home-button-hover'
                            onClick={SaveClick(mainPerMockData.id)}>
                            <div className='flex items-center justify-between'>
                                {saveComplete ? (<img src={saveDef}/>) : (<img src={saveAfter}/>)}
                                <p className='mb-0 text-2xl text-save-button'>내 향수 저장하기</p>
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-end mt-16 w-[578px]'>
                        <div className='mr-20'>
                            <img className='mx-auto' src={mainPerMockData.imageURL}/>
                        </div>
                    </div>
                </div>

                {/* 비슷한 제품*/}
                <div className='mt-0.5 text-left mx-auto w-[1180px] text-result-subtitle text-result-subtitle mt-40'>내
                    향수와 <span className='font-semibold'>비슷한 제품</span>들이에요
                </div>

                <div className='h-full mx-auto '>
                    {/* 서브 향수 리스트 */}
                    <div className='flex mt-14 justify-between'>
                        <button className='mr-[42px]' onClick={prevClick} disabled={currentPage === 0}><img
                            src={left}/>
                        </button>
                        <div className='flex justify-center w-[1180px]'>
                            {subPerMockData
                                .slice(currentPage, currentPage + subPerfumePerPage)
                                .map((data) => (
                                    <div key={data.id} className='relative group mx-[21px] w-[360px] h-[360px] flex-shrink-0 rounded-[20px] bg-white shadow-subPerfume-div flex justify-center items-center'>
                                        <img className='' src={data.imageURL} alt={data.name}/>
                                        <div
                                            className='absolute inset-0 hidden justify-center group-hover:flex group-hover:bg-black group-hover:bg-opacity-40 rounded-[20px] flex justify-center items-center'>
                                            <div className='w-[290px] h-[290px]'>
                                                <div className='flex justify-end' onClick={SaveClick(data.id)}>
                                                    <img src={subDef}/>
                                                </div>
                                                <div
                                                    className='flex flex-col text-white items-center justify-center mt-12'>
                                                    <span className='text-sub-brand font-bold'>{data.brand}</span>
                                                    <span
                                                        className='text-sub-name font-bold mt-4'>{data.name}</span>
                                                    <span className='text-sub-eName font-medium'>{data.eName}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                        </div>
                        {/* 서브 향수 아이템 */}

                        <button className='ml-[42px]' onClick={nextClick}
                                disabled={currentPage >= subPerMockData.length - 3}><img src={right}/></button>
                    </div>
                </div>
            </div>
            {/* 저장 알림 모달 */}
            {saveAlert && (
                <SaveAlert/>
            )}
        </div>
    );
};