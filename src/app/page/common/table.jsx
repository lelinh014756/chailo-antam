import React, { Component } from "react";
import _ from "lodash";
import TableBody from "./tableBody";
import TableHead from "./tableHead";
import "../common/styles/table.scss";
import { Link } from "react-router-dom";

function Table(props) {
  const { columns, data, heading } = props;
  return (
    <section className="table-section">
      <h1 className="table-heading">{`Danh Sách ${heading}`} </h1>
      <div className="action-table  d-flex justify-content-end">
        <button className="product-btn-create">
          <Link to="/admin/tat-ca-san-pham/them-san-pham">
            <span>Thêm sản phẩm</span>
          </Link>
        </button>
      </div>
      <div className="table-container mt-3">
        <div className="table-wrapper">
          <table className="table">
            <TableHead columns={columns} />
            <TableBody data={data} />
          </table>
        </div>
      </div>
    </section>
  );
}

export default Table;
