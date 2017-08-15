# rear-logger
[![Build Status](https://travis-ci.org/rearjs/rear-logger.svg?branch=master)](https://travis-ci.org/rearjs/rear-logger)

A logger for Rear projects.

## How it works

Create a logger with name and options, then start logging on the predefined
levels: `success`, `info`, `warn` and `error`.

Level names can be added or customized by providing a key/value map
with level name and color in the `levels` option.

  ```javascript
  const createLogger = require('rear-logger');

  const name = 'MyAwesomeLogger';
  const options = {
    showName: true,
    showDiffLabel: true,
    levels: {
      hint: 'cyan'
    }
  };

  const logger = createLogger(name, options);
  logger.hint('Logger "%s" created with options: %O', name, options);
  ```

## Default Levels

|Name   |Color      |
|-------|-----------|
|log    |white      |
|none   |white      |
|debug  |magenta    |
|info   |blue       |
|success|green      |
|hint   |yellow     |
|warn   |yellow     |
|warning|yellow     |
|error  |red        |
|quit   |red        |
|GET    |bold_green |
|POST   |bold_yellow|
|PUT    |bold_blue  |
|DELETE |bold_red   |
|OPTIONS|bold_cyan  |

## Logger Options

|Name          |Type     |Default|Description                                  |
|--------------|---------|-------|---------------------------------------------|
|enabled       |[bool]   |true   |Enable or disable the logger output          |
|showName      |[bool]   |false  |Prefix logger name to the logged output      |
|showLevelName |[bool]   |true   |Print the log level in logged output         |
|showTimeLabel |[bool]   |false  |Print the current time in the logged output  |
|showDiffLabel |[bool]   |false  |Print the diff time from last logged messaged|
|formatters    |?object  |{}     |Accept additional text formatters            |
|codeMap       |[object] |<emoji>|Define additional code map (i.e. emoji-codes)|
|disableCodeMap|[bool]   |false  |Define code-map conversion (i.e. emoji-codes)|
|levels        |?object  |{}     |Define key/value level name and color pairs  |
|stdout        |?function|       |Custom stdout                                |
|stderr        |?function|       |Custom stderr                                |

## API

### constructor (name: string, props: RearLoggerProps)

Create a new logger with given `name` and options.

#### Parameters

<dl>
<dt>name</dt>
<dd>The logger name. When <code>showName</code> property is set to <code>true</code>, the
name is prefixed to the logged message.</dd>
<dt>props</dt>
<dd>Custom logger properties.</dd>
</dl>

### raw (message: string, ...args: Array<any>): void

Print a `message` directly to the stdout much like a standard `console.log`
would do.

#### Parameters

<dl>
  <dt>message</dt>
  <dd>Message to be logged</dd>
  <dt>args</dt>
  <dd>Additional arguments</dd>
</dl>

### message (level: string, message: string, ...args: Array<any>): void

Format and print a `message` for the given `level`.
Note: usually is more convenient to call the logger's `level` function as in
`logger.info('Hello world')`

#### Parameters

<dl>
<dt>level</dt>
<dd>The level name as defined in the levels options.</dd>
<dt>message</dt>
<dd>Message to be logged.</dd>
<dt>args</dt>
<dd>Additional arguments.</dd>
</dl>

### warn (assert?: boolean, message: string, ...args: Array<any>): void

Format and print a warning message. When an `assert` is provided, the message
is conditionally printed based on the truthyness of the assertion.

#### Parameters

<dl>
<dt>assert</dt>
<dd>Assertion to be test for truthyness.</dd>
<dt>message</dt>
<dd>A warning message to be logged. If an assertion is specified, the message
is printed only when the assertion pass.</dd>
<dt>args</dt>
<dd>Additional arguments.</dd>
</dl>
</dl>

### error (message: string|Error, ...args: Array<any>): void

Format and print an Error's message or a given `message` to the stderr.

#### Parameters

<dl>
<dt>message</dt> 
<dd>A message to be logged or an Error object.</dd>
<dt>args</dt>
<dd>Additional arguments.</dd>
</dl>
  
### highlight (message: string, ...args: Array<any>): void

Format and print the given `message` as highlighted. An
highlighted message is bold and do not print time information.

#### Parameters

<dl>
<dt>message</dt> 
<dd>A message to be logged.</dd>
<dt>args</dt>
<dd>Additional arguments.</dd>
</dl>

### clear (): void

Clear the console

### clearLine (): void

Clear the current line.

### rewriteLine (lines: number, clear?: boolean): void

Move the cursor up for the given number of lines.

#### Parameters

<dl>
<dt>lines</dt> 
<dd>Number of lines to be rewritten.</dd>
<dt>clear</dt>
<dd>Define if the lines being rewritten must be cleared. Default to <em>true</em>.</dd>
</dl>

### hideCursor (): void

Hide the cursor in the console.

### showCursor (): void

Restore cursor visibility in the console.
