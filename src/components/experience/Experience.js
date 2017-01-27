import { h } from 'preact';

// Load data
import { experiences } from '../../data';

import ExperienceItem from './ExperienceItem';

const Experience = ({
    title,
  }) => (
    <div className="box experience-box">
      {experiences.map(experience => (
        <ExperienceItem
          company={experience.company}
          title={experience.title}
          location={experience.location}
          date={experience.date}
          description={experience.description}
          img={experience.img}
        />
      ))}
    </div>
);

export default Experience;
