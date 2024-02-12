ember-cli-mdc-snackbar

ember-cli addon for [`@material/snackbar`](https://github.com/material-components/material-components-web/tree/master/packages/mdc-snackbar).

Installation
------------

    ember install ember-cli-mdc-snackbar

Services
------------

* [`snackbar`](#snackbar)

snackbar
---------------------

### Description

Display a snackbar on the page.

### Usage

```javascript
// Simple version
this.snackbar.show ('This is the message to show.');

this.snackbar.show ({
  message: [String],
  timeout: [Number],
  action: { label: [String], click: [Function]},
  dismiss: [ true | { click: [Function]} ]
});
````

#### Options

* `message` - The message to display in the snackbar. Changing the message automatically shows the snackbar.
* `timeout` - Optional timeout for the snackbar in milliseconds.
* `action` - Optional hash with the action text and optional callback invoked when the action is clicked.
* `dismiss` - Show the dismiss button on the snackbar.

#### Auto-injection

The `snackbar` service is automatically injected into route and controller components. There is
no need to just the `service` definition to use the snackbar. If you want to use the `snackbar`
service from a component, then you need to manually inject the `snackbar` service into the
desired component.

snackbar
---------------------

### Description

Display a snackbar on the page.

### Usage

```javascript
this.snackbar.show ({
  message: [String],
  timeout: [Number],
  action: { label: [String], click: [Function]},
  dismiss: [ true | { click: [Function]} ]
});
````

#### Options

* `message` - The message to display in the snackbar. Changing the message automatically shows the snackbar.
* `timeout` - Optional timeout for the snackbar in milliseconds.
* `action` - Optional hash with the action text and optional callback invoked when the action is clicked.
* `dismiss` - Show the dismiss button on the snackbar (default is `true`).

### Auto-injection

The `snackbar` service is automatically injected into route and controller components. If you 
want to use the `snackbar` service from a component, then you need to manually inject the 
`snackbar` service into the desired component.

```javascript
import Component from '@glimmer/component';
import { inject as service } from '@ember/service';

export default class MyComponent extends Component {
  @service
  snackbar;
}
```