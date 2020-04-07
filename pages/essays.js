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
import Tilt from 'react-tilt'
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
        <h1 className="title">Blog</h1>
        <h2 className="subtitle" />
        <p>
          Aqui eu posto algumas páginas com coisas escritas por mim. A maioria
          do que eu escrevo é acadêmico, então estes aparecerão como links para
          os artigos. As postagens (não acadêmicas), são páginas neste site.
        </p>
      </div>
      <Back />
    </section>

    <section className="section" id="posts">
      <div className="container">
        <div className="tiltcontainer">
          {preparePosts().map(p => (
            <div className="tiltframe" key={p.id}>
              <a href={p.url}>
                <Tilt
                  className="Tilt"
                  options={{ max: 25, glare: true, maxGlare: 0.5 }}
                  style={{ height: 250, width: 300 }}
                >
                  <div className="Tilt-inner">
                    <div
                      className="post"
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
                          src={
                            './static/essays/' +
                            parseDate(p.date).format('YYYY') +
                            '/' +
                            p.id +
                            '/icon.svg'
                          }
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
