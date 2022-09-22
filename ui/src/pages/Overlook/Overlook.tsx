import React from 'react'
import styles from './Overlook.module.css'
import Navbar from '../../components/Navbar/Navbar'
import Display from '../../components/OverlookComponents/Display/Display'
import { Footer } from '../../components/Footer/Footer'
import { Header } from '../../components/Header/Header'


const Overlook = () => {
  return (
    <div className={styles.PageContainer}>
      <Header/>
      <Display />
      <Footer/>
    </div>
  )
}

export default Overlook