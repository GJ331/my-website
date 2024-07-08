import { motion } from "framer-motion";

import { Section } from "../../utils/section";
import { fadeIn, zoomIn, fadeInForLine } from "../../utils/motion";
import { workExp } from "../../utils/data";
import { Title } from "../../utils/title";

const Work = () => (
  <Section id="Work">
    <Title text="工作經驗 EXPERIENCE" additionalClass="text-primary" />

    <div className="w-full mx-auto flex justify-center items-center px-10 xl:px-0">
      <div className="w-full flex flex-col gap-6 relative justify-center items-center">
        {workExp.map((exp, i) => (
          <div
            key={i}
            className="w-full flex flex-col md:flex-row md:justify-between leading-[40px] items-start"
          >
            <motion.div
              variants={fadeIn("left", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.3 }}
              className="flex-1"
            >
              <img
                src={exp.photo}
                className="w-[80%] md:w-[30%] mb-5"
                alt={exp.place}
              />
              <h1
                className={`text-2xl md:text-4xl font-bold ${exp.placeColor}`}
              >
                {exp.place}
              </h1>
              <p className="text-lg md:text-xl text-gray-600">{exp.tenure}</p>
            </motion.div>

            <motion.div
              variants={fadeIn("right", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.3 }}
              className="md:ml-8 md:flex-1"
            >
              <h1
                className={`text-2xl md:text-4xl font-semibold ${exp.roleColor}`}
              >
                {exp.role}
              </h1>
              {exp.projects.map((project, j) => (
                <div key={`${i}-${j}`} className="mt-4">
                  <h3 className="text-xl md:text-2xl text-content font-semibold mb-2">
                    {project.title}
                  </h3>
                  <div>
                    {project.detail
                      .split("\n")
                      .filter((line) => line.trim())
                      .map((line, k) => (
                        <p
                          className="text-lg md:text-xl text-content md:tracking-wide leading-relaxed mb-3"
                          key={`${i}-${j}-${k}`}
                        >
                          {line.trim()}
                          <br />
                        </p>
                      ))}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        ))}

        <motion.div
          variants={zoomIn(1, 1)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className="absolute hidden h-full md:flex flex-col gap-6 left-[45%]"
        >
          <motion.div
            variants={fadeInForLine("down", "tween", 2, 1.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="absolute h-[103%] w-2 left-[47%] z-1 rounded-[5px] bg-dashedLine bg-repeat-y bg-dashedSize"
          ></motion.div>

          <div className="flex-1 mt-4">
            <div className="rounded-full w-5 h-5 bg-circleGreen" />
            <div className="mt-[80rem] sm:mt-[45rem] md:mt-[50rem] lg:mt-[46rem]">
              <div className="rounded-full w-5 h-5 bg-circleRed" />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </Section>
);

export default Work;
