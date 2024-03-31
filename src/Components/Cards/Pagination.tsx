import { PaginationMainDiv } from "./PaginationStyle";

const Pagination = ({ currentPage, totalPageCount, handlePageChange }: any) => {
  const generatePaginationButtons = () => {
    const paginationButtons = [];

    paginationButtons.push(
      currentPage === 1 ? null : 'Previous',
      currentPage === 1 || currentPage === 2 ? null : 1,
      currentPage === 1 ? null : currentPage - 1,
      currentPage,
      currentPage + 1 < totalPageCount ? currentPage + 1 : null,
      currentPage === totalPageCount ? null : 'Next'
    );

    return paginationButtons.filter((button) => button !== null);
  };

  return (
    <PaginationMainDiv className="paginationControls">
      {generatePaginationButtons().map((pageNumber: any, index: number) => (
        <button
          key={index}
          onClick={() => {
            if (pageNumber === 'Previous') {
              handlePageChange(currentPage - 1);
            } else if (pageNumber === 'Next') {
              handlePageChange(currentPage + 1);
            } else {
              handlePageChange(pageNumber);
            }
          }}
          className={pageNumber === currentPage ? 'activePage' : 'paginationPage'}
        >
          {pageNumber}
        </button>
      ))}
    </PaginationMainDiv>
  );
};

export default Pagination;
