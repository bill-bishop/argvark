var argv = require('..');

var commands = ['push', 'pull'];
var helpMsg = 'Commands:\n\tnode example [' + commands.join(', ') + ']' +
  '\nFor more detailed help, type:\n\tnode example help [' + commands.join(', ') + ']';
var detailedHelp = {
  push: 'node example push [filepath] -m "Message"',
  pull: 'node example pull [filepath]'
};

// Let's let the user ask for help with 'help' or '-h'
if (argv('help') || argv.flag('h')) {
  var detailedMsg = detailedHelp[argv.after('help')];

  if (!detailedMsg) {
    console.log('\n' + helpMsg + '\n');
  }
  else {
    // submenus for help [command]
    console.log('\n' + detailedMsg + '\n');
  }
}
else {
  console.log('\nFor help, type:\n\tnode example help\n');
}
