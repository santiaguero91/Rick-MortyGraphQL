const Pagination = ({ currentPage, totalPageCount, handlePageChange }: any) => {
  const generatePaginationButtons = () => {
    const paginationButtons = [];

    paginationButtons.push(
      currentPage === 1 || currentPage === 2 ? null : 1,
      currentPage === 1 ? null : currentPage - 1,
      currentPage,
      currentPage + 1 < totalPageCount ? currentPage + 1 : null,
      currentPage === 40 || currentPage === 41 || currentPage === 42
        ? null
        : totalPageCount
    );

    return paginationButtons.filter((button) => button !== null);
  };

  return (
    <div className="paginationControls">
      {generatePaginationButtons().map((pageNumber: any) => (
        <button key={pageNumber} onClick={() => handlePageChange(pageNumber)}>
          {pageNumber}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
