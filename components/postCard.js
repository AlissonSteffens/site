import React from 'react'

// Helpers
import moment from 'moment'

import Link from 'next/link'
import { SimpleImage } from '../components/figure'
var ReactGA = require('react-ga');

const parseDate = date => moment(date, 'DD-MM-YYYY')

const PostCardInner = ({post}) => (
    <div className={post.kind == 'blog' ? 'card blog' : 'card paper'} id={post.id}>
        
        <div className="card-image">
            <SimpleImage
                src={
                    './static/essays/' +
                    parseDate(post.date).format('YYYY') +
                    '/' +
                    post.id +
                    '/thumb.jpg'
                }
                width={300}
            />
        </div>
        <div className="card-content">
            <div className="content">
            <p className="kind">{post.kind == 'blog' ? 'blog post' : 'paper'}</p>
            <h3>{post.title}</h3>
            <p>{post.description}</p>
            </div>
        </div>
    </div>
)

const PostCard = ({ post }) => (
    <ReactGA.OutboundLink
        eventLabel={'go-to-paper-'+post.id}
        to={post.link}
        target="_blank"
        key={post.id}
      >
          <PostCardInner post={post}></PostCardInner>
      </ReactGA.OutboundLink>
  )
  
const BlogPostCard = ({ post }) => (
    <Link href={post.url} prefetch >
        <a>
        <PostCardInner post={post}></PostCardInner>
        </a>
    </Link>
)

export default PostCard;
export { PostCard, BlogPostCard}