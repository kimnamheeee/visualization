import { images2018, images2019, images2020 } from "../../assets/images/index";
import "./Index.css";
import radarDescription from "../../assets/images/radar-description.svg";
import gradient from "../../assets/images/gradient.svg";

const region_names = [
  "incheon",
  "gangwon",
  "gyeonggi",
  "seoul",
  "chungnam",
  "chungbook",
  "saejong",
  "daejeon",
  "jeonbook",
  "gwangju",
  "jeonnam",
  "jeju",
  "busan",
  "ulsan",
  "gyeongbook",
  "daegu",
  "gyeongnam",
];

export const RadarChart2018 = () => {
  return (
    <>
      <div className="descriptions">
        <div className="description-title">생애주기별 저출산 정책 예산</div>
        <img
          className="description-chart"
          alt={"안내용 차트"}
          src={images2018.seoul2018}
        />
        <img
          className="radar-description"
          alt={"레이더차트 꼭짓점 설명"}
          src={radarDescription}
        />
        <div className="gradient-bar">
          <div className="gradient-text">합계출산율</div>
          <img className="gradient" alt={"그라데이션 바"} src={gradient} />
          <div className="low-high">
            <div>낮음</div>
            <div>높음</div>
          </div>
        </div>
      </div>
      <div className="mainpage-container">
        <div className="explain-text">
          광역시를 클릭하여 자세한 현황을 살펴보세요!
        </div>
        <div className="radarchart-container">
          {region_names.map((region) => {
            const imageKey = `${region}2018`;
            const image = images2018[imageKey];

            return (
              <img
                className="radarchart"
                src={image}
                alt={region}
                key={region}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export const RadarChart2019 = () => {
  return (
    <>
      <div className="descriptions">
        <div className="description-title">생애주기별 저출산 정책 예산</div>
        <img
          className="description-chart"
          alt={"안내용 차트"}
          src={images2018.seoul2018}
        />
        <img
          className="radar-description"
          alt={"레이더차트 꼭짓점 설명"}
          src={radarDescription}
        />
        <div className="gradient-bar">
          <div className="gradient-text">합계출산율</div>
          <img className="gradient" alt={"그라데이션 바"} src={gradient} />
          <div className="low-high">
            <div>낮음</div>
            <div>높음</div>
          </div>
        </div>
      </div>
      <div className="mainpage-container">
        <div className="explain-text">
          광역시를 클릭하여 자세한 현황을 살펴보세요!
        </div>
        <div className="radarchart-container">
          {region_names.map((region) => {
            const imageKey = `${region}2019`;
            const image = images2019[imageKey];

            return (
              <img
                className="radarchart"
                src={image}
                alt={region}
                key={region}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export const RadarChart2020 = () => {
  return (
    <>
      <div className="descriptions">
        <div className="description-title">생애주기별 저출산 정책 예산</div>
        <img
          className="description-chart"
          alt={"안내용 차트"}
          src={images2018.seoul2018}
        />
        <img
          className="radar-description"
          alt={"레이더차트 꼭짓점 설명"}
          src={radarDescription}
        />
        <div className="gradient-bar">
          <div className="gradient-text">합계출산율</div>
          <img className="gradient" alt={"그라데이션 바"} src={gradient} />
          <div className="low-high">
            <div>낮음</div>
            <div>높음</div>
          </div>
        </div>
      </div>
      <div className="mainpage-container">
        <div className="explain-text">
          광역시를 클릭하여 자세한 현황을 살펴보세요!
        </div>
        <div className="radarchart-container">
          {region_names.map((region) => {
            const imageKey = `${region}2020`;
            const image = images2020[imageKey];

            return (
              <img
                className="radarchart"
                src={image}
                alt={region}
                key={region}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export const RadarChart2021 = () => {};

export const RadarChart2022 = () => {};
