import { h } from 'preact';

import { projects } from '../../data';

import ProjectItem from './ProjectItem';

const Projects = ({
    title,
  }) => (
    <div className="columns">
      {projects.map(project => (
        <ProjectItem
          title={project.title}
          subtitle={project.subtitle}
          url={project.url}
          description={project.description}
        />
      ))}
    </div>
);

export default Projects;
