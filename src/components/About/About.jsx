import React from "react";
import { motion } from "framer-motion";

import { Section } from "../../utils/section";
import { fadeIn } from "../../utils/motion";
import { aboutContent } from "../../utils/data";
import { Title } from "../../utils/title";
import SkillCard from "./SkillCard";

const About = () => (
  <Section id="About" bgClass="bg-content">
    <Title text="關於我 ABOUT ME" additionalClass="text-mainBg" />

    <div className="flex flex-col xl:grid xl:grid-cols-3 xl:gap-28 px-10 xl:px-0">
      <div className="xl:col-span-2">
        <motion.div
          variants={fadeIn("left", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className="flex-1"
        >
          <div className="text-lg md:text-2xl text-justify text-mainBg tracking-[2px]">
            {aboutContent.map((para, index) => (
              <React.Fragment key={index}>
                <div className="indent-11 md:indent-14 leading-relaxed md:leading-loose">
                  {para}
                </div>
                <br />
                {index === 3 && <hr className="mb-2" />}
              </React.Fragment>
            ))}
          </div>
        </motion.div>
      </div>

      <div>
        <motion.div
          variants={fadeIn("right", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className="flex-1"
        >
          <h2 className="text-2xl mt-2 mb-4 text-mainBg">► 我具備的技術能力</h2>
          <SkillCard />
        </motion.div>
      </div>
    </div>
  </Section>
);

export default About;
