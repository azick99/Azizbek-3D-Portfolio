import { motion } from "framer-motion";
import { useState } from "react";
import { github, website } from "../assets";
import type { Project } from "../constants";
import { usePortfolioProjects } from "../hooks/usePortfolioProjects";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";
import Tab from "./tab/Tab";

type ProjectCardProps = {
  index: number;
  project: Project;
};

const ProjectCard = ({ index, project }: ProjectCardProps) => {
  const [expandedDesc, setExpandedDesc] = useState(false);
  const { name, description, image, source_code_link, tags, url } = project;
  return (
    <motion.div
      className="h-full"
      variants={fadeIn("up", "spring", index * 0.5, 0.75)}
      initial="hidden"
      animate="show"
    >
      <article
        className={`relative mx-auto flex w-full max-w-[350px] flex-col justify-between rounded-2xl bg-tertiary p-5 sm:w-[350px] md:mx-0 ${expandedDesc ? "h-auto min-h-[36rem]" : "h-[36rem]"}`}
      >
        <div className="relative h-[230px] w-full shrink-0">
          <img
            src={image}
            alt={name}
            className="h-full w-full rounded-2xl object-cover"
          />
          <div className="absolute right-3 top-3 flex justify-end gap-2">
            <button
              type="button"
              onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient mr-2 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full"
              aria-label="Open GitHub repository"
            >
              <img
                src={github}
                alt=""
                className="h-1/2 w-1/2 object-contain"
              />
            </button>
            <button
              type="button"
              onClick={() => window.open(url, "_blank")}
              className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-slate-300"
              aria-label="Open live site"
            >
              <img
                src={website}
                alt=""
                className="h-1/2 w-1/2 object-contain"
              />
            </button>
          </div>
        </div>
        <div className="mt-5 flex-1">
          <h3 className="text-[24px] font-bold text-white">{name}</h3>
          <p
            className={`mt-2 text-[14px] text-secondary transition-all ${expandedDesc ? "" : "line-clamp-5"}`}
          >
            {description}
          </p>
          {description.length > 150 && (
            <button
              type="button"
              onClick={() => setExpandedDesc(!expandedDesc)}
              className="mt-2 text-[12px] text-blue-400 hover:text-blue-300 transition"
            >
              {expandedDesc ? "Show less" : "... Show more"}
            </button>
          )}
        </div>
        <div className="mt-6 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p
              key={tag.name}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}&nbsp;&nbsp;
            </p>
          ))}
        </div>
      </article>
    </motion.div>
  );
};

const TAB_NEW = 12;
const TAB_MAJOR = 3;
const TAB_STYLE = 6;
const TAB_SMALL = 9;

const projectsForTab = (
  tab: number,
  list: Project[],
  expanded: boolean = false,
): Project[] => {
  let typeFilter: string;
  switch (tab) {
    case TAB_MAJOR:
      typeFilter = "Major Projects";
      break;
    case TAB_STYLE:
      typeFilter = "Style Projects";
      break;
    case TAB_SMALL:
      typeFilter = "Small and Sweet Projects";
      break;
    case TAB_NEW:
      typeFilter = "New Projects";
      break;
    default:
      return list;
  }
  const filteredProjects = list.filter(
    (project) => project.type === typeFilter,
  );
  return expanded ? filteredProjects : filteredProjects.slice(0, 3);
};

const getTypeForTab = (tab: number): string | null => {
  switch (tab) {
    case TAB_MAJOR:
      return "Major Projects";
    case TAB_STYLE:
      return "Style Projects";
    case TAB_SMALL:
      return "Small and Sweet Projects";
    case TAB_NEW:
      return "New Projects";
    default:
      return null;
  }
};

const Works = () => {
  const [indexed, setIndex] = useState(TAB_NEW);
  const [expanded, setExpanded] = useState(false);
  const { projects, loading, error } = usePortfolioProjects();

  const handleTabClick = (tabNum: number) => {
    if (indexed !== tabNum) {
      setIndex(tabNum);
      setExpanded(false);
    }
  };

  return (
    <>
      <motion.div
        variants={textVariant()}
        className="flex justify-center text-center"
      >
        <div className="w-[30%] min-w-[200px]">
          <p
            className={`${styles.sectionSubText} border-t-[1px] border-[#aaa6c3] border-solid pt-7  `}
          >
            My work
          </p>
          <h2 className={styles.sectionHeadText}>Projects</h2>
        </div>
      </motion.div>
      <div className="flex w-full justify-center ">
        <motion.p
          variants={fadeIn("", "spring", 0.1, 1)}
          className="mt-3 max-w-3xl text-center text-[17px] leading-[30px] text-secondary"
        >
          Description of Projects is written down with tools I used. Most
          projects are done recently, around 3 months period with new tools. I
          don&apos;t want to show my old projects due to most of them old tools
          and after rewview I didn&apos;t like it.
        </motion.p>
      </div>
      {loading ? (
        <p className="mt-4 text-center text-secondary text-sm">
          Loading projects…
        </p>
      ) : null}
      {error ? (
        <p className="mt-2 text-center text-sm text-orange-300">{error}</p>
      ) : null}
      <ul className="list-reset mt-10 flex flex-wrap justify-center gap-5">
        <Tab
          text="New Projects"
          num={TAB_NEW}
          setIndex={handleTabClick}
          index={indexed}
        />
        <Tab
          text="Major Projects"
          num={TAB_MAJOR}
          setIndex={handleTabClick}
          index={indexed}
        />
        <Tab
          text="Style Projects"
          num={TAB_STYLE}
          setIndex={handleTabClick}
          index={indexed}
        />
        <Tab
          text="Small and Sweet"
          num={TAB_SMALL}
          setIndex={handleTabClick}
          index={indexed}
        />
      </ul>

      <div
        className="mt-20 flex flex-wrap gap-8"
        key={indexed}
      >
        {projectsForTab(indexed, projects, expanded).map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            index={index}
          />
        ))}
      </div>

      {(() => {
        const activeType = getTypeForTab(indexed);
        const activeProjects = activeType
          ? projects.filter((project) => project.type === activeType)
          : [];

        if (activeProjects.length <= 3) return null;

        return (
          <div className="mt-8 flex justify-center">
            <button
              type="button"
              onClick={() => setExpanded((prev) => !prev)}
              className="w-full max-w-[520px] rounded-2xl bg-blue-600 px-6 py-4 text-center text-base font-semibold text-white shadow-lg transition hover:bg-blue-500"
            >
              {expanded ? "Show less" : "Show more"}
            </button>
          </div>
        );
      })()}
    </>
  );
};

export default SectionWrapper(Works, "projects");
