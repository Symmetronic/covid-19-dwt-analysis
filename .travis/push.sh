#!/bin/sh

# TODO: Check Travis setup
config() {
  git config --global user.email "travis@travis-ci.org"
  git config --global user.name "Travis CI"
}

commit() {
  git add src/assets/data/data.json
  git commit --message "Autoupdate data"
}

push() {
  git remote remove origin
  git remote add origin https://${GH_TOKEN}@github.com/Symmetronic/covid-19-dwt-analysis.git > /dev/null 2>&1
  git push --set-upstream origin master
}

config
commit
push
