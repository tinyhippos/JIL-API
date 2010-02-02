/** 
 * @fileoverview This file is to list all functions and properties of 
 * JavaScript object: File.
 *  
 * @version 0.1 
 */
File.prototype = new Object();

/**
 * @class File is a sub-object of <I>Widget.Device</I>.<br>
 *
 */
function File() {
};
Widget.Device.File.prototype=new File();
/**
 * The Date on which the file was first created. If the host operating system does not 
 * support this value, then the value will be the same as that of lastModifyDate. If 
 * neither createDate nor lastModifyDate is supported, then the value will be undefined.
 * 
 * @type Date
 */
File.prototype.createDate = new Date();

/**
 * Property indicating the name of the file. This does not include path information. 
 * E.g., "readme.txt"
 *
 * @type String
 */
File.prototype.fileName = "";

/**
 * This is the full path to the file on the file system. The value does not include the 
 * file name. E.g., "/local/data/".<br>
 * Note that the right slash (/) is adopted as a directory separator and will be supported 
 * by the widget runtime regardless of the underlying operating system.
 * 
 * @type String
 */
File.prototype.filePath = "";

/** 
 * The size of the file in bytes.
 * 
 * @type Number
 */
File.prototype.fileSize = new Number();;  	 
 
/** 
 * This is a boolean indicating whether the file is a directory. If it is a directory, 
 * then the file size is 4096.
 * 
 * @type Boolean
 */
File.prototype.isDirectory = new Boolean(); 
	  
/** 
 * The Date at which the file was last modified. If the host operating system does not 
 * support this value, then the value will be the same as that of createDate. If neither 
 * createDate nor lastModifyDate is supported, then the value will be undefined.
 * 
 * @type Date
 */
File.prototype.lastModifyDate = new Date();