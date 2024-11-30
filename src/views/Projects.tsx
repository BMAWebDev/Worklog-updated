// components
import Flex from "@components/Flex";
import { Heading1 } from "@components/Text";
import AddIcon from "@assets/add-icon.svg";
import Project from "@components/Project";

const projects: any[] = [{}, {}, {}, {}, {}, {}];

const Projects = () => (
  <Flex direction="column" gap={50}>
    <Flex justify="space-between" align="center" isFullWidth>
      <Heading1>Projects</Heading1>

      <img src={AddIcon} alt="add icon" style={{ cursor: "pointer" }} />
    </Flex>

    <Flex gap={25} isFullWidth>
      {projects.map((_, index) => (
        <Project key={index} title={`Project #${index + 1}`} roles={["Client", "Contractor"]} />
      ))}
    </Flex>
  </Flex>
);

export default Projects;
