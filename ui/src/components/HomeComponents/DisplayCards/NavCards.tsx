import styles from './NavCards.module.css'
import { SmallButton } from '../../Button-small/small-button'


interface Props {
    content: String;
    header: String 
    buttonHeader: String, 
    image: any; 
}

export function NavCards({content, header, buttonHeader, image}: Props ) {
    const testing = () => {
        console.log('this is a test')
    }
    return (
        <> 
          <div className={styles.NavContainer}>
            <span className={styles.redSquare}>{image}</span>
            <span className={styles.Title}>{header}</span>
            <span className={styles.TextInfo}>{content}</span>           
               <SmallButton 
                 text={buttonHeader}  
                 onClick={testing}
              />        
          </div>
        </>
    )
}
