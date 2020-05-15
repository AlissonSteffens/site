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
    `}</style>
  </Page>
)
