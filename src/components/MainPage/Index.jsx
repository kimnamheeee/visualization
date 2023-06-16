import "./Index.css";
import mainpage1text from "../../assets/images/mainpage1text.svg";
import barchart from "../../assets/images/barchart.svg";
import Scroller from "../Scroller/Scroller";

export const MainPage1 = () => {
  return (
    <>
      <div className="maintext">
        <img src={mainpage1text} alt="main page1 text" />
      </div>
      <Scroller className="main1scroller" />
    </>
  );
};

export const MainPage2 = () => {
  return (
    <>
      <div className="maintext2">
        <div>그렇다면 16년 동안</div>
        <div>출산율에는 어떤 변화가 있었을까요?</div>
      </div>
      <div className="scroller-margin">
        <Scroller />
      </div>
    </>
  );
};

export const MainPage3 = () => {
  return (
    <>
      <div className="maintext3">
        <div className="text-container">
          <div>
            280조의 예산에도 불구하고 합계출산율은 2022년 0.78명으로 떨어졌으며
          </div>
          <div>출생아 수는 15년만에 반토막이 났습니다.</div>
        </div>
        <div className="image-container">
          <img
            className="barchart"
            alt="출산율 변화 바 그래프"
            src={barchart}
          />
        </div>
      </div>
    </>
  );
};

export const MainPage4 = () => {
  return (
    <>
      <div className="maintext4">
        <div>그러면 이러한 예산은</div>
        <div>어떻게 운영되고 있었을까요?</div>
        <div>광역별 예산안과 정책을</div>
        <div>정리해보았습니다.</div>
      </div>
      <Scroller />
    </>
  );
};
