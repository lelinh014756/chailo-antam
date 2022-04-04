import React, { Component } from "react";
import _ from "lodash";
import TableHead from "./tableHead";
import "../common/styles/table.scss";
import TableBodyOrder from "./tableBodyOrder";

class TableOrder extends Component {
  render() {
    const { columns, data, heading } = this.props;

    return (
      <section className="table-section">
        <h1 className="table-heading">{`Danh Sách ${heading}`} </h1>

        <div className="table-container">
          <div className="table-wrapper">
            <table className="table">
              <TableHead columns={columns} />
              <TableBodyOrder data={data} />
            </table>
          </div>
        </div>
      </section>
    );
  }
}

export default TableOrder;
