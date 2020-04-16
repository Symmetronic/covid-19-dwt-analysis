#!/bin/sh

config() {
  git config --global user.email "strc-covid-19-dwt-analysis-ci@symmetronic.com"
  git config --global user.name "Travis CI"
}

commit() {
  git add src/assets/data/data.json
  git commit --message "Autoupdate data"
}

push() {
  git push https://strc-covid-19-dwt-analysis-ci:${GH_TOKEN}@github.com/Symmetronic/covid-19-dwt-analysis.git HEAD:master >/dev/null 2>&1
}

config
commit
push
