require('./settings');
const fs = require('fs');
const chalk = require('chalk');

if (fs.existsSync('./Language/' + global.lang + '.json')) {
    console.log(
        chalk.green.bold('Loading ' + global.lang + ' language...')
    );

    var json = JSON.parse(fs.readFileSync('./Language/' + global.lang + '.json'));
} else {
    console.log(
        chalk.red.bold('The language you entered is not available here. English language is selected')
    );

    var json = JSON.parse(fs.readFileSync('./Language/EN.json'));
}

function getString(file) {
    return json['STRINGS'][file];
}

module.exports = {
    language: json,
    getString: getString
}
