import React from 'react'
import profilePic from './profile_pic.jpg'
import { config } from 'config'
import { rhythm } from 'utils/typography'

class Bio extends React.Component {
    render() {
        return (
            <p
                style={{
                    marginBottom: rhythm(2.5),
                }}
            >
                <img
                    src={profilePic}
                    alt={'author ${config.authorName}'}
                    style={{
                        float: 'left',
                        marginRight: rhythm(1/4),
                        marginBottom: 0,
                        width: rhythm(2),
                        height: rhythm(2),
                    }}
                />
                本文由 <strong><a href="https://github.com/pezy">{config.authorName}</a></strong> 创作，采用<a href="http://creativecommons.org/licenses/by/3.0/cn/">知识共享署名 3.0 中国大陆许可协议</a>进行许可。可自由转载、引用，但需署名作者且注明文章出处。
            </p>
        )
    }
}

export default Bio