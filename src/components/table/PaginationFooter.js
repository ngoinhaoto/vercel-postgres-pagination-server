export default function PaginationFooter({
  currentPage,
  setCurrentPage,
  itemPerpage,
  setItemPerpage,
  totalItem,
}) {
  const totalPage = Math.ceil(totalItem / itemPerpage);
  const listPage = Array.from(Array(totalPage).keys()).map((i) => {
    return (
      <a
        key={i}
        onClick={() => setCurrentPage(i + 1)}
        className={currentPage === i + 1 ? "active" : ""}
      >
        {i + 1}
      </a>
    );
  });

  const goNext = () => {
    if (currentPage < totalPage) {
      setCurrentPage(currentPage + 1);
    }
  };

  const goBack = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="pagination">
      <div>
        <select
          name="pageSize"
          aria-label="Page size"
          onChange={(e) => {
            setItemPerpage(e.target.value);
          }}
        >
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="15">15</option>
        </select>
      </div>
      <a
        onClick={() => goBack()}
        className={currentPage === 1 ? "dissabled" : ""}
      >
        &laquo;
      </a>
      {listPage}
      <a
        onClick={() => goNext()}
        className={currentPage === 1 ? "dissabled" : ""}
      >
        &raquo;
      </a>
    </div>
  );
}
