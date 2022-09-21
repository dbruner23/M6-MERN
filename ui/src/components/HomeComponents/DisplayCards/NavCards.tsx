import styles from './NavCards.module.css'
import { SmallButton } from '../../Button-small/small-button'
import { useNavigate } from 'react-router-dom'



interface Props {
    content: String;
    header: String 
    buttonHeader: String, 
    image: any;  
    link: string;

}

export function NavCards({content, header, buttonHeader, image, link }: Props ) {

  

    return (
        <> 
          <div className={styles.NavContainer}>
            <span className={styles.redSquare}>{image}</span>
            <span className={styles.Title}>{header}</span>
            <span className={styles.TextInfo}>{content}</span>           
               <SmallButton 
                 text={buttonHeader}   
                 link={link}
              />        
          </div>
        </>
    )
}
