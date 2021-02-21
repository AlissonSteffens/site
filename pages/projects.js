// Helpers
import moment from 'moment'

// Components

import Title from '../components/title'
import Back from '../components/back'
import { PostCard, BlogPostCard } from '../components/postCard'


// Layouts
import Page from '../layouts/page'
import projects from '../data/projects'
import Project from '../components/project'
export default () => (
  <Page>
    <Title />

    <section className="section" id="hero">
      <Back />
    </section>

    <section className="section" id="projects">
      <div className="container">
        <h2 className="title">Projects</h2>
        <div className="project-container">
          {projects.map(p => (
            p.show == 'true' ?
              <Project project={p} key={p.id}></Project>
              : ""
          ))}
        </div>
      </div>
    </section>

  </Page>
)
