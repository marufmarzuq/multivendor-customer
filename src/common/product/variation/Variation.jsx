import { Fragment,useState } from "react";

const Variation = ({colors,choseOptions,product}) => {

const [selectVariant, setSelectVariant] = useState([]);
const [selectedVariant, setSelectedVariant] = useState('');

product.selectedVariant = selectVariant;

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
		<div className="variations d-flex flex-column">
			<div className="variation">
				{ colors.length > 0 && (
					<Fragment>
						<span className="label">Colors : </span>
						{
							colors.map((item,key)=>{
								return(
									<span
										className={ selectedVariant == `${'Colors'}-${item.name}` ? "variation-name" : '' }
										onClick={(e)=>(getVariation('Colors',item.name))}
										key={key}
									>
										{item.name}
									</span>
								)
							})
						}
					</Fragment>
				)}
			</div>
			<div className="variation">
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
												<span
													className={ selectedVariant == `${item}-${variant}` ? "variation-name" : '' }
													onClick={(e)=>(getVariation(item,variant))}
													key={i}
												>
													{variant}
												</span>
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
