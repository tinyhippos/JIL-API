/** 
 * @fileoverview This file is to be used for listing all functions and properties of 
 * JavaScript objects: MessageFolderTypes.
 *
 * @version 0.1 
 */
MessageFolderTypes.prototype = new Object();

/**
 * @class MessageFolderTypes contains common values that are referenced by the 
 * FolderType parameter of various MessagingService functions. This is not necessarily 
 * inclusive since custom folders can be defined.<br>
 * 
 * @constructor
 */
function MessageFolderTypes() {
};

/**
 * The drafts folder. <br>
 * <br>
 * e.g.<br>
 * &nbsp;&nbsp;&nbsp;&nbsp;var msgFolderType = Widget.Messaging.MessageFolderTypes.DRAFTS;
 * 
 * @type String
 */
MessageFolderTypes.prototype.DRAFTS = "drafts";

/**
 * The inbox folder. <br>
 * <br>
 * e.g.<br>
 * &nbsp;&nbsp;&nbsp;&nbsp;var msgFolderType = Widget.Messaging.MessageFolderTypes.INBOX;
 * 
 * @type String
 */
MessageFolderTypes.prototype.INBOX = "inbox";

/**
 * The outbox folder. <br>
 * <br>
 * e.g.<br>
 * &nbsp;&nbsp;&nbsp;&nbsp;var msgFolderType = Widget.Messaging.MessageFolderTypes.OUTBOX;
 * 
 * @type String
 */

MessageFolderTypes.prototype.OUTBOX = "outbox";
/**
 * The sentbox folder. <br>
 * <br>
 * e.g.<br>
 * &nbsp;&nbsp;&nbsp;&nbsp;var msgFolderType = Widget.Messaging.MessageFolderTypes.SENTBOX;
 * 
 * @type String
 */
MessageFolderTypes.prototype.SENTBOX = "sentbox";