import React, { Component } from "react";
import "./productContent.scss";

class ProductContent extends Component {
  render() {
    const { product } = this.props;
    console.log("product", product.img);

    return (
      <>
        {product && (
          <div className="row product-content" image="true">
            <div className="image col-lg-6 col-md-6 col-xs-12">
              <div className="wrapper">
                <img src={product?.img} alt="" />
              </div>
            </div>
            <div className="content col-lg-6 col-md-6 col-xs-12">
              <div className="wrapper">
                <h2>{product?.title}</h2>
                <p>{product?.content}</p>
                <h4>
                  <p>Liên hệ số điện thoại:</p> <span>0865.328.664</span>
                </h4>
                <a href="#form-section" className="btn">
                  Nhập thông tin đặt hàng{" "}
                </a>
              </div>
            </div>
          </div>
        )}
      </>
    );
  }
}

export default ProductContent;
