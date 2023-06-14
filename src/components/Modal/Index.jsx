import "./Index.css";
import {
  images2018,
  images2019,
  images2020,
  images2021,
  images2022,
} from "../../assets/images/index";
import close from "../../assets/images/close.svg";
import radarDescription from "../../assets/images/radar-description.svg";
import Select from "react-select";
import datas from "../../data/datas.json";
import { useState } from "react";

export const Modal = ({ region, year, setShowModal }) => {
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

  const region_names_kor = [
    "인천",
    "강원",
    "경기",
    "서울",
    "충남",
    "충북",
    "세종",
    "대전",
    "전북",
    "광주",
    "전남",
    "제주",
    "부산",
    "울산",
    "경북",
    "대구",
    "경남",
  ];

  const regionOptions = region_names_kor.map((region) => ({
    value: region,
    label: region,
  }));

  const years = [2018, 2019, 2020, 2021, 2022];

  const [totalValue, setTotalValue] = useState(
    datas[year][region_names_kor[region]]["예산"]["total"] * 1000000
  );

  const [yearRegionBudget, setYearRegionBudget] = useState(
    datas[year][region_names_kor[region]]["예산"]
  );

  const { total, ...budgetValues } = yearRegionBudget;

  const maxBudget = Math.max(...Object.values(budgetValues));
  const maxBudgetKey = Object.keys(budgetValues).find(
    (key) => budgetValues[key] === maxBudget
  );

  console.log("max", maxBudget);
  console.log("key", maxBudgetKey);

  const yearOptions = years.map((year) => ({
    value: year,
    label: year,
  }));

  const imageKey = `${region_names[region]}${year}`;

  const customComponents = {
    IndicatorSeparator: () => null, // 인디케이터 구분선 숨기기
  };

  let radarchartImage;

  switch (year) {
    case 2018:
      radarchartImage = images2018[imageKey];
      break;
    case 2019:
      radarchartImage = images2019[imageKey];
      break;
    case 2020:
      radarchartImage = images2020[imageKey];
      break;
    case 2021:
      radarchartImage = images2021[imageKey];
      break;
    case 2022:
      radarchartImage = images2022[imageKey];
      break;
    default:
      radarchartImage = null;
  }

  const customSelectStyles = {
    menu: (provided, state) => ({
      ...provided,
      fontSize: "1.38vh",
    }),
    control: (provided, state) => ({
      ...provided,
      height: "6vh",
      width: "14.5vw",
      borderRadius: "40px",
      fontFamily: "KyoboHandwriting2021sjy",
      paddingLeft: "1vw",
      fontSize: "2.7vh",
      border: "2px solid #54bfcf",
      boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.16)",
    }),
  };

  const defaultYearOption = { value: year, label: year };
  const defaultRegionOption = {
    value: region_names_kor[region],
    label: region_names_kor[region],
  };

  return (
    <div className="modal-background">
      <div className="modal-container">
        <img
          className="close"
          src={close}
          onClick={() => setShowModal(false)}
          alt="닫기"
        />
        <div className="modal-contents">
          <div className="selection-container">
            <Select
              components={customComponents}
              styles={customSelectStyles}
              options={yearOptions}
              defaultValue={defaultYearOption}
            ></Select>
            <Select
              components={customComponents}
              styles={customSelectStyles}
              options={regionOptions}
              maxMenuHeight={500}
              defaultValue={defaultRegionOption}
            />
          </div>
          <div className="totalnumber-container text">
            {region_names_kor[region]}은(는) {year}년 저출산 정책의 예산으로 총{" "}
            <span style={{ color: "#54BFCF" }}>
              {totalValue.toLocaleString()}
            </span>
            원을 책정하였습니다.
          </div>
          <div className="charts-container">
            <div className="radar">
              <img
                className="chart-description"
                alt="레이더차트 꼭짓점 설명"
                src={radarDescription}
              />
              <img
                className="detail-radarchart"
                src={radarchartImage}
                alt="radarchart"
              />
            </div>
          </div>
          <div className="explanation-container">
            <div className="text explanation">
              그 중 가장 많은 예산이 편성된 단계는 {maxBudgetKey}(으)로, 총{" "}
              <span style={{ color: "#54BFCF" }}>
                {(maxBudget * 1000000).toLocaleString()}
              </span>
              원이 책정되었습니다.
            </div>
            <div className="text explanation">
              어떠한 정책들이 있었는지 자세히 알아볼까요?
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
