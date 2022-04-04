import { deleteOrderAction } from "../../../core/redux/actions/userActions";
import React from "react";
import { useDispatch } from "react-redux";
import Delete from "./delete";

export default function TableBodyOrder({ data }) {
  const dispatch = useDispatch();
  const handleDelete = (item) => {
    dispatch(deleteOrderAction(item.id));
  };
  return (
    <>
      {data?.map((item, index) => {
        return (
          <tr key={index} className="value-row">
            <td
              className="value-column"
              style={{
                width: "20%",
              }}
            >
              <p>{item?.name}</p>
            </td>
            <td
              className="value-column w-40"
              style={{
                width: "40%",
              }}
            >
              <p>{item?.product.title}</p>
            </td>
            <td
              className="value-column w-40"
              style={{
                width: "40%",
              }}
            >
              <p>{item?.quantity}</p>
            </td>
            <td
              className="value-column w-40"
              style={{
                width: "40%",
              }}
            >
              <p>{item?.date}</p>
            </td>
            <td
              className="value-column"
              style={{
                width: "20%",
                display: "flex",
              }}
            >
              <span>
                <Delete
                  item={item}
                  list="products"
                  onDelete={() => {
                    handleDelete(item);
                  }}
                />
              </span>
            </td>
          </tr>
        );
      })}
    </>
  );
}
