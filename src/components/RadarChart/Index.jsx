import {
  images2018,
  images2019,
  images2020,
  images2021,
  images2022,
} from "../../assets/images/index";
import "./Index.css";
import radarDescription from "../../assets/images/radar-description.svg";
import gradient from "../../assets/images/gradient.svg";
import YearBar from "../YearBar/Index";
import { useState } from "react";
import { Modal } from "../Modal/Index";

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

export const RadarChart2018 = ({
  onChartMouseOver,
  hoveredChart,
  selectedCircle,
  setSelectedCircle,
  selectedRegion,
  setSelectedRegion,
}) => {
  const [showModal, setShowModal] = useState(false);

  const onChartClick = (region, year) => {
    console.log("clicked", region, year);
    setSelectedRegion({ region, year });
    setShowModal(true);
  };

  return (
    <>
      {showModal ? (
        <Modal
          region={selectedRegion.region}
          year={selectedRegion.year}
          setShowModal={setShowModal}
          setSelectedRegion={setSelectedRegion}
          selectedRegion={selectedRegion}
        />
      ) : (
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
              {region_names.map((region, index) => {
                const imageKey = `${region}2018`;
                const image = images2018[imageKey];

                return (
                  <img
                    className={`radarchart ${
                      hoveredChart.region === region &&
                      hoveredChart.year === 2018
                        ? "hovered"
                        : ""
                    }`}
                    src={image}
                    alt={region}
                    key={region}
                    onMouseEnter={() => onChartMouseOver(region, 2018)}
                    onMouseLeave={() => onChartMouseOver(null, null)}
                    onClick={() => onChartClick(index, 2018)}
                  />
                );
              })}
            </div>
            <YearBar
              className="yearBar"
              selectedCircle={selectedCircle}
              setSelectedCircle={setSelectedCircle}
            />
          </div>
        </>
      )}
    </>
  );
};

export const RadarChart2019 = ({
  onChartMouseOver,
  hoveredChart,
  selectedCircle,
  setSelectedCircle,
  selectedRegion,
  setSelectedRegion,
}) => {
  const [showModal, setShowModal] = useState(false);

  const onChartClick = (region, year) => {
    console.log("clicked", region, year);
    setSelectedRegion({ region, year });
    setShowModal(true);
    console.log("modal", showModal);
  };

  return (
    <>
      {showModal ? (
        <Modal
          region={selectedRegion.region}
          year={selectedRegion.year}
          setShowModal={setShowModal}
          setSelectedRegion={setSelectedRegion}
          selectedRegion={selectedRegion}
        />
      ) : (
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
              {region_names.map((region, index) => {
                const imageKey = `${region}2019`;
                const image = images2019[imageKey];

                return (
                  <img
                    className={`radarchart ${
                      hoveredChart.region === region &&
                      hoveredChart.year === 2019
                        ? "hovered"
                        : ""
                    }`}
                    src={image}
                    alt={region}
                    key={region}
                    onMouseEnter={() => onChartMouseOver(region, 2019)}
                    onMouseLeave={() => onChartMouseOver(null, null)}
                    onClick={() => onChartClick(index, 2019)}
                  />
                );
              })}
            </div>
            <YearBar
              selectedCircle={selectedCircle}
              setSelectedCircle={setSelectedCircle}
            />
          </div>
        </>
      )}
    </>
  );
};

