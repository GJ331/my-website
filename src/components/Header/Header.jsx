import React from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

import { menuVariants } from "../../utils/motion";
import { menuLinks } from "../../utils/data";
import useHeaderShadow from "../../hooks/useHeaderShadow";

const Header = () => {
  const [nav, setNav] = React.useState(false);

  const toggleNav = () => setNav(!nav);

  const closeNav = () => setNav(false);

  const headerShadow = useHeaderShadow();

  return (
    <div
      className="fixed h-[60px] md:h-[80px] z-[500] w-screen bg-mainBg drop-shadow-xl"
      style={{ boxShadow: headerShadow }}
    >
      <div className="max-w-[1300px] mx-auto flex justify-between items-center px-12 text-primary text-2xl font-medium w-full h-full">
        <motion.div
          className="cursor-pointer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link to={menuLinks.HOME.to} smooth={true} offset={50} duration={500}>
            {menuLinks.HOME.name}
          </Link>
        </motion.div>

        <ul className="hidden md:flex gap-12 z-10 cursor-pointer">
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
            <Link
              to={menuLinks.WORK.to}
              smooth={true}
              offset={50}
              duration={500}
            >
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

        <div onClick={toggleNav} className="md:hidden z-50 text-primary">
          {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
        </div>

        <motion.div
          initial={false}
          animate={nav ? "open" : "closed"}
          variants={menuVariants}
          className="fixed top-0 right-0 w-full min-h-screen bg-gray-300 z-40"
        >
          <ul className="font-semibold md:text-3xl space-y-2 md:space-y-8 mt-24 text-center cursor-pointer">
            <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              <Link
                to={menuLinks.ABOUT.to}
                smooth={true}
                onClick={closeNav}
                offset={50}
                duration={500}
              >
                {menuLinks.ABOUT.name}
              </Link>
            </motion.li>
            <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              <Link
                to={menuLinks.WORK.to}
                smooth={true}
                onClick={closeNav}
                offset={50}
                duration={500}
              >
                {menuLinks.WORK.name}
              </Link>
            </motion.li>
            <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              <Link
                to={menuLinks.PROJECTS.to}
                smooth={true}
                onClick={closeNav}
                offset={50}
                duration={500}
              >
                {menuLinks.PROJECTS.name}
              </Link>
            </motion.li>
          </ul>
        </motion.div>
      </div>
    </div>
  );
};

export default Header;
