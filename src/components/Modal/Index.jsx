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

  const imageKey = `${region_names[region]}${year}`;

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
          <div className="selection-container"></div>
          <div className="totalnumber-container text">
            {region_names_kor[region]}은(는) {year}년 저출산 정책의 예산으로 총
            원을 지출하였습니다.
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
            <div className="text">
              그 중 가장 많은 예산을 지출한 단계는 ''로, 총 원을 지출하였습니다.
            </div>
            <div className="text">
              어떠한 정책들이 있었는지 자세히 알아볼까요?
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
