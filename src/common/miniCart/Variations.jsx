import { Fragment } from "react";

const Variations = ({item}) => {
  
  return (
    <Fragment>
      {/* Variation */}
			{
        <div className="smcir-variant">
          {
            item?.selectedVariant?.map((variant,i)=>{
              return  (<Fragment key={i}>{variant.variation} {item.selectedVariant.length !== i+1 && " / "} </Fragment>)
            })
          }
        </div>
			}
    </Fragment>
  );
};

export default Variations;
