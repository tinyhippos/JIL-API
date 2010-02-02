/** 
 * @fileoverview This file is to be used for listing all functions and properties of 
 * JavaScript objects: Message.
 *
 * @version 0.1 
 */
Message.prototype = new Messaging();

/**
 * @class Message is a class which represents a message. It provides important
 * information about a message.<br>
 *         
 * @constructor Construct a new Message object.
 */
function Message() {
};

/**
 * The Id of this Message.
 * 
 * @type String
 */
Message.prototype.messageId = "";

/**
 * The callback number of this Message.
 * 
 * @type String
 */
Message.prototype.callbackNumber = "";

/**
 * The destination of this Message. This is an array of String.
 * 
 * @type Array
 */
Message.prototype.destinationAddress = new Array();

/**
 * The flag "read" for this Message.
 * 
 * @type Boolean
 */
Message.prototype.isRead = new Boolean();

/**
 * The priority of this Message.
 * 
 * @type Boolean
 */
Message.prototype.messagePriority = null;

/**
 * The type of this Message.
 * 
 * @type String
 */
Message.prototype.messageType = "";

/**
 * The subject of this Message.
 * 
 * @type String
 */
Message.prototype.subject = "";

/**
 * The body of this Message.
 * 
 * @type String
 */
Message.prototype.body = "";

/**
 * The source address of this Message. 
 *
 * @type String
 */
Message.prototype.sourceAddress = "";

/**
 * The validityPeriodHours of this Message. <br>
 * <br>
 * For SMS, the valid value for this attribute is:<br>
 * validityPeriodHours = 1  VALIDITY_PERIOD_1_HOUR<br>
 * validityPeriodHours = 2  VALIDITY_PERIOD_12_HOUR<br>
 * validityPeriodHours = 3  VALIDITY_PERIOD_1_DAY<br>
 * validityPeriodHours = 4  VALIDITY_PERIOD_1_WEEK<br>
 * validityPeriodHours = 5  ALIDITY_PERIOD_UNLIMITED 
 *
 * @type Number 
 */
Message.prototype.validityPeriodHours = new Number();

/**
 * The time of this Message.
 * 
 * @type Date
 */
Message.prototype.time = new Date();

/**
 * The Cc Address of this Message. This is an array of String.
 * 
 * @type Array
 */
Message.prototype.ccAddress = new Array();

/**
 * The Bcc Address of this Message. This is an array of String.
 * 
 * @type Array
 */
Message.prototype.bccAddress = new Array()

/**
 * The attachments of this Message. This is an array of Attachment.
 * 
 * @type Array
 */
Message.prototype.attachments = new Array();

/**
 * Add a file to a Message as an attachment. <br>
 * <br>
 * e.g.<br>
 * &nbsp;&nbsp;&nbsp;&nbsp;var msg = Widget.Messaging.createMessage(Widget.Messaging.MessageTypes.MMSMessage);<br> 
 * &nbsp;&nbsp;&nbsp;&nbsp;msg.addAttachment("/sdcard/sun.jpg");
 *
 * @param {String} fileFullName the full name of the file to be added as an attachment.
 * 
 * @returns
 * @type void
 */
Message.prototype.addAttachment = function(fileFullName) {
};

/**
 * Delete an attachment from the Message. <br>
 * <br>
 * e.g.<br>
 * &nbsp;&nbsp;&nbsp;&nbsp;var msg=Widget.Messaging.createMessage(Widget.Messaging.MessageTypes.MMSMessage);<br> 
 * &nbsp;&nbsp;&nbsp;&nbsp;msg.addAttachment("/sdcard/sun.jpg");<br>
 * &nbsp;&nbsp;&nbsp;&nbsp;msg.addAttachment("/sdcard/moon.jpg");<br>
 * &nbsp;&nbsp;&nbsp;&nbsp;var att = msg.attachments;<br>
 * &nbsp;&nbsp;&nbsp;&nbsp;msg.deleteAttachment(att[0]);
 *
 * @param {Attachment} attachment the attachment to be delete from Message.
 * 
 * @returns
 * @type void
 */
Message.prototype.deleteAttachment = function(attachment) {
};


/**
 * Save an attachment in the message. <br>
 * <br>
 * e.g.<br>
 * &nbsp;&nbsp;&nbsp;&nbsp;Widget.Message.saveAttachment("/sdcard/sun.jpg", attachment);<br>
 *
 * @param {String} fileFullName  the full destination file name.
 * @param {Attachment} attachment - the attachment to be saved.
 *
 * @returns
 * @type void
 */
Message.prototype.saveAttachment = function(fileFullName, attachment) {
};

/**
 * Add an address for the message. <br>
 * <br>
 * e.g.<br>
 * &nbsp;&nbsp;&nbsp;&nbsp;var msg = Widget.Messaging.createMessage(Widget.Messaging.MessageTypes.SMSMessage);<br>
 * &nbsp;&nbsp;&nbsp;&nbsp;msg.addAddress("destination", "10086")<br>
 *
 * @param {String} type type of the address to be added. Possible values are "destination", "cc" and "bcc".
 * @param {String} address Address to be added to the destination address list.
 *
 * @returns
 * @type void
 */
Message.prototype.addAddress = function(type, address) {
}

/**
 * Delete an address from the message's destination addresses. <br>
 * <br>
 * e.g.<br>
 * &nbsp;&nbsp;&nbsp;&nbsp;var msg=Widget.Messaging.createMessage(Widget.Messaging.MessageTypes.SMSMessage);<br>
 * &nbsp;&nbsp;&nbsp;&nbsp;msg.addAddress("cc", "10086")<br>
 * &nbsp;&nbsp;&nbsp;&nbsp;msg.addAddress("cc", "13800138000")<br>
 * &nbsp;&nbsp;&nbsp;&nbsp;msg.deleteAddress("cc", "10086")<br>
 *
 * @param {String} type type of the address to be added. Possible values are "destination", "cc" and "bcc".
 * @param {String} address Address to be deleted from the destination address list. 
 *
 * @returns
 * @type void
 */
Message.prototype.deleteAddress = function(type, address) {
}