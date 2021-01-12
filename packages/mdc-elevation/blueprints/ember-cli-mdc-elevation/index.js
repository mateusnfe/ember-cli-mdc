/* eslint-env node */

const { Blueprint } = require ('ember-cli-blueprint-helpers');
const { version } = require ('../../package.json');

module.exports = Blueprint.extend ({
  packages: [
    {name: '@material/elevation', target: '^9.0.0'}
  ],

  addons: [
    {name: 'ember-cli-mdc-animation', target: `^${version}` },
    {name: 'ember-cli-mdc-theme', target: `^${version}` },
    {name: 'ember-cli-mdc-base', target: `^${version}` }
  ]
});
