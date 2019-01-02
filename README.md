# V4l1d

Minimalistic library for complex object and array validation.

## Installation

This method should work both on front-end and backend.

```bash
npm install v4l1d
```

## Usage

### AMD
```js
var v4l1d = require('v4l1d');
```

### ESM
```js
import v4l1d from 'v4l1d';
// or
import { validate, rules, utils } from 'v4l1d';
```

## API

### `rules`
Rules is an object with all rules available in the library, also, it has method for extenstion `addRule` and rules wrappers `all` and `bail`.

```ts
// Adds new rule to rules object.
// This method MUST be called from rules context to be able to add new rule to the object.
rules.addRule(
  this: Object,
  name: string,
  logic: Function(data: any, value: any): boolean,
  defaultMessage: string | Function(value: any): string
): void

// Validates data against all passed rules and returns all errors
all(...args: Function[]): Function(data: any): undefined | string[]

// Validates data against all passed rules until receive false and returns error
bail(...args: Function[]): Function(data: any): undefined | string

// All rules have the same almost the same signature, some rules don't need value argument
[ruleName](value?: any, message?: string): Function(data: any): boolean | string
```

Rule | Description
-----|-------------
`required(message?: string)` | The value is required.
`email(message?: string)` | The value must be a valid email address.
`limit(value: any, message?: string)` | The value must be within the limit.

### `validate`
Function that performs validation of the data agains the shape.

```js
import { validate, rules } from 'v4l1d';

const { bail, required } = rules;
const result = validate({
  data: bail(required())
});
```