import React from 'react'
import styles from './Overlook.module.css'
import Navbar from '../../components/Navbar/Navbar'
import Display from '../../components/OverlookComponents/Display/Display'


const Overlook = () => {
  return (
    <div className={styles.PageContainer}>
      <Navbar/>
      <Display/>
    </div>
  )
}

export default Overlook