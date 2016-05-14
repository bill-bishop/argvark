var getArg = require('..');
var assert = require('chai').assert;

process.argv = ['node', 'some-module',
  '-p',
  '-abCD',
  '--foo=bar',
  'username',
  'william-mcmillian'
];

describe('when no match', function () {
  it('should return undefined', function () {
    assert.equal(getArg('--bar'), undefined);
    assert.equal(getArg(/argvark/), undefined);
  });

  describe('.flag()', function () {
    it('should return false', function () {
      assert.equal(getArg.flag('X'), false);
    });
  });

  describe('.after()', function () {
    it('should return undefined', function () {
      assert.equal(getArg.after('/A'), undefined);
    });
  });
});

describe('when match is not at start of argument', function () {
  it('should return undefined', function () {
    assert.equal(getArg('foo'), undefined);
  });
});

describe('string pattern', function () {
  it('should return the matching portion of the argument', function () {
    assert.equal(getArg('-p'), '-p');
    assert.equal(getArg('--foo'), '--foo');
  });
});

describe('.after(pattern)', function () {
  it('should return the parameter after the matched pattern', function () {
    assert.equal(getArg.after('username'), 'william-mcmillian');
  });
});

describe('.flag(pattern)', function () {
  it('should return true', function () {
    assert.equal(getArg.flag('p'), true);
    assert.equal(getArg.flag('D'), true);
  });
});

describe('regex pattern', function () {
  describe('with groupings', function () {
    it('should return the first group', function () {
      assert.equal(getArg(/--foo=(\w+)/), 'bar');
      assert.equal(getArg(/--foo=(\w+)(r)/), 'ba');
    });
  });

  describe('with no groupings', function () {
    it('should return the match', function () {
      assert.equal(getArg(/-\w*a/), '-a');
      assert.equal(getArg(/-\w*C/), '-abC');
    });
  });
});
