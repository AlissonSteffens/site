// Components
import Link from 'next/link'
import Title from '../components/title'
import { Image } from '../components/figure'
import Header from '../components/header'
import moment from 'moment'
// Layouts
import Page from '../layouts/page'
import Particles from 'react-particles-js'
import Tilt from 'react-tilt'

// Icons
import {
  FaTwitter,
  FaGithub,
  FaLinkedinIn,
  FaCamera,
  FaSchool
} from 'react-icons/fa'

import projects from '../data/projects'

export default () => (
  <Page>
    <Title />
    <Particles
      className="fixed"
      params={{
        particles: {
          number: {
            value: 250,
            density: {
              enable: true,
              value_area: 1500
            }
          },
          shape: {
            type: 'circle'
          },
          color: {
            value: ['#4640B3', '#9F507A', '#535D74']
          },
          line_linked: {
            enable: false,
            opacity: 0.02
          },
          move: {
            direction: 'top',
            speed: 1
          },
          size: {
            value: 3,
            anim: {
              enable: true,
              speed: 1,
              size_min: 1
            }
          },
          opacity: {
            anim: {
              enable: true,
              speed: 1,
              opacity_min: 0.05
            }
          }
        },
        interactivity: {
          events: {
            onclick: {
              enable: true,
              mode: 'push'
            }
          },
          modes: {
            push: {
              particles_nb: 1
            }
          }
        },
        retina_detect: true
      }}
    />
    <section className="hero">
      <div className="hero-body">
        <div className="container">
          <Image src="./static/logo.svg" width="150" />
          <h1 className="title">Alisson Steffens</h1>
        </div>
      </div>
    </section>
    <section className="about">
      <div className="about-container">
        <p>
          Graduated in Computer Science (Univali), with emphasis on education,
          computer systems and games. I like to program 😁, in my free time I
          usually watch movies, play video games (especially cooperatives) and
          read comics.
        </p>
        <p>
          I am currently a CAPES PROSUC fellow at Univali&apos;s Applied
          Intelligence Laboratory
        </p>
        <p>Also, I am starting to blog (in portuguese)</p>
      </div>
    </section>
    <section className="projects">
      <h2 className="title">Projects</h2>
      <div className="tiltcontainer">
        {projects.map(p => (
          <div className="tiltframe" key={p.id}>
            <a href={p.url} target="_blank" rel="noopener noreferrer">
              <Tilt
                className="Tilt"
                options={{ max: 25, glare: true, maxGlare: 0.5 }}
                style={{ height: 250, width: 300 }}
              >
                <div className="Tilt-inner">
                  <div
                    className="project"
                    id={p.id}
                    style={{
                      background:
                        'linear-gradient(to bottom right,' +
                        p.color1 +
                        ', ' +
                        p.color2 +
                        ');'
                    }}
                  >
                    <figure className="image is-2by1">
                      <Image
                        src={'./static/projects/' + p.id + '.svg'}
                        width="100"
                      />
                    </figure>
                    <h3>{p.title}</h3>
                  </div>
                </div>
              </Tilt>
            </a>
          </div>
        ))}
      </div>
    </section>
    <section className="academics">
      <h2 className="title">Academic</h2>
    </section>

    <style jsx>{``}</style>
    <style global jsx>{``}</style>
  </Page>
)
