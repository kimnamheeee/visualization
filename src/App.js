import "./App.css";
import {
  MainPage1,
  MainPage2,
  MainPage3,
  MainPage4,
} from "./components/MainPage/Index";
import { useState, useEffect, useCallback } from "react";
import {
  RadarChart2018,
  RadarChart2019,
  RadarChart2020,
  RadarChart2021,
  RadarChart2022,
} from "./components/RadarChart/Index";
import YearBar from "./components/YearBar/Index";
import { Modal } from "./components/Modal/Index";
import { SectionsContainer, Section } from "react-fullpage";

function App() {
  // const [scrollAttempts, setScrollAttempts] = useState(0);
  // const [showMainPage, setShowMainPage] = useState(1);

  // const handleWheel = useCallback(
  //   throttle((event) => {
  //     const deltaY = event.deltaY;
  //     if (deltaY > 10) {
  //       setScrollAttempts((prevAttempts) => prevAttempts + 1);
  //     } else if (deltaY < -10 && scrollAttempts > 0) {
  //       setScrollAttempts((prevAttempts) => prevAttempts - 1);
  //     }
  //   }, 500),
  //   [scrollAttempts]
  // );

  // useEffect(() => {
  //   window.addEventListener("wheel", handleWheel);

  //   return () => {
  //     window.removeEventListener("wheel", handleWheel);
  //   };
  // }, [handleWheel]);

  // useEffect(() => {
  //   console.log("attempt", scrollAttempts);
  //   if (scrollAttempts >= 0 && scrollAttempts <= 10) {
  //     setShowMainPage(1);
  //   } else if (scrollAttempts > 10 && scrollAttempts <= 35) {
  //     setShowMainPage(2);
  //   } else if (scrollAttempts > 35 && scrollAttempts <= 55) {
  //     setShowMainPage(3);
  //   } else if (scrollAttempts > 55 && scrollAttempts <= 80) {
  //     setShowMainPage(4);
  //   } else if (scrollAttempts > 80 && scrollAttempts <= 100) {
  //     setShowMainPage(5);
  //   } else {
  //     setScrollAttempts(100);
  //   }
  // }, [scrollAttempts]);

  const options = {
    anchors: [
      "mainPage1",
      "mainPage2",
      "mainPage3",
      "mainPage4",
      "radarcharts",
    ],
    scrollBar: false,
    navigation: true,
  };

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
          selectedCircle={selectedCircle}
          setSelectedCircle={setSelectedCircle}
        />
      );
      break;
    case 1:
      radarChart = (
        <RadarChart2019
          onChartMouseOver={handleChartMouseOver}
          onChartClick={handleChartClick}
          hoveredChart={hoveredChart}
          selectedCircle={selectedCircle}
          setSelectedCircle={setSelectedCircle}
        />
      );
      break;
    case 2:
      radarChart = (
        <RadarChart2020
          onChartMouseOver={handleChartMouseOver}
          onChartClick={handleChartClick}
          hoveredChart={hoveredChart}
          selectedCircle={selectedCircle}
          setSelectedCircle={setSelectedCircle}
        />
      );
      break;
    case 3:
      radarChart = (
        <RadarChart2021
          onChartMouseOver={handleChartMouseOver}
          onChartClick={handleChartClick}
          hoveredChart={hoveredChart}
          selectedCircle={selectedCircle}
          setSelectedCircle={setSelectedCircle}
        />
      );
      break;
    case 4:
      radarChart = (
        <RadarChart2022
          onChartMouseOver={handleChartMouseOver}
          onChartClick={handleChartClick}
          hoveredChart={hoveredChart}
          selectedCircle={selectedCircle}
          setSelectedCircle={setSelectedCircle}
        />
      );
      break;
    default:
      radarChart = null;
  }

  return (
    <div className="App">
      <SectionsContainer {...options}>
        <Section>
          <MainPage1 />
        </Section>
        <Section>
          <MainPage2 />
        </Section>
        <Section>
          <MainPage3 />
        </Section>
        <Section>
          <MainPage4 />
        </Section>
        <Section>
          {showModal && (
            <Modal
              region={selectedRegion.region}
              year={selectedRegion.year}
              setShowModal={setShowModal}
            />
          )}
          {radarChart}
          {/* <div className="main-yearbar">
            <YearBar
              selectedCircle={selectedCircle}
              setSelectedCircle={setSelectedCircle}
            />
          </div> */}
        </Section>
      </SectionsContainer>
    </div>
  );
}

export default App;
