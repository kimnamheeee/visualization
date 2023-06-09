import "./App.css";
// import { MainPage1, MainPage2, MainPage4 } from "./components/MainPage/Index";
import { useState } from "react";
import {
  RadarChart2018,
  RadarChart2019,
  RadarChart2020,
  RadarChart2021,
  RadarChart2022,
} from "./components/RadarChart/Index";
import YearBar from "./components/YearBar/Index";
import { Modal } from "./components/Modal/Index";

function App() {
  // const [scrollAttempts, setScrollAttempts] = useState(0);
  // const [showMainPage, setShowMainPage] = useState(1);

  // const handleWheel = (event) => {
  //   const deltaY = event.deltaY;
  //   if (deltaY > 10) {
  //     setScrollAttempts((prevAttempts) => prevAttempts + 1);
  //   } else if (deltaY < -10 && scrollAttempts > 0) {
  //     setScrollAttempts((prevAttempts) => prevAttempts - 1);
  //   }
  // };

  // useEffect(() => {
  //   window.addEventListener("wheel", handleWheel);

  //   return () => {
  //     window.removeEventListener("wheel", handleWheel);
  //   };
  // }, [handleWheel]);

  // useEffect(() => {
  //   console.log("attempt", scrollAttempts);
  //   if (scrollAttempts >= 0 && scrollAttempts <= 20) {
  //     setShowMainPage(1);
  //   } else if (scrollAttempts > 20 && scrollAttempts <= 40) {
  //     setShowMainPage(2);
  //   } else if (scrollAttempts > 40 && scrollAttempts <= 60) {
  //     setShowMainPage(4);
  //   }
  // }, [scrollAttempts]);

  const [selectedCircle, setSelectedCircle] = useState(0);
  const [hoveredChart, setHoveredChart] = useState({
    region: null,
    year: null,
  });

  const [showModal, setShowModal] = useState(false);
  const [selectedRegion, setSelectedRegion] = useState({
    year: null,
    region: null,
  });

  const handleChartMouseOver = (region, year) => {
    setHoveredChart({ region, year });
  };

  const handleChartClick = (region, year) => {
    setSelectedRegion({ region, year });
    setShowModal(true);
  };

  let radarChart;

  switch (selectedCircle) {
    case 0:
      radarChart = (
        <RadarChart2018
          onChartMouseOver={handleChartMouseOver}
          onChartClick={handleChartClick}
          hoveredChart={hoveredChart}
        />
      );
      break;
    case 1:
      radarChart = (
        <RadarChart2019
          onChartMouseOver={handleChartMouseOver}
          onChartClick={handleChartClick}
          hoveredChart={hoveredChart}
        />
      );
      break;
    case 2:
      radarChart = (
        <RadarChart2020
          onChartMouseOver={handleChartMouseOver}
          onChartClick={handleChartClick}
          hoveredChart={hoveredChart}
        />
      );
      break;
    case 3:
      radarChart = (
        <RadarChart2021
          onChartMouseOver={handleChartMouseOver}
          onChartClick={handleChartClick}
          hoveredChart={hoveredChart}
        />
      );
      break;
    case 4:
      radarChart = (
        <RadarChart2022
          onChartMouseOver={handleChartMouseOver}
          onChartClick={handleChartClick}
          hoveredChart={hoveredChart}
        />
      );
      break;
    default:
      radarChart = null;
  }

  return (
    <div className="App">
      {/* {showMainPage === 1 && <MainPage1 />}
      {showMainPage === 2 && <MainPage2 />}
      {showMainPage === 4 && <MainPage4 />} */}
      {showModal && (
        <Modal
          region={selectedRegion.region}
          year={selectedRegion.year}
          setShowModal={setShowModal}
        />
      )}
      {radarChart}
      <div className="main-yearbar">
        <YearBar
          selectedCircle={selectedCircle}
          setSelectedCircle={setSelectedCircle}
        />
      </div>
    </div>
  );
}

export default App;
