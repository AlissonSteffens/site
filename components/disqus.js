// Packages
import Head from 'next/head'
import moment from 'moment'

// Other
import posts from '../data/essays'

// Components
import Title from './title'
import Back from './back'
import { Image, MediumImage } from './figure'
import { DiscussionEmbed } from 'disqus-react'

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
    coverURL = `/static/essays/${date.format('YYYY')}/${id}/cover.png`
  }

  return (
    <DiscussionEmbed
      shortname={id}
      config={{
        url: `http://www.alissonsteffens.com/${date.format('YYYY')}/${id}`,
        identifier: id,
        title: post.title,
        language: 'pt_BR' //e.g. for Traditional Chinese (Taiwan)
      }}
    />
  )
}
