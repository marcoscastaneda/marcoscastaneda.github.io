import { h } from 'preact';

const Header = ({
    title,
    subtitle,
    github,
    linkedin,
    email,
  }) => (
  <section id="header" className="hero is-fullheight is-info is-bold has-text-centered">
    <div className="hero-body">
      <div className="container">
        <h1 className="title">
          {title}
        </h1>

        <h2 className="subtitle">
          {subtitle}
        </h2>

        <p className="social">
          <a className="icon is-large" href={github} title="GitHub" target="_blank">
            <i className="fa fa-github" />
          </a>
          <a className="icon is-large" href={linkedin} title="LinkedIn" target="_blank">
            <i className="fa fa-linkedin-square" />
          </a>
          <a className="icon is-large" href={`mailto:${email}`} title="E-mail" target="_blank">
            <i className="fa fa-envelope" />
          </a>
        </p>
      </div>
    </div>
    <div className="hero-foot">
      <a className="icon is-large" href="#Projects" title="E-mail">
        <i className="fa fa-angle-down" />
      </a>
    </div>
  </section>
);

export default Header;
