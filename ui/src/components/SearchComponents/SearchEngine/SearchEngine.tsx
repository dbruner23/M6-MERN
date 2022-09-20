import React from 'react'
import Select from 'react-select'
import { useState, useEffect } from 'react'
import axios from 'axios'
import styles from './SearchEngine.module.css'
import Card from '../Cards/Card'
import backarrow from '../../../assets/search/arrowleft.png'
import weights from '../../../assets/search/gyms.png'
import coffee from '../../../assets/search/cafes.png'
import bench from '../../../assets/search/parks.png'
import bus from '../../../assets/search/transport.png'
import paw from '../../../assets/search/pets.png'
import trolley from '../../../assets/search/grocery.png'



const SearchEngine = () => {
  
  interface PropertyQuery {
    propertyType: string,
    priceMin: number,
    priceMax: number,
    beds: number,
    baths: number,
    transport: boolean,
    grocery: boolean,
    parks: boolean,
    pets: boolean,
    gyms: boolean,
    cafes: boolean
  }

  

  const [queryData, setQueryData] = useState({
    propertyType: "",
    priceMin: 0,
    priceMax: 100000,
    beds: 1,
    baths: 1,
    transport: false,
    grocery: false,
    parks: false,
    pets: false,
    gyms: false,
    cafes: false
  })

  const [resultData, setResultData] = useState([])
  
  // useState and useEffect to break returned data into array of arrays to display 6 results at a time
  const [resultsArrays, setResultsArrays] = useState<any[]>([])
  console.log(resultsArrays[0]);

  useEffect(() => {
    let resultsarrays : any = [];

    for (let i = 0; i <= (resultData.length - 1); i+=7) {
      resultsarrays[i] = resultData.slice(i, (i + 6));
    }
    setResultsArrays(resultsarrays)
    window.localStorage.setItem('resultsArrays', JSON.stringify(resultsarrays));
    
  }, [resultData])

  //functions for gathering and sending query data

  const selectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    let name = event.target.name;
    let value = event.target.value;
    let intvalue = parseInt(value);
    let prevMin = queryData.priceMin;
    if (name === "priceMax" && intvalue < queryData.priceMin) {
      setQueryData({ ...queryData, priceMin: intvalue, priceMax: prevMin })
    } else {
      setQueryData({ ...queryData, [name]: value });   
    }
  };

  const handleSubmit = async () => {
    await axios.post('http://localhost:4000/search', queryData)
      .then((response) => {
        setResultData(response.data)
      })
      .catch((error) => { console.log(error) })
  }

  return (
    <div className={styles.SearchEngineContainer}>
      <div className={styles.HeaderText}>
        <div className={styles.HeadTextItem} style={{ gap: '1rem'}}>
          <img src={backarrow} style={{ height: '1rem'}} /><span style={{ fontSize: "1.4rem" }}>Back</span>
        </div>
        <div className={styles.HeadTextItem}>
          Let's find your new Home!
        </div>
        <div className={styles.HeadTextItem} style={{ color: "white"}}>
          Back+
        </div>
      </div>
      <div className={styles.SelectContainer}>
        <div className={styles.SelectItem}>
          <span>Property Type</span>
          <div className={styles.container}>
            <select name="propertyType" onChange={selectChange} className={styles.Selectbox}>
              <option selected disabled>
                Select
              </option>
              <option value="apartment">Apartment</option>
              <option value="house">House</option>
              <option value="townhouse">Townhouse</option>
            </select>
          </div>
        </div>
        <div className={styles.SelectItem}>
          <span>Price-Min</span>
          <div className={styles.container}>
            <select name="priceMin" onChange={selectChange} className={styles.Selectbox}>
              <option selected disabled>
                Select
              </option>
              <option value={0}>Any</option>
              <option value={400}>$400/wk</option>
              <option value={800}>$800/wk</option>
              <option value={1200}>$1200/wk</option>
              <option value={1600}>$1600/wk</option>
            </select>
          </div>
        </div>
        <div className={styles.SelectItem}>
          <span>Price-Max</span>
          <select name="priceMax" onChange={selectChange} className={styles.Selectbox}>
            <option selected disabled>
              Select
            </option>
            <option value={100000}>Any</option>
            <option value={400}>$400/wk</option>
            <option value={800}>$800/wk</option>
            <option value={1200}>$1200/wk</option>
            <option value={1600}>$1600/wk</option>
          </select>
        </div>
        <div className={styles.SelectItem}>
          <span>Bedrooms</span>
          <select name="beds" onChange={selectChange} className={styles.Selectbox}>
            <option selected disabled>
              Select
            </option>
            <option value={1}>1+</option>
            <option value={2}>2+</option>
            <option value={3}>3+</option>
            <option value={4}>4+</option>
            <option value={5}>5+</option>
          </select>
        </div>
        <div className={styles.SelectItem}>
          <span>Bathrooms</span>
          <select name="baths" onChange={selectChange} className={styles.Selectbox}>
            <option selected disabled>
              Select
            </option>
            <option value={1}>1+</option>
            <option value={2}>2+</option>
            <option value={3}>3+</option>
            <option value={4}>4+</option>
            <option value={5}>5+</option>
          </select>
        </div>

      </div>
      <div className={styles.SubheadText}>
        What else is important to you?
      </div>
      <div className={styles.IconContainer}>
        <div className={queryData.transport ? styles.ActiveIcon : styles.Icon} onClick={() => setQueryData(prevState => ({ ...queryData, transport: !prevState.transport}))}>
          <img src={bus}/>
        </div>
        <div className={queryData.grocery ? styles.ActiveIcon : styles.Icon} onClick={() => setQueryData(prevState => ({ ...queryData, grocery: !prevState.grocery }))}>
          <img src={trolley} />
        </div>
        <div className={queryData.parks ? styles.ActiveIcon : styles.Icon} onClick={() => setQueryData(prevState => ({ ...queryData, parks: !prevState.parks }))}>
          <img src={bench} />
        </div>
        <div className={queryData.pets ? styles.ActiveIcon : styles.Icon} onClick={() => setQueryData(prevState => ({ ...queryData, pets: !prevState.pets }))}>
          <img src={paw} />
        </div>
        <div className={queryData.gyms ? styles.ActiveIcon : styles.Icon} onClick={() => setQueryData(prevState => ({ ...queryData, gyms: !prevState.gyms }))}>
          <img src={weights} />
        </div>
        <div className={queryData.cafes ? styles.ActiveIcon : styles.Icon} onClick={() => setQueryData(prevState => ({ ...queryData, cafes: !prevState.cafes }))}>
          <img src={coffee} />
        </div>
      </div>
      <div className={styles.ButtonRow}>
          <div className={styles.GoBtn} onClick={() => handleSubmit()}>GO</div>
      </div>
      <div className={styles.ResultsContainer}>
        {
          resultsArrays[0]?.map((data:any[], index:number) => {
            const CardProps = {key: index, data: data}
            return <Card {...CardProps}/>
          })
        }
      </div>
    </div>
  )
}

export default SearchEngine