#!/usr/bin/env python
# -*- coding: utf-8 -*- #
from __future__ import unicode_literals

AUTHOR = 'pezy'
SITENAME = 'devnotes'
SITEURL = 'http://devnotes.org'

PATH = 'docs'
STATIC_PATHS = ['notes', 'img', 'lab', 'res']
ARTICLE_PATHS = ['notes']
ARTICLE_SAVE_AS = '{date:%Y}/{slug}.html'
ARTICLE_URL = '{date:%Y}/{slug}.html'

TIMEZONE = 'Asia/Shanghai'

DEFAULT_LANG = 'Chinese (Simplified)'
THEME = 'chameleon'

# Feed generation is usually not desired when developing
FEED_ALL_ATOM = None
CATEGORY_FEED_ATOM = None
TRANSLATION_FEED_ATOM = None
AUTHOR_FEED_ATOM = None
AUTHOR_FEED_RSS = None

DEFAULT_PAGINATION = 10

# Uncomment following line if you want document-relative URLs when developing
#RELATIVE_URLS = True

#Template
BS3_URL = '//cdn.bootcss.com/bootstrap/3.3.7/css/bootstrap.min.css'
BS3_JS  = '//cdn.bootcss.com/bootstrap/3.3.7/js/bootstrap.min.js'
BS3_THEME = '//cdn.bootcss.com/bootswatch/3.3.7/cosmo/bootstrap.min.css'

MENUITEMS = [
    ('Home', '/'),
    ('Archives', [
        ('Tags', '/tags.html'),
        ('Categories', '/categories.html'),
        ('Chronological', '/archives.html'),
        ]),
    ('Links', [
        ('old Blog', 'http://blog.devnotes.org'),
        ('diary', 'http://devnotes.org/diary'),
        ('reading', '../lab/reading.html'),
        ('list', '../lab/list.html'),
        ('tools', '../lab/tools.html')
        ]),
    ('Social', [
        ('Email', 'mailto: pezy.dev@gmail.com'),
        ('Github', 'http://github.com/pezy'),
        ('Zhihu', 'https://www.zhihu.com/people/pezy'),
        ]),
    ]

FAVICON = u'/res/favicon.png'
FAVICON_TYPE = u'png'

AUTHORS = {
    u'pezy': '/about.html',
}

DISQUS_SITENAME = 'devnotes-org'
GITHUB_URL = 'https://github.com/pezy/pezy.github.io'
