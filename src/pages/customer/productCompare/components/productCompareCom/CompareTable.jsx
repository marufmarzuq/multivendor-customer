import BreadCumb from "../../../../../common/breadcumb/BreadCumb";
import compareStyle from "./compare.module.css";
import { AiOutlineDelete, AiOutlineShoppingCart } from "react-icons/ai";
const CompareTable = () => {
  let compares = ["one", "two"];

  let layout = [];
  for (let i = 1; i <= compares.length + 1; i++) {
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

                  <div className={compareStyle.addCart}>
                    <h6>Add to cart</h6>
                  </div>

                  <div className={compareStyle.description}>
                    <h6>Description</h6>
                  </div>

                  <div className={compareStyle.sku}>
                    <h6>SKU</h6>
                  </div>

                  <div className={compareStyle.availability}>
                    <h6>Availability</h6>
                  </div>

                  <div className={compareStyle.color}>
                    <h6>Color</h6>
                  </div>
                  <div className={compareStyle.size}>
                    <h6>Size</h6>
                  </div>

                  <div className={compareStyle.delete}></div>
                </div>
              </section>
              {compares.map((item) => {
                return (
                  <section>
                    <div className={compareStyle.datas}>
                      <div className={compareStyle.image}>
                        <img
                          src="https://farmart.botble.com/storage/products/6-150x150.jpg"
                          alt=""
                        />
                      </div>
                      <div className={compareStyle.title}>
                        <h6>Nikon HD camera</h6>
                      </div>
                      <div className={compareStyle.price}>
                        <h6>$162.18</h6>
                      </div>

                      <div className={compareStyle.addCart}>
                        <button className="btn btn-primary btn-sm">
                          <AiOutlineShoppingCart /> Add To Cart
                        </button>
                      </div>

                      <div className={compareStyle.description}>
                        <ol>
                          <li>
                            Lorem ipsum dolor sit, amet consectetur adipisicing
                            elit. Inventore vel sed pariatur rem, repellat
                            quaerat.
                          </li>
                          <li>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Nobis exercitationem perferendis excepturi?
                            Eveniet, molestias tempora.
                          </li>
                          <li>
                            Lorem ipsum dolor sit, amet consectetur adipisicing
                            elit. Quae, totam! Adipisci ad numquam illum velit.
                          </li>
                          <li>
                            Lorem, ipsum dolor sit amet consectetur adipisicing
                            elit. Asperiores eveniet in quas exercitationem
                            delectus unde!
                          </li>
                          <li>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Esse cupiditate accusantium fugit eveniet
                            iusto voluptates!
                          </li>
                        </ol>
                      </div>

                      <div className={compareStyle.sku}>
                        <h6>#SW-194-A0</h6>
                      </div>

                      <div className={compareStyle.availability}>
                        <h6 className="text-success">In stock</h6>
                      </div>

                      <div className={compareStyle.color}>
                        <h6>Black, Green</h6>
                      </div>
                      <div className={compareStyle.size}>
                        <h6>S, M, L</h6>
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
