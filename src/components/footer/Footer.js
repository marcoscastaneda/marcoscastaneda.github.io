import { h } from 'preact';

const Footer = ({
    version,
    year,
    url,
  }) => (
    <footer className="footer">
      <div className="container level">
        <div className="level-left">
          <p className="control">
            <a className="button" href={url} title="View Source" target="_blank">
              <span className="icon">
                <i className="fa fa-github" />
              </span>
              <span>View Source</span>
            </a>
          </p>
        </div>
        <div className="level-right has-text-right">
          <p>Built by Marcos Castaneda<br />v{version} | Made in Miami 🌴</p>
        </div>
      </div>
    </footer>
);

export default Footer;
