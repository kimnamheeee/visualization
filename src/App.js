import "./App.css";
import { MainPage1, MainPage2 } from "./components/MainPage/Index";
import { useState, useEffect } from "react";

function App() {
  const [scrollAttempts, setScrollAttempts] = useState(0);
  const [showMainPage2, setShowMainPage2] = useState(false);

  const handleWheel = (event) => {
    const deltaY = event.deltaY;
    if (deltaY > 10) {
      console.log("scroll attempt");
      setScrollAttempts((prevAttempts) => prevAttempts + 1);
    }
  };

  useEffect(() => {
    window.addEventListener("wheel", handleWheel);

    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, []);

  useEffect(() => {
    if (scrollAttempts > 20) {
      setShowMainPage2(true);
    }
  }, [scrollAttempts]);

  return (
    <div className="App">{showMainPage2 ? <MainPage2 /> : <MainPage1 />}</div>
  );
}

export default App;
