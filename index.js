function toRegex(pattern) {
  if(pattern instanceof RegExp) {
    pattern = pattern.toString().replace(/^\/\^?(.+)\//, '$1'); // strip leading ^
  }
  return new RegExp('^' + pattern); // pattern must match start of word
}

function getArg(pattern) {
  pattern = toRegex(pattern);
  var argument = (process.argv.filter(function (arg) {
    return pattern.test(arg);
  })[0] || '').match(pattern) || [];
  return argument[1] || argument[0];
}

getArg.after = function (pattern) {
  var result;
  pattern = toRegex(pattern);
  process.argv.forEach(function (arg, i) {
    if(!result && pattern.test(arg)) {
      result = process.argv[i + 1];
    }
  });
  return result;
};

getArg.flag = function (pattern) {
  return !!getArg(new RegExp('-.*' + pattern));
};

module.exports = getArg;
