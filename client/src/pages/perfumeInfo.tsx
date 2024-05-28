import {useLocation, useNavigate} from 'react-router-dom';
import saveDef from '../assets/images/save_default.png';
import saveAfter from '../assets/images/save_complete.png';
import iconBack from '../assets/icons/icon_back.png';
import {mainPerMockData} from '../data/resultPerfumeData';
export default function PerfumeInfo() {
    const location = useLocation();
    const navigation = useNavigate();
    const {perfume} = location.state;

    const backToResult = () => {
        navigation(-1);
    }
    return (
        <div className='w-screen h-screen flex flex-col bg-result-bg bg-center bg-cover font-pretendard'>
            <div className='flex flex-col h-full w-full mx-auto px-auto'>
                {/* 메인 제품 */}
                <div className='mx-auto'>
                    <div
                        className='flex justify-between w-[1180px] h-[532px] mt-[225px] shadow-main-div boredr border-white rounded-[30px] bg-white-70'>
                        <div className='ml-[100px]'>
                            <div
                                className='ml-1 mt-[85px] text-2xl font-medium text-caption1 tracking-caption1'>{perfume.brand}</div>
                            <div className='ml-1 mt-4 text-5xl font-semibold leading-tight'>{perfume.name}</div>
                            <div
                                className='ml-1 mt-1.5 text-caption1 font-normal leading-tight text-[28px]'>{perfume.eName}</div>
                            <div
                                className='ml-1 mt-10 text-caption1 font-normal text-sub-content max-w-[346px]'>{mainPerMockData.content}</div>
                            <div
                                className='w-[300px] h-20 bg-white-50 cursor-pointer border border-white rounded-[100px] pl-10 pr-10 mt-11 mb-20 pt-6 pb-[26px] shadow-home-button-hover'>
                                <div className='flex items-center justify-between'>
                                    <img src={saveAfter}/>
                                    <p className='mb-0 text-2xl text-save-button'>내 향수 저장하기</p>
                                </div>
                            </div>
                        </div>
                        <div className='flex justify-center mt-16 w-[578px]'>
                            <div>
                                <img src={perfume.imageURL}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='cursor-pointer flex justify-center items-center mx-auto mt-20 text-body1 font-medium text-20' onClick={backToResult}>
                    <img className='w-5 h-5 mr-1.5' src={iconBack} />
                    <p className='mb-0 ml-1.5'>뒤로가기</p>
                </div>
            </div>

        </div>
    );
}