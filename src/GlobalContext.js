import { createContext, useState, useEffect }  from 'react';
import {collection, doc, setDoc, getDocs}  from 'firebase/firestore'
import {db} from './firebase.js'
const GlobalContext = createContext();

export function GlobalProvider({ children}){
  const [street, setStreet] = useState('')
  const [city, setCity] = useState('')
  const [state, setState] = useState('')
  const [zip, setZip] = useState('')
  const [country, setCountry] = useState('')
  const [clientsName, setClientsName] = useState('')
  const [clientsEmail, setClientsEmail] = useState('')
  const [cStreet, setCStreet] = useState('')
  const [cCity, setCCity] = useState('')
  const [cState, setCState] = useState('')
  const [cZip, setCZip] = useState('')
  const [cCountry, setCCountry] = useState('')
  const [items, setItems] = useState([])
  const [userData, setUserData] = useState('')
  const [itemName, setItemName] = useState('')
  const [qty, setQty] = useState('')
  const [price, setPrice] = useState('')
  const [invoiceDate, setInvoiceDate] = useState('')
  const [paymentTerms, setPaymentTerms] = useState(30)
  const [prodDes, setProdDes] = useState('')
  const [status, setStatus] = useState('pending')
  const [list, setList] = useState([])
  const [loading, setLoading] = useState(true)
  const [itemsArr, setItemsArr] = useState([])
  const [dueDate, setDueDate] = useState()
  const [clickedIndex, setClickedIndex] = useState()


  const dataRef = collection(db, 'form')



  const data = {
    street,
    city,
    state,
    zip,
    country,
    clientsName,
    clientsEmail,
    cStreet,
    cCity,
    cState,
    cZip,
    cCountry,
    items,
    userData,
    itemName,
    qty,
    price,
    dueDate,
    invoiceDate,
    paymentTerms,
    prodDes,
    status
  }

  const fetchData = async () => {
    const data = await getDocs(dataRef)
    
    setList(data.docs.map((doc) => ({...doc.data(), id: doc.id })))
    setLoading(false)
  }

  useEffect(() => {
    const current = new Date(invoiceDate)
    current.setDate(current.getDate() + Number(paymentTerms) )
    setDueDate(current.toDateString().split(' ').splice(1).join(' '))
  })


  return(
    <GlobalContext.Provider 
      value={{
        fetchData,itemsArr, itemName, qty, price, list, paymentTerms, setItemsArr,  setItemName, setQty, setPrice, setStreet, setCity, 
        setState, setZip, setCountry, setClientsName, clickedIndex,  loading, setClickedIndex, setClientsEmail, setCStreet,setCState, setCCity, 
        setCZip, setCCountry, setInvoiceDate, setPaymentTerms, setProdDes, data}}>
      {children}
    </GlobalContext.Provider>
  )
}



export default GlobalContext