// Components
import Link from 'next/link'
import Title from '../components/title'
import { Image, MediumImage } from '../components/figure'
import Header from '../components/header'
import moment from 'moment'
import components from '../components'
// Layouts
import Page from '../layouts/page'
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
import talks from '../data/talks'
import pictures from '../data/pictures'
// Other
import posts from '../data/essays'

const parseDate = date => moment(date, 'DD-MM-YYYY')

// Assign a URL to each post and
// sort them by date (most recent one first)
const preparePosts = () =>
  posts
    .map(post =>
      Object.assign(
        {
          url: `/${parseDate(post.date).year()}/${post.id}`
        },
        post
      )
    )
    .sort((a, b) => parseDate(b.date).diff(parseDate(a.date)))

export default () => (
  <Page>
    <Title />

    <section className="section" id="hero">
      <div className="container">
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
          Graduated in Computer Science (Univali), with emphasis on education,
          computer systems and games. I like to program 😁, in my free time I
          usually watch movies, play video games (especially cooperatives) and
          read comics.
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
    </section>

    <section className="section" id="posts">
      <div className="container">
        <h2 className="title">Blog</h2>
        <div className="tiltcontainer">
          {preparePosts().map(p => (
            <div className="tiltframe" key={p.id}>
              <a href={p.url} target="_blank" rel="noopener noreferrer">
                <Tilt
                  className="Tilt"
                  options={{
                    reverse: true,
                    max: 10,
                    glare: true,
                    maxGlare: 0.5
                  }}
                  style={{ height: 300, width: 250 }}
                >
                  <div className="Tilt-inner">
                    <div className="post" id={p.id}>
                      <figure className="image is-2by1">
                        <Image
                          src={
                            './static/essays/' +
                            parseDate(p.date).format('YYYY') +
                            '/' +
                            p.id +
                            '/icon.svg'
                          }
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
      </div>
    </section>

    <section className="section" id="projects">
      <div className="container">
        <h2 className="title">Projects</h2>
        <div className="tiltcontainer">
          {projects.map(p => (
            <div className="tiltframe" key={p.id}>
              <a href={p.url} target="_blank" rel="noopener noreferrer">
                <Tilt
                  className="Tilt"
                  options={{
                    reverse: true,
                    max: 15,
                    glare: true,
                    maxGlare: 0.5
                  }}
                  style={{ height: 200, width: 250 }}
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
                          ')'
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
      </div>
    </section>

    <section className="section" id="talks">
      <div className="container">
        <h2 className="title">Talks</h2>
        <div className="talks">
          {talks.map(p => (
            <div className="talk-frame" key={p.id}>
              <a href={p.url} target="_blank" rel="noopener noreferrer">
                <div
                  className="talk"
                  id={p.id}
                  style={{
                    background:
                      'linear-gradient(to bottom right,#581b98aa, #f3558eaa), url(' +
                      './static/talks/' +
                      p.id +
                      '.jpg' +
                      ')',
                    backgroundSize: 'cover'
                  }}
                >
                  <h3>{p.title}</h3>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* <section className="section" id="pictures">
      <div className="container">
        <h2 className="title">Pictures</h2>
        <div className="pictures">
          {pictures.map(p => (
            <div className="picture-frame" key={p.id}>
              <MediumImage src={p.src} width={'250px'} className={'picture'}></MediumImage>
            </div>
          ))}
        </div>
      </div>
    </section> */}

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
