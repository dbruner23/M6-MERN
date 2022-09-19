import styles from './LargeButton.module.css'


interface Props {
    text: string,
    onClick: () => void
  }
  
  export function LargeButton({text, onClick }:Props ) {
    return (
      <button className={styles.LargeButtonStyle} onClick={onClick}>
        <span className={styles.Text}> {text} </span>
      </button>
    )
  
  }