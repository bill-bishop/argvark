# argvark
Intuitive command-line argument parsing for Node.js modules

  - String or regex matches are valid.
  - If your regex has at least one grouping ie. (\d), argvark will
      return the first group.

Given the following node process:

    > node some-module -p --age=123 --name="William Bishop"

You can evaluate the arguments like so:

    var args = require('argvark');

    // Flags:
    p = args('-p');                // '-p'

    // Verbose Parameters:
    age = args(/--age=(\d+)/)      // 123
    name = args(/--name="(.+?)"/)  // 'William Bishop'

Use after() when the value is separated from the param by a space:

    > node some-module port 8888

    args.after('port') // 8888

Unmatched patterns evaluate to undefined

    location = args('--location')    // undefined

