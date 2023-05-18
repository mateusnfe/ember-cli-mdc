ember-cli-mdc-floating-label
======================

ember-cli addon for [`@material/floating-label`](https://github.com/material-components/material-components-web/tree/master/packages/mdc-floating-label).

Installation
------------

    ember install ember-cli-mdc-floating-label

Components
-----------

This package contains the following top-level components.

* [`{{mdc-floating-label}}`](#mdc-floating-label)

mdc-floating-label
---------------------

### Description

Add a floating label to the page. This component is typically used in conjunction
with text field and select fields.

### Usage

```handlebars
{{#mdc-floating-label for="my-text-field-id"}}Hint text{{/mdc-floating-label}}
```

### Attributes

* **`for`** - Id of associated input field.
