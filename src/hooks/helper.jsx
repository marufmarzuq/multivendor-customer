/**
 * Price format based on country code
 * @param {*} price
 * @param {*} code
 * @returns
 */
export const priceFormat = ( price , type ="simple", code={code:'de-DE',currency:'EUR'} )=>{
	var resultPrice = price;

	if ( price !== null) {
		var result = new Intl.NumberFormat(code.code, {
			style: 'currency',
			currency: code.currency,
			minimumFractionDigits: 2,
			maximumFractionDigits: 2
		});
		if ( type =="simple" ) {
			resultPrice = result.format(price);
		}
		else if( type =="variable" ){
			const price_arr = price.split("-");
			resultPrice = result.format(price_arr[0]) + `-`+  result.format(price_arr[1])
		}

	}
	
	return resultPrice;
};
/**
 * Shop wise cart
 * @param {*} items
 * @returns
 */
export const storeCart = (items )=>{
	const lookup = items.reduce((newObj, item) => {
		newObj[item.user_id] = item.shop_name;
		return newObj;
	}, {});

	var resultArr = [];
	Object.keys(lookup).map((obj,key)=>{
		var newArr = items.filter( element => obj == element.user_id );

		const cartTotal = newArr.reduce((accumulator, object) => {
			return accumulator + object.itemTotal;
		}, 0);

		resultArr.push({ shopName: lookup[obj] , seller_id : obj ,
		products:newArr , subtotal : cartTotal , shipping_method : "" , tax : 2.00 , coupon_discount: 0.00 , total: cartTotal })
	});

	return resultArr;
};