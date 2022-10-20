const Variation = ({variations,setProducts,setSelcetVariant,selectVariant,products,product}) => {

  const handleSetVariant = (product, variant) => {
    setSelcetVariant(`${product.id}-${variant}`);
    const filteredProducts = products.map((prod) => {
      if (prod.id == product.id) {
        prod.price = prod[variant].price;
        prod.variant = variant;
      }
      return prod;
    });

    setProducts(filteredProducts);
  };
  return (
		variations?.map((item) => {
			return (
				<span
					className={ selectVariant == `${product.id}-${item}` ? "variation-name" : '' }
					onClick={() =>
						handleSetVariant(product, item)
					}
					key={item}
				>
					{item}
				</span>
			);
		})
  );
};

export default Variation;
