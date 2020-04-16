// Components
import Link from 'next/link'
import { FaArrowLeft } from 'react-icons/fa'
export default ({ to, outsideCover, insideCover }) => {
  const classes = []

  return (
    <div>
      <a href={to || '/'}>
        <FaArrowLeft />
      </a>

      <style jsx>
        {`
          div {
            position: fixed;
            right: 30px;
            top: 40px;
            height: 37px;
            width: 37px;
          }

          a {
            font-size: 19px;
            text-align: center;
            background: #efefef;
            font-weight: bold;
            box-sizing: border-box;
            color: #000;
            height: inherit;
            display: block;
            width: inherit;
            line-height: 44px;
            border-radius: 100%;
            font-family: 'Courier New', serif;
            text-decoration: none;
          }

          .outside {
            display: none;
          }

          .inside {
            right: 15px;
            top: 15px;
          }

          @media (min-width: 835px) {
            div {
              width: 55px;
              height: 55px;
            }

            a {
              transition: all 0.2s;
              font-size: 22px;
              line-height: 66px;
            }

            a:hover {
              background: #e3e3e3;
              transform: scale(1.1);
            }

            .outside {
              display: block;
            }

            .inside {
              display: none;
            }
          }
        `}
      </style>
    </div>
  )
}
