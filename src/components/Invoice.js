import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import { doc, collection, updateDoc } from "firebase/firestore";
import GlobalContext from "../GlobalContext.js";
import { useContext } from "react";
import rightArrow from "../assets/icon-arrow-right.svg";

export default function Invoice({ setPage, index, page, id, whichList }) {
  const { setItemId, list } = useContext(GlobalContext);
  const [color, setColor] = useState("");

  useEffect(() => {
    if (whichList[index].status === "Draft") {
      setColor("0,0,0");
    } else if (whichList[index].status === "Pending") {
      setColor("51, 170, 51");
    } else {
      setColor("255,165,0");
    }
  }, []);

  let total = 0;
  const handleClick = (e) => {
    setPage("viewInvoice");
    let newList = [...list];
    let newArr = newList.filter((item) => {
      return item.id === id;
    });
    setItemId(id);
  };
  whichList[index].items.map((item) => {
    total += item.total;
  });

  return (
    <div onClick={(e) => handleClick(e)} className="Invoice">
      <div className="invoiceID">
        <p style={{ color: "gray" }}>#</p>
        {whichList[index].tag}
      </div>
      <div className="name">
        <p style={{ color: "gray" }}>{whichList[index].clientsName}</p>
      </div>
      <div className="paymentDue">
        <p style={{ color: "gray" }}>due {whichList[index].dueDate}</p>
      </div>
      <div
        style={{
          fontStyle: "bold",
          background: `rgba(${color}, 0.1)`,
          color: `rgba(${color})`,
        }}
        className="status"
      >
        <p style={{ fontStyle: "bold", color: "inherit" }}>
          {whichList[index].status}
        </p>
      </div>
      <div className="total">${total}</div>
      <div className="invoiceArrow">
        <img src={rightArrow} />
      </div>
    </div>
  );
}
