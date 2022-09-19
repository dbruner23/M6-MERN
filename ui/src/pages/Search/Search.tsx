import React from 'react'
import styles from './Search.module.css'
import Navbar from '../../components/Navbar/Navbar'
import HeaderImg from '../../images/SearchHeaderImg.png'
import SearchEngine from '../../components/SearchComponents/SearchEngine/SearchEngine'


const Search = () => {
  return (
    <>
    <Navbar/>
    <div className={styles.SearchContainer}>
      <div className={styles.SearchImg}>
        <img src={HeaderImg}/>
      </div>
      <SearchEngine/>
    </div>
    </>
  )
}

export default Search