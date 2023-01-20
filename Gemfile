# frozen_string_literal: true

source "https://rubygems.org"
gemspec

gem "jekyll", ENV["JEKYLL_VERSION"] if ENV["JEKYLL_VERSION"]
gem "kramdown-parser-gfm" if ENV["JEKYLL_VERSION"] == "~> 3.9"
gem 'wdm', '>= 0.1.0'
gem "webrick"


group :jekyll_plugins do
    gem 'jekyll-sitemap', '~> 1.4'
    gem "jekyll-feed", "~> 0.12"
    gem 'jekyll-admin', group: :jekyll_plugins
    gem 'jekyll-seo-tag'
  end