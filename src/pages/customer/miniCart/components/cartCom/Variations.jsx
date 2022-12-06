import { Fragment } from "react";

const Variations = ({item}) => {
  return (
    <Fragment>
      {/* Variation */}
			{ item?.product_type == "variation" &&
				item?.selectedVariant?.map((variant,i)=>{
					return  (<small className="ms-1 me-2" key={i}>{variant.attribute} : {variant.variation} {item.selectedVariant.length !== i+1 && ","} </small>)
				})
			}
    </Fragment>
  );
};

export default Variations;
