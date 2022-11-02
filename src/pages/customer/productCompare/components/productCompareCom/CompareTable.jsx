import {useState} from "react";
import BreadCumb from "../../../../../common/breadcumb/BreadCumb";
import compareStyle from "./compare.module.css";
import { AiOutlineDelete, AiOutlineShoppingCart } from "react-icons/ai";
import { useCart } from "react-use-cart";
import { priceFormat } from "../../../../../hooks/helper";
import Variation from "../../../../../common/product/variation/Variation";

const CompareTable = () => {
  var compares = [
	{
		"id": 370,
		"added_by": "seller",
		"user_id": "1",
		"category": "1",
		"subcategory": "2",
		"subsubcategory": "4",
		"brand": "6",
		"name": "Porro non inventore et sint",
		"slug": "porro-non-inventore-et-sint-gajuw",
		"thumbnail_img": "https://api.markutos.com/assets/images/placeholder.jpg",
		"unit_price": "50.00",
		"discount": "0.00",
		"discount_type": "percent",
		"choice_options": {
		"Size": [
			"M",
			"L"
		],
		"Fabric": [
			"Silk",
			"Cotton"
		]
		},
		"colors": [
		{
			"name": "Red",
			"code": "#FF0000"
		},
		{
			"name": "Green",
			"code": "#008000"
		}
		],
		"num_of_sale": "0",
		"tags": [
		"tag1",
		"tag2",
		"tag3"
		],
		"product_type": "variation",
		"tax_type": "flat",
		"tax": "0.00",
		"total_rating": 2,
		"avg_rating": 4.5,
		"shop_name": "Demo shop 1",
		"shop_slug": "demo-shop-ujbl",
		"discount_price": 50,
		"price": 50,
		"price_range": "62.00-70.00",
		"discount_price_range": "62-70",
		"variations": [
		{
			"id": 2521,
			"product_id": "370",
			"variant": "Red-M-Silk",
			"sku": "RXUL29W",
			"price": "66.00",
			"quantity": "134",
			"image": "https://api.markutos.com/assets/images/placeholder.jpg",
			"created_at": "2022-10-30 18:55:53",
			"updated_at": "2022-10-30 18:55:53"
		},
		{
			"id": 2522,
			"product_id": "370",
			"variant": "Red-L-Silk",
			"sku": "HK45YOA",
			"price": "62.00",
			"quantity": "489",
			"image": "https://api.markutos.com/assets/images/placeholder.jpg",
			"created_at": "2022-10-30 18:55:53",
			"updated_at": "2022-10-30 18:55:53"
		},
		{
			"id": 2523,
			"product_id": "370",
			"variant": "Red-M-Cotton",
			"sku": "DSTY0VC",
			"price": "64.00",
			"quantity": "242",
			"image": "https://api.markutos.com/assets/images/placeholder.jpg",
			"created_at": "2022-10-30 18:55:53",
			"updated_at": "2022-10-30 18:55:53"
		},
		{
			"id": 2524,
			"product_id": "370",
			"variant": "Red-L-Cotton",
			"sku": "OWY5RBX",
			"price": "70.00",
			"quantity": "203",
			"image": "https://api.markutos.com/assets/images/placeholder.jpg",
			"created_at": "2022-10-30 18:55:53",
			"updated_at": "2022-10-30 18:55:53"
		},
		{
			"id": 2525,
			"product_id": "370",
			"variant": "Green-M-Silk",
			"sku": "0OXX2ZY",
			"price": "62.00",
			"quantity": "490",
			"image": "https://api.markutos.com/assets/images/placeholder.jpg",
			"created_at": "2022-10-30 18:55:53",
			"updated_at": "2022-10-30 18:55:53"
		},
		{
			"id": 2526,
			"product_id": "370",
			"variant": "Green-L-Silk",
			"sku": "HIMHHSY",
			"price": "69.00",
			"quantity": "384",
			"image": "https://api.markutos.com/assets/images/placeholder.jpg",
			"created_at": "2022-10-30 18:55:53",
			"updated_at": "2022-10-30 18:55:53"
		},
		{
			"id": 2527,
			"product_id": "370",
			"variant": "Green-M-Cotton",
			"sku": "XOA2AN5",
			"price": "70.00",
			"quantity": "397",
			"image": "https://api.markutos.com/assets/images/placeholder.jpg",
			"created_at": "2022-10-30 18:55:53",
			"updated_at": "2022-10-30 18:55:53"
		},
		{
			"id": 2528,
			"product_id": "370",
			"variant": "Green-L-Cotton",
			"sku": "4DUH9SE",
			"price": "68.00",
			"quantity": "196",
			"image": "https://api.markutos.com/assets/images/placeholder.jpg",
			"created_at": "2022-10-30 18:55:53",
			"updated_at": "2022-10-30 18:55:53"
		}
		]
	}
	];
  const [compareList, setCompareList] = useState(compares);
  const { addItem, onItemAdd } = useCart();

  const addToCart = (product) => {
  addItem(product);
  };

  let layout = [];
  for (let i = 1; i <= compareList.length + 1; i++) {
    layout.push("1fr ");
  }

  return (
    <>
      <BreadCumb data={"Compare"} />
      <div className="container">
        <h1 className="my-4 mb-5 text-center">Compare</h1>

        <div
          style={{
            overflowX: "auto",
          }}
        >
          <section>
            <div
              style={{
                gridTemplateColumns: `${layout
                  .toString()
                  .split(",")
                  .join(" ")}`,
              }}
              className={compareStyle.compareContaier}
            >
              <section>
                <div className={compareStyle.titles}>
                  <div className={compareStyle.image}></div>
                  <div className={compareStyle.title}>
                    <h6>Title</h6>
                  </div>
                  <div className={compareStyle.price}>
                    <h6>Price</h6>
                  </div>
                  <div className={compareStyle.price}>
                    <h6>Variation</h6>
                  </div>
                  <div className={compareStyle.addCart}>
                    <h6>Add to cart</h6>
                  </div>

                  <div className={compareStyle.description}>
                    <h6>Description</h6>
                  </div>

                  <div className={compareStyle.availability}>
                    <h6>Availability</h6>
                  </div>
                  <div className={compareStyle.delete}></div>
                </div>
              </section>
              {compares.map((product,key) => {
                return (
                  <section key={key}>
                    <div className={compareStyle.datas}>
                      <div className={compareStyle.image}>
                        <img src={product.thumbnail_img} alt={product.name} />
                      </div>
                      <div className={compareStyle.title}>
                        <h6>{product.name}</h6>
                        <small>Shop Name : {product.shop_name} </small>
                      </div>
                      <div className={compareStyle.price}>
                        <h6>{ product.product_type == "variation" ? product.discount_price_range : priceFormat(product.price)}</h6>
                      </div>
                      {product.product_type == "variation" ? (
                        <div>
                          <Variation
                            choseOptions={product.choice_options}
                            product={product}
                            colors={product.colors}
                          />
                        </div>
                      ) : ( "-")
                      }
                      <div className={compareStyle.addCart}>
                        <button className="btn btn-primary btn-sm"  onClick={() => addToCart(product)}>
                          <AiOutlineShoppingCart /> Add To Cart
                        </button>
                      </div>

                      <div className={compareStyle.description}>
                          {product.description}
                      </div>

                      <div className={compareStyle.availability}>
                        <h6 className="text-success">{product.stock_status}</h6>
                      </div>
                      <div className={compareStyle.delete}>
                        <button className={`btn ${compareStyle.deleteBtn}`}>
                          <AiOutlineDelete />
                        </button>
                      </div>
                    </div>
                  </section>
                );
              })}
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default CompareTable;
