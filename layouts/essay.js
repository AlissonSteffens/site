// Layouts
import Page from './page'
import Title from '../components/title'

export default ({ children }) => (
  <Page>
    <Title />
    <article>{children}</article>

    <style jsx>
      {`
        article {
          padding: 20px;
          margin: 0 auto;
          word-wrap: break-word;
          hyphens: auto;
          max-width: 620px;
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
