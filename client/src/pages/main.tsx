import { useState, useEffect } from 'react';
import Carousel from '../components/carousel';
import PickItemModal from '../components/pickItemModal';
import Spinner from '../util/spinner'; // 스피너 컴포넌트 임포트

export default function Main() {
  const [backgroundImage, setBackgroundImage] = useState(
    '/assets/images/bg_main_6.webp',
  );
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isImageLoading, setIsImageLoading] = useState(true); // 이미지 로딩 상태
  const [isPreloaded, setIsPreloaded] = useState(false); // 프리로드 상태

  const categoryImages: { [key: string]: string } = {
    scent: '/assets/images/bg_main_1.webp',
    gender: '/assets/images/bg_main_2.webp',
    weather: '/assets/images/bg_main_3.webp',
    times: '/assets/images/bg_main_4.webp',
    age: '/assets/images/bg_main_5.webp',
    brand: '/assets/images/bg_main_6.webp',
  };

  const handleCategoryChange = (category: string) => {
    if (categoryImages.hasOwnProperty(category)) {
      setBackgroundImage(categoryImages[category]);
    } else {
      console.error(`No image found for category: ${category}`);
    }
  };

  const handleShowModal = () => {
    setIsModalVisible(true);
  };

  const handleConfirmModal = () => {
    setIsModalVisible(false);
  };

  // 프리로드 함수
  const preloadImages = (imageArray: string[], callback: () => void) => {
    let loadedImages = 0;
    const totalImages = imageArray.length;
    imageArray.forEach((src) => {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        loadedImages += 1;
        if (loadedImages === totalImages) {
          callback();
        }
      };
    });
  };

  // 프리로드 실행
  useEffect(() => {
    const imageArray = Object.values(categoryImages);
    preloadImages(imageArray, () => {
      setIsPreloaded(true);
      setIsImageLoading(false);
    });
  }, []);

  // 배경 이미지 변경 시 로딩 상태 처리
  useEffect(() => {
    if (isPreloaded) {
      const img = new Image();
      img.src = backgroundImage;
      img.onload = () => {
        setIsImageLoading(false); // 이미지 로드 완료
      };
    }
  }, [backgroundImage, isPreloaded]);

  return (
    <div className="relative flex flex-col flex-1 h-full w-dvw">
      {isImageLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-white">
          <Spinner loading={true} />
        </div>
      )}
      <div
        className={`flex flex-col flex-1 bg-center bg-cover transition-opacity duration-500 ${
          isImageLoading ? 'opacity-0' : 'opacity-100'
        }`}
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <Carousel
          onCategoryChange={handleCategoryChange}
          onShowModal={handleShowModal}
        />
        <PickItemModal
          title="취향을 선택해주세요!"
          content={
            <div>
              <strong>1개 이상의 취향을</strong> 반드시 선택해주세요.
            </div>
          }
          positiveAnswer="확인"
          isVisible={isModalVisible}
          onConfirm={handleConfirmModal}
        />
      </div>
    </div>
  );
}
