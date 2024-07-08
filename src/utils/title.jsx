import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { zoomIn } from "./motion";

export const Title = ({ text, additionalClass }) => (
  <motion.h2
    variants={zoomIn(0.3, 1.5)}
    initial="hidden"
    whileInView={"show"}
    viewport={{ once: false, amount: 0.3 }}
    className={`${additionalClass} text-3xl md:text-5xl font-bold tracking-[2px] text-center mt-10 mb-6 md:mb-12`}
  >
    {text}
  </motion.h2>
);

Title.propTypes = {
  text: PropTypes.string.isRequired,
  additionalClass: PropTypes.string,
};
