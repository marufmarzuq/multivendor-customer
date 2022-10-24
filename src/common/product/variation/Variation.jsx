import { Fragment,useState,useEffect } from "react";

const Variation = ({colors,choseOptions,product}) => {

const [selectVariant, setSelectVariant] = useState([]);
const [selectedVariant, setSelectedVariant] = useState('');

useEffect(() => {
	product.selectedVariant = selectVariant;
}, [selectVariant]);
const getVariation=(attribute,newVariant)=>{
	if (selectVariant.find((item) => item.attribute === attribute) !== undefined) {
		// item exist
		let filteredVariant = selectVariant.filter(item => item.attribute !== attribute);
		setSelectVariant([...filteredVariant, {attribute:attribute,variation:newVariant}])
	} else {
		setSelectVariant([...selectVariant, {attribute:attribute,variation:newVariant}])
	}
	setSelectedVariant(`${attribute}-${newVariant}`);
}

  return (
		<Fragment>
		<div className="d-flex flex-column">
			<div className="product-meta radio-wrap">
				{ colors.length > 0 && (
					<Fragment>
						<span className="label">Colors : </span>
						{
							colors.map((item,key)=>{
								return(
									<div className="radio-item" key={key}>
										<input type="radio" name="color" value={item.name} id={item.name} onChange={(e)=>(getVariation('Colors',e.target.value))}/>
										<label className='radio-bg-padding' htmlFor={item.name} style={{ backgroundColor: item.code }}></label>
									</div>
								)
							})
						}
					</Fragment>
				)}
			</div>
			<div className="product-meta radio-wrap">
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
		</div>
		</Fragment>
  );
};

export default Variation;
