import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';

/* Define paths. */
const root = '../';
const nm = 'node_modules/';
const assets = 'assets/';
const src = 'src/';
const glob = src + 'global/';
const theme = glob + 'theme/';
const jekyll = '.jekyll';

/* Dependencies. */
const dependencies = [
  
];
const copy = [
  { src: root + jekyll, dest: '.' },
  ...dependencies.map(dependency => {
    return { src: root + nm + dependency.src, dest: assets + dependency.dest };
  }),
];

// https://stenciljs.com/docs/config

export const config: Config = {
  copy: copy,
  globalStyle: glob + 'app.scss',
  globalScript: glob + 'app.ts',
  taskQueue: 'async',
  outputTargets: [
    { type: 'docs-readme' },
    {
      type: 'www',
      // comment the following line to disable service workers in production
      serviceWorker: null,
      baseUrl: '/covid-19-dwt-analysis',
    },
  ],
  plugins: [
    sass({
      includePaths: [
        nm,
        theme,
      ],
      injectGlobalPaths: [
        theme + 'functions.scss',
        theme + 'variables.scss',
        nm + 'tachyons-sass/scss/_variables.scss',
      ],
    }),
  ],
};
