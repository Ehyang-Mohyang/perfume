import { useNavigate } from 'react-router-dom';

export default function MatchFail() {
  const nav = useNavigate();
  const handleClicked = () => {
    nav('/main');
  };
  return (
    <div className="flex flex-col items-center h-full bg-center bg-cover w-dvw bg-matching-none-bg">
      <span className="text-pick-title font-normal mt-[199px] text-black">
        아쉬워요,
      </span>
      <span className="font-normal text-black text-pick-title">
        <span className="font-semibold">취향 저격 향수</span>를 찾을 수 없어요.
      </span>

      <span className="text-pick-subtitle font-normal mt-[123px] mb-[68px] text-mainbutton-default">
        <span className="font-semibold">취향을 수정</span>해 다시 한 번
        <span className="font-semibold"> 시도</span> 해볼까요?
      </span>

      <button
        className="flex w-384 h-90 py-2 px-67 justify-center items-center gap-2.5 mx-auto rounded-2xl border-2 border-white text-home-button bg-home-button shadow-home-button hover:bg-white hover:shadow-home-button-hover"
        onClick={handleClicked}
      >
        추천 받으러 가기
      </button>
    </div>
  );
}
