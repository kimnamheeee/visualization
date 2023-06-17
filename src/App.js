import "./App.css";
import {
  MainPage1,
  MainPage2,
  MainPage3,
  MainPage4,
} from "./components/MainPage/Index";
import { useState } from "react";
import {
  RadarChart2018,
  RadarChart2019,
  RadarChart2020,
  RadarChart2021,
  RadarChart2022,
} from "./components/RadarChart/Index";
import { SectionsContainer, Section } from "react-fullpage";

function App() {
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

  const [selectedRegion, setSelectedRegion] = useState({
    year: null,
    region: null,
  });

  const handleChartMouseOver = (region, year) => {
    setHoveredChart({ region, year });
  };

  let radarChart;

  switch (selectedCircle) {
    case 0:
      radarChart = (
        <RadarChart2018
          onChartMouseOver={handleChartMouseOver}
          hoveredChart={hoveredChart}
          selectedCircle={selectedCircle}
          setSelectedCircle={setSelectedCircle}
          selectedRegion={selectedRegion}
          setSelectedRegion={setSelectedRegion}
        />
      );
      break;
    case 1:
      radarChart = (
        <RadarChart2019
          onChartMouseOver={handleChartMouseOver}
          hoveredChart={hoveredChart}
          selectedCircle={selectedCircle}
          setSelectedCircle={setSelectedCircle}
          selectedRegion={selectedRegion}
          setSelectedRegion={setSelectedRegion}
        />
      );
      break;
    case 2:
      radarChart = (
        <RadarChart2020
          onChartMouseOver={handleChartMouseOver}
          hoveredChart={hoveredChart}
          selectedCircle={selectedCircle}
          setSelectedCircle={setSelectedCircle}
          selectedRegion={selectedRegion}
          setSelectedRegion={setSelectedRegion}
        />
      );
      break;
    case 3:
      radarChart = (
        <RadarChart2021
          onChartMouseOver={handleChartMouseOver}
          hoveredChart={hoveredChart}
          selectedCircle={selectedCircle}
          setSelectedCircle={setSelectedCircle}
          selectedRegion={selectedRegion}
          setSelectedRegion={setSelectedRegion}
        />
      );
      break;
    case 4:
      radarChart = (
        <RadarChart2022
          onChartMouseOver={handleChartMouseOver}
          hoveredChart={hoveredChart}
          selectedCircle={selectedCircle}
          setSelectedCircle={setSelectedCircle}
          selectedRegion={selectedRegion}
          setSelectedRegion={setSelectedRegion}
        />
      );
      break;
    default:
      radarChart = null;
  }

  return (
    <div className="App">
      <div className="user-select-none">
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
          <Section>{radarChart}</Section>
        </SectionsContainer>
      </div>
    </div>
  );
}

export default App;
