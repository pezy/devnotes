import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import 'css/markdown-styles.css'
import Helmet from 'react-helmet'
import { rhythm } from 'utils/typography'
import { config } from 'config'
import Bio from 'components/Bio'

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
        <p
          style={{
            color: '#ccc',
            display: 'block',
            marginBottom: rhythm(1),
          }}
        >
          {moment(post.date).format('YYYY-MM-D')}
        </p>
        <div dangerouslySetInnerHTML={{ __html: post.body }} />
      <hr
        style={{
          marginBottom: rhythm(2),
        }}
      />
      <Bio />
      </div>
    )
  }
}
