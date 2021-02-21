// Components
import Link from 'next/link'
import Title from '../components/title'
import { Image, MediumImage, SimpleImage } from '../components/figure'
import moment from 'moment'
import components from '../components'
import Project from '../components/project'
// Layouts
import Page from '../layouts/page'
import { PostCard, BlogPostCard } from '../components/postCard'

// Icons
import {
  FaTwitter,
  FaGithub,
  FaLinkedinIn,
  FaEnvelope,
  FaPlus
} from 'react-icons/fa'

import projects from '../data/projects'
import talks from '../data/talks'
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

    <section className="section hero is-fullheight" id="hero">
      <div className="hero-body">
        <div className="container">
          <h1 className="title">Alisson Steffens</h1>
          <h2 className="subtitle">
            🐋 Geek, developer and{' '}
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
              href="mailto:ali.steffens@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaEnvelope />
            </a>
            
          </div>

        </div>
      </div>
    </section>
    <section className="section" id="about">
      <p>
        Master in Applied Computing with an emphasis on Artificial Intelligence and Game Analytics.
        Graduated in Computer Science (Univali), with an emphasis on education, computer systems, and games.
        I like to program 😁, in my free time I usually watch movies, play video games (especially cooperatives) and read.
        I am currently a CAPES PROSUC fellow at Univali&apos;s Applied Intelligence Laboratory.
      </p>

    </section>
    <section className="section" id="projects">
      <div className="container">
        <h2 className="title">Projects{' '}
          <small>
            <Link href="./projects" prefetch>
              <a>
                {' '}
                <FaPlus /> more
              </a>
            </Link>
          </small></h2>
        {/* <h3 className="subtitle">Some of my favorite projects</h3> */}
        <div className="project-container">
          {projects.slice(0, 5).map(p => (
            p.show == 'true' ?
              <Project project={p} key={p.id}></Project>
              : ""
          ))}
        </div>
      </div>
    </section>

    <section className="section" id="posts">
      <div className="container">
        <h2 className="title">
          Blog{' '}
          <small>
            <Link href="./essays" prefetch>
              <a>
                {' '}
                <FaPlus /> more
              </a>
            </Link>
          </small>
        </h2>
        <div className="postcontainer">
          {preparePosts().slice(0, 4).map(p => (
            p.kind == 'blog' ?
            <BlogPostCard post = {p} key={p.id} ></BlogPostCard>
            :
            <PostCard post = {p} key={p.id} ></PostCard>
            
          ))}
        </div>
      </div>
    </section>

    {/* <section className="section" id="talks">
      <div className="container">
        <h2 className="title">Talks</h2>
        <div className="talks">
          {talks.map(p => (
            <div className="talk-frame" key={p.id}>
              <div className="talk" id={p.id}>
                <div className="head">
                  <div className="img">
                    <MediumImage src={'./static/talks/' + p.id + '.jpg'} />
                  </div>
                  <div className="text">
                    <h3>
                      <a href={p.url} target="_blank" rel="noopener noreferrer">
                        {p.title}
                      </a>
                    </h3>
                  </div>
                </div>

                <p>
                  {p.description.length <= 25
                    ? p.description
                    : p.description.substring(0, 23) + '...'}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section> */}

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

    

    <style jsx>{``}</style>
    <style global jsx>{``}</style>
  </Page>
)
