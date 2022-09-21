import style from './PropertyCard.module.css'
import { SmallButton } from '../Button-small/small-button'

interface Props {
    headImage?: any;
    Street?: String; 
    Suburb?: String;
    City?: String;  
    Cost?: number; 
    Beds?: number;
    Baths?: number;
    carparks?: number; 
    Grocery?: Boolean;
    Cafes?: Boolean; 
    Gyms?: Boolean;
    Transport?: Boolean; 
    Parks?: Boolean;  
    pets?: Boolean
    onClick: () => void 
    buttonHeader: string; 
}


export function PropertyCard({headImage, Street, Suburb, City, Cost, Beds, Baths, carparks, Grocery, Cafes, Gyms, Transport, Parks, buttonHeader, pets, onClick}: Props) {


    if (!Grocery ) {  
        const icon = document.getElementById('Grocery')
        icon!.style.display = 'none';
    }
    if (!Cafes) {
        const icon = document.getElementById('Cafes')
        icon!.style.display = 'none'; 
    }
    if (!Gyms) {
        const icon = document.getElementById('Gyms')
        icon!.style.display = 'none'; 
    }
    if (!Transport) {
        const icon = document.getElementById('Transport')
        icon!.style.display = 'none'; 
    }
    if (!Parks) {
        const icon = document.getElementById('Parks')
        icon!.style.display = 'none'; 
    }
    if (!pets) {
        const icon = document.getElementById('Pets')
        icon!.style.display = 'none'; 
    }

    return ( 
        <> 
        <div className={style.Container}>
            <img src={headImage} alt="" className={style.PropertyImage}></img>
            <span className={style.Address}>{Street}, {Suburb}, {City} </span>
            <span className={style.Price}>NZ ${Cost} Per Week</span>
            <div className={style.UtilitiesContainer}>
                <div className={style.UtilitiesContainerTop}>
                   <span className={style.bedrooms}>{Beds}</span>
                   <span className={style.bathrooms}>{Baths}</span>
                   <span className={style.Car}>{carparks}</span>
                </div>
                <div className={style.UtilitiesContainerBottom}>
                   <span className={style.Shopping} id='Grocery'>1</span>
                   <span className={style.Coffee} id='Cafes' >2</span>
                   <span className={style.Gyms} id='Gyms'>3</span>
                   <span className={style.PublicTransport} id='Transport'>4</span>
                   <span className={style.PublicParks} id='Parks'>5</span>
                   <span className={style.AllowedPets}id='Pets' >6</span>
                </div>
            </div>
            <SmallButton
              link={'testing'}
               text={buttonHeader} 
            /> 
        </div>


        </>
    )

}
