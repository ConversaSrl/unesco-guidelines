# UNESCO Guidelines

> Author: Angelo Scicolone

The guidelines are written in markdown and a static site is built from it using [Jekyll](https://github.com/jekyll/jekyll) and [Jekyll Documentation Theme](https://idratherbewriting.com/documentation-theme-jekyll/index.html)

## Setup and build

Jekyll is based on Ruby and RubyGems, which are usually installed by default on Mac. If not, you can install it via brew.
To install the jekyll gem itself, type

```
sudo gem install jekyll bundler
```

To serve/preview the documentation locally, use:

```
jekyll serve
```
This will make it reachable from `http://127.0.0.1:4000`

To build the site to `./site` directory, type

```
jekyll build
```