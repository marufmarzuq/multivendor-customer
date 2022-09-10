const TableLoading = () => {
    return (
        <tbody className="d-flex justify-content-center pt-3">
            <tr>
                <td className="spinner-grow spinner-grow-sm" role="status">
                    <span className="visually-hidden">Loading...</span>
                </td>
                <td className="spinner-grow spinner-grow-sm p-1" role="status">
                    <span className="visually-hidden">Loading...</span>
                </td>
                <td className="spinner-grow spinner-grow-sm" role="status">
                    <span className="visually-hidden">Loading...</span>
                </td>
            </tr>
        </tbody>
    )
}

export default TableLoading