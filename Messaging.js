/** 
 * @fileoverview This file is to be used for listing all functions and properties of 
 * JavaScript objects: Messaging.
 *
 * @version 0.1 
 */
Messaging.prototype = new Object();

/**
 * @class Messaging is the container object for JIL Messaging objects. <br>
 * <br>
 * Messaging is a sub-object of <I>Widget</I>. So we use Messaging in this way: 
 * Widget.Messaging.XXX<br>
 */
function Messaging() {
};
Widget.Messaging.prototype=new Messaging();
/**
 * Create a message. It can be a sms, mms or email message. <br>
 * <br>
 * e.g.<br>
 * &nbsp;&nbsp;&nbsp;&nbsp;
 * var msg = Widget.Messaging.createMessage(Widget.Messaging.MessageTypes.SMSMessage);<br>
 * &nbsp;&nbsp;&nbsp;&nbsp;
 * document.getElementById("div1").innerHTML = msg.messageType;
 * 
 * @param {String} messageType the type of the message, The possible values are: "sms", "mms", "email".
 * 
 * @returns a {@link Message} object.
 * @type {@link Message}
 */
Messaging.prototype.createMessage = function(messageType) {
	return new Message();
};

/**
 * Delete all messages by specified <i>messageType</i> and
 * <i>folderType</i> parameters. <br>
 * <br>
 * e.g.<br>
 * &nbsp;&nbsp;&nbsp;&nbsp;
 * Widget.Messaging.deleteAllMessages(Widget.Messaging.MessageTypes.SMSMessage, Widget.Messaging.MessageFolderTypes.INBOX);
 * 
 * @param {String} messageType the type of the message, the possible values are: "sms", "mms", "email".
 * @param {String} folderType the name of the folder.
 * 
 * @returns
 * @type void
 */
Messaging.prototype.deleteAllMessages = function(messageType, folderType) {
};

/**
 * Delete a message with specified MessageType, FolderType, and message id. <br>
 * <br>
 * e.g.<br>
 * &nbsp;&nbsp;&nbsp;&nbsp;
 * var msg = Widget.Messaging.getMessage(Widget.Messaging.MessageTypes.SMSMessage, Widget.Messaging.MessageFolderTypes.INBOX, 3);<br>
 * &nbsp;&nbsp;&nbsp;&nbsp; 
 * Widget.Messaging.deleteMessage(Widget.Messaging.MessageTypes.SMSMessage, Widget.Messaging.MessageFolderTypes.INBOX, msg.messageId);
 * 
 * @param {String} messageType the type of the message, the possible values are: "sms", "mms", "email".
 * @param {String} folderType the name of the folder.
 * @param {String} id the message id to be deleted.
 * 
 * @returns
 * @type void
 */
Messaging.prototype.deleteMessage = function(messageType, folderType, id) {
};

/**
 * Return a message for the specified MessageType, FolderType, and index value. <br>
 * <br>
 * e.g.<br>
 * &nbsp;&nbsp;&nbsp;&nbsp;
 * var msg = Widget.Messaging.getMessage(Widget.Messaging.MessageTypes.SMSMessage, Widget.Messaging.MessageFolderTypes.INBOX, 3);<br>
 *
 * @param {String} messageType the type of the message, the possible values are: "sms", "mms", "email".
 * @param {String} folderType the name of the folder.
 * @param {Number} index the index of message. This field should be an interger value, starting from 0.    
 *
 * @returns A {@link Message} objects. null value will be returned if get the message failed
 * @type {@link Message}
 */
Messaging.prototype.getMessage = function(messageType, folderType, index) {
	return new Message();
};