export const RadarChart2020 = ({
  onChartMouseOver,
  hoveredChart,
  selectedCircle,
  setSelectedCircle,
  selectedRegion,
  setSelectedRegion,
}) => {
  const [showModal, setShowModal] = useState(false);

  const onChartClick = (region, year) => {
    console.log("clicked", region, year);
    setSelectedRegion({ region, year });
    setShowModal(true);
    console.log("modal", showModal);
  };

  return (
    <>
      {showModal ? (
        <Modal
          region={selectedRegion.region}
          year={selectedRegion.year}
          setShowModal={setShowModal}
          setSelectedRegion={setSelectedRegion}
          selectedRegion={selectedRegion}
        />
      ) : (
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
              {region_names.map((region, index) => {
                const imageKey = `${region}2020`;
                const image = images2020[imageKey];

                return (
                  <img
                    className={`radarchart ${
                      hoveredChart.region === region &&
                      hoveredChart.year === 2020
                        ? "hovered"
                        : ""
                    }`}
                    src={image}
                    alt={region}
                    key={region}
                    onMouseEnter={() => onChartMouseOver(region, 2020)}
                    onMouseLeave={() => onChartMouseOver(null, null)}
                    onClick={() => onChartClick(index, 2020)}
                  />
                );
              })}
            </div>
            <YearBar
              selectedCircle={selectedCircle}
              setSelectedCircle={setSelectedCircle}
            />
          </div>
        </>
      )}
    </>
  );
};

export const RadarChart2021 = ({
  onChartMouseOver,
  hoveredChart,
  selectedCircle,
  setSelectedCircle,
  selectedRegion,
  setSelectedRegion,
}) => {
  const [showModal, setShowModal] = useState(false);

  const onChartClick = (region, year) => {
    console.log("clicked", region, year);
    setSelectedRegion({ region, year });
    setShowModal(true);
    console.log("modal", showModal);
  };

  return (
    <>
      {showModal ? (
        <Modal
          region={selectedRegion.region}
          year={selectedRegion.year}
          setShowModal={setShowModal}
          setSelectedRegion={setSelectedRegion}
          selectedRegion={selectedRegion}
        />
      ) : (
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
              {region_names.map((region, index) => {
                const imageKey = `${region}2021`;
                const image = images2021[imageKey];

                return (
                  <img
                    className={`radarchart ${
                      hoveredChart.region === region &&
                      hoveredChart.year === 2021
                        ? "hovered"
                        : ""
                    }`}
                    src={image}
                    alt={region}
                    key={region}
                    onMouseEnter={() => onChartMouseOver(region, 2021)}
                    onMouseLeave={() => onChartMouseOver(null, null)}
                    onClick={() => onChartClick(index, 2021)}
                  />
                );
              })}
            </div>
            <YearBar
              selectedCircle={selectedCircle}
              setSelectedCircle={setSelectedCircle}
            />
          </div>
        </>
      )}
    </>
  );
};

export const RadarChart2022 = ({
  onChartMouseOver,
  hoveredChart,
  selectedCircle,
  setSelectedCircle,
  selectedRegion,
  setSelectedRegion,
}) => {
  const [showModal, setShowModal] = useState(false);

  const onChartClick = (region, year) => {
    console.log("clicked", region, year);
    setSelectedRegion({ region, year });
    setShowModal(true);
    console.log("modal", showModal);
  };

  return (
    <>
      {showModal ? (
        <Modal
          region={selectedRegion.region}
          year={selectedRegion.year}
          setShowModal={setShowModal}
          setSelectedRegion={setSelectedRegion}
          selectedRegion={selectedRegion}
        />
      ) : (
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
              {region_names.map((region, index) => {
                const imageKey = `${region}2022`;
                const image = images2022[imageKey];

                return (
                  <img
                    className={`radarchart ${
                      hoveredChart.region === region &&
                      hoveredChart.year === 2022
                        ? "hovered"
                        : ""
                    }`}
                    src={image}
                    alt={region}
                    key={region}
                    onMouseEnter={() => onChartMouseOver(region, 2022)}
                    onMouseLeave={() => onChartMouseOver(null, null)}
                    onClick={() => onChartClick(index, 2022)}
                  />
                );
              })}
            </div>
            <YearBar
              selectedCircle={selectedCircle}
              setSelectedCircle={setSelectedCircle}
            />
          </div>
        </>
      )}
    </>
  );
};
