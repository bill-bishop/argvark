# argvark
Intuitive command-line argument parsing for Node.js modules. 

If you are building a simple CLI, the `x-cli` package (which uses argvark) may suit your needs: https://www.npmjs.com/package/x-cli

### Install

    npm install argvark


### Usage

    > node some-module -p --age=123 --name="John Doe"

    var argv = require('argvark');

    // Simple matches:
    p = argv('-p');                // '-p'

    // Verbose Parameters:
    age = argv(/--age=(\d+)/)      // 123
    name = argv(/--name="(.+?)"/)  // 'John Doe'

Use after() when the value is separated from the param by a space:

    > node some-module port 8888

    argv.after('port') // 8888

Use flag() when you want a Boolean value indicating the flag presence, or when
you don't want to build your own pattern just to check flags. This uses `!!argv(/-\w+[FLAG]/)`
so it supports both standard flag formats:

    > node some-module -abCD
    > node some-module -a -b -C -D

    argv.flag('b') // true
    argv.flag('D') // true

    argv.flag('X') // false

Unmatched patterns evaluate to undefined

    location = argv('--location')    // undefined


### Making changes
Just run `npm test` to make sure everything is still working. Add tests for
fixes etc.
