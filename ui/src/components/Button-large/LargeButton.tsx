import { useNavigate } from 'react-router-dom'
import styles from './LargeButton.module.css'


interface Props {
    text: string,
    link: string, 
  }
  
  export function LargeButton({text, link }:Props ) {
    
    const navigate = useNavigate(); 
    const Pathway = () => {
      navigate(link)  
    }
    return (
      <>
      <button className={styles.LargeButtonStyle}>
        <span className={styles.Text} onClick={Pathway}> {text} </span>
      </button>
      </>
    )
  }