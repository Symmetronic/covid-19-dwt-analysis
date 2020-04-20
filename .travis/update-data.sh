#!/bin/bash

config() {
  git config --global user.email "travis@travis-ci.org"
  git config --global user.name "Travis CI"
}

commit() {
  git add src/assets/data/data.json
  git commit --message "Autoupdate data"
}

push() {
  git push https://strc-covid-19-dwt-analysis-ci:${GITHUB_TOKEN}@github.com/Symmetronic/covid-19-dwt-analysis.git HEAD:master >/dev/null 2>&1
}

if [ "$TRAVIS_BRANCH" != "master" ]; then
  echo "No data autoupdate as we're not on the master branch."
  exit 0
fi

config
commit
push
