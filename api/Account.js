/** 
 * @fileoverview This file is to be used for listing all functions and properties of 
 * JavaScript objects: Account.
 *
 * @version 0.1 
 */
Account.prototype = new Messaging();

/**
 * @class Account defines the Email account Object which is referenced by some of 
 * Messaging Service APIs. <br>
 * 
 * @constructor
 */
function Account() {
};

/**
 * Identifier for Email Account ID. <br>
 * 
 * @type String
 */
Account.prototype.accountId = new String();

/**
 * Identifier for Email account Name. <br>
 *
 * @type String
 */
Account.prototype.accountName = new String();
