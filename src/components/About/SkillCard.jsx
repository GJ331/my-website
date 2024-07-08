import { motion } from "framer-motion";

import { aboutSkills } from "../../utils/data";

const SkillCard = () => (
  <div className="flex flex-col">
    <div className="flex flex-col gap-5">
      {aboutSkills.map((el, index) => (
        <motion.div
          key={index}
          whileHover={{ backgroundColor: "#F8F7F1" }}
          className="border border-gray-200 p-6 rounded-2xl bg-white shadow-lg w-full"
        >
          <h3 className="text-xl md:text-2xl text-content font-bold mb-4">
            {el.category}
          </h3>
          <div className="grid grid-cols-2 gap-2">
            {el.technologies.map((tech, idx) => (
              <div key={idx} className="flex items-center space-x-2">
                <span className="">{tech.icon}</span>
                <span className="text-md md:text-xl text-content md:tracking-widest">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  </div>
);

export default SkillCard;
