import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import playIcon_gif from "../assets/play.gif";
import playBtn from "../assets/play-button.png";
import playIcon from "../assets/play.png";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  play_link,
}) => {
  const noAnimation = {
    hidden: { opacity: 1 },
    visible: { opacity: 1 },
  };
  const isChrome = () => {
    const userAgent = navigator.userAgent;
    return /Chrome/.test(userAgent) && !/Edge|OPR/.test(userAgent);
  };
  return (
    <motion.div
      variants={
        isChrome() ? noAnimation : fadeIn("up", "spring", index * 0.5, 0.75)
      }
    >
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
      >
        <div className="relative w-full h-[230px]">
          <img
            src={image}
            alt="project_image"
            className="w-full h-full object-cover rounded-2xl"
          />

          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                src={github}
                alt="source code"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>
          {/* <div className="absolute inset-0 flex justify-start m-3 card-img_hover">
            <div
              onClick={() => window.open(play_link, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <a
                href={source_code_link}
                target="_blank"
                class="absolute bottom-0 left-0 m-2"
              >
                <img src={playIcon} alt="Icon" class="w-6 h-6" />
              </a>
            </div>
          </div> */}
          <div className="absolute bottom-0 left-0 m-2">
            <a
              href={play_link}
              target="_blank"
              className="flex items-center justify-center w-10 h-10 black-gradient rounded-full"
            >
              <img src={playIcon} alt="Icon" class="w-6 h-6" />
            </a>
          </div>
        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>プロジェクト</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          以下のプロジェクトは、私のスキルと経験を実際の作業例を通じて紹介しています。
          各プロジェクトには、コードリポジトリおよびライブデモへのリンクとともに簡単な説明が付いています。
          これらのプロジェクトは、複雑な問題を解決し、さまざまな技術を扱い、プロジェクトを効果的に管理する私の能力を反映しています。
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");
