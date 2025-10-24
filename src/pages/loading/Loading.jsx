import React, { useState, useEffect } from 'react'
import './loading.css'

import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'

// 이미지 import
import beagle from '../../assets/images/Beagle.png'
import borderCollie from '../../assets/images/BorderCollie.png'
import dalmatian from '../../assets/images/Dalmatian.png'
import goldenRetriever from '../../assets/images/GoldenRetriever.png'

const Loading = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const images = [
    beagle,
    borderCollie,
    dalmatian,
    goldenRetriever,
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='loading__wrap'>
      <Header />
      <div className="loading__content">
        <div className='loading__contentwrap'>
          <div className='loading___img'>
            <img src={images[currentImageIndex]} alt="Loading" />
         <p>털 수집하는 중..</p>
          </div>
        </div>
      </div>
      <div className='info__formBtnWrap'>
      </div>
    </div>
  )
}

export default Loading