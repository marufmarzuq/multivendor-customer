
const ProgressBar = ({ singleProduct,reviewStyle }) => {
	var rating_length = [1,2,3,4,5];

	return (
		rating_length.map((value,key)=>{
			return(
				<div className={reviewStyle.progressBar} key={key}>
					<div className="">{value} Starts</div>
					<div className="progress">
						<div
							className="progress-bar"
							role="progressbar"
							style={{ width: `${singleProduct?.reviews?.[`${value}_star`]}%` }}
							aria-valuenow="25"
							aria-valuemin="0"
							aria-valuemax="100"
						></div>
					</div>
					<div className="text-center">{singleProduct?.reviews?.[`${value}_star`]}%</div>
					</div>
			)
		})
	);
};

export default ProgressBar;
