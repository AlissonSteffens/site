// Components
import Link from 'next/link'
import Title from '../components/title'
import { Image } from '../components/figure'
import Header from '../components/header'
import moment from 'moment'
// Layouts
import Page from '../layouts/page'

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

    <section className="hero">
      <div className="hero-body">
        <div className="container">
          <div className="columns">
            <div className="column">
              <div className="text-column">
                <h1 className="title">Alisson Steffens</h1>
                <h2 className="subtitle">
                  🐋 Geek, programmer and{' '}
                  <a
                    href="https://trakt.tv/users/alissonsteffens"
                    className="link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    cinephile
                  </a>. 🌸
                </h2>
                <div className="social">
                  <a
                    className="social-link"
                    href="https://github.com/AlissonSteffens"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub />
                  </a>
                  <a
                    className="social-link"
                    href="https://twitter.com/AlissonSteffens"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaTwitter />
                  </a>
                  <a
                    className="social-link"
                    href="https://www.linkedin.com/in/alisson-s-92b58a88/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaLinkedinIn />
                  </a>
                  <a
                    className="social-link"
                    href="https://unsplash.com/@alissonsteffens"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaCamera />
                  </a>
                  <a
                    className="social-link"
                    href="http://lattes.cnpq.br/4379708414084009"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaSchool />
                  </a>
                </div>
                <p>
                  Graduated in Computer Science (Univali), with emphasis on
                  education, computer systems and games. I like to program 😁,
                  in my free time I usually watch movies, play video games
                  (especially cooperatives) and read comics.
                </p>
                <p>
                  I am currently a CAPES PROSUC fellow at Univali&apos;s Applied
                  Intelligence Laboratory
                </p>
                <p>
                  Also, I&apos;am starting to{' '}
                  <Link href="./essays" prefetch>
                    <a>blog</a>
                  </Link>{' '}
                  (in portuguese)
                </p>
              </div>
            </div>
            <div className="column image-column">
              <Image src="./static/coding.svg" width="350" />
            </div>
          </div>
        </div>
      </div>
      <svg id="svg" xmlns="http://www.w3.org/2000/svg" viewBox="-300 0 950 270">
        <path
          d="M-314,267 C105,364 400,100 812,279"
          fill="none"
          stroke="white"
          strokeWidth="120"
          strokeLinecap="round"
        />
      </svg>
    </section>
    <section className="section" id="projects">
      <div className="container">
        <h1 className="title">
          Projects{' '}
          <span>
            more at{' '}
            <a
              href="https://github.com/AlissonSteffens"
              target="_blank"
              rel="noopener noreferrer"
            >
              github
            </a>
          </span>
        </h1>
        <ul>
          {projects.map(p => (
            <li key={p.id}>
              <a href={p.url} target="_blank" rel="noopener noreferrer">
                <div className="project" id={p.id}>
                  <figure className="image is-2by1">
                    <Image
                      src={'./static/projects/' + p.id + '.svg'}
                      width="100"
                    />
                  </figure>
                  <h3>{p.title}</h3>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>

    <section className="section" id="academic">
      <div className="container">
        <h1 className="title">Academic</h1>
        <p>
          You should look at{' '}
          <a
            className="link"
            href="http://lattes.cnpq.br/4379708414084009"
            target="_blank"
            rel="noopener noreferrer"
          >
            lattes
          </a>
        </p>
      </div>
    </section>

    <style jsx>{``}</style>
    <style global jsx>{``}</style>
  </Page>
)
