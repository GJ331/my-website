import { motion } from "framer-motion";
import { DiCss3, DiHtml5, DiJavascript1, DiAngularSimple, DiGit, DiReact, DiSass, DiBootstrap } from "react-icons/di";
import { BiLogoTypescript } from "react-icons/bi";

import { fadeIn } from "../../utils/motion";

// svg
import Figma from "../../assets/icons/figma.svg";
import Tailwind from "../../assets/icons/tailwind.svg";
import Vite from "../../assets/icons/vite.svg";
import Webpack from "../../assets/icons/webpack.svg";

const SkillBar = () => (
  <motion.div
    variants={fadeIn("up", 0.5)}
    initial="hidden"
    whileInView={"show"}
    viewport={{ once: false, amount: 0.7 }}
    className="flex flex-col xl:flex-row justify-center items-center"
  >
    <p className="text-content text-2xl xl:text-3xl m-2">我的技能</p>
    <div className="flex flex-wrap justify-center items-center gap-1 md:gap-2">
      <DiHtml5 className="skillImg text-orange-600" />
      <DiCss3 className="skillImg text-blue-600" />
      <DiJavascript1 className="skillImg text-yellow-500" />
      <DiBootstrap className="skillImg text-purple-600" />
      <BiLogoTypescript className="skillImg text-blue-600" />
      <DiAngularSimple className="skillImg text-red-600" />
      <DiSass className="skillImg text-pink-500" />
      <DiReact className="skillImg text-sky-500" />
      <img src={Tailwind} className="skillImg" alt="Tailwind" />
      <DiGit className="skillImg text-red-600" />
      <img src={Webpack} className="skillImg" alt="Webpack" />
      <img src={Figma} className="skillImg" alt="Figma" />
      <img src={Vite} className="skillImg" alt="Vite" />
    </div>
  </motion.div>
);

export default SkillBar;
