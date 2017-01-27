import { h } from 'preact';

// Load data
import { skills, interests } from '../../data';

const Skills = ({
    title,
  }) => (
    <div>
      <div className="box skills-box">
        <div className="columns">
          <div className="column">
            <h3 className="title">😃 Proficient:</h3>
            {skills.proficient.map(skill => (
              <p>{skill.language}
              <progress class="progress is-danger is-medium" value={skill.level} max="100">{skill.level}%</progress></p>
            ))}
          </div>
          <div className="column">
            <h3 className="title">🙂 Advanced:</h3>
            {skills.advanced.map(skill => (
              <p>{skill.language}
              <progress class="progress is-info is-medium" value={skill.level} max="100">{skill.level}%</progress></p>
            ))}
          </div>
          <div className="column">
            <h3 className="title">🤔 Basic:</h3>
            {skills.basic.map(skill => (
              <p>{skill.language}
              <progress class="progress is-success is-medium" value={skill.level} max="100">{skill.level}%</progress></p>
            ))}
          </div>
        </div>

        <h3 className="title">Interests:</h3>
        {interests.map(interest => (
          <span><span className="tag is-warning is-medium">{interest}</span> </span>
        ))}
      </div>
    </div>
);

export default Skills;
