import ListProduct from "../common/listProduct/listProduct";
import { Slide } from "./slide/silde";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProductAction } from "../../../core/redux/actions/productActions";

import "./Home.scss";

function Home() {
  const dispatch = useDispatch();
  const [products, setProducts] = useState([]);
  const { productList } = useSelector((state) => state.product);
  useEffect(() => {
    dispatch(getAllProductAction());
  }, []);

  // const hotProducts = [1];
  // const productsLength = allProduct.length;
  // const hotProducts = allProduct.filter((product, index) =>
  //   index >= productsLength - pageSize
  // )

  return (
    <div className="background-page home-below">
      <Slide products={productList} slideSize={3} />
      <h2 id="hot-product">các sản phẩm nổi bật</h2>
      <ListProduct products={productList} />
    </div>
  );
}

export default Home;