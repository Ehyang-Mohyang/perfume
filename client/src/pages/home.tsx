import GoToMain from '../components/goToMain';

export default function Home() {
  return (
    <div className="flex items-center justify-center w-screen h-screen bg-center bg-cover bg-home-bg">
      <div className="flex flex-col justify-center w-full h-full">
        <div className="flex flex-col mx-auto w-[972px] h-[611px] font-pretendard text-center">
          <div>
            <div className="font-normal text-home-div mt-[305px]">
              당신의<span className="font-semibold"> 취향 저격 향수</span>를
            </div>
            <div className="text-home-div font-normalfont-semibold">
              <p>찾아드릴게요!</p>
            </div>
          </div>
          <div className="mt-[71px] text-color-subtitle1 text-home-sub  font-pretendard">
            간단한 테스트로 나에게 어울리는 향수를 추천 받아 보세요.
          </div>
        </div>
        <GoToMain />
      </div>
    </div>
  );
}
