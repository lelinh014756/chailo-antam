import Loading from "../../../components/loading";
import { getAllProductAction } from "../../../../core/redux/actions/productActions";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./listProduct.scss";

const ListProduct = ({ products }) => {
  const { productList, loading } = useSelector((state) => state.product);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProductAction());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="row">
      {loading ? (
        <div>
          <Loading />
        </div>
      ) : (
        <>
          {productList?.map((item) => (
            <div
              key={item.id}
              className="product-item col-xl-2 col-lg-4 col-md-4 col-xs-12"
            >
              <div className="wrapper-item">
                <img src={item.img[0]} alt="" />

                <div className="content">
                  <div className="header-product">
                    <h4>{item.title}</h4>
                  </div>
                  <div className="footer-product">
                    <div>
                      <span>Giá sỉ liên hệ:</span>
                      <p>0865.328.664</p>
                    </div>
                    <Link to={`/san-pham/${item.id}`} className="btn">
                      Chi tiết sản phẩm
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default ListProduct;
