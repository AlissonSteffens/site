import Link from "next/link";
import { FaTwitter, FaGithub,FaLinkedinIn, FaCamera } from 'react-icons/fa';
import { Image } from '../components/figure'
export default () => (
  <header>
    <div className="wrapper">
      <div className="logotype">
      <Image
            src={`../static/logo.svg`}
            width={42}
            height={42}
            margin={0}
          />
      </div>
      <div className="navigation">
        <Link href="https://twitter.com/AlissonSteffens"><a target="_blank"><FaTwitter/></a></Link>
        <Link href="https://github.com/AlissonSteffens"><a target="_blank"><FaGithub/></a></Link>
        <Link href="https://www.linkedin.com/in/alisson-s-92b58a88/"><a target="_blank"><FaLinkedinIn/></a></Link>
      </div>
      <div className="theme">
        <p>2020</p>
      </div>
    </div>
    <style jsx>{`
      a {
        color: #000;
        margin-right: 20px;
        text-decoration: none;
        border-bottom: 1px solid transparent;
        transition: border .2s ease;
      }
      a:last-child {
        margin-right: 0;
      }
      a :hover {
        color:#666;
      }
      p {
        color: #999;
        margin: 0;
        font-size: 0.750em;
      }
      header {
        background-color:rgba(255, 255, 255, 0.5);
        backdrop-filter: blur(8px);
        max-width: 100%;
        position: sticky;
        top: 0;
        z-index: 1;
      }
      .wrapper {
        align-items: center;
        display: flex;
        justify-content: space-between;
        margin: auto;
        max-width: 980px;
        padding-left: 20px;
        padding-right: 20px;
      }
      @media screen and (max-width: 992px) {
        .navigation {
          display: none;
        }
      }
    `}</style>
  </header>
);