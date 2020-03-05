// Components
import Link from 'next/link'
import Title from '../components/title'
import { Image } from '../components/figure'
import Header from '../components/header'
import moment from 'moment'
// Layouts
import Page from '../layouts/page'


// Icons
import { FaTwitter, FaGithub,FaLinkedinIn, FaCamera } from 'react-icons/fa';



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
                <h2 className="subtitle">🐋 Geek, programmer and <a href="https://trakt.tv/users/alissonsteffens" className="link" target="_blank">cinephile</a>. 🌸</h2>
                <div className="social">
                  <a className="social-link" href="https://github.com/AlissonSteffens" target="_blank"><i className="fab fa-github"></i></a>
                  <a className="social-link" href="https://twitter.com/AlissonSteffens" target="_blank"><i className="fab fa-twitter"></i></a>
                  <a className="social-link" href="https://www.linkedin.com/in/alisson-s-92b58a88/" target="_blank"><i className="fab fa-linkedin-in"></i></a>
                  <a className="social-link" href="https://unsplash.com/@alissonsteffens" target="_blank"><i className="fas fa-camera"></i></a>
                  <a className="social-link" href="http://lattes.cnpq.br/4379708414084009" target="_blank"><i className="fas fa-paperclip"></i></a>
                </div>
                <p>
                  Graduated in Computer Science (Univali), with emphasis on education, computer systems and games. I like to program 😁, in my free time I usually watch movies, play video games (especially cooperatives) and read comics.
                </p>
                <p>
                  I am currently a CAPES PROSUC fellow at Univali's Applied Intelligence Laboratory.
                </p>
                <p>
                  Also, I'm starting to <Link href="./essays" prefetch><a>blog</a></Link> (in portuguese)
                </p>
              </div>
            </div>
            <div className="column image-column">
              <Image
                src="./static/coding.svg"
                width="350"
              />
            </div>
          </div>
        </div>
      </div>
      <svg id="svg" xmlns="http://www.w3.org/2000/svg" viewBox="-300 0 950 270" >
        <path d="M-314,267 C105,364 400,100 812,279" fill="none" stroke="white" stroke-width="120" stroke-linecap="round"/>
      </svg>
    </section>
    <section className="section" id="projects">
      <div className="container">
        <h1 className="title">Projects <span>more at <a href="https://github.com/AlissonSteffens" target="_blank">github</a></span></h1>
        
        <ul>
          {projects.map(p => (
            <li key={p.id}>
              
              <a href={p.url} target="_blank">
                <div className="project" id={p.id}>
                  <figure className="image is-2by1">
                    <Image
                      src={"./static/projects/"+p.id+".svg"}
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
        <p>You should look at <a className="link" href="http://lattes.cnpq.br/4379708414084009" target="_blank">lattes</a></p>
      </div>
    </section>

    <style jsx>{`
     
    `}</style>
    <style global jsx>{`

    `}</style>
  </Page>
)