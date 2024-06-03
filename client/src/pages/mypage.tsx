import { useState } from 'react';
import Album from '../components/album';
import Myinfo from '../components/myinfo';

export default function Mypage() {
  const [activeTab, setActiveTab] = useState('album');

  const getBackgroundClass = () => {
    return activeTab === 'album' ? 'bg-album-bg' : 'bg-myinfo-bg';
  };

  return (
    <div className="w-[1920px] h-[1080px]">
      <div
        className={`flex flex-col h-dvh w-dvw bg-cover ${getBackgroundClass()}`}
      >
        <div className="flex flex-col items-center">
          <span className="mt-[161px] mb-[32px] font-medium text-mypage-title">
            MY PAGE
          </span>
          <div className="flex flex-row bg-white items-center px-[64px] justify-center bg-opaycit-50 h-[80px] shadow-mypage-tap border-2 border-white w-[390px] rounded-[100px]">
            <h2
              className={`text-mypage-tap cursor-pointer mb-0 mr-[30px] ${
                activeTab === 'album'
                  ? 'font-medium'
                  : 'text-gray150 font-normal'
              }`}
              onClick={() => setActiveTab('album')}
            >
              향수 앨범
            </h2>
            <h2 className="mb-0 text-mypage-tap text-gray150">|</h2>
            <h2
              className={`text-mypage-tap cursor-pointer ml-[52px] mb-0 ${
                activeTab === 'myinfo'
                  ? 'font-medium'
                  : 'text-gray150 font-normal'
              }`}
              onClick={() => setActiveTab('myinfo')}
            >
              내 정보
            </h2>
          </div>
        </div>
        <div>
          {activeTab === 'album' && <Album />}
          {activeTab === 'myinfo' && <Myinfo />}
        </div>
      </div>
    </div>
  );
}
