import perfumImg from '../assets/images/perfumeIMG.png';
import CheckIcon from '../assets/icons/icon_check.svg';

interface Perfume {
  myPerfumeId: number;
  name: string;
  eName: string;
  brand: string;
  imageURL: string;
}
interface MyPagePerfumeProps {
  perfume: Perfume;
  isEditing: boolean;
  onCheckboxChange: (id: number) => void;
  checked: boolean;
}

const MyPagePerfume: React.FC<MyPagePerfumeProps> = ({
  perfume,
  isEditing,
  onCheckboxChange,
  checked,
}) => {
  return (
    <div className="relative flex flex-col items-center mx-[20px] my-[25px] bg-white w-[282px] h-[382px] shadow-perfume-card border border-white rounded-[20px]">
      {isEditing && (
        <input
          type="checkbox"
          className="absolute w-6 h-6 border-2 rounded-full appearance-none top-4 left-6 border-gray229 checked:bg-black checked:bg-no-repeat checked:bg-center"
          style={{ backgroundImage: `url(${CheckIcon})` }}
          onChange={() => onCheckboxChange(perfume.myPerfumeId)}
          checked={checked}
        />
      )}
      <div className="flex flex-col items-center mt-10">
        <div className="w-[280px]">
          <div className="flex items-center justify-center h-full">
            <img src={perfume.imageURL} className="max-w-full max-h-full" />
          </div>
        </div>
        <ul className="flex flex-col p-0 m-0 text-center">
          <li className="text-[14px] my-2 text-header-default font-medium">
            {perfume.brand}
          </li>
          <li className="text-[18px] text-center text-nowrap font-medium">
            {perfume.name}
          </li>
          <li className="text-[16px] text-gray150 font-normal text-center text-nowrap mb-10">
            {perfume.eName}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MyPagePerfume;
