# `git-log`

This package is not on NPM, so installation is [pretty tedious](https://github.com/npm/npm/issues/3055).
```sh
# clone the repo
$ git clone https://github.com/slammayjammay/git-log.git
$ cd git-log
# install dependencies
$ npm install
# generate tarball
$ npm pack
# install the generated tarball
$ npm install -g git-log-X.X.X.tgz # XXX is the semantic version
# remove the repo
$ cd ../ && rm -rf git-log
```

# Usage
```sh
$ git-log
# almost exacly the same as
$ git log | less -R
```