/**
 * Query how many messages of a message type are present in the specified folder. <br>
 * <br>
 * e.g.<br>
 * &nbsp;&nbsp;&nbsp;&nbsp;
 * var v = Widget.Messaging.getMessageQuantities(Widget.Messaging.MessageTypes.SMSMessage, 
 * &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
 * Widget.Messaging.MessageFolderTypes.INBOX);
 *
 * @param {String} messageType the type of the message, the possible values are: "sms", "mms", "email".
 * @param {String} folderType the type of the folder.
 *
 * @returns a {@link MessageQuantities} object
 * @type {@link MessageQuantities}
 */
Messaging.prototype.getMessageQuantities = function(messageType, folderType) {
	return new MessageQuantities();
};

/**
 * Attempt to send the specified message. <br>
 * <br>
 * e.g.<br>
 * &nbsp;&nbsp;&nbsp;&nbsp;var msg = Widget.Messaging.createMessage(Widget.Messaging.MessageTypes.SMSMessage);<br>
 * &nbsp;&nbsp;&nbsp;&nbsp;msg.addAddress("destination","10086");<br>
 * &nbsp;&nbsp;&nbsp;&nbsp;Widget.Messaging.sendMessage(msg);
 * 
 * @param {Message} msg the message to be send
 * 
 * @returns
 * @type void
 */
Messaging.prototype.sendMessage = function(msg) {
};

/**
 * Move a message to folder. This Method move a message to a folder specified by name.<br>
 * <br>
 * e.g.<br>
 * &nbsp;&nbsp;&nbsp;&nbsp;
 * var msg = Widget.Messaging.getMessage(Widget.Messaging.MessageTypes.SMSMessage, Widget.Messaging.MessageFolderTypes.INBOX, 3);<br>
 * &nbsp;&nbsp;&nbsp;&nbsp;
 * Widget.Messaging.moveMessageToFolder(msg, Widget.Messaging.MessageFolderTypes.DRAFTS);<br>
 *
 * @param {Message} msg the message to be moved
 * @param {String} folderType the destination folder that the message will be moved.  
 * 
 * @returns
 * @type void
 */
Messaging.prototype.moveMessageToFolder = function(msg, folderType) {
};

/**
 * Copy a message to folder. This Method copy a message to a folder specified by name.<br>
 * <br>
 * e.g.<br>
 * &nbsp;&nbsp;&nbsp;&nbsp;
 * var msg = Widget.Messaging.getMessage(Widget.Messaging.MessageTypes.SMSMessage, Widget.Messaging.MessageFolderTypes.SENTBOX, 0);<br>
 * &nbsp;&nbsp;&nbsp;&nbsp;
 * Widget.Messaging.copyMessageToFolder(msg, Widget.Messaging.MessageFolderTypes.DRAFTS);<br>
 *
 * @param {Message} msg the message to be copied.
 * @param {String} folderType the destination folder that the message will be copied to. 
 * 
 * @returns
 * @type void
 */
Messaging.prototype.copyMessageToFolder = function(msg, folderType) {
};

/**
 * Create a folder for specified message type. <br>
 * <br>
 * e.g.<br>
 * &nbsp;&nbsp;&nbsp;&nbsp;
 * Widget.Messaging.createFolder(Widget.Messaging.MessageTypes.SMSMessage, "myfolder");<br>
 *
 * @param {String} messageType the type of the message. The possible values are: "sms", "mms", "email".
 * @param {String} folderName the name of the folder to be created.
 * 
 * @returns
 * @type void
 */
Messaging.prototype.createFolder = function(messageType, folderName) {
};

/**
 * Delete a folder from folders of specified message type. <br>
 * <br>
 * e.g.<br>
 * &nbsp;&nbsp;&nbsp;&nbsp;
 * Widget.Messaging.deleteFolder(Widget.Messaging.MessageTypes.SMSMessage, "myfolder");<br>
 * &nbsp;&nbsp;&nbsp;&nbsp;
 *
 * @param {String} messageType the type of the message. The possible values are: "sms", "mms", "email".
 * @param {String} folderName the name of the folder to be deleted.
 * 
 * @returns
 * @type void
 */
Messaging.prototype.deleteFolder = function(messageType, folderName) {
};

