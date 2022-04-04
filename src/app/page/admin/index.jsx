import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, Route } from "react-router";
import ContainerAdmin from "./containerAdmin";
import {
  deleteProductAction,
  getAllProductAction,
} from "../../../core/redux/actions/productActions";
import { getAllOrderAction } from "../../../core/redux/actions/userActions";

function Admin() {
  const dispatch = useDispatch();

  const [customers, setCustomers] = useState([]);
  const { productList } = useSelector((state) => state.product);
  const { orderList } = useSelector((state) => state.user);

  // Loading api lần đầu tiên vào trang admin
  useEffect(() => {
    dispatch(getAllProductAction());
    dispatch(getAllOrderAction());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <ContainerAdmin
        products={productList}
        orders={orderList}
        customers={customers}
      />
    </>



  );
}

export default Admin;


/**
 * <div className="main-login" >
          <div className="form-login">
            <div className="main-logo d-flex justify-content-center" >
              <div>
                <img src={logoMain} alt="" />
              </div>
            </div>
            <form className="">
              <div className="form-group">
                <label className="label">Tài khoản</label>
                <input name='username' onChange={handleChange} className='form-control' type="text" />
              </div>
              <div className="form-group">
                <label className="label">Mật khẩu</label>
                <input name='password' onChange={handleChange} className='form-control' type="password" />


              </div>
              <div className="btn-action d-flex justify-content-center">
                <button type='button' className="btn-login" onClick={handleLoginAdmin}>Đăng nhập</button>
              </div>
            </form>
          </div>
        </div>
 */