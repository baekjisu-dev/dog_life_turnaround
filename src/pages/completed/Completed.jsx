import React from 'react'
import './completed.css'

import Header from '../../components/header/Header'
import completed from '../../assets/images/completed.png'
import {  useNavigate } from 'react-router-dom'


const Completed = () => {
  const navigate = useNavigate();

  return (
    <div className='completed__wrap'>
    <Header />
     <div className="completed__content">
     <div className="completed__content">
        <div className='completed__contentwrap'>
          <div className='completed___img'>
            <img src={completed} alt="Loading" />
         <p>드디어 알아냈어 !</p>
          </div>
        </div>
      </div>
     </div>
     <div className='info__formBtnWrap'>
     <button className='info__formBtn'
          onClick={() => navigate('/result')}
          >결과확인</button>
     </div>
    </div>
  )
}

export default Completed