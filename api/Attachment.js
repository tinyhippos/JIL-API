/** 
 * @fileoverview This file is to be used for listing all functions and properties of 
 * JavaScript objects: Attachment.
 *
 * @version 0.1 
 */
Attachment.prototype = new Messaging();

/**
 * @class Attachment is a class which represents an Attachment. It provides 
 * important information about an Attachment.<br>
 *
 * @constructor
 */
function Attachment() {
};
//Widget.Messaging.Attachment.prototype= new Attachment();
/**
 * The name of this Attachment. <br>
 * <br>
 * e.g.<br>
 * &nbsp;&nbsp;&nbsp;&nbsp;var attachment = new Widget.Messaging.Attachment();<br>
 * &nbsp;&nbsp;&nbsp;&nbsp;attachment.fileName = "/local/test.mp3";
 * 
 * @type String
 */
Attachment.prototype.fileName = "";

/**
 * The MIME type of this Attachment.
 * 
 * @type String
 */
Attachment.prototype.MIMEType = "";

/**
 * The size of this Attachment. The units are bytes. <br>
 * <br>
 * e.g.<br>
 * &nbsp;&nbsp;&nbsp;&nbsp;var attachment = new Widget.Messaging.Attachment();<br>
 * &nbsp;&nbsp;&nbsp;&nbsp;attachment.size = 1024;
 * 
 * @type Number
 */
Attachment.prototype.size = new Number();