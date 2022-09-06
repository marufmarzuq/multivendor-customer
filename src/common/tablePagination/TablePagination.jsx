import ReactPaginate from 'react-paginate';

const TablePagination = ({handlePageClick,per_page,total}) => {
  return (
		<div className="d-flex justify-content-end pe-3">
		<ReactPaginate
			breakLabel="..."
			nextLabel="next >"
			onPageChange={(event)=>{handlePageClick(event)}}
			pageRangeDisplayed={per_page}
			pageCount={total}
			previousLabel="< previous"
			containerClassName="pagination"
			pageClassName="page__count"
			activeLinkClassName="active"
		/>
		</div>
  );
};

export default TablePagination;
