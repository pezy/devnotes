import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import 'css/markdown-styles.css'
import Helmet from 'react-helmet'
import { rhythm } from 'utils/typography'
import { config } from 'config'

export default class Markdown extends React.Component {
  static propTypes = {
    router: PropTypes.object,
  }

  render() {
    const post = this.props.route.page.data
    return (
      <div className="markdown">
        <Helmet title={`${config.siteTitle} | ${post.title}`} />
        <h1>{post.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.body }} />
      <em
        style={{
          display: 'block',
          marginBottom: rhythm(2),
        }}
      >
        Posted {moment(post.date).format('MMMM D, YYYY')}
      </em>
      </div>
    )
  }
}