/**
 * This is a callback function which will be triggered when a new message comes. <br>
 * <br>
 * e.g.<br>
 * &nbsp;&nbsp;&nbsp;&nbsp;Widget.Messaging.onMessageArrived = function(msg) {<br>
 * &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;alert("new Message's coming from: "+msg.sourceAddress);<br>
 * &nbsp;&nbsp;&nbsp;&nbsp;}<br>
 * 
 * @param {Message} msg the new incoming message 
 * 
 * @returns
 * @type void
 */
Messaging.prototype.onMessageArrived = function(msg) {
};

/**
 * This is a callback function which will be triggled when send a message failed. <br>
 * <br>
 * e.g.<br>
 * &nbsp;&nbsp;&nbsp;&nbsp;
 * Widget.Messaging.onMessageSendingFailure = function(msg, errCode) {<br>
 * &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
 * alert("send message failed, error code: "+errCode);<br>
 * &nbsp;&nbsp;&nbsp;&nbsp;
 * }<br>
 * 
 * @param {Message} msg the message sending failed
 * @param {String} errcode possible values maybe: "1: No networking", "2: Unable to establish network connection", "3: Incompatible payload", "4: Unknown error".
 * 
 * @returns
 * @type void
 */
Messaging.prototype.onMessageSendingFailure = function(msg, errcode) {
};

/**
 * Return an array of the folder names available for the specified message type. <br>
 * <br>
 * e.g.<br>
 * &nbsp;&nbsp;&nbsp;&nbsp;
 * var folderNames = Widget.Messaging.getFolderNames(Widget.Messaging.MessageTypes.SMSMessage);
 * 
 * @param {String} messageType the type of the message, the possible values are: "sms", "mms", "email".
 * 
 * @returns An array of String objects.
 * @type Array
 */
Messaging.prototype.getFolderNames = function(messageType) {
	return new Array();
};


/**
 * This method search messages with designed condition in specified message box. 
 * This is an asynchronous function, and will invoke Messaging.onMessagesFound() 
 * when search completes. <br>
 * <br>
 * e.g.<br>
 * &nbsp;&nbsp;&nbsp;&nbsp;var msg = Widget.Messaging.createMessage(Widget.Messaging.MessageTypes.SMSMessage);<br>
 * &nbsp;&nbsp;&nbsp;&nbsp;msg.addAddress("destination","10086");<br>
 * &nbsp;&nbsp;&nbsp;&nbsp;Widget.Messaging.onMessagesFound = myCallBack;<br>
 * &nbsp;&nbsp;&nbsp;&nbsp;Widget.Messaging.findMessages(msg, Widget.Messaging.MessageFolderTypes.INBOX, 0, 9);<br>
 * &nbsp;&nbsp;&nbsp;&nbsp;function myCallBack(messages) {<br>
 * &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;var size = messages.length;<br>
 * &nbsp;&nbsp;&nbsp;&nbsp;}<br>
 *
 * @param {Message} comparisonMsg the comparison messaqge which defines the rules for finding.
 * @param {String} folderType the name of the folder. Possible values are "inbox", "outbox", "sentbox", "drafts" and "all".
 * @param {Number} startInx an integer value to specify the index the returning search results starts from
 * @param {Number} endInx an integer value to specify the index to which the returning search results ends at 
 *
 * @returns 
 * @type void
 */
Messaging.prototype.findMessages = function(comparisonMsg, folderType, startInx, endInx) {
};

