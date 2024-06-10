import {useLocation, useNavigate} from 'react-router-dom';
import iconBack from '../assets/icons/icon_back.png';
import PerfumeInfo from '../components/perfumeInfo';
import {useSavePerfume} from '../hooks/useSavePerfume';
import {useRecoilValue, useSetRecoilState} from 'recoil';
import {isLoggedInState, showPerfumeContentState} from '../recoil/recoilState';
import React, {useEffect, useState} from 'react';
import SaveAlert from '../components/saveAlert';
import LoginModal from '../components/loginModal';


export default function Detail() {
    const location = useLocation();
    const {perfume, ids, isSaved} = location.state;
    const setShowPerfumeContent = useSetRecoilState(showPerfumeContentState);
    const isLoggedIn = useRecoilValue(isLoggedInState);
    const [showLoginModal, setShowLoginModal] = useState(false);
    const [isSavedDetail, setIsSavedDetail] = useState(false);
    const navigation = useNavigate();
    const { saveClick, saveAlert } = useSavePerfume(ids);

    const backToResult = () => {
        navigation(-1);
    }
    const handleSaveClick = (id: number, event: React.MouseEvent<HTMLImageElement | HTMLDivElement, MouseEvent>) => {
        if (!isLoggedIn) {
            event.stopPropagation();
            setShowLoginModal(true);
        } else {
            saveClick(id, event);
            setIsSavedDetail(true);
        }
    };

    useEffect(() => {
        setIsSavedDetail(isSaved);
    }, []);
    return (
        <div className='w-screen h-screen flex flex-col bg-result-bg bg-center bg-cover font-pretendard' onClick={()=>setShowPerfumeContent(() => false)} >
            <div className='flex flex-col h-full w-full mx-auto px-auto'>
                <PerfumeInfo perfumeData={perfume} isSaved={isSavedDetail} saveClick={handleSaveClick} _className='mt-[225px]' />
                <div className='cursor-pointer flex justify-center items-center mx-auto mt-20 mb-[100px] text-body1 font-medium text-20' onClick={backToResult}>
                    <img className='w-5 h-5 mr-1.5' src={iconBack} />
                    <p className='mb-0 ml-1.5'>뒤로가기</p>
                </div>
            </div>
            {saveAlert && <SaveAlert isSaved={isSavedDetail} />}
            {showLoginModal &&
                <LoginModal
                    onClose={() => setShowLoginModal(false)}
                    isLogin={!isLoggedIn}
                    messageType="result"
                />}
        </div>
    );
}