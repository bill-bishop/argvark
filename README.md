# argvark
Intuitive command-line argument parsing for Node.js modules

# Install

    npm install argvark


# Usage

    > node some-module -p --age=123 --name="William Bishop"

    var args = require('argvark');

    // Simple matches:
    p = args('-p');                // '-p'

    // Verbose Parameters:
    age = args(/--age=(\d+)/)      // 123
    name = args(/--name="(.+?)"/)  // 'William Bishop'

Use after() when the value is separated from the param by a space:

    > node some-module port 8888

    args.after('port') // 8888

Use flag() when you want a Boolean value indicating the flag presence, or when
you don't want to build your own pattern just to check flags. Standard flag
format is assumed: -[flags]

    > node some-module -abCD

    args.flag('b') // true
    args.flag('D') // true

    args.flag('X') // false

Unmatched patterns evaluate to undefined

    location = args('--location')    // undefined