/**
 * Callback method to invoke when Messaging.findMessages completes. <br>
 * Called asynchronously when the message send to the recipient failed due to mail format error or 
 * mail/smsc server rejected or network error.
 * <br>
 * e.g.<br>
 * &nbsp;&nbsp;&nbsp;&nbsp;var msg = Widget.Messaging.createMessage(Widget.Messaging.MessageTypes.SMSMessage);<br>
 * &nbsp;&nbsp;&nbsp;&nbsp;msg.addAddress("destination","10086");<br>
 * &nbsp;&nbsp;&nbsp;&nbsp;Widget.Messaging.onMessagesFound = myCallBack;<br>
 * &nbsp;&nbsp;&nbsp;&nbsp;Widget.Messaging.findMessages(msg, Widget.Messaging.MessageFolderTypes.INBOX, 0, 9);<br>
 * &nbsp;&nbsp;&nbsp;&nbsp;function myCallBack(messages) {<br>
 * &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;alert("matched message number: "+ messages.length);<br>
 * &nbsp;&nbsp;&nbsp;&nbsp;}<br>
 *
 * @param {Array} messagesFound An array of {@link Message} objects, null value will be returned if no matched messages
 * @param {String} folderType the name of the folder.
 *
 * @returns
 * @type void
 */
Messaging.prototype.onMessagesFound = function(messagesFound, folderType) {
};

/**
 * Get current Email account. <br>
 * <br>
 * e.g.<br>
 * &nbsp;&nbsp;&nbsp;&nbsp;var account = Widget.Messaging.getCurrentEmailAccount();<br>
 * &nbsp;&nbsp;&nbsp;&nbsp;alert(account.accountName);<br>
 *
 * @returns Email account Object
 * @type {Account}
 */
Messaging.prototype.getCurrentEmailAccount = function(){
	return new Account();
};

/**
 * Get all Email accounts. <br>
 * <br>
 * e.g.<br>
 * &nbsp;&nbsp;&nbsp;&nbsp;var account = Widget.Messaging.getEmailAccounts();<br>
 * &nbsp;&nbsp;&nbsp;&nbsp;alert("Email account number = "+account.length);<br>
 *
 * @returns Array of Email account Objects
 * @type Array
 */
Messaging.prototype.getEmailAccounts = function(){
	return new Array();
};

/**
 * Set the Email account specified by account ID as default Email account. <br>
 * <br>
 * e.g.<br>
 * &nbsp;&nbsp;&nbsp;&nbsp;var account = Widget.Messaging.getEmailAccounts();<br>
 * &nbsp;&nbsp;&nbsp;&nbsp;Widget.Messaging.setCurrentEmailAccount(account[0].accountId);<br>
 *
 * @param {String} AccountId Email account Id
 *
 * @returns
 * @type void
 */
Messaging.prototype.setCurrentEmailAccount = function(AccountId){
};

/**
 * Delete an Email account specified by account ID. <br>
 * <br>
 * e.g.<br>
 * &nbsp;&nbsp;&nbsp;&nbsp;var account = Widget.Messaging.getEmailAccounts();<br>
 * &nbsp;&nbsp;&nbsp;&nbsp;Widget.Messaging.deleteEmailAccount(account[1].accountId);<br>
 *
 * @param {String} AccountId Email account Id
 *
 * @returns
 * @type void
 */
Messaging.prototype.deleteEmailAccount = function(AccountId) {
};

/**
 * Email account. 
 * 
 * @type Account
 */
Messaging.prototype.Account = new Account();

/**
 * Attachment types. <br>
 * <br>
 * e.g.<br>
 * &nbsp;&nbsp;&nbsp;&nbsp;var attachment = new Widget.Messaging.Attachment();<br>
 *
 * @type Attachment
 */
Messaging.prototype.Attachment = new Attachment();

/**
 * Message Object. 
 * 
 * @type Message
 */
Messaging.prototype.Message = new Message();

/**
 * Message folder types. 
 * 
 * @type MessageFolderTypes
 */
Messaging.prototype.MessageFolderTypes = new MessageFolderTypes();

/**
 * MessageQuantities types. 
 * 
 * @type MessageQuantities
 */
Messaging.prototype.MessageQuantities = new MessageQuantities();

/**
 * Message types. 
 * 
 * @type MessageTypes
 */
Messaging.prototype.MessageTypes = new MessageTypes();