import { BiLogoTypescript } from "react-icons/bi";
import { DiHtml5, DiCss3, DiSass, DiBootstrap, DiJavascript1, DiReact, DiAngularSimple, DiGit } from "react-icons/di";

// svg
import Tailwind from "../assets/icons/tailwind.svg";
import Webpack from "../assets/icons/webpack.svg";
import Figma from "../assets/icons/figma.svg";
import Vite from "../assets/icons/vite.svg";

// img
import misysLogo from "../assets/misys.png";
import systexLogo from "../assets/systex.png";

// Menu
export const menuLinks = {
  HOME: {
    to: "Home",
    name: "KEN.GJ",
  },
  ABOUT: {
    to: "About",
    name: "關於我",
  },
  WORK: {
    to: "Work",
    name: "工作經驗",
  },
  PROJECTS: {
    to: "ProjectsExp",
    name: "專案介紹",
  },
};

// About
export const aboutSkills = [
  {
    category: "前端 Front-end",
    technologies: [
      {
        name: "HTML",
        icon: <DiHtml5 className="skillCardImg text-orange-600" />,
      },
      { name: "CSS", icon: <DiCss3 className="skillCardImg text-blue-600" /> },
      {
        name: "JavaScript",
        icon: <DiJavascript1 className="skillCardImg text-yellow-500" />,
      },
      {
        name: "Bootstrap",
        icon: <DiBootstrap className="skillCardImg text-purple-600" />,
      },
      {
        name: "TypeScript",
        icon: <BiLogoTypescript className="skillCardImg text-blue-600" />,
      },
      {
        name: "Angular",
        icon: <DiAngularSimple className="skillCardImg text-red-600" />,
      },
      { name: "Scss", icon: <DiSass className="skillCardImg text-pink-500" /> },
      {
        name: "React",
        icon: <DiReact className="skillCardImg text-sky-500" />,
      },
      {
        name: "Tailwind",
        icon: <img src={Tailwind} className="skillCardImg" alt="Tailwind" />,
      },
    ],
  },
  {
    category: "其他 Others",
    technologies: [
      {
        name: "Git",
        icon: <DiGit className="skillCardImg text-red-600" />,
      },
      {
        name: "Webpack",
        icon: <img src={Webpack} className="skillCardImg" alt="Webpack" />,
      },
      {
        name: "Figma",
        icon: <img src={Figma} className="skillCardImg" alt="Figma" />,
      },
      {
        name: "Vite",
        icon: <img src={Vite} className="skillCardImg" alt="Vite" />,
      },
    ],
  },
];

export const aboutContent = [
  "大學實習至畢業後，首先在行銷企劃的團隊負責股市APP的功能規劃與畫面設計，過程中有機會接觸到網頁設計，發現原來可以透過程式碼把設計稿變成實際畫面呈現，至此對前端產生興趣，並決定挑戰全新領域，經過自我學習、公司培訓，成功轉職前端程式設計師。",

  "透過參與多項不同類型的專案，迅速累積前端開發的實務經驗，而目前所屬團隊主要運用 Angular + TypeScript 進行項目開發。",

  "初期開發不免遇到技術難題跟邏輯打結的困境，自我要求並多方嘗試各種解法，也會跟資深PG討論請教最佳解，以此不斷精進自身實力。",

  "隨著經驗提升，我有擔任專案的前端主責人，負責更多開發團隊間的溝通與對話，培養自身的組織能力；工作之餘，我也增加第二框架(React)技術與基礎後端語言學習，除了擴展技能，也能更熟悉前、後端串接的細節，幫助自己在實務中遇到各項議題時，可以得心應手。",

  "我期待能為您的團隊帶來價值，並共同打造令人驚艷的網頁體驗！",
];

