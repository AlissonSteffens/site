// Packages
import Head from 'next/head'
import moment from 'moment'

// Other
import posts from '../data/essays'

// Components
import Title from './title'
import Back from './back'
import { Image } from './figure'

// Make date easily readable
const parseDate = date => moment(date, 'DD-MM-YYYY')

// Find post using its identifier
const findPost = id => posts.find(post => post.id === id)

export default ({ id, hasCover }) => {
  const post = findPost(id)
  const headingClass = hasCover ? 'has-cover' : ''
  const date = parseDate(post.date)

  let coverURL

  if (hasCover) {
    coverURL = `/static/essays/${date.format('YYYY')}/${id}/icon.svg`
  }

  return (
    <aside>
      <Back />

      {hasCover && <Image src={coverURL} width="350" />}
      <Title
        title={post.title}
        description={post.description}
        coverURL={coverURL}
      />

      <h1 className={headingClass}>{post.title}</h1>
      <span>{date.format('MMMM Do YYYY')}</span>

      <style jsx>
        {`
          h1 {
            font-weight: 500;
            margin: 0 0 8px 0;
            font-size: 24px;
            padding-right: 55px;
            line-height: 1.3em;
          }

          h1.has-cover {
            padding-right: 0;
          }

          span {
            color: #7c7c7c;
            font-size: 13px;
          }

          aside {
            margin-bottom: 35px;
            margin-top: 14px;
          }

          @media (min-width: 992px) {
            h1 {
              font-size: 28px;
              margin-bottom: 7px;
            }

            span {
              font-size: 14px;
            }
          }
        `}
      </style>
    </aside>
  )
}
