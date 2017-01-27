import { h } from 'preact';

const SectionBox = ({
    title,
    content,
  }) => (
    <section id={title} className="section">
      <div className="container">
        <div className="heading">
          <h1 className="title">{title}</h1>
        </div>
        <div className="content">
          {content}
        </div>
      </div>
    </section>
);

export default SectionBox;
