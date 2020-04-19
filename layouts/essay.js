// Layouts
import Page from './page'
import Title from '../components/title'

export default ({ children }) => (
  <Page>
    <article>{children}</article>

    <style jsx>
      {`
        article {
          padding: 20px;
          margin: 0 auto;
          word-wrap: break-word;
          hyphens: auto;
        }
        @media (min-width: 835px) {
          max-width: 80%;
        }
        @media (min-width: 1000px) {
          max-width: 50%;
        }
      `}
    </style>

    <style jsx global>
      {`
        .tweet {
          display: flex;
          justify-content: center;
          align-items: center;
          margin: 20px 0;
        }
      `}
    </style>
  </Page>
)
