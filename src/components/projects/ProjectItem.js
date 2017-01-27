import { h } from 'preact';

const ProjectItem = ({
    title,
    subtitle,
    url,
    description,
  }) => (
    <div className="column">
      <div className="box project-box">
        <h3 className="title">{title}</h3>
        <p className="subtitle"><i className="fa fa-code" aria-hidden="true" /> {subtitle}</p>
        <p>{description}</p>
        <p className="control">
          <a className={`button ${!url && 'is-disabled'}`} title={title} href={url} target="_blank">
            <span className="icon">
              <i className="fa fa-github" />
            </span>
            <span>GitHub</span>
          </a>
        </p>
      </div>
    </div>
);

export default ProjectItem;
