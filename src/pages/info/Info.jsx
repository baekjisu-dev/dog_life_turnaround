import React, { useState } from 'react'
import './info.css'
import { FaCamera } from 'react-icons/fa'

import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'

import page from '../../assets/images/page.png'
import shirdock from '../../assets/images/ShirdockHomes.png'
import { useNavigate } from 'react-router-dom'

const Info = () => {
  const [profileImage, setProfileImage] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    gender: ''
  });
  const navigate = useNavigate();

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setProfileImage(URL.createObjectURL(e.target.files[0]));
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleGenderSelect = (gender) => {
    setFormData(prev => ({
      ...prev,
      gender
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // 폼 데이터 유효성 검사
    if (!formData.name || !formData.age || !formData.gender || !profileImage) {
      alert('모든 필드를 입력해주세요!');
      return;
    }

    try {
      // 호출 코드추가
      // const response = await fetch('/api/submit', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify({
      //     ...formData,
      //     profileImage
      //   }),
      // });

      // 임시로 성공했다고 가정하고 로딩 페이지로 이동
      navigate('/loading');
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('제출 중 오류가 발생했습니다. 다시 시도해주세요.');
    }
  };

  return (
    <div className='info__wrap'>
      <Header />
      <div className="info__content">
        <div className='info__titleIntro'>
          <div className='info__titleWrap'>
            <p>어서와라, 멍!</p>
            <p>나는 명탐정 <b>셜독홈즈</b></p>
            <p>너도 모르는 네 정체를</p>
            <p>알고싶어서 찾아온거지?</p>
            <p>우선 이 의뢰서부터 작성해</p>
          </div>
          <div className='info__shirdockWrap'><img src={shirdock}></img></div>
        </div>

        <form onSubmit={handleSubmit} className='info__formWrap'>
          <img src={page}></img>
          <div className='info__form'>
            <div className='info__formTitle'>견생역전 의뢰서</div>
            <div className='info__imgWrap'>
              <div className='info__profileImageContainer'>
                <img src={profileImage} alt="프로필 이미지" />
                <label htmlFor="profileImage" className='info__cameraIcon'>
                  <FaCamera />
                </label>
                <input
                  type="file"
                  id="profileImage"
                  name="profileImage"
                  accept="image/*"
                  onChange={handleImageChange}
                  style={{ display: 'none' }}
                />
              </div>
            </div>
            <legend>
              <div className='info__profileWrap'>
                <div className='info__profile_name'>
                  <label>이름</label>
                  <input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                  />
                </div>
                <div className='info__profile_age'>
                  <label>나이</label>
                  <input 
                    type="text" 
                    name="age"
                    value={formData.age}
                    onChange={handleInputChange}
                  />
                </div>
                <div className='info__profile_gender'>
                  <label>성별</label>
                  <button 
                    type="button"
                    onClick={() => handleGenderSelect('male')}
                    className={formData.gender === 'male' ? 'selected' : ''}
                  >
                    남자
                  </button>
                  <button 
                    type="button"
                    onClick={() => handleGenderSelect('female')}
                    className={formData.gender === 'female' ? 'selected' : ''}
                  >
                    여자
                  </button>
                </div>
              </div>
            </legend>
          </div>
        </form>
      </div>
          <div className='info__formBtnWrap'>
              <button type="submit" className='info__formBtn' onClick={()=>navigate('/loading')}>
                의뢰하기
            </button>
          </div>
    </div>
  )
}

export default Info