import GoToMain from '../components/goToMain';

export default function Home() {
  return (
    <div className="flex items-center justify-center w-screen h-screen bg-center bg-cover bg-home-bg">
      <div className="flex justify-center w-full h-full">
        <div className="flex flex-col w-[972px] h-[611px] flex-shrink-0 font-pretendard text-center">
          <div>
            <div className="font-normal text-home-div mt-[240px]">
              당신의<span className="font-semibold"> 취향 저격 향수</span>를
            </div>
            <div className="text-home-div font-normalfont-semibold">
              <p>찾아드릴게요!</p>
            </div>
          </div>
          <div className="mt-[71px] text-home-sub text-color-subtitle1 font-pretendard">
            간단한 테스트로 나에게 어울리는 향수를 추천 받아 보세요.
          </div>
          <GoToMain />
        </div>
      </div>
    </div>
  );
}
