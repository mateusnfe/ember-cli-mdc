import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('mdc-step-label-indicator-content', 'Integration | Component | mdc step label indicator content', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{mdc-step-label-indicator-content}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#mdc-step-label-indicator-content}}
      template block text
    {{/mdc-step-label-indicator-content}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
