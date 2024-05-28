import GoToMain from '../components/goToMain';

export default function Home() {
    return (
        <div className="bg-cover bg-center bg-home-bg w-screen h-screen flex justify-center items-center">
            <div className="w-full h-full flex justify-center items-center">
                <div className="flex flex-col w-[972px] h-[611px] flex-shrink-0 font-pretendard text-center">
                    <div>
                        <div className='text-home-div font-normal'>
                            당신의<span className='font-semibold'> 취향 저격 향수</span>를
                        </div>
                        <div className='text-home-div font-normalfont-semibold mt-8'>
                            <p>찾아드릴게요!</p>
                        </div>
                    </div>
                    <div className='mt-[92px] text-home-sub text-subtitle1 font-pretendard'>간단한 테스트로 나에게 어울리는 향수를 추천 받아 보세요.</div>
                    <GoToMain/>
                </div>
            </div>
        </div>
    );
};