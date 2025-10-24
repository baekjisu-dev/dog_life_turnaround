import React from "react";
import "./result.css";
import Header from "../../components/header/Header";
import Hearts from "../../assets/images/Hearts.svg";
import sparkle from "../../assets/images/Sparkles.svg";
import { SHARE_BTN_LIST } from "../main/Main";
import Refresh from "../../assets/icon/refresh-cw.svg";
import Download from "../../assets/icon/Download.svg";

const Result = () => {
  return (
    <div className="result__wrap">
      <Header />
      <div className="result__content">
        <div className="result__profile">
          <div className="result__profile__img">
            <img
              src={Hearts}
              className="result__profile__img__hearts"
              alt="hearts"
            />
            <img
              src={sparkle}
              className="result__profile__img__sparkle"
              alt="sparkle"
            />
            <p className="result__profile__name">상근이</p>
          </div>
        </div>
        <div className="result__report-wrap">
          <div className="result__report">
            <div className="result__report__content">
              <p className="result__report__title">상근이 분석 보고서</p>
              <div className="result__report__content__graph">
                <div className="result__report__content__graph__item">
                  <p>웰시코기</p>
                  <div>
                    <p></p>
                  </div>
                  <p>70%</p>
                </div>
              </div>
            </div>
            <p className="result__report__subtitle">셜독 탐정 사무소</p>
          </div>
        </div>
        <div className="result__bottom-wrap">
          <button className="result__restart-btn">
            <img src={Refresh} alt="refresh" />
            다시하기
          </button>
          <button className="result__download-btn">
            <img src={Download} alt="download" />
            저장하기
          </button>
        </div>
        <p className="result__line"></p>
        <div className="result__share-wrap">
          <span>결과 공유하기</span>
          <div className="result__share-btn-wrap">
            {SHARE_BTN_LIST.map((item) => (
              <button className="result__share-btn" key={item.name}>
                <img src={item.icon} alt={item.name} />
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Result;
