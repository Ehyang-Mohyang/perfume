import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { matchedPerfumesState } from '../recoil/recoilState';
import perfumIMG from '../assets/images/matching.gif';

export default function MatchingPage() {
  const [matchSuccess, setMatchSuccess] = useState<boolean | null>(null);
  const [matchedPerfumes] = useRecoilState(matchedPerfumesState);
  const navigate = useNavigate();

  useEffect(() => {
    console.log('Current matchedPerfumes state:', matchedPerfumes);

    const timer = setTimeout(() => {
      if (Object.keys(matchedPerfumes.mainPerfume).length !== 0) {
        setMatchSuccess(true);
      } else {
        setMatchSuccess(false);
      }
    }, 3000);

    return () => clearTimeout(timer);
  }, [matchedPerfumes]);

  useEffect(() => {
    if (matchSuccess !== null) {
      const timer = setTimeout(() => {
        if (matchSuccess) {
          navigate('/result');
        } else {
          navigate('/matchfail');
        }
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [matchSuccess, navigate]);

  return (
    <div className="flex flex-col items-center h-full bg-center bg-cover w-dvw bg-matching-bg">
      <span className="text-header-default text-pick-subtitle2 mt-[196px] font-medium">
        탕탕탕!
      </span>
      <span className="font-normal text-pick-title mt-[10px] mb-[10px]">
        당신의 <span className="font-semibold">취향 저격 중</span>이에요
      </span>
      <div className="flex items-center">
        <img src={perfumIMG} alt="향수이미지" className="w-[450px] h-auto" />
      </div>
    </div>
  );
}
