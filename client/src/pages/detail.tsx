import {useLocation, useNavigate} from 'react-router-dom';
import iconBack from '../assets/icons/icon_back.png';
import PerfumeInfo from '../components/perfumeInfo';
import {useSavePerfume} from '../hooks/useSavePerfume';
export default function Detail() {
    const location = useLocation();
    const navigation = useNavigate();
    const {perfume, ids} = location.state;
    const perfumesSaved = useSavePerfume(ids).perfumesSaved;

    const backToResult = () => {
        navigation(-1);
    }
    return (
        <div className='w-screen h-screen flex flex-col bg-result-bg bg-center bg-cover font-pretendard'>
            <div className='flex flex-col h-full w-full mx-auto px-auto'>
                <PerfumeInfo perfumeData={perfume} isSaved={perfumesSaved?.find(p => p.id === perfume.id)?.exists} />
                <div className='cursor-pointer flex justify-center items-center mx-auto mt-20 text-body1 font-medium text-20' onClick={backToResult}>
                    <img className='w-5 h-5 mr-1.5' src={iconBack} />
                    <p className='mb-0 ml-1.5'>뒤로가기</p>
                </div>
            </div>
        </div>
    );
}