import "./App.css";
import { MainPage1, MainPage2, MainPage4 } from "./components/MainPage/Index";
import { useState, useEffect } from "react";
import { RadarChart2018 } from "./components/RadarChart/Index";
import YearBar from "./components/YearBar/Index";

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

  const [selectedCircle, setSelectedCircle] = useState(null);

  return (
    <div className="App">
      {/* {showMainPage === 1 && <MainPage1 />}
      {showMainPage === 2 && <MainPage2 />}
      {showMainPage === 4 && <MainPage4 />} */}
      <RadarChart2018 />
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
