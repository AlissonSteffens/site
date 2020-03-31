// Helpers
import moment from 'moment'

// Components
import Link from 'next/link'
import Title from '../components/title'
import Back from '../components/back'
import { Image } from '../components/figure'

// Layouts
import Page from '../layouts/page'
import components from '../components'

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

    <section className="hero">
      <div className="hero-body">
        <div className="container">
          <div className="columns">
            <div className="column">
              <div className="text-column">
                <h1 className="title">Alisson&apos;s Blog</h1>
                <p>
                  Aqui eu posto algumas páginas com coisas escritas por mim. A
                  maioria do que eu escrevo é acadêmico, então estes aparecerão
                  como links para os artigos. As postagens (não acadêmicas), são
                  páginas neste site.
                </p>
              </div>
            </div>
            <div className="column image-column">
              <Image src="./static/write.svg" width="350" />
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
      <Back />
    </section>

    <section className="section" id="projects">
      <div className="container">
        <ul>
          {preparePosts().map(p => (
            <li key={p.id}>
              <Link href={p.url} prefetch>
                <a>
                  <div className="project" id={p.id}>
                    <figure className="image is-16by9">
                      <Image
                        src={
                          './static/essays/' +
                          parseDate(p.date).format('YYYY') +
                          '/' +
                          p.id +
                          '/icon.svg'
                        }
                        width="150"
                      />
                    </figure>
                    <h3>{p.title}</h3>
                  </div>
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>

    <style jsx>
      {`
        ul {
          margin: 0;
          padding: 0 0 10px 0;
          list-style: none;
          text-align: left;
        }

        li {
          margin: 25px 0;
          text-decoration: none;
        }

        li:last-child {
          margin-bottom: 0;
        }

        a {
          text-decoration: none;
          display: block;
        }

        b {
          color: #000;
          font-size: 17px;
          display: inline-block;
          font-weight: normal;
          line-height: 21px;
        }

        span {
          display: block;
          color: #c1c1c1;
          font-size: 13px;
          margin-top: 4px;
        }

        h1 {
          margin: 5px 0 40px 0;
          font-size: 35px;
          font-weight: 300;
        }

        @media (min-width: 768px) {
          a {
            display: inline-block;
          }

          span {
            display: inline-block;
            margin-left: 20px;
          }

          b {
            color: #5a5a5a;
            font-size: 16px;
          }

          ul {
            padding-bottom: 0;
          }

          a:hover b {
            color: #000;
          }

          h1 {
            font-size: 40px;
            margin-top: 0;
          }
        }

        @media (min-width: 992px) {
          span {
            opacity: 0;
          }

          li {
            margin: 22px 0;
          }

          a:hover span {
            opacity: 1;
          }
        }
      `}
    </style>
  </Page>
)
