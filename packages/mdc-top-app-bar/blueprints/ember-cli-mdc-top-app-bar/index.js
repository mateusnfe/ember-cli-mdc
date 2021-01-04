/* eslint-env node */

const { Blueprint } = require ('ember-cli-blueprint-helpers');
const { version } = require ('../../package.json');

module.exports = Blueprint.extend ({
  packages: [
    {name: '@material/top-app-bar', target: '^6.0.0'}
  ],

  addons: [
    {name: 'ember-cli-mdc-icon-button', target: `^${version}`}
  ]
});
