/** 
 * @fileoverview This file is to be used for listing all functions and properties of 
 * JavaScript objects: MessageQuantities.
 *
 * @version 0.1 
 */
MessageQuantities.prototype = new Object();

/**
 * @class MessageQuantities contains various message quantities that would apply to Folder 
 * for a message type. This is returned by the Messaging.getMessageQuantities method.<br>
 * 
 * @constructor
 */
function MessageQuantities() {
};

/**
 * Total found messages returned by query. <br>
 * <br>
 * e.g.<br>
 * &nbsp;&nbsp;&nbsp;&nbsp;var msgType = Widget.Messaging.MessageTypes.SMSMessage;<br>
 * &nbsp;&nbsp;&nbsp;&nbsp;var folderType = Widget.Messaging.MessageFolderTypes.INBOX;<br>
 * &nbsp;&nbsp;&nbsp;&nbsp;var v = Widget.Messaging.getMessageQuantities(msgType, folderType);<br>
 * &nbsp;&nbsp;&nbsp;&nbsp;var totalSMSCount = v.totalMessageCnt;
 * 
 * @type Number
 */
MessageQuantities.prototype.totalMessageCnt = new Number();

/**
 * Total read messages returned by query.
 * 
 * @type Number
 */
MessageQuantities.prototype.totalMessageReadCnt = new Number();

/**
 * Total unread messages returned by query.
 * 
 * @type Number
 */
MessageQuantities.prototype.totalMessageUnreadCnt = new Number();