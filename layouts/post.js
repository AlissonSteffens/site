// Layouts
import Essay from '../layouts/essay'

// Components
import Meta from '../components/meta'
import Disqus from '../components/disqus'
// Icons
import {
  FaTwitter,
  FaGithub,
  FaLinkedinIn,
  FaCamera,
  FaSchool
} from 'react-icons/fa'

export default options => content => () => (
  <Essay>
    <Meta {...options} />

    <div className="social inpost">
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
    </div>
    {content}
    {/* <Disqus {...options} /> */}
  </Essay>
)