// Work
export const workExp = [
  {
    photo: misysLogo,
    place: "精誠微雲科技股份有限公司",
    placeColor: "text-misys",
    tenure: "2023 - 迄今",
    role: "前端程式設計師",
    roleColor: "text-circleGreen",
    projects: [
      {
        title: "► LuzMi 微服務框架管理 - 前/後平台 (已上線)",
        detail: `
          開發初期 (前端PG)
          a. 參與功能流程的規劃，並產出前端UI設計彩稿。
          b. 與其他PG協作，共同開發前/後台畫面及功能。
          c. 開發團隊採用Scrum敏捷式開發，以Jira作為專案管理。
    
          開發中後期 (前端負責人)
          a. 與SA討論新功能開發可行性。
          b. 與資深PG協作，導入 Jenkins 自動化部屬專案。
          c. 因應大量且重複的功能，重構並整合組件，建立共用底層的模塊機制。
        `,
      },
      {
        title: "► 外籍移工小額匯兌 - 後台管理系統 (已上線)",
        detail: `
          開發初期 (前端PG)
          a. 與資深PG協作，開發後台畫面功能。
    
          開發中後期 (前端駐點負責人)
          a. 與PM會同客戶共同討論功能異動問題。
          b. 中期參與新功能規劃，並提出前端解決辦法。
          c. 後期導入SonarQube進行程式碼檢測，並使用Jenkins自動化部屬。
          d. 優化底層共用元件，減少重複性程式碼。
        `,
      },
    ],
  },
  {
    photo: systexLogo,
    place: "精誠資訊股份有限公司",
    placeColor: "text-primary",
    tenure: "2022/2 - 2023/1",
    role: "行銷企劃",
    roleColor: "text-circleRed",
    projects: [
      {
        title: "► iWow愛挖寶 - Landing Page (已上線)",
        detail: `
          a. 與企劃、UI設計師討論畫面呈現。
          b. 負責網頁切版、RWD。
          c. 因應以往使用版本繁雜，針對不必要的程式碼進行重新建構。
        `,
      },
    ],
  },
];

// Project
export const projectExp = [
  {
    name: "▼ LuzMi 微服務框架管理",
    subName: "- 前 / 後平台",
    content: ` 用於建構與管理微服務框架的平台。
      前台展示框架資訊及提供檔案下載，還有程式碼生成預覽功能。
      後台作為系統管理，以及各項檔案上傳的功能。
    `,
    tools:
      "Angular 12、PrimeNg、Scss、TypeScript、Rxjs、Quill.js、Ngx-highlightjs",
    issues: [
      {
        question: "前後端團隊首次合作，初期討論雜亂不清楚，耗費大量時間溝通",
        answer:
          "在Jira專案管理基礎上，有提出-制式命名、問題詳述等方法，協助建立整體開發規範及SOP。",
      },
      {
        question: "初期兩個PG各自開發，缺乏共用組件的規劃",
        answer:
          "中期擔任專案主責後，與資深PG討論，開始調整專案結構，整合重複內容，建立底層共用組件。",
      },
    ],
  },
  {
    name: "▼ 外籍移工小額匯兌",
    subName: "- 後台管理系統",
    content: ` 用於管理移工匯兌APP的後台系統。
      包含人員設定、查詢、審核、圖表顯示、內容上傳下載等功能。
    `,
    tools:
      "Angular 12、PrimeNg、Bootstrap、Scss、TypeScript、Rxjs、Pizzip、Chart.js、Html2canvas、jsPDF、File-saver、i18n",
    issues: [
      {
        question: "因應客戶需求，需要畫面表格資料轉特定格式PDF下載需求",
        answer:
          "應用html2canvas+jsPDF完成，並且為團隊建立基礎共用組件，為各專案都可以使用。",
      },
      {
        question: "擔任專案駐點前端負責人，需與客戶討論畫面、功能呈現",
        answer: "針對客戶需求，與SA討論並提出規劃內容。",
      },
    ],
  },
  {
    name: "▼ iWow愛挖寶",
    subName: "- Landing Page",
    content: ` 用於展示「iWow 愛挖寶」APP新功能。`,
    tools: "Html+CSS 切版、Bootstrap、Swiper.js、Aos.js、jQuery、gtag.js",
    issues: [
      {
        question: "首次把自學前端內容應用到實務，在處理RWD具有挑戰性",
        answer:
          "多方嘗試不同寫法、測試，以及與UI設計師討論，讓各版面的顯示如預期。",
      },
      {
        question:
          "專案雖是html+css+js基本結構，但歷經不同時期迭代，內容已非常雜亂",
        answer:
          "重新整理專案原有架構，分類各區塊資料夾，並把舊有不需要的程式碼移除。",
      },
    ],
  },
];

// Link
export const githubLink = "https://github.com/GJ331";
export const linkedinLink =
  "https://www.linkedin.com/in/jhih-jhen-lin-5a2b162b8?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app";
export const iWowWebsite =
  "https://pelements.money-link.com.tw/iwow/iwowUS/iwow_index.html";
