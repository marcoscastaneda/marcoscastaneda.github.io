import { h, Component } from 'preact';

import SectionBox from './SectionBox';

import Header from './header/Header';
import Projects from './projects/Projects';
import Skills from './skills/Skills';
import Experience from './experience/Experience';
import Footer from './footer/Footer';

export default class Container extends Component {
  render() {
    return (
      <div>
        <Header
          title="Marcos Castaneda"
          subtitle="Software and Mobile Developer"
          github="https://github.com/marcoscastaneda"
          linkedin="https://www.linkedin.com/in/marcoscastaneda"
          email="marcosjcastaneda@gmail.com"
        />
        <SectionBox
          title="Projects"
          content={<Projects />}
        />
        <SectionBox
          title="Skills &amp; Interests"
          content={<Skills />}
        />
        <SectionBox
          title="Experience"
          content={<Experience />}
        />
        <Footer
          version="1.0"
          url="https://github.com/marcoscastaneda/marcoscastaneda.github.io"
        />
      </div>
    );
  }
}
