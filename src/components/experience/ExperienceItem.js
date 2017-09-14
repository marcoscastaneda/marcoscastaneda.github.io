import { h } from 'preact';

const ProjectItem = ({
    company,
    title,
    location,
    description,
    date,
    img,
  }) => (
    <article className="media">
      <figure className="media-left">
        <p className="image is-64x64">
          <img src={`./dist/img/${img}`} alt={company} title={company} />
        </p>
      </figure>
      <div className="media-content">
        <div className="content">
          <p>
            <strong>{title}</strong> at <span>{company}</span>
            <span className="is-pulled-right has-text-right is-hidden-mobile">
              {date}<br/>
              <small  className="is-pulled-right has-text-right">{location}</small>
            </span>
            <span className="is-hidden-tablet">
              <br />{date}<br/>
              <small  className="is-pulled-right has-text-right">{location}</small>
            </span>
            <br />
            {description}
          </p>
        </div>
      </div>
    </article>
);

export default ProjectItem;
