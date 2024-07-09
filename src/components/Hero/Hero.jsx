import { TypeAnimation } from "react-type-animation";
import { AiOutlineGithub, AiOutlineLinkedin } from "react-icons/ai";
import { motion } from "framer-motion";

import { githubLink, linkedinLink, portfolioLink } from "../../utils/data";
import { fadeIn } from "../../utils/motion";
import profilePhoto from "../../assets/profile.png";
import SkillBar from "./SkillBar";

const Hero = () => (
  <section
    id="Home"
    className="w-full h-screen bg-mainBg flex flex-col justify-between mb-20"
  >
    <div className="grid md:grid-cols-2 max-w-[1240px] m-auto md:h-screen px-7 xl:px-0">
      <div className="flex flex-col justify-center md:items-start w-full px-2 pt-20 md:pt-8">
        <TypeAnimation
          sequence={["Frontend Developer", 1000, "WEB DESIGNER", 1000]}
          speed={50}
          repeat={Infinity}
          className="text-2xl md:text-4xl text-gray-500 font-semibold mb-3 md:mb-6"
        />

        <motion.h1
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="text-4xl md:text-7xl text-primary font-bold mb-3 md:mb-6 tracking-wide"
        >
          HELLO! 我是 <br />
          <span>林之蓁 KEN</span>
        </motion.h1>

        <motion.div
          variants={fadeIn("up", 0.5)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="text-base md:text-2xl text-content font-semibold mb-3 md:mb-6 leading-tight max-w-[300px] md:max-w-[500px] text-justify"
        >
          目前致力於透過程式碼打造良好網頁體驗的前端工程師，主要以 Angular + TS
          開發，已經在前端領域累積2年的經驗
        </motion.div>

        <motion.div
          variants={fadeIn("up", 0.7)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="flex flex-row gap-2 md:gap-6 items-center mt-4"
        >
          <motion.a
            className="mainBtn"
            whileHover={{
              backgroundColor: "#0D2F3F",
              scale: 1.1,
              color: "#F8F7F1",
            }}
            whileTap={{ scale: 0.95 }}
            target="_blank"
            href={portfolioLink}
          >
            我的履歷
          </motion.a>

          <div className="flex flex-row gap-2 md:gap-6 text-primary text-4xl md:text-6xl">
            <motion.a
              target="_blank"
              href={githubLink}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <AiOutlineGithub />
            </motion.a>
            <motion.a
              target="_blank"
              href={linkedinLink}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <AiOutlineLinkedin />
            </motion.a>
          </div>
        </motion.div>
      </div>

      <div className="flex justify-center items-center">
        <motion.img
          src={profilePhoto}
          variants={fadeIn("down", 0.5)}
          initial="hidden"
          whileInView={"show"}
          className="w-[250px] md:w-[450px] mb-5 md:mb-0"
        />
      </div>

      <div className="w-[90%] hidden md:w-full absolute md:flex md:flex-col py-2 xl:py-8 bottom-[5%] left-1/2 transform -translate-x-1/2 px-10 xl:px-0">
        <SkillBar />
      </div>
    </div>
  </section>
);

export default Hero;
