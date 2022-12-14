import React from 'react'
import styles from './Card.module.css'
import { useNavigate } from 'react-router-dom'
import car from '../../../assets/search/car.png'
import sleep from '../../../assets/search/sleep.png'
import shower from '../../../assets/search/shower.png'
import trolley from '../../../assets/search/smallgrocery.png'
import weights from '../../../assets/search/smallgyms.png'
import bench from '../../../assets/search/smallbench.png'
import paw from '../../../assets/search/smallpaw.png'
import bus from '../../../assets/search/smalltransport.png'
import coffee from '../../../assets/search/smallcoffee.png'

interface CardProps {
    key: number;
    data: any;
    arrayIndex: number;
}

const Card = ({key, data, arrayIndex}: CardProps) => {
    const { _id, street, propertyType, suburb, city, postcode, images, beds, baths, carparks, price, info, transport, grocery, parks, pets, gyms, cafes } = data;
    let navigate = useNavigate();


return (
    <div className={styles.Card}>
        <div className={styles.Image}>
            <img src={images[0]}/>
        </div>
        <div className={styles.TextLine}>
            {street} {suburb} {city}
        </div>
        <div className={styles.TextLine}>
            NZ$ {price} Per Week
        </div>
        <div className={styles.IconLine}>
            <div className={styles.IconBox}><img src={sleep} />{beds}</div>
            <div className={styles.IconBox}><img src={shower} />{baths}</div>
            <div className={styles.IconBox}><img src={car} />{carparks}</div>
        </div>
        <div className={styles.IconLine}>
            {grocery && (<div className={styles.IconBox}><img src={trolley} /></div>)}
            {cafes && (<div className={styles.IconBox}><img src={coffee} /></div>)}
            {gyms && (<div className={styles.IconBox}><img src={weights} /></div>)}
            {transport && (<div className={styles.IconBox}><img src={bus} /></div>)}
            {parks && (<div className={styles.IconBox}><img src={bench} /></div>)}
            {pets && (<div className={styles.IconBox}><img src={paw} /></div>)}
        </div>
        <div className={styles.ButtonLine}>
            <div className={styles.Btn} onClick={() => navigate(`/property/${arrayIndex}/${_id}`) }>MORE INFO</div>
        </div>
    </div>
  )
}

export default Card