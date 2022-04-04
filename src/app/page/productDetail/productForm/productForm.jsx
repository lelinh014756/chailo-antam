import React, { Component } from "react";
import imageFormOrder from "../../../../assets/images/formOrder.svg";
import "./productForm.scss";

class ProductForm extends Component {
  constructor(props) {
    super(props);
    this.state = { dataSubmit: {} };
  }

  onSubmitForm = (value) => {
    this.props.onSubmit(value);
  };

  handleChange = (e) => {
    const { value, name } = e.target;
    this.setState({
      dataSubmit: {
        ...this.state.dataSubmit,
        [name]: value,
      },
    });
  };

  render() {
    const { forms, onSubmit } = this.props;

    return (
      <div id="form-section">
        <div className="row product-form">
          <form className="col-lg-6 col-md-6 col-xs-12">
            <div className="wrapper">
              <h2>
                Nhập thông tin đặt hàng
              </h2>

              {forms.map((f) => (
                <div className="input-group" key={f.name}>
                  <label htmlFor={f.title}>{f.title}</label>
                  <input
                    type={f.type}
                    placeholder={f.placeholder}
                    name={f.name}
                    onChange={this.handleChange}
                  />
                </div>
              ))}
            </div>
          </form>

          <div className="image col-lg-6 col-md-6 col-xs-12">
            <div className="wrapper">
              <img src={imageFormOrder} alt="" />
              <button
                className="btn"
                onClick={() => {
                  this.onSubmitForm(this.state.dataSubmit);
                }}
              >
                Đặt hàng
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductForm;
