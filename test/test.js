var getArg = require('..');
var assert = require('chai').assert;

process.argv = ['node', 'some-module',
  '-p',
  '-abCD',
  '--foo=bar'
];

describe('when no match', function () {
  it('should return undefined', function () {
    assert.equal(getArg('--bar'), undefined);
    assert.equal(getArg(/argvark/), undefined);
  });
});

describe('string pattern', function () {
  it('should return the matching portion of the argument', function () {
    assert.equal(getArg('-p'), '-p');
    assert.equal(getArg('--foo'), '--foo');
  });
});

describe('regex pattern', function () {
  describe('with groupings', function () {
    it('should return the first group', function () {
      assert.equal(getArg(/--foo=(\w+)/), 'bar');
    });
  });

  describe('with no groupings', function () {
    it('should return the match', function () {
      assert.equal(getArg(/-\w*a/), '-a');
      assert.equal(getArg(/-\w*C/), '-abC');
    });
  });
});
