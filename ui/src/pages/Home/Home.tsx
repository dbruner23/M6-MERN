import React from 'react'
import style from './Home.module.css'

import { LargeButton } from '../../components/Button-large/LargeButton'
import { NavCards } from '../../components/HomeComponents/DisplayCards/NavCards'
// import { PropertyCard } from '../../components/PropertyCard/PropertyCard'

const Home = () => {

  const testing = () => {
    console.log('this was a test')


  }
  return (
    <>
    <div className={style.topImageContainer}>
      <span className={style.imageHeader}>Property Management Auckand - Metro NZ Property Management LTD</span>
      <span className={style.imageText}>HELPING CLIENTS TO ACHIEVE HARMONY THROUGH OUR EXPERTESE AND SKILLS </span>
      <div className={style.topButtonContainer}>
        <LargeButton 
          onClick={testing}
          text={'Book an apointment'}
      /> 
        <LargeButton
          onClick={testing}
          text={'View our Properties'}
      /> 
      </div>
      {/* <div className={style.rpmaIcon}></div> */}
    </div>

    <div className={style.aboutMetro}>
      <span className={style.metroText}>
      Metro NZ is one of the top Auckland Property Management companies. 
      All of our staff are property investors who have expert knowledge 
      of the property market and your best interest in mind at all times. 
      Keep reading to have a look at what services we offer as an Auckland 
      property management company below.
      </span>
    </div>
    <div className={style.howCanWeHelp}> How Can We Help? </div>

    <div className={style.aboutContainer}>
      <NavCards
        content={'We conduct a thorough appraisal of your property based on the current rent market. This will give you a good representation of where to set your rent and what possibilities there are for property advancements. '}
        header={'Property Management Auckland'}
        buttonHeader={'Book an Appraisal'}
        image={'testing'}
      /> 
      <NavCards
        content={'View what is available for your next home or apartment, from Mt. Albert and Three Kings to all over the Auckland region, we have your next place for you'}
        header={'Our Property Listings'}
        buttonHeader={'See our Listings'}
        image={'testing'}
        /> 

      <NavCards 
        content={"Changing to Metro NZ Property Management is easy. We collect the required information from you and in return, you'll see the benefits of working with a people-focused company. "}
        header={'Change to Metro NZ Property Management'}
        buttonHeader={'Make the change'}
        image={'testing'}
        /> 
    </div>

    <div className={style.ourProperties}> Our Properties </div>

    <div className={style.ourPropertiesContainer}></div>

    <button className={style.viewAll}> View All Available Properties </button>

     <div className={style.LuxuryApartments}>
        <span className={style.luxuryText}> Ask us about "The Antipodean" Luxury Apartments on Beach Rd, Auckland </span>
        <span className={style.luxuryVideoContainer}> Video goes here </span>
     </div>

     <div className={style.randomTextContainer}>


     <div className={style.randomTextHeader}> Working with Landlords, Tenants, Building Owners and Property Investors, Property Management Services and Apprasials </div>
     <div className={style.randomText}> We are lucky enough to have systems in place that allows us to work in a paperless environment. 
     This enables us to have a speedy and accurate process when looking at your property 
     related matters and also helps to sustain the environment. 
     Strategic planning and systematisation of our processes are one of 
     our strengths and we can proudly show off our Westpac Business Award in this 
     category. At Metro NZ, we don’t guess the rental potential just from the rent 
     of the neighbouring houses. We want to meet you on-site, not only to assess the
     most accurate rental prices but also to discuss with you any potential options
     that will increase the popularity of the property to tenants or the property value.</div>

     <div className={style.randomTextHeader}>Changing to Metro NZ Property Management</div>
     <div className={style.randomText}>Changing to Metro NZ Properties is easy and there is no 
      cost. Even if it is for multiple properties. 
      Complete the simple contact form or call us and we’ll be 
      in touch to transfer the management properties to Metro
      NZ and to work with minimal disruption. 
      Choose the property management team with the best extensive
      knowledge in the field. We simplify our systems to take the 
      stress off proprietors and landlords. And, in the same way, 
      we ensure that our tenants receive respectful treatment. 
      We recognise that they are an important factor in the success of our clients.</div>

     <div className={style.randomTextHeader}> Our Tenants </div>
     <div className={style.randomText}>In the same way that we streamline our systems to 
      take the pressure off property owners and landlords, 
      we ensure that our tenants receive respectful treatment. 
      If fact we like to say that we treat our tenants like we 
      would treat our guests. We recognise that tenants are an important 
      factor in the success of our clients.</div>

     <div className={style.randomTextHeader}> Community Involvement </div>
     <div className={style.randomText}>Metro NZ Property Management has always been involved 
      in the support of various charities, often rolling up our sleeves to deliver, 
      feed, support or assist financially. If you have any questions about
      what charities we have been involved in, get in contact with us! We 
      love sharing our charitable stories and if you’d like to be involved
      with one of the charities we support, let us know.</div>

      </div>
      <div className={style.sponsorContainer}>
        <span className={style.sponserOne}></span>
        <span className={style.sponserTwo}></span>
        <span className={style.sponserThree}></span>
        <span className={style.sponserFour}></span>
        <span className={style.sponserFive}></span>
        <span className={style.sponserSix}></span>
      </div>
   </>
  ) 
}

export default Home