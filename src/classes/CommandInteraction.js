'use strict';

const BaseCommandInteraction = require('./BaseCommandInteraction.js');
const { deconstructor } = require('discord.js').SnowflakeUtil;

/**
 * @extends (BaseCommandInteraction)
 */
class CommandInteraction extends BaseCommandInteraction {
	/**
	 * @param (Client)
	 * @param (object)
	 */
	constructor(client, data = {}) {
		super(client, data);
	};
	/**
	 * @return (boolean)
	 */
	get deferred() {
		return this.reply.deferred;
	};
	/**
	 * @return (boolean)
	 */
	get replied() {
		return this.reply.replied;
	};
	/**
	 * @return (boolean)
	 */
	get ephemeral() {
		return this.reply.ephemeral;
	};
	/**
	 * @return (number)
	 */
	get createdTimestamp() {
		return deconstructor(this.id).timestamp;
	};
	/**
	 * @return (Date)
	 */
	get createdDate() {
		return new Date(this.createdTimestamp);
	};
};

module.exports = CommandInteraction;