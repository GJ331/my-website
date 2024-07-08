import { motion } from "framer-motion";

import { Section } from "../../utils/section";
import { projectExp, iWowWebsite } from "../../utils/data";
import { Title } from "../../utils/title";

const ProjectsExp = () => (
  <Section id="ProjectsExp" bgClass="bg-content">
    <Title text="專案介紹 PROJECT" additionalClass="text-mainBg" />

    <div className="grid xl:grid-cols-3 gap-4 xl:gap-8 px-10 xl:px-0">
      {projectExp.map((pro, index) => (
        <div key={index} className="flex flex-col">
          <div className="flex justify-between">
            <h1 className="text-2xl md:text-3xl font-bold text-mainBg mb-1 md:mb-3 tracking-wide">
              {pro.name}
            </h1>
            {pro.name.includes("iWow愛挖寶") && (
              <motion.a
                whileHover={{
                  backgroundColor: "#393C5A",
                  borderColor: "#F8F7F1",
                  scale: 1.1,
                  color: "#F8F7F1",
                }}
                whileTap={{ scale: 0.95 }}
                target="_blank"
                href={iWowWebsite}
                className="proBtn"
              >
                網站連結
              </motion.a>
            )}
          </div>
          <h1 className="text-xl md:text-2xl font-bold text-mainBg mb-2 md:mb-5 indent-6 md:indent-10 tracking-wide">
            {pro.subName}
          </h1>
          <motion.div
            whileHover={{ backgroundColor: "#F8F7F1" }}
            className="border border-gray-200 p-6 rounded-2xl bg-white shadow-lg text-xl h-[100%] leading-relaxed mb-10 md:mb-0"
          >
            <div className="flex flex-col md:flex-row gap-1 md:gap-5 mb-5 items-center md:items-start">
              <div className="font-semibold text-gray-700">專案內容</div>
              <div className="text-lg md:text-xl font-normal flex-1 whitespace-pre-line text-content">
                <ul className="list-decimal ml-5">
                  {pro.content.split("\n").map((line, idx) => (
                    <li key={idx} className="p-0">
                      {line.trim()}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <hr className="my-3 md:my-5" />

            <div className="flex flex-col md:flex-row gap-1 md:gap-5 mb-5 items-center md:items-start">
              <div className="font-semibold text-gray-700">使用工具</div>
              <div className="text-lg md:text-xl font-normal flex-1 text-content">
                {pro.tools}
              </div>
            </div>

            <hr className="my-3 md:my-5" />

            <div className="flex flex-col md:flex-row gap-1 md:gap-5 items-center md:items-start">
              <div className="font-semibold text-gray-700">開發難題</div>
              <div className="text-lg md:text-xl font-normal flex-1 text-content text-justify">
                {pro.issues.map((issue, idx) => (
                  <div key={idx} className="mb-1">
                      <div className="flex">
                        <strong className="text-center border-2 rounded-xl py-1 px-2 mt-2 md:my-1 md:mx-2 mr-0 md:mr-2 h-[50%] text-red-600">
                          Q
                        </strong>
                        <p className="leading-relaxed p-2 md:p-0">
                          {issue.question}
                        </p>
                      </div>

                    <div className="flex">
                      <strong className="text-center border-2 rounded-xl py-1 px-2 mt-2 md:my-1 md:mx-2 mr-0 md:mr-2 h-[50%] text-secondary">
                        A
                      </strong>
                      <p className="leading-relaxed p-2 md:p-0">
                        {issue.answer}
                      </p>
                    </div>
                    <br />
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      ))}
    </div>
  </Section>
);

export default ProjectsExp;
