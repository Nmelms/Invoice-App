import React, { useContext, useEffect, useState } from "react";
import GlobalContext from "../GlobalContext";
import BackButton from "./BackButton";
import { db } from "../firebase";
import { doc, setDoc, updateDoc } from "firebase/firestore";
import Item from "./Item.js";
import "../index.css";

export default function EditInvoice({ setPage }) {
  const {
    city,
    items,
    data,
    fetchData,
    itemsArr,
    itemIndex,
    itemName,
    list,
    qty,
    setItemIndex,
    price,
    setItemsArr,
    setItemName,
    setQty,
    setPrice,
    setStreet,
    cStreet,
    cCity,
    setCity,
    setState,
    setZip,
    setCountry,
    setClientsName,
    setCState,
    setClientsEmail,
    setCStreet,
    setCCity,
    setCZip,
    setCCountry,
    setInvoiceDate,
    clickedIndex,
    street,
    setPaymentTerms,
    setIndexer,
    setProdDes,
    state,
    zip,
    country,
    clientsName,
    clientsEmail,
    cZip,
    cCountry,
    paymentTerms,
    prodDes,
    invoiceDate,
    setGrandTotal,
    grandTotal,
  } = useContext(GlobalContext);

  const itemRef = doc(db, "form", `${list[clickedIndex].id}`);

  useEffect(() => {
    setStreet(list[clickedIndex].street);
    setCity(list[clickedIndex].city);
    setState(list[clickedIndex].state);
    setZip(list[clickedIndex].zip);
    setCountry(list[clickedIndex].country);
    setClientsName(list[clickedIndex].clientsName);
    setClientsEmail(list[clickedIndex].clientsEmail);
    setCStreet(list[clickedIndex].cStreet);
    setCCity(list[clickedIndex].cCity);
    setCState(list[clickedIndex].cState);
    setCZip(list[clickedIndex].cZip);
    setPaymentTerms(list[clickedIndex].paymentTerms);
    setProdDes(list[clickedIndex].prodDes);
    setInvoiceDate(list[clickedIndex].invoiceDate);
    setIndexer(list[clickedIndex].indexer);
    setItemsArr(list[clickedIndex].items);
  }, []);
  const handleSave = async () => {
    await updateDoc(itemRef, {
      street,
      city,
      items: itemsArr,
      state,
      zip,
      country,
      clientsName,
      clientsEmail,
      cStreet,
      cCity,
      cZip,
      cCountry,
      paymentTerms,
      prodDes,
      invoiceDate,
    });
    fetchData();
  };

  const onChange = (e, index) => {
    let value = e.target.value;
    let id = e.target.id;
    let name = "";
    let newArr = [...itemsArr];
    let item = newArr[index];
    if (id === "itemName") {
      // setItemName(value);
      item.itemName = value;
    } else if (id === "qty") {
      // setQty(value);
      item.qty = value;
    } else {
      // setPrice(value);
      item.price = value;
    }
    let total = item.price * item.qty;
    item.total = total;
    console.log(item);
    newArr[index] = item;
    setItemsArr(newArr);
  };

  return (
    <div>
      <BackButton setPage={setPage} name="viewInvoice" />
      <h1>Edit Invoice</h1>
      <p>bill from</p>
      <form /*ref={formRef}*/ className="AddressForm">
        <div className="street">
          <label htmlFor="street">Street Address:</label>
          <input
            defaultValue={list[clickedIndex].street}
            className="input"
            onChange={(e) => setStreet(e.target.value)}
            type="text"
            id="street"
          />
        </div>
        <div className="city">
          <label htmlFor="city">City:</label>
          <input
            defaultValue={list[clickedIndex].city}
            className="input"
            onChange={(e) => setCity(e.target.value)}
            type="text"
            id="city"
          />
        </div>
        <div className="state">
          <label htmlFor="state">State:</label>
          <input
            defaultValue={list[clickedIndex].state}
            className="input"
            onChange={(e) => setState(e.target.value)}
            type="text"
            id="state"
          />
        </div>
        <div className="zip">
          <label htmlFor="zip">Zip:</label>
          <input
            defaultValue={list[clickedIndex].zip}
            className="input"
            onChange={(e) => setZip(e.target.value)}
            type="text"
            id="zip"
          />
        </div>
        <div className="country">
          <label htmlFor="country">Country:</label>
          <input
            defaultValue={list[clickedIndex].country}
            className="input"
            onChange={(e) => setCountry(e.target.value)}
            type="text"
            id="country"
          />
        </div>
      </form>

      <p>bill to</p>

      <form /*ref={clientFormRef}*/ className="AddressForm">
        <div className="clientsName">
          <label htmlFor="clientsName">Clients Name:</label>
          <input
            defaultValue={list[clickedIndex].clientsName}
            onChange={(e) => setClientsName(e.target.value)}
            type="text"
            id="clientsName"
          />
        </div>
        <div className="clientsEmail">
          <label htmlFor="clientsEmail">Clients Email:</label>
          <input
            defaultValue={list[clickedIndex].clientsEmail}
            className="input"
            onChange={(e) => setClientsEmail(e.target.value)}
            type="text"
            id="clientsEmail"
          />
        </div>
        <div className="street">
          <label htmlFor="cstreet">Street Address:</label>
          <input
            defaultValue={list[clickedIndex].cStreet}
            className="input"
            onChange={(e) => setCStreet(e.target.value)}
            id="cstreet"
          />
        </div>
        <div className="city">
          <label htmlFor="ccity">City:</label>
          <input
            defaultValue={list[clickedIndex].cCity}
            className="input"
            onChange={(e) => setCCity(e.target.value)}
            type="text"
            id="ccity"
          />
        </div>
        <div className="state">
          <label htmlFor="cstate">State:</label>
          <input
            defaultValue={list[clickedIndex].cState}
            className="input"
            onChange={(e) => setCState(e.target.value)}
            type="text"
            id="cstate"
          />
        </div>
        <div className="zip">
          <label htmlFor="czip">Zip:</label>
          <input
            defaultValue={list[clickedIndex].cZip}
            className="input"
            onChange={(e) => setCZip(e.target.value)}
            type="text"
            id="czip"
          />
        </div>
        <div className="country">
          <label htmlFor="ccountry">Country:</label>
          <input
            defaultValue={list[clickedIndex].cCountry}
            className="input"
            onChange={(e) => setCCountry(e.target.value)}
            type="text"
            id="ccountry"
          />
        </div>

        <div className="bottomInvoice">
          <div className="invoiceDate">
            <label htmlFor="invoiceDate">Invoice Date:</label>
            <input
              defaultValue={list[clickedIndex].invoiceDate}
              className="input"
              onChange={(e) => setInvoiceDate(e.target.value)}
              type="date"
              id="invoiceDate"
            />
          </div>
          <div className="paymentTerms">
            <label htmlFor="paymentTerms">Payment Terms:</label>
            <select
              defaultValue={list[clickedIndex].paymentTerms}
              onChange={(e) => {
                setPaymentTerms(e.target.value);
              }}
            >
              <option value={30}>30 days</option>
              <option value={60}>60 days</option>
              <option value={90}>90 days</option>
            </select>
          </div>
          <div className="productDescription">
            <label htmlFor="productDescription">Product Description:</label>
            <input
              defaultValue={list[clickedIndex].setProdDes}
              className="input"
              onChange={(e) => setProdDes(e.target.value)}
              type="text"
              id="productDescription"
            />
          </div>
        </div>
      </form>
      {list[clickedIndex].items.map((item, index) => {
        return (
          <Item
            total={item.total}
            id={index}
            key={index}
            className="Item"
            onChange={onChange}
            defaultName={item.itemName}
            defaultQty={item.qty}
            defaultPrice={item.price}
          />
        );
      })}
      <button onClick={handleSave}>Save Changes</button>
    </div>
  );
}
