/*
 * argvark
 *      Intuitive command-line argument parsing for Node.js modules
 *          - String or regex matches are valid.
 *          - If your regex has at least one grouping ie. (\d), argvark will
 *            return the first group.
 *
 *      Given the following node process:
 *          > node some-module -p --age=123 --name="William Bishop"
 *
 *      You can evaluate the arguments like so:
 *          var args = require('argvark');
 *
 *        // Flags:
 *          p = args('-p');                // '-p'
 *
 *        // Verbose Parameters:
 *          age = args(/--age=(\d+)/)      // 123
 *          name = args(/--name="(.+?)"/)  // 'William Bishop'
 *
 *      Unmatched patterns evaluate to undefined
 *          location = require('--location')    // undefined
 */

function getArg(pattern) {
  pattern = pattern instanceof RegExp ? pattern : new RegExp(pattern);
  var argument = (process.argv.filter(function (arg) {
        return pattern.test(arg);
      })[0] || '').match(pattern) || [];
  return argument[1] || argument[0];
}

module.exports = getArg;
