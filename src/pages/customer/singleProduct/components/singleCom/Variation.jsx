import React, { Fragment,useState,useEffect } from "react";

const Variation = ({colors,choseOptions,singleProduct}) => {

	const [selectVariant, setSelectVariant] = useState([]);
	const [variantPrice, setVariantPrice] = useState('');

	useEffect(() => {
		singleProduct.selectedVariant = selectVariant;
		var getVariant="";
		// sort by index
		selectVariant.sort((a, b) => parseFloat(a.index) - parseFloat(b.index));
		// combination of variation
		if ( selectVariant?.length>0 ) {
			selectVariant.map((variant,key)=>{
				var dash =`${selectVariant.length !== key+1 ? '-' : ''}`
				getVariant += `${variant.variation}` + `${dash}`
			})
			// get price
			if (getVariant !== "") {
				const found = singleProduct.variations.find(element => element.variant == getVariant );
				if (found) {
					singleProduct.price = found.price;
					setVariantPrice(found.price);
				}
			}
		}
	}, [selectVariant]);

	const getVariation=(attribute,newVariant,index)=>{
		if (selectVariant.find((item) => item.attribute === attribute) !== undefined ) {
			// item exist
			let filteredVariant = selectVariant.filter(item => item.attribute !== attribute);
			setSelectVariant([...filteredVariant, {attribute:attribute,variation:newVariant,index:index}])
		} else {
			setSelectVariant([...selectVariant, {attribute:attribute,variation:newVariant,index:index}])
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
										<input type="radio" name="color" value={item.name} id={item.name} onChange={(e)=>(getVariation('Colors',e.target.value,0))}/>
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
													<input type="radio" name={item} value={variant} id={variant} onChange={(e)=>(getVariation(item,e.target.value,key+1))} />
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

			{ variantPrice !== "" && <div className=""> {variantPrice} </div>}
			<div className="variation-price d-flex justify-content-end"> {singleProduct.discount_price_range} </div>
		</Fragment>
  );
};

export default Variation;
