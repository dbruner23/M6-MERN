import styles from './smallButton.module.css'


interface Props {
    text: String,
    onClick: () => void
  }
  
  export function SmallButton({text, onClick }:Props ) {
    return (
      <button className={styles.SmallButtonStyle} onClick={onClick}>
        <span className={styles.Text}>{text} </span>
      </button>
    )
  }