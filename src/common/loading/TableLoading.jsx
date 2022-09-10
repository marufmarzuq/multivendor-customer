const TableLoading = () => {
  return (
    // <tbody className="d-flex justify-content-center pt-3">
    <div className="text-center my-3">
      <div className="spinner-grow spinner-grow-sm" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
      <div className="spinner-grow spinner-grow-sm p-1" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
      <div className="spinner-grow spinner-grow-sm" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
    // </tbody>
  );
};

export default TableLoading;
