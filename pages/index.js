import React from 'react'
import { Link } from 'react-router'
import sortBy from 'lodash/sortBy'
import get from 'lodash/get'
import { prefixLink } from 'gatsby-helpers'
import { rhythm } from 'utils/typography'
import Helmet from 'react-helmet'
import { config } from 'config'
import include from 'underscore.string/include'

export default class Index extends React.Component {
  render() {
    // sort pages.
    const sortedPages = sortBy(this.props.route.pages, 'data.date').reverse();
    // Posts are those with md extension that are not 404 pages OR have a date (meaning they're a react component post).
    const visiblePages = sortedPages.filter(page => (
      get(page, 'file.ext') === 'md' && !include(page.path, '/404') || get(page, 'data.date')
    ));
    return (
      <div>
        <Helmet
          title={config.blogTitle}
          meta={[
            {"name": "description", "content": "pezy devnotes"},
            {"name": "keywords", "content": "pezy, blog, devnotes"},
          ]}
        />
        <ul>
          {visiblePages.map((page) => (
              <li
                key={page.path}
                style={{
                  marginBottom: rhythm(1/4),
                }}
              >
                <Link style={{boxShadow: 'none'}} to={prefixLink(page.path)}>
                    {get(page, 'data.title', page.path)}
                </Link>
              </li>
          ))}
        </ul>
      </div>
    )
  }
}