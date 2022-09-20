import React from 'react'
import styles from './Display.module.css'
import { useParams } from 'react-router-dom'
import backarrow from '../../../assets/search/arrowleft.png'

const Display = () => {
    let resultsData = JSON.parse(window.localStorage.getItem("resultsArrays")||"");
    const { arrayindex, id } = useParams() as any;

    //@ts-ignore
    let displayInfo = resultsData[arrayindex].find((property) => {
        return property._id === id
    })

    const { _id, street, propertyType, suburb, city, postcode, headImage, beds, baths, carparks, price, info, transport, grocery, parks, pets, gyms, cafes } = displayInfo;


  
  return (
    <div className={styles.DisplayContainer}>
          <div className={styles.HeaderText} style={{ gap: '.7rem', cursor: 'pointer' }}>
              <img src={backarrow} style={{ height: '.8rem' }} /><span style={{ fontSize: "1rem" }}>Back</span>
          </div>
          <div className={styles.HeaderText} style={{ justifyContent: 'center'}}>
              {street} {suburb} {city}
          </div>
          <div className={styles.SliderContainer}>
              <img src={headImage}/>
          </div>
          <div className={styles.SubheadText}>
              NZ${price} Per Week
          </div>
    </div>
  )
}

export default Display