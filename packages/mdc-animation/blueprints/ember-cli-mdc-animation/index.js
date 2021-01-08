/* eslint-env node */

const { Blueprint } = require ('ember-cli-blueprint-helpers');
const { version } = require ('../../package.json');

module.exports = Blueprint.extend ({
  packages: [
    {name: '@material/animation', target: '6.0.0'}
  ],

  addons: [
    { name: 'ember-cli-mdc-sass', target: `^${version}` }
  ]
});
