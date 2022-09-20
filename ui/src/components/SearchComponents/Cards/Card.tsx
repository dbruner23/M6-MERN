import React from 'react'
import styles from './Card.module.css'

interface CardProps {
    key: number;
    data: any;
}

const Card = ({key, data}: CardProps) => {
    
    
return (
    <div className={styles.Card}>
        {data.street}
    </div>
  )
}

export default Card