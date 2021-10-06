'use strict';

const BaseApplication = require('./BaseApplication.js');
const ApplicationCommand = require('./ApplicationCommand.js');
const ApplicationCommandAll = require('./ApplicationCommandAll.js');

/**
 * @extends (BaseApplication)
 */
class GlobalApplication extends BaseApplication {
	/**
	 * @param (Client) client from discord.js
	 */
	constructor(client) {
		super(client);
	};
	/**
	 * @param (commandId)
	 * @return (ApplicationCommand)
	 */
	commands(commandId) {
		const options = {
			commandId: commandId
		};
		return new ApplicationCommand(this.client, options);
	};
	/**
	 * @return (ApplicationCommandAll)
	 */
	get commands() {
		const options = {};
		return new ApplicationCommandAll(this.client, options);
	};
};