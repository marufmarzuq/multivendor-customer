export const priceFormat = ( price , code={code:'de-DE',currency:'EUR'})=>{
	var result_price = price;
	if ( price !== null) {
		var result = new Intl.NumberFormat(code.code, {
			style: 'currency',
			currency: code.currency,
			minimumFractionDigits: 2,
			maximumFractionDigits: 2
		});

		result_price = result.format(price);
	}
	return result_price;
};