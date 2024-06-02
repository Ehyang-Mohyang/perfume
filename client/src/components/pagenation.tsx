interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (pageNumber: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className="flex justify-center mb-12 mt-[22px]">
      <ul className="flex">
        {pageNumbers.map((number) => (
          <li
            key={number}
            className={`${
              currentPage === number
                ? ' text-black font-medium'
                : ' text-gray150 font-normal'
            }  text-[18px] cursor-pointer`}
          >
            <button onClick={() => onPageChange(number)} className="page-link">
              {number}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
