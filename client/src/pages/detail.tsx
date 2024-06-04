import {useLocation, useNavigate} from 'react-router-dom';
import iconBack from '../assets/icons/icon_back.png';
import PerfumeInfo from '../components/perfumeInfo';
import {useRecoilValue} from 'recoil';
import {saveClickState} from '../recoil/recoilState';
export default function Detail() {
    const location = useLocation();
    const navigation = useNavigate();
    const {perfume, perfumesSaved } = location.state;
    const saveClick = useRecoilValue(saveClickState); // Recoil 상태에서 saveClick 함수 가져오기

    const backToResult = () => {
        navigation(-1);
    }
    return (
        <div className='w-screen h-screen flex flex-col bg-result-bg bg-center bg-cover font-pretendard'>
            <div className='flex flex-col h-full w-full mx-auto px-auto'>
                {/* 메인 제품 */}
                {saveClick &&
                    <PerfumeInfo perfumeData={perfume} perfumesSaved={perfumesSaved} saveClick={saveClick} />
                }
                <div className='cursor-pointer flex justify-center items-center mx-auto mt-20 text-body1 font-medium text-20' onClick={backToResult}>
                    <img className='w-5 h-5 mr-1.5' src={iconBack} />
                    <p className='mb-0 ml-1.5'>뒤로가기</p>
                </div>
            </div>
        </div>
    );
}