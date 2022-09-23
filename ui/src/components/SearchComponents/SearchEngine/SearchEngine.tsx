import React from 'react'
import Select from 'react-select'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
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
import { Navigate } from 'react-router-dom'



const SearchEngine = () => {
  let navigate = useNavigate();
  
  interface Property {
    id: string,
    street: string,
    propertyType: string,
    suburb: String,
    city: String,
    postcode: Number,
    images: [String],
    beds: Number,
    baths: Number,
    carparks: Number,
    price: Number,
    info: String,
    transport: Boolean,
    grocery: Boolean,
    parks: Boolean,
    pets: Boolean,
    gyms: Boolean,
    cafes: Boolean
  }

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

  console.log(queryData)
  // initialiser to recover state on navigating back
  const initialiseResultData: Function = () => {
    let storageData = localStorage.getItem('resultData')

    if (storageData) {
      return JSON.parse(storageData)
    } else {
      return [];
    };
  }

  // returned data from search
  const [resultData, setResultData] = useState<any[]>(initialiseResultData())

  // useState and useEffect to break returned data into array of arrays to display 6 results at a time
  const [resultsArrays, setResultsArrays] = useState<any[]>([])
  console.log(resultsArrays);

  useEffect(() => {
    let resultsarrays : any = [];

    for (let i = 0; i <= (resultData.length - 1); i+=7) {
      resultsarrays.push(resultData.slice(i, (i + 6)));
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
        window.localStorage.setItem('resultData', JSON.stringify(response.data));
      })
      .catch((error) => { console.log(error) })
  }

  const quickSort = (event: React.ChangeEvent<HTMLSelectElement>) => {
    // let keyCategory = event.target.value 

    const Sort:Function = (objArray:any[]) => {
        if (objArray.length <= 1) {
          return objArray;
        }

        var pivot = objArray[0].price;

        var left = [];
        var right = [];

        for (var i = 1; i < objArray.length; i++) {
          objArray[i].price < pivot ? left.push(objArray[i]) : right.push(objArray[i]);
        }

        return Sort(left).concat(objArray[0], Sort(right));
      };
      const sortedResults = Sort(resultData)

      setResultData(sortedResults)
    };   
    
    //for viewing more results
    const [activeArray, setActiveArray] = useState(0);

    const ArrayAdvance = () => {
      if (activeArray === (resultsArrays.length) - 1) {
        return null
      } else {
        setActiveArray(activeArray + 1);
      }
    }

    const ArrayReverse = () => {
      if (activeArray === 0) {
        return null;
      } else {
        setActiveArray(activeArray - 1);
      }
    }
    

  return (
    <div className={styles.SearchEngineContainer}>
      <div className={styles.HeaderText}>
        <div className={styles.HeadTextItem} style={{ gap: '1rem', cursor: 'pointer' }} onClick={() => { localStorage.clear(); navigate('/')}}>
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
              <option value={2000}>$2000/wk</option>
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
            <option value={2000}>$2000/wk</option>
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
          <div className={styles.Btn} onClick={() => handleSubmit()}>GO</div>
      </div>
      {resultsArrays[activeArray] && (
      <>
        <div className={styles.ResultsText}>
          <div>Sort search results by...</div>
          <div className={styles.SelectItem}>
            <div className={styles.container}>
              <select name="propertyType" onChange={quickSort} className={styles.Selectbox}>
                <option selected disabled>
                  Select
                </option>
                <option value="price">Price</option>
                <option value="beds">Bedrooms</option>
                <option value="carparks">Car Parks</option>
              </select>
            </div>
          </div>
        </div>
        <div className={styles.ResultsContainer}>
        {
          resultsArrays[activeArray]?.map((data: any[], index: number) => {
            const CardProps = { key: index, data: data, arrayIndex: 0 }
            return <Card {...CardProps} />
          })
        }
        </div>
          {(resultsArrays.length > 1) &&
          <div className={styles.TextLine}>
            <div style={activeArray > 0 ? { color: 'blue', cursor: 'pointer' } : { color: 'white', cursor: 'arrow' }} onClick={() => ArrayReverse()}>
                Previous results...
            </div>
            <div style={activeArray === resultsArrays.length - 1 ? { color: 'gray'} : { color: 'blue', cursor: 'pointer' }} onClick={() => ArrayAdvance()}>
                View more results...
            </div>
          </div>}
      </>)
      }
    </div>
  )
}

export default SearchEngine