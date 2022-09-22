import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import styles from './DataAdd.module.css'

const Quicksort = () => {

interface Property {
  street: string,
  propertyType: string,
  suburb: string,
  city: string,
  postcode: number,
  images?: [string],
  beds?: number,
  baths?: number,
  carparks?: number,
  price?: number,
  info?: string
  transport?: boolean,
  grocery?: boolean,
  parks?: boolean,
  pets?: boolean,
  gyms?: boolean,
  cafes?: boolean
}
  
  const [propertyData, setPropertyData] = useState({
    street: "",
    propertyType: "",
    suburb: "",
    city: "",
    postcode: 0,
    images: [],
    beds: 1,
    baths: 1,
    carparks: 0,
    price: 0,
    info: "",
    transport: false,
    grocery: false,
    parks: false,
    pets: false,
    gyms: false,
    cafes: false
  })
    
useEffect(() => {
    axios.get('http://localhost:4000/property')
        .then((response) => {
            console.log(response);
        })
})
  
  const handleChange = (e: { target: { name: any; value: any } }) => {
    setPropertyData({ ...propertyData, [e.target.name]: e.target.value });
  }
  console.log(propertyData);

  const handleSubmit = async () => {

    await axios.post('http://localhost:4000/property', propertyData)
      .then((response) => {
        console.log(response.data)
        window.localStorage.setItem('propertyData', JSON.stringify(response.data));
      })
      .catch((error) => { console.log(error) })
  }
    
 return (
    <div>
     <div>Enter Property Data</div>
     <div className={styles.InputLine}>
       <label htmlFor="street">Street</label>
       <input
         type="text"
         placeholder="123 Sesame St."
         className="infoInput"
         name="street"
         onChange={handleChange}
         value={propertyData.street}
       />
     </div>
     <div className={styles.InputLine}>
       <label htmlFor="propertyType">propertyType</label>
       <input
         type="text"
         placeholder="123 Sesame St."
         className="infoInput"
         name="propertyType"
         onChange={handleChange}
         value={propertyData.propertyType}
       />
     </div>
     <div className={styles.InputLine}>
       <label htmlFor="suburb">Suburb</label>
       <input
         type="text"
         placeholder="Ponsonby."
         className="infoInput"
         name="suburb"
         onChange={handleChange}
         value={propertyData.suburb}
       />
     </div>
     <div className={styles.InputLine}>
       <label htmlFor="city">City</label>
       <input
         type="text"
         placeholder="Auckland"
         className="infoInput"
         name="city"
         onChange={handleChange}
         value={propertyData.city}
       />
     </div>
     <div className={styles.InputLine}>
       <label htmlFor="postcode">Post code</label>
       <input
         type="text"
         placeholder="1021"
         className="infoInput"
         name="postcode"
         onChange={handleChange}
         value={propertyData.postcode}
       />
     </div>
     <div className={styles.InputLine}>
       <label htmlFor="images">Header Image</label>
       <input
         type="text"
         placeholder="url..."
         className="infoInput"
         name="images"
         onChange={handleChange}
         value={propertyData.images}
       />
     </div>
     <div className={styles.InputLine}>
       <label htmlFor="beds">Beds</label>
       <input
         type="text"
         placeholder="1"
         className="infoInput"
         name="beds"
         onChange={handleChange}
         value={propertyData.beds}
       />
     </div>
     <div className={styles.InputLine}>
       <label htmlFor="baths">Baths</label>
       <input
         type="text"
         placeholder="2"
         className="infoInput"
         name="baths"
         onChange={handleChange}
         value={propertyData.baths}
       />
     </div>
     <div className={styles.InputLine}>
       <label htmlFor="carparks">Carparks</label>
       <input
         type="text"
         placeholder="2"
         className="infoInput"
         name="carparks"
         onChange={handleChange}
         value={propertyData.carparks}
       />
     </div>
     <div className={styles.InputLine}>
       <label htmlFor="price">Price</label>
       <input
         type="text"
         placeholder="950"
         className="infoInput"
         name="price"
         onChange={handleChange}
         value={propertyData.price}
       />
     </div>
     <div className={styles.InputLine}>
       <label htmlFor="info">Info</label>
       <input
         type="text"
         placeholder="Really Nice!"
         className="infoInput"
         name="info"
         onChange={handleChange}
         value={propertyData.info}
       />
     </div>
     <div className={styles.InputLine}>
       <label htmlFor="transport">Transport</label>
       <input
         type="text"
         placeholder="false"
         className="infoInput"
         name="transport"
         onChange={handleChange}
         value={propertyData.info}
       />
     </div>
     <div className={styles.InputLine}>
       <label htmlFor="grocery">Grocery</label>
       <input
         type="text"
         placeholder="false"
         className="infoInput"
         name="grocery"
         onChange={handleChange}
         value={propertyData.info}
       />
     </div>
     <div className={styles.InputLine}>
       <label htmlFor="parks">parks</label>
       <input
         type="text"
         placeholder="false"
         className="infoInput"
         name="parks"
         onChange={handleChange}
         value={propertyData.info}
       />
     </div>
     <div className={styles.InputLine}>
       <label htmlFor="pets">pets</label>
       <input
         type="text"
         placeholder="false"
         className="infoInput"
         name="pets"
         onChange={handleChange}
         value={propertyData.info}
       />
     </div>
     <div className={styles.InputLine}>
       <label htmlFor="gyms">gyms</label>
       <input
         type="text"
         placeholder="false"
         className="infoInput"
         name="gyms"
         onChange={handleChange}
         value={propertyData.info}
       />
     </div>
     <div className={styles.InputLine}>
       <label htmlFor="cafes">cafes</label>
       <input
         type="text"
         placeholder="false"
         className="infoInput"
         name="cafes"
         onChange={handleChange}
         value={propertyData.info}
       />
     </div>
     <button onClick={() => handleSubmit()}>Submit</button>
    </div >
  )
}

export default Quicksort