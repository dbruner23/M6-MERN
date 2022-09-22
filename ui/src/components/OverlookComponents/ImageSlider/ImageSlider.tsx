import React from 'react'
import { useState } from 'react'
import styles from './ImageSlider.module.css'
import arrowLeft from '../../../assets/search/arrow-left-circle.svg'
import arrowRight from '../../../assets/search/arrow-right-circle.svg'


interface ImageProps {
  images:[string]
}

const ImageSlider = ({ images }: ImageProps) => {
  const [activeImg, setActiveImg] = useState(0);

  const SliderAdvance = () => {
    if (activeImg === (images.length) - 1) {
      setActiveImg(0);
    } else {
      setActiveImg(activeImg + 1);
    }
  }

  const SliderReverse = () => {
    if (activeImg === 0) {
      setActiveImg((images.length) - 1);
    } else {
      setActiveImg(activeImg - 1);
    }
  }

  return (
    <>
      <div className={styles.ArrowsBox}>
        <div className={styles.SliderArrow} onClick={SliderReverse}>
          <img src={arrowLeft} />
        </div>
        <div className={styles.SliderArrow} onClick={SliderReverse}>
          <img src={arrowRight} />
        </div>
      </div>
      <div className={styles.ImagesBox}>
        <img src={images[activeImg]}/>
      </div>
    </>
  )
}

export default ImageSlider