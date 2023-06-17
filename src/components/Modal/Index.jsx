import "./Index.css";
import {
  images2018,
  images2019,
  images2020,
  images2021,
  images2022,
} from "../../assets/images/index";

import {
  sub2018,
  sub2019,
  sub2020,
  sub2021,
  sub2022,
} from "../../assets/images/index";

import close from "../../assets/images/close.svg";
import radarDescription from "../../assets/images/radar-description.svg";
import subLegend from "../../assets/images/sub-legend.svg";
import Select from "react-select";
import datas from "../../data/datas.json";
import { useState, useEffect } from "react";

export const Modal = ({
  region,
  year,
  setShowModal,
  selectedRegion,
  setSelectedRegion,
}) => {
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

  const [isSecondPage, setIsSecondPage] = useState(false);
  const [itemsArray, setItemsArray] = useState([]);

  const transformButtonValue = (value) => {
    if (value === "임신전") return "임신";
    if (value === "결혼전") return "결혼";
    return value;
  };

  const regionOptions = region_names_kor.map((region, idx) => ({
    value: idx,
    label: region,
  }));

  const handleRegionChange = (selectedOption) => {
    setSelectedRegion({
      ...selectedRegion,
      region: selectedOption.value,
    });
  };

  const handleYearChange = (selectedOption) => {
    setSelectedRegion({
      ...selectedRegion,
      year: selectedOption.value,
    });
  };

  const years = [2018, 2019, 2020, 2021, 2022];

  const [totalValue, setTotalValue] = useState(
    datas[year][region_names_kor[region]]["예산"]["total"] * 1000000
  );

  const [yearRegionBudget, setYearRegionBudget] = useState(
    datas[year][region_names_kor[region]]["예산"]
  );

  useEffect(() => {
    const regionKey = region_names_kor[region];
    if (year && regionKey) {
      setTotalValue(datas[year][regionKey]["예산"]["total"] * 1000000);
      setYearRegionBudget(datas[year][regionKey]["예산"]);
      setSelectedButtons(["결혼", "임신", "출산", "육아", "가족"]);
      setItemsArray(
        Object.values(datas[year][regionKey]["items"]).map((item) => {
          // '단계' 속성 값 변경
          item.단계 = transformButtonValue(item.단계);
          return item;
        })
      );
      setStartIndex(0);
    }
  }, [year, region]);

  const { total, ...budgetValues } = yearRegionBudget;

  const maxBudget = Math.max(...Object.values(budgetValues));
  const maxBudgetKey = Object.keys(budgetValues).find(
    (key) => budgetValues[key] === maxBudget
  );

  const yearOptions = years.map((year) => ({
    value: year,
    label: year,
  }));

  const imageKey = `${region_names[region]}${year}`;
  const subKey = `${region_names[region]}sub${year}`;

  const customComponents = {
    IndicatorSeparator: () => null, // 인디케이터 구분선 숨기기
  };

  let radarchartImage;
  let subImage;

  switch (year) {
    case 2018:
      radarchartImage = images2018[imageKey];
      subImage = sub2018[subKey];
      break;
    case 2019:
      radarchartImage = images2019[imageKey];
      subImage = sub2019[subKey];
      break;
    case 2020:
      radarchartImage = images2020[imageKey];
      subImage = sub2020[subKey];
      break;
    case 2021:
      radarchartImage = images2021[imageKey];
      subImage = sub2021[subKey];
      break;
    case 2022:
      radarchartImage = images2022[imageKey];
      subImage = sub2022[subKey];
      break;
    default:
      radarchartImage = null;
      subImage = null;
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

  const [selectedButtons, setSelectedButtons] = useState([]);

  const handleButtonClick = (button) => {
    if (selectedButtons.includes(button)) {
      setSelectedButtons(
        selectedButtons.filter((selectedButton) => selectedButton !== button)
      );
    } else {
      setSelectedButtons([...selectedButtons, button]);
    }
    console.log(itemsArray);
  };

  const [startIndex, setStartIndex] = useState(0);

  const handleMoveForwards = () => {
    if (startIndex + 2 < itemsArray.length) {
      setStartIndex((index) => index + 2);
    } else {
      console.log("end of page");
    }
  };

  const handleMoveBackwards = () => {
    if (startIndex - 2 >= 0) {
      setStartIndex((index) => index - 2);
    } else {
      console.log("cannot move anymore");
    }
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
        {isSecondPage ? (
          <div className="modal-contents page2">
            <div
              className="next text page2-next"
              onClick={() => setIsSecondPage(false)}
            >
              👈 뒤로가기
            </div>
            <div className="totalnumber-container text page2-total">
              {region_names_kor[region]}은(는) {year}년 저출산 정책의 예산으로
              총{" "}
              <span style={{ color: "#54BFCF" }}>
                {totalValue.toLocaleString()}
              </span>
              원을 책정하였습니다.
              <div>
                아래 메뉴를 통해 어떠한 정책이 있었는지 자세히 알아보세요.
              </div>
            </div>
            <div className="buttons-container">
              <div className="button-category">단계</div>
              <button
                className={`filter-button ${
                  selectedButtons.includes("결혼") ? "filtered" : ""
                }`}
                onClick={() => handleButtonClick("결혼")}
              >
                결혼
              </button>
              <button
                className={`filter-button ${
                  selectedButtons.includes("임신") ? "filtered" : ""
                }`}
                onClick={() => handleButtonClick("임신")}
              >
                임신
              </button>
              <button
                className={`filter-button ${
                  selectedButtons.includes("출산") ? "filtered" : ""
                }`}
                onClick={() => handleButtonClick("출산")}
              >
                출산
              </button>
              <button
                className={`filter-button ${
                  selectedButtons.includes("육아") ? "filtered" : ""
                }`}
                onClick={() => handleButtonClick("육아")}
              >
                육아
              </button>
              <button
                className={`filter-button ${
                  selectedButtons.includes("가족") ? "filtered" : ""
                }`}
                onClick={() => handleButtonClick("가족")}
              >
                가족
              </button>
              <div className="selectall-container">
                <div
                  className="selectall"
                  onClick={() => {
                    setSelectedButtons([
                      "결혼",
                      "임신",
                      "출산",
                      "육아",
                      "가족",
                    ]);
                  }}
                >
                  전체 선택
                </div>
                <div
                  className="clearall"
                  onClick={() => {
                    setSelectedButtons([]);
                  }}
                >
                  전체 선택 해제
                </div>
              </div>
            </div>
            <div className="filtered-contents-container">
              <div
                className="move-backwards"
                onClick={handleMoveBackwards}
              ></div>
              <div className="filtered-contents">
                {/* {itemsArray
                  .filter((item) => selectedButtons.includes(item.단계))
                  .map((item, index) => (
                    <div key={index}>
                      <div className="filtered-title">{item.사업명}</div>
                      <table className="filtered-table">
                        <tr className="filtered-table table-title">
                          <th>년도</th>
                          <th>지역</th>
                          <th>단계</th>
                          <th>구분</th>
                          <th>지급방식</th>
                          <th>금액</th>
                        </tr>
                        <tr className="filtered-table table-content">
                          <td>{item.연도}</td>
                          <td>{item.지역}</td>
                          <td>{item.단계}</td>
                          <td>{item.type}</td>
                          <td>{item.지원유형}</td>
                          <td>
                            {item.금액 === 0
                              ? "비예산"
                              : (item.금액 * 1000000).toLocaleString()}
                          </td>
                        </tr>
                      </table>
                    </div>
                  ))} */}
                {itemsArray
                  .filter((item) => selectedButtons.includes(item.단계))
                  .slice(startIndex, startIndex + 2)
                  .map((item, index) => (
                    <div key={index}>
                      <div className="filtered-title">{item.사업명}</div>
                      <table className="filtered-table">
                        <table className="filtered-table">
                          <tr className="filtered-table table-title">
                            <th>년도</th>
                            <th>지역</th>
                            <th>단계</th>
                            <th>구분</th>
                            <th>지급방식</th>
                            <th>금액</th>
                          </tr>
                          <tr className="filtered-table table-content">
                            <td>{item.연도}</td>
                            <td>{item.지역}</td>
                            <td>{item.단계}</td>
                            <td>{item.type}</td>
                            <td>{item.지원유형}</td>
                            <td>
                              {item.금액 === 0
                                ? "비예산"
                                : (item.금액 * 1000000).toLocaleString()}
                            </td>
                          </tr>
                        </table>
                      </table>
                    </div>
                  ))}
              </div>
              <div className="move-forwards" onClick={handleMoveForwards}></div>
            </div>
          </div>
        ) : (
          <div className="modal-contents page1">
            <div className="selection-container">
              <Select
                components={customComponents}
                styles={customSelectStyles}
                options={yearOptions}
                defaultValue={defaultYearOption}
                onChange={handleYearChange}
              ></Select>
              <Select
                components={customComponents}
                styles={customSelectStyles}
                options={regionOptions}
                maxMenuHeight={500}
                defaultValue={defaultRegionOption}
                onChange={handleRegionChange}
              />
            </div>
            <div className="totalnumber-container text">
              {region_names_kor[region]}은(는) {year}년 저출산 정책의 예산으로
              총{" "}
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
              <div className="subchart">
                <div className="sub-xaxis">금액(만 원)</div>
                <img className="subchart-img" src={subImage} alt="subchart" />
                <img
                  className="sub-legend"
                  src={subLegend}
                  alt="sub description"
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
            <div className="next text" onClick={() => setIsSecondPage(true)}>
              👉 정책 보러가기
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
