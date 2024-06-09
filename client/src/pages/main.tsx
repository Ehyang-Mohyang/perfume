import { useState } from 'react';
import Carousel from '../components/carousel';
import PickItemModal from '../components/pickItemModal';

export default function Main() {
  const [backgroundImage, setBackgroundImage] = useState(
    '/assets/images/bg_main_6.webp',
  );
  const [isModalVisible, setIsModalVisible] = useState(false);

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

  return (
    <div
      className="flex flex-col flex-1 h-full bg-center bg-cover w-dvw"
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
  );
}
