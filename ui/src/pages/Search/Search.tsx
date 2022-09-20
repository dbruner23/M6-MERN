import React from 'react'
import styles from './Search.module.css'
import Navbar from '../../components/Navbar/Navbar'
import HeaderImg from '../../assets/search/SearchHeaderImg.png'
import SearchEngine from '../../components/SearchComponents/SearchEngine/SearchEngine'
import { Footer } from '../../components/Footer/Footer'


const Search = () => {
  return (
    <div className={styles.PageContainer}>
    <Navbar/>
    <div className={styles.SearchContainer}>
      <div className={styles.SearchImg}>
        <img src={HeaderImg}/>
      </div>
      <SearchEngine/>
    </div>
    </div>
  )
}

export default Search