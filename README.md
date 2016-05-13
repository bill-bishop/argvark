# argvark
Intuitive command-line argument parsing for Node.js modules

### Install

    npm install argvark


### Usage

    > node some-module -p --age=123 --name="William Bishop"

    var argv = require('argvark');

    // Simple matches:
    p = argv('-p');                // '-p'

    // Verbose Parameters:
    age = argv(/--age=(\d+)/)      // 123
    name = argv(/--name="(.+?)"/)  // 'William Bishop'

Use after() when the value is separated from the param by a space:

    > node some-module port 8888

    argv.after('port') // 8888

Use flag() when you want a Boolean value indicating the flag presence, or when
you don't want to build your own pattern just to check flags. Standard flag
format is assumed: -[flags]

    > node some-module -abCD

    argv.flag('b') // true
    argv.flag('D') // true

    argv.flag('X') // false

Unmatched patterns evaluate to undefined

    location = argv('--location')    // undefined


### Making changes
Just run `npm test` to make sure everything is still working. Add tests for
fixes etc.
