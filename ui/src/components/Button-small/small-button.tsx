import styles from './smallButton.module.css'
import { useNavigate } from 'react-router-dom'


interface Props {
    text: String,
    link: string 
  }
  
  export function SmallButton({text, link }:Props ) {

    const navigate = useNavigate(); 
    const Pathway = () => {
      navigate(link)   
    }
    return (
      <button className={styles.SmallButtonStyle}>
        <span className={styles.Text} onClick={Pathway}> {text} </span>
      </button>
    )
  }