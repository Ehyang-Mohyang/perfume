import { SetStateAction, useEffect, useState } from 'react';
import MyPagePerfume from './myPagePerfume';
import Modal from './modal';
import DeleteLogo from '../assets/icons/icon_delete.svg';
import Pagination from './pagination';
import { getPerfumes } from '../api/getPerfumes';
import { deletePerfumes } from '../api/deletePerfumes';

export default function Album() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [perfumes, setPerfumes] = useState<
    {
      myPerfumeId: number;
      name: string;
      ename: string;
      brand: string;
      imageURL: string;
    }[]
  >([]);
  const [selectedPerfumes, setSelectedPerfumes] = useState<number[]>([]);
  const [totalPages, setTotalPages] = useState(1);
  const [error, setError] = useState<string | null>(null);
  const perfumesPerPage = 6;
  const maxDeletableItems = 8; // 최대 삭제 가능한 개수

  useEffect(() => {
    const fetchPerfumes = async () => {
      try {
        const data = await getPerfumes(currentPage - 1, perfumesPerPage);
        console.log(data);
        if (Array.isArray(data.content)) {
          setPerfumes(data.content);
          setTotalPages(data.totalPages); // 데이터에 기반하여 총 페이지 수 조정
        } else {
          throw new Error('Invalid data structure');
        }
      } catch (error) {
        setError('Failed to fetch perfumes');
        console.error('Error fetching perfumes:', error);
      }
    };

    fetchPerfumes();
  }, [currentPage]);

  const handleEditClick = () => {
    setIsEditing(!isEditing);
    setSelectedPerfumes([]);
  };

  const handleDeleteClick = () => {
    setIsModalVisible(true);
  };

  const handleCloseModal = () => {
    setIsModalVisible(false);
  };

  const handleConfirmDelete = async () => {
    try {
      await deletePerfumes(selectedPerfumes);
      setPerfumes(
        perfumes.filter(
          (perfume) => !selectedPerfumes.includes(perfume.myPerfumeId),
        ),
      );
      setSelectedPerfumes([]);
      setIsModalVisible(false);
      setIsEditing(false);
    } catch (error) {
      setError('Failed to delete perfumes');
      console.error('Error deleting perfumes:', error);
    }
  };

  const handleCheckboxChange = (id: number) => {
    setSelectedPerfumes((prevState) =>
      prevState.includes(id)
        ? prevState.filter((perfumeId) => perfumeId !== id)
        : prevState.length < maxDeletableItems
        ? [...prevState, id]
        : prevState,
    );
  };

  const handlePageChange = (pageNumber: SetStateAction<number>) => {
    setCurrentPage(pageNumber);
  };

  const containerHeightClass = perfumes.length > 0 ? 'h-[1023px]' : 'h-[622px]';
  return (
    <div
      className={`flex flex-col mt-[40px] mx-auto bg-album-card bg-opacity-70 shadow-album-card rounded-30 border w-[1180px] ${containerHeightClass} border-white backdrop-blur-sm`}
    >
      <div className="flex flex-row cursor-pointer justify-between pt-[42px]">
        <div>
          {isEditing && (
            <span className="text-[20px] pl-[56px]">
              <span className="text-black">{selectedPerfumes.length}</span>
              <span className="text-gray-500"> / {maxDeletableItems}</span>
            </span>
          )}
        </div>
        <div>
          <button
            className="text-gray-500 text-[20px] pr-[56px]"
            onClick={isEditing ? handleDeleteClick : handleEditClick}
          >
            {isEditing ? '삭제' : '편집'}
          </button>
          {isEditing && (
            <button
              onClick={handleEditClick}
              className="text-[20px] pr-[56px] text-mainbutton-default"
            >
              취소
            </button>
          )}
        </div>
      </div>
      <Modal
        title={
          <img
            src={DeleteLogo}
            alt="삭제 로고"
            className="w-[60px] h-[60px] mt-[43px]"
          />
        }
        content={
          <div className="flex flex-col items-center font-normal text-mainbutton-default mt-[30px]">
            <div>
              선택한 향수를 향수 앨범에서{' '}
              <span className="font-semibold">삭제</span>하시겠습니까?
            </div>
          </div>
        }
        negativeAnswer="취소"
        positiveAnswer="삭제"
        isVisible={isModalVisible}
        onClose={handleCloseModal}
        onConfirm={handleConfirmDelete}
      />
      {perfumes.length > 0 ? (
        <div className="flex flex-row flex-wrap justify-start pl-[110px]">
          {perfumes.map((perfume) => (
            <MyPagePerfume
              key={perfume.myPerfumeId}
              perfume={perfume}
              isEditing={isEditing}
              onCheckboxChange={handleCheckboxChange}
              checked={selectedPerfumes.includes(perfume.myPerfumeId)}
            />
          ))}
        </div>
      ) : (
        <div className="flex flex-row flex-wrap justify-center">
          <div className="flex items-center h-[550px] text-center">
            <span className="text-gray150 text-[32px] font-normal pb-[30px]">
              내 향수를 <span className="font-semibold">저장</span>해보세요!
            </span>
          </div>
        </div>
      )}
      {perfumes.length > 0 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      )}
    </div>
  );
}
