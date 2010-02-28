/** 
 * @fileoverview This file is to be used for listing all functions and properties of 
 * JavaScript objects: MessageTypes.
 *
 * @version 0.1 
 */
MessageTypes.prototype = new Messaging();

/**
 * @class MessageTypes contains values that are referenced by the message type parameter 
 * in various Messaging service functions.<br>
 * 
 * @constructor
 */
function MessageTypes() {
};

/**
 * Identifier for Email Message Types. <br>
 * <br>
 * e.g.<br>
 * &nbsp;&nbsp;&nbsp;&nbsp;var msgType = Widget.Messaging.MessageTypes.EmailMessage;
 * 
 * @type String
 */
MessageTypes.prototype.EmailMessage = "email";

/**
 * Identifier for MMS Message Types. <br>
 * <br>
 * e.g.<br>
 * &nbsp;&nbsp;&nbsp;&nbsp;var msgType = Widget.Messaging.MessageTypes.MMSMessage;
 * 
 * @type String
 */
MessageTypes.prototype.MMSMessage = "mms";

/**
 * Identifier for SMS Message Types. <br>
 * <br>
 * e.g.<br>
 * &nbsp;&nbsp;&nbsp;&nbsp;var msgType = Widget.Messaging.MessageTypes.SMSMessage;
 * 
 * @type String
 */
MessageTypes.prototype.SMSMessage = "sms";