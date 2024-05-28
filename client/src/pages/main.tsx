import { useState } from 'react';
import { useRecoilValue } from 'recoil';
import { selectedItemsState, hashtagListState } from '../recoil/recoilState';
import Carousel from '../components/carousel';
import PickItemModal from '../components/pickItemModal';

export default function Main() {
  const selectedItems = useRecoilValue(selectedItemsState);
  const hashtagList = useRecoilValue(hashtagListState);
  const [backgroundImage, setBackgroundImage] = useState(
    '/assets/images/bg_main_6.png',
  );
  const [isModalVisible, setIsModalVisible] = useState(false);

  const categoryImages: { [key: string]: string } = {
    scent: '/assets/images/bg_main_1.png',
    gender: '/assets/images/bg_main_2.png',
    weather: '/assets/images/bg_main_3.png',
    times: '/assets/images/bg_main_4.png',
    age: '/assets/images/bg_main_5.png',
    brand: '/assets/images/bg_main_6.png',
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

  console.log('Selected Items:', selectedItems);
  console.log('Hashtag List:', hashtagList);

  return (
    <div
      className="flex flex-col flex-1 w-[1920px] h-[1080px] bg-center bg-cover font-pretendard"
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
