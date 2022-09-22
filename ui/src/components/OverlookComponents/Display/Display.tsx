import React from 'react'
import styles from './Display.module.css'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import ImageSlider from '../ImageSlider/ImageSlider'
import backarrow from '../../../assets/search/arrowleft.png'
import car from '../../../assets/search/car.png'
import sleep from '../../../assets/search/sleep.png'
import shower from '../../../assets/search/shower.png'
import weights from '../../../assets/search/gyms.png'
import coffee from '../../../assets/search/cafes.png'
import bench from '../../../assets/search/parks.png'
import bus from '../../../assets/search/transport.png'
import paw from '../../../assets/search/pets.png'
import trolley from '../../../assets/search/grocery.png'
import lady from '../../../assets/search/lady.png'

const Display = () => {
    let resultsData = JSON.parse(window.localStorage.getItem("resultsArrays")||"");
    const { arrayindex, id } = useParams() as any;

    //@ts-ignore
    let displayInfo = resultsData[arrayindex].find((property) => {
        return property._id === id
    })

    const { _id, street, propertyType, suburb, city, postcode, images, beds, baths, carparks, price, info, transport, grocery, parks, pets, gyms, cafes } = displayInfo;


    interface HTMLIFrameElement extends HTMLElement {
        allow?: string;
        allowFullScreen?: boolean;
        allowTransparency?: boolean;
        frameBorder?: number | string;
        height?: number | string;
        marginHeight?: number;
        marginWidth?: number;
        name?: string;
        sandbox?: string;
        scrolling?: string;
        seamless?: boolean;
        src?: string;
        srcDoc?: string;
        width?: number | string;
    }

  return (
    <div className={styles.DisplayContainer}>
          <div className={styles.HeaderText} style={{ gap: '.7rem', cursor: 'pointer' }}>
              <img src={backarrow} style={{ height: '.8rem' }} /><span style={{ fontSize: "1rem" }}>Back</span>
          </div>
          <div className={styles.HeaderText} style={{ justifyContent: 'center'}}>
              {street} {suburb} {city}
          </div>
          <div className={styles.SliderContainer}>
              <ImageSlider images={images} />
          </div>
          <div className={styles.SubheadText}>
              NZ${price} Per Week
          </div>
          <div className={styles.IconLine} style={{ borderBottom: '2px solid #757575'}}>
              <div className={styles.IconBox}><img src={sleep} />{beds}</div>
              <div className={styles.IconBox}><img src={shower} />{baths}</div>
              <div className={styles.IconBox}><img src={car} />{carparks}</div>
          </div>
          <div className={styles.IconLine}>
              {grocery && (<img src={trolley} />)}
              {cafes && (<img src={coffee} />)}
              {gyms && (<img src={weights} />)}
              {transport && (<img src={bus} />)}
              {parks && (<img src={bench} />)}
          </div>
          <div className={styles.IconLine} style={{ marginTop: '1rem', gap: '2.5rem'}}>
              <div className={styles.Btn}>Book a Call</div><div>OR</div><div className={styles.Btn}>Apply Now</div>
          </div>
          <div className={styles.InfoContainer}>
              <div className={styles.Info}>{info}</div>
              <div className={styles.AgentCard}>
                  <div className={styles.Image}>
                      <img src={lady} />
                  </div>
                  <div className={styles.TextLine} style={{ fontWeight: 'bold'}}>
                      Zsuzsanna Tantos-Rangi
                  </div>
                  <div className={styles.TextLine}>
                      Mobile: 021 771 700
                  </div>
                  <div className={styles.TextLine}>
                      Office Phone: 09 391 4642
                  </div>
                  <div className={styles.TextLine}>
                      Email: Zsuzsanna@metronz.co.nz
                  </div>
              </div>
          </div>
          <div className={styles.MapContainer}>
            <iframe
                  frameBorder="0"
                  loading="lazy"
                  allowFullScreen
                  src={`https://www.google.com/maps/embed/v1/place?key=${process.env.REACT_APP_GMAPS_API_KEY}
        &q=${street}+${suburb}+${city}`}>
            </iframe>
          </div>
          
          

    </div>
  )
}

export default Display