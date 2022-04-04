import React from "react";

const Form = (props) => {
  const { forms } = props;
  return (
    <form className="col-lg-6 col-md-6 col-xs-12">
      <div className="wrapper">
        <h2
          style={{
            fontSize: "30px",
          }}
        >
          Nhập thông tin đặt hàng
        </h2>

        {forms.map((f) => (
          <div className="input-group" key={f.name}>
            <label htmlFor={f.title}>{f.title}</label>
            <input type={f.type} placeholder={f.placeholder} name={f.name} />
          </div>
        ))}
      </div>
    </form>
  );
};

export default Form;
