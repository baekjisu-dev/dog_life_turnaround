import React from "react";
import "./main.css";
import { useNavigate } from "react-router-dom";
import TitleLogo from "../../assets/images/TitleImage.svg";
import MainImage from "../../assets/images/MainImage.png";
import Paw from "../../assets/icon/paw.svg";
import Kakao from "../../assets/icon/message-circle.svg";
import Instagram from "../../assets/icon/instagram.svg";
import Facebook from "../../assets/icon/facebook.svg";
import Twitter from "../../assets/icon/twitter.svg";
import Link from "../../assets/icon/link.svg";

export const SHARE_BTN_LIST = [
  {
    name: "kakao",
    icon: Kakao,
  },
  {
    name: "instagram",
    icon: Instagram,
  },
  {
    name: "facebook",
    icon: Facebook,
  },
  {
    name: "twitter",
    icon: Twitter,
  },
  {
    name: "link",
    icon: Link,
  },
];

const Main = () => {
  const navigate = useNavigate();

  return (
    <div className="main__content">
      <div className="main__title-wrap">
        <div className="main__title">
          <img src={TitleLogo} alt="title-logo" />
        </div>
        <img className="main__image" src={MainImage} alt="main-image" />
      </div>
      <div className="main__wrap">
        <div className="main__button-wrap">
          <button className="main__button" onClick={() => navigate("/info")}>
            시작하기
            <img src={Paw} alt="paw" />
          </button>
        </div>
        <p className="main__subtext">
          <span>다양한 강아지</span>의 의뢰가 완료되었다, 멍!
        </p>
        <p className="main__line"></p>
        <div className="main__share-wrap">
          <span>공유하기</span>
          <div className="main__share-btn-wrap">
            {SHARE_BTN_LIST.map((item) => (
              <button className="main__share-btn" key={item.name}>
                <img src={item.icon} alt={item.name} />
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
