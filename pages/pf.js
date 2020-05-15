// Components
import Title from '../components/title'
import Back from '../components/back'
import { Image, SimpleImage } from '../components/figure'
import { Code, InlineCode } from '../components/code'

// Layouts
import Page from '../layouts/page'
import markdown from 'markdown-in-js'
import components from '../components'

export default () => (
  <Page>
    <Title
      maintitle={'PF Que Dizer'}
      description={'programa que descobre o que o presidente quis dizer com PF'}
      coverURL={'/static/pf.png'}
    />
    <section className="hero is-fullheight">
      <div className="hero-body">
        <div className="container">
          <h1 className="title">PF Quer Dizer</h1>
          <hr />
          <h2 className="subtitle" id="text">
            Prato Feito
          </h2>
          <button className="button click-me">Tentar Novamente</button>
        </div>
      </div>
      <div className="hero-foot">
        <div className="container">
          <p>
            Programa pra ajudar o Presidente a encontrar um bom significado para
            PF
          </p>
        </div>
      </div>
    </section>

    <script src="/static/js/pf.js" />
    <style jsx>{`
      .hero {
        background: transparent;
      }
      .hero-body,
      .hero-foot {
        text-align: center;
      }
      .title {
        font-size: 3rem;
      }
      .subtitle {
        font-size: 2.5rem;
      }
    `}</style>
    <style global jsx>{`
      figure {
        text-align: left !important;
      }
      body {
        background-color: #ffffff;
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23f3f3f3' fill-opacity='0.4'%3E%3Cpath d='M0 38.59l2.83-2.83 1.41 1.41L1.41 40H0v-1.41zM0 1.4l2.83 2.83 1.41-1.41L1.41 0H0v1.41zM38.59 40l-2.83-2.83 1.41-1.41L40 38.59V40h-1.41zM40 1.41l-2.83 2.83-1.41-1.41L38.59 0H40v1.41zM20 18.6l2.83-2.83 1.41 1.41L21.41 20l2.83 2.83-1.41 1.41L20 21.41l-2.83 2.83-1.41-1.41L18.59 20l-2.83-2.83 1.41-1.41L20 18.59z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
      }
    `}</style>
  </Page>
)
