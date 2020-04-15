#!/bin/sh

# TODO: Check Travis setup
setup_git() {
  git config --global user.email "travis@travis-ci.org"
  git config --global user.name "Travis CI"
}

commit_data_file() {
  git add src/assets/data/data.json
  git commit --message "Autoupdate data"
}

push() {
  git remote add origin https://${GH_TOKEN}@github.com/Symmetronic/covid-19-dwt-analysis.git >/dev/null 2>&1
  git push --quiet origin master >/dev/null 2>&1
}

setup_git
commit_data_file
push
