import React, { Fragment,useState,useEffect } from "react";

const Variation = ({colors,choseOptions,singleProduct}) => {

	const [selectVariant, setSelectVariant] = useState([]);

	useEffect(() => {
		singleProduct.selectedVariant = selectVariant;
	}, [selectVariant]);

	const getVariation=(attribute,newVariant)=>{
		if (selectVariant.find((item) => item.attribute === attribute) !== undefined) {
			// item exist
			let filteredVariant = selectVariant.filter(item => item.attribute !== attribute);
			setSelectVariant([...filteredVariant, {attribute:attribute,variation:newVariant}])
		} else {
			setSelectVariant([...selectVariant, {attribute:attribute,variation:newVariant}])
		}
	}

  return (
		<Fragment>
			<div className="product-meta radio-wrap color-wrap d-inline-flex align-items-center">
				{ colors.length > 0 && (
					<Fragment>
						<span className="label">Colors : </span>
						{
							colors.map((item,key)=>{
								return(
									<div className="radio-item" key={key}>
										<input type="radio" name="color" value={item.name} id={item.name}/>
										<label htmlFor={item.name} style={{ backgroundColor: item.code }}></label>
									</div>
								)
							})
						}
					</Fragment>
				)}
			</div>
			<div className="product-meta radio-wrap d-inline-flex align-items-center">
				{ Object.keys(choseOptions).length > 0 && (
					<Fragment>
						{
							Object.keys(choseOptions)?.map((item,key)=>{
								return(
								<div key={key} className="me-1 ms-2">
									<span className="label">{item} : </span>
									{
										choseOptions[item]?.map((variant,i)=>{
											return(
												<div className="radio-item" key={i}>
													<input type="radio" name={item} value={variant} id={variant} onChange={(e)=>(getVariation(item,e.target.value))} />
													<label htmlFor={variant}>{variant}</label>
												</div>
											)
										})
									}
								</div>
								)
							})
						}
					</Fragment>
				)}
			</div>
		</Fragment>
  );
};

export default Variation;
