import { useState } from "react";
import BreadCumb from "../../../../../common/breadcumb/BreadCumb";
import { AiOutlineDelete, AiOutlineShoppingCart } from "react-icons/ai";
import wisthlistStyle from "./wishlist.module.css";
import { priceFormat } from "../../../../../hooks/helper";
import SimpleLoading from "../../../../../common/loading/SimpleLoading";
import { useCart } from "react-use-cart";
import Variation from "../../../../../common/product/variation/Variation";
import { useSelector } from "react-redux";

const WishListTable = () => {
  const { products: wishlistedProds } = useSelector(
    (state) => state?.customerWishlist
  );

  console.log(wishlistedProds);
  var wish = [
    {
      id: 370,
      added_by: "seller",
      user_id: "1",
      category: "1",
      subcategory: "2",
      subsubcategory: "4",
      brand: "6",
      name: "Porro non inventore et sint",
      slug: "porro-non-inventore-et-sint-gajuw",
      thumbnail_img: "https://api.markutos.com/assets/images/placeholder.jpg",
      unit_price: "50.00",
      discount: "0.00",
      discount_type: "percent",
      choice_options: {
        Size: ["M", "L"],
        Fabric: ["Silk", "Cotton"],
      },
      colors: [
        {
          name: "Red",
          code: "#FF0000",
        },
        {
          name: "Green",
          code: "#008000",
        },
      ],
      num_of_sale: "0",
      tags: ["tag1", "tag2", "tag3"],
      product_type: "variation",
      tax_type: "flat",
      tax: "0.00",
      total_rating: 2,
      avg_rating: 4.5,
      shop_name: "Demo shop 1",
      shop_slug: "demo-shop-ujbl",
      discount_price: 50,
      price: 50,
      price_range: "62.00-70.00",
      discount_price_range: "62-70",
      variations: [
        {
          id: 2521,
          product_id: "370",
          variant: "Red-M-Silk",
          sku: "RXUL29W",
          price: "66.00",
          quantity: "134",
          image: "https://api.markutos.com/assets/images/placeholder.jpg",
          created_at: "2022-10-30 18:55:53",
          updated_at: "2022-10-30 18:55:53",
        },
        {
          id: 2522,
          product_id: "370",
          variant: "Red-L-Silk",
          sku: "HK45YOA",
          price: "62.00",
          quantity: "489",
          image: "https://api.markutos.com/assets/images/placeholder.jpg",
          created_at: "2022-10-30 18:55:53",
          updated_at: "2022-10-30 18:55:53",
        },
        {
          id: 2523,
          product_id: "370",
          variant: "Red-M-Cotton",
          sku: "DSTY0VC",
          price: "64.00",
          quantity: "242",
          image: "https://api.markutos.com/assets/images/placeholder.jpg",
          created_at: "2022-10-30 18:55:53",
          updated_at: "2022-10-30 18:55:53",
        },
        {
          id: 2524,
          product_id: "370",
          variant: "Red-L-Cotton",
          sku: "OWY5RBX",
          price: "70.00",
          quantity: "203",
          image: "https://api.markutos.com/assets/images/placeholder.jpg",
          created_at: "2022-10-30 18:55:53",
          updated_at: "2022-10-30 18:55:53",
        },
        {
          id: 2525,
          product_id: "370",
          variant: "Green-M-Silk",
          sku: "0OXX2ZY",
          price: "62.00",
          quantity: "490",
          image: "https://api.markutos.com/assets/images/placeholder.jpg",
          created_at: "2022-10-30 18:55:53",
          updated_at: "2022-10-30 18:55:53",
        },
        {
          id: 2526,
          product_id: "370",
          variant: "Green-L-Silk",
          sku: "HIMHHSY",
          price: "69.00",
          quantity: "384",
          image: "https://api.markutos.com/assets/images/placeholder.jpg",
          created_at: "2022-10-30 18:55:53",
          updated_at: "2022-10-30 18:55:53",
        },
        {
          id: 2527,
          product_id: "370",
          variant: "Green-M-Cotton",
          sku: "XOA2AN5",
          price: "70.00",
          quantity: "397",
          image: "https://api.markutos.com/assets/images/placeholder.jpg",
          created_at: "2022-10-30 18:55:53",
          updated_at: "2022-10-30 18:55:53",
        },
        {
          id: 2528,
          product_id: "370",
          variant: "Green-L-Cotton",
          sku: "4DUH9SE",
          price: "68.00",
          quantity: "196",
          image: "https://api.markutos.com/assets/images/placeholder.jpg",
          created_at: "2022-10-30 18:55:53",
          updated_at: "2022-10-30 18:55:53",
        },
      ],
    },
  ];
  const [wishList, setWishList] = useState(wish);
  const { addItem, onItemAdd } = useCart();

  const addToCart = (product) => {
    addItem(product);
  };

  return (
    <div>
      <BreadCumb data={"Wishlist"} />
      <div className="container">
        <h1 className="text-center my-4 mb-5">Wishlist</h1>
        <div style={{ overflowX: "auto" }} className={wisthlistStyle.wishTable}>
          <table className="responsive">
            <thead>
              <tr>
                <th></th>
                <th> Product</th>
                <th> Unit Price</th>
                <th> Stocks Status</th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {wishList.length == 0 ? (
                <SimpleLoading />
              ) : (
                wishList?.map((product, key) => {
                  return (
                    <tr key={key}>
                      <td className={wisthlistStyle.image}>
                        <img src={product.thumbnail_img} alt={product.name} />
                      </td>
                      <td>
                        <h6>{product.name}</h6>
                        <small>Shop Name : {product.shop_name} </small>
                        {/* Variation */}
                        {product.product_type == "variation" && (
                          <Variation
                            choseOptions={product.choice_options}
                            product={product}
                            colors={product.colors}
                          />
                        )}
                      </td>
                      <td>
                        {product.product_type == "variation"
                          ? priceFormat(
                              product.discount_price_range,
                              "variable"
                            )
                          : priceFormat(product.price)}
                      </td>
                      <td>
                        <span
                          style={{ fontWeight: "600" }}
                          className="text-success "
                        >
                          {product.stock_status}
                        </span>
                      </td>
                      <td>
                        {" "}
                        <button
                          className="btn btn-primary"
                          onClick={() => addToCart(product)}
                        >
                          {" "}
                          <AiOutlineShoppingCart /> Add to Cart
                        </button>{" "}
                      </td>
                      <td>
                        {" "}
                        <button className={`btn ${wisthlistStyle.deletebtn}`}>
                          <AiOutlineDelete />
                        </button>{" "}
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default WishListTable;
