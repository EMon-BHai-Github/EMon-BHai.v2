const chalk = require('chalk');

module.exports = (data, option) => {
	switch (option) {
		case "warn":
			console.log(chalk.yellow('[ ❕  It's wrong ] » ') + data);
			break;
		case "error":
			console.log(chalk.red('[ ❕ It's wrong ] » ') + data);
			break;
		default:
			console.log(chalk.magenta(`${option} » `) + data);
			break;
	}
}

module.exports.loader = (data, option) => {
	switch (option) {
		case "warn":
			console.log(chalk.yellow('[EMon-BHai ] » ') + data);
			break;
		case "error":
			console.log(chalk.red('[EMon-BHai ] » ') + data);
			break;
		default:
			console.log(chalk.green(`[EMon-BHai ] » `) + data);
			break;
	}
						 }
