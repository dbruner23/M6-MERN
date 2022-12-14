import React from 'react'
import styles from './Search.module.css'
import HeaderImg from '../../assets/search/SearchHeaderImg.png'
import SearchEngine from '../../components/SearchComponents/SearchEngine/SearchEngine'
import { Footer } from '../../components/Footer/Footer'
import { Header } from '../../components/Header/Header'


const Search = () => {
  return (
    <div className={styles.PageContainer}>
    <Header/>
    <div className={styles.SearchContainer}>
      <div className={styles.SearchImg}>
        <img src={HeaderImg}/>
      </div>
      <SearchEngine/>
      <Footer/>
    </div>
    </div>
  )
}

export default Search