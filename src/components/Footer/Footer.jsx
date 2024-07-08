import { Link } from "react-scroll";
import { AiOutlineGithub, AiOutlineLinkedin } from "react-icons/ai";
import { motion } from "framer-motion";

import {
  menuLinks,
  githubLink,
  linkedinLink,
  portfolioLink,
} from "../../utils/data";

const Footer = () => (
  <div className="max-w-[1300px] px-10 mx-auto pt-8 text-sm md:text-lg">
    <div className="flex justify-between items-center">
      <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4">
        <motion.a
          className="secondBtn"
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
        <div className="flex flex-row gap-4 text-primary text-4xl md:text-5xl">
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
      </div>

      <ul className="flex flex-col md:flex-row items-end md:items-center font-semibold text-xl md:text-2xl text-center text-primary cursor-pointer">
        <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
          <Link
            to={menuLinks.ABOUT.to}
            smooth={true}
            offset={50}
            duration={500}
          >
            {menuLinks.ABOUT.name}
          </Link>
        </motion.li>
        <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
          <Link to={menuLinks.WORK.to} smooth={true} offset={50} duration={500}>
            {menuLinks.WORK.name}
          </Link>
        </motion.li>
        <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
          <Link
            to={menuLinks.PROJECTS.to}
            smooth={true}
            offset={50}
            duration={500}
          >
            {menuLinks.PROJECTS.name}
          </Link>
        </motion.li>
      </ul>
    </div>
    <p className="text-content text-center my-5">
      Copyright © 2024 kEN.GJ All Rights Reserved.
    </p>
  </div>
);

export default Footer;
