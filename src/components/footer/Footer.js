import { h } from 'preact';

const Footer = ({
    version,
    year,
    url,
  }) => (
    <footer className="footer">
      <div className="container">
        <div className="columns">
          <div className="column is-hidden-mobile">
            <p className="control">
              <a className="button" href={url} title="View Source" target="_blank">
                <span className="icon">
                  <i className="fa fa-github" />
                </span>
                <span>View Source (v{version})</span>
              </a>
            </p>
          </div>
          <div className="column is-hidden-mobile has-text-centered">
            <a className="icon" href="#" title="Return to top">
              <i className="fa fa-hand-o-up" />
            </a>
          </div>
          <div className="column has-text-right">
            <p>Built by Marcos Castaneda<br />Made in Miami 🌴</p>
          </div>
        </div>
      </div>
    </footer>
);

export default Footer;
