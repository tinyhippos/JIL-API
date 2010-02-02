/** 
 * @fileoverview This file is to be used for listing all functions and properties of 
 * JavaScript objects: Device. 
 *  
 * @version 0.1 
 */
Device.prototype = new Object();

/**
 * @class Device provides access to the Device. <br>
 * <br>
 * All the file/directory functions can manipulate entire file system, except that 
 * some methods may fail as the permission of file or directoy. <br>
 * <br>
 * Usally, "/local" and "/sdcard" (if Micro SD card is inserted) directory can be used 
 * by most copy/delete/create functions.<br>
 */
function Device() {
};
Widget.Device.prototype=new Device();
/**
 * This provides access to a File object located at the specified full path and name. 
 * This fullName should correspond to the <I>fullName</I> property of the file, which 
 * includes the path and the file name. A right slash ('/') is used as the directory 
 * separator. This method also applies to directories.<br> 
 * <br>
 * e.g.<br>
 * &nbsp;&nbsp;&nbsp;&nbsp;var v = Widget.Device.getFile("/sdcard/usr/mydata");
 * 
 * @param {String} fullName The full file name
 * 
 * @returns File object as a reference of the specified file. A null value is returned 
 * if the file is not found at the specified location;
 * @type File
 */
Device.prototype.getFile = function(fullName) {
	return new File();
};

/**
 * Get array of names of all files in the specified directory. <br>
 * <br>
 * e.g.<br>
 * &nbsp;&nbsp;&nbsp;&nbsp;var v = Widget.Device.getDirectoryFileNames("/sdcard/usr/");
 *    
 * @param {String} sourceDirectory The directory's full name to get files.
 * 
 * @returns Returns an array of the names for all files found in the specified path. 
 * An empty array is returned if no files are found. A null value is returned if the 
 * specified path is not valid.
 * @type Array
 */
Device.prototype.getDirectoryFileNames = function(sourceDirectory) {
	return new Array();
};

/**
 * This method moves the specified file to the path and file name specified in the 
 * destinationFullName. If success, the source file is removed from its original 
 * location and placed in the new location with the new file name. The new file's 
 * fullName property will be that specified by the destinationFullName value in 
 * this function.This method also applies to directories. <br>
 * <br>
 * e.g.<br>
 * &nbsp;&nbsp;&nbsp;&nbsp;var v = Widget.Device.moveFile("/sdcard/usr/a", "/sdcard/usr/b");   
 * 
 * @param {String} originalFile The full name of file to be moved.
 * @param {String} destinationFullName The full name of destination file.
 * 
 * @returns A boolean is returned indicating the success of the operation.
 * @type Boolean  
 */
Device.prototype.moveFile = function(originalFile, destinationFullName) {
	return new Boolean();
};

/**
 * This method copies the specified file to the path and file name specified in the 
 * destinationFullName. The new file's fullName property will be that specified by 
 * the destinationFullName value in this function.This method also applies to directories. <br>
 * <br>
 * e.g.<br>
 * &nbsp;&nbsp;&nbsp;&nbsp;var v = Widget.Device.copyFile("/sdcard/usr/a", "/sdcard/usr/b");
 *    
 * @param {String} originalFile The full name of file to be copied.
 * @param {String} destinationFullName The full name of destination file.
 * 
 * @returns A boolean is returned indicating the success of the operation.
 * @type Boolean  
 */
Device.prototype.copyFile = function(originalFile, destinationFullName) {
	return new Boolean();
};

/*
 * This method create the folder located at the specified fullName. The full name 
 * includes the path and folder name. <br>
 * <br>
 * e.g.<br>
 * &nbsp;&nbsp;&nbsp;&nbsp;var v = Widget.Device.createFolder("/sdcard/usr/");
 * 
 * @param {String}
 *            destinationFullName The full name of folder to be created.
 * 
 * @returns A boolean is returned indicating the success of the operation.
 * @type Boolean

Device.prototype.createFolder = function(destinationFullName) {
	return new Boolean();
};
*/

/*
 * This method delete the folder located at the specified fullName. The full name 
 * includes the path and folder name. <br>
 * <br>
 * e.g.<br>
 * &nbsp;&nbsp;&nbsp;&nbsp;var v = Widget.Device.deleteFolder("/sdcard/usr/");
 * 
 * @param {String}
 *            destinationFullName The full name of folder to be deleted.
 * 
 * @returns A boolean is returned indicating the success of the operation.
 * @type Boolean

Device.prototype.deleteFolder = function(destinationFullName) {
	return new Boolean();
};
*/

/*
 * This method moves the specified folder to the path and folder name specified
 * in the destinationFullName. If success, the source folder is removed from
 * its original location and placed in the new location with the new folder
 * name. The new folder's fullName property will be that specified by the
 * destinationFullName value in this function. <br>
 * <br>
 * e.g.<br>
 * &nbsp;&nbsp;&nbsp;&nbsp;var v = Widget.Device.moveFolder("/sdcard/usr/a/", "/sdcard/usr/b/");
 * 
 * @param {String}
 *            originalFolder The full name of folder to be moved.
 * @param {String}
 *            destinationFolder The full name of destination folder.
 * 
 * @returns A boolean is returned indicating the success of the operation.
 * @type Boolean

Device.prototype.moveFolder = function(originalFolder, destinationFolder) {
	return new Boolean();
};
*/

/*
 * This method copies the specified folder to the path and folder name specified 
 * in the destinationFullName. The new folder's fullName property will be that 
 * specified by the destinationFullName value in this function. <br>
 * <br>
 * e.g.<br>
 * &nbsp;&nbsp;&nbsp;&nbsp;var v=Widget.Device.copyFolder("/sdcard/usr/a/", "/sdcard/usr/b/");
 * 
 * @param {String}
 *            originalFolder The full name of folder to be copied.
 * @param {String}
 *            destinationFolder The full name of destination folder.
 * 
 * @returns A boolean is returned indicating the success of the operation.
 * @type Boolean

Device.prototype.copyFolder = function(originalFolder, destinationFolder) {
	return new Boolean();
};
*/

/**
 * This method create the file located at the specified full name. The full name
 * includes the path and file name. <br>
 * <br>
 * e.g.<br>
 * &nbsp;&nbsp;&nbsp;&nbsp;var v = Widget.Device.createFile("/sdcard/usr/a");
 * 
 * @param {String}
 *            destinationFullName The full name of file to be created.
 * 
 * @returns A boolean is returned indicating the success of the operation.
 * @type Boolean
 */
Device.prototype.createFile = function(destinationFullName) {
	return new Boolean();
};


/**
 * This method deletes the file located at the specified fullName. The full name 
 * includes the path and file name. This method also applies to directories. <br>
 * <br>
 * e.g.<br>
 * &nbsp;&nbsp;&nbsp;&nbsp;var v = Widget.Device.deleteFile("/sdcard/usr/a");
 *    
 * @param {String} destinationFullName The full name of file to be deleted.
 * 
 * @returns A boolean is returned indicating the success of the operation.
 * @type Boolean  
 */
Device.prototype.deleteFile = function(destinationFullName) {
	return new Boolean();
};

/**
 * This method returns an array of Files on all file systems that match the 
 * specified File. Widget can specify only search a range of files between 
 * startInx and endInx. 
 * <br>
 * This is an asynchronous function, and will invoke Device.onFilesFound() 
 * when search complete.<br>
 * <br>
 * e.g.<br>
 * &nbsp;&nbsp;&nbsp;&nbsp;Widget.Device.onFilesFound = myCallBack;<br>
 * &nbsp;&nbsp;&nbsp;&nbsp;var v = Widget.Device.findFiles(matchfile, 0, 9);<br>
 * &nbsp;&nbsp;&nbsp;&nbsp;function myCallBack(files) {<br>
 * &nbsp;&nbsp;&nbsp;&nbsp;}<br>
 *    
 * @param {File} matchFile The <i>File</i> object as a match file 
 * @param {Number} startInx an integer value to specify the index the returning 
 * search results starts from.
 * @param {Number} endInx an integer value to specify the index to which the returning 
 * search results ends at.
 * 
 * @returns
 * @type void
 */
Device.prototype.findFiles = function(matchFile, startInx, endInx) {
};

/**
 * Callback method to invoke when Device.findFiles complete. <br>
 * <br>
 * e.g.<br>
 * &nbsp;&nbsp;&nbsp;&nbsp;Widget.Device.onFilesFound = myCallBack;<br>
 * &nbsp;&nbsp;&nbsp;&nbsp;var v = Widget.Device.findFiles(matchfile, 0, 9);<br>
 * &nbsp;&nbsp;&nbsp;&nbsp;function myCallBack(files) {<br>
 * &nbsp;&nbsp;&nbsp;&nbsp;}<br>
 *    
 * @param {Array} filesFound an array of File objects
 * 
 * @returns 
 * @type void
 */
Device.prototype.onFilesFound = function(filesFound) {
};

/**
 * Get the file system size in Byte unit. <br> 
 * <br>
 * e.g.<br>
 * &nbsp;&nbsp;&nbsp;&nbsp;Widget.Device.getFileSystemSize("/sdcard");   
 * 
 * @param {String} fileSystemRoot The file system root.
 * 
 * @returns Returns the size of the file system in Byte, could either be a storage card or 
 * the memory of the device. This field should be a double value.
 * @type Number 
 */
Device.prototype.getFileSystemSize = function(fileSystemRoot) {
	return new Number();
};

/**
 * This function is called to set Ringtone for an addressbook item. <br>
 * <br>
 * e.g.<br>
 * &nbsp;&nbsp;&nbsp;&nbsp;Widget.Device.setRingtone("/sdcard/myringtone.mp3", addressItem);
 *  
 * @param {String} ringtoneFileurl The ringtone file url.
 * @param {AddressBookItem} addressBookItem The addressbook item to set the ringtone.
 * 
 * @returns
 * @type void
 */
Device.prototype.setRingtone = function(ringtoneFileurl, addressBookItem) {
};

/**
 * This function is called to vibrate the device for a specific time period. <br>
 * <br>
 * e.g.<br>
 * &nbsp;&nbsp;&nbsp;&nbsp;Widget.Device.vibrate(5);
 *
 * @param {Number} durationSeconds  The duration, in seconds, of a vibration event.
 * 
 * @returns
 * @type void
 */
Device.prototype.vibrate = function(durationSeconds) {
};

/**
 * Get array of the names of applications that can be launched.  <br>
 * <br>
 * e.g.<br>
 * &nbsp;&nbsp;&nbsp;&nbsp;var v = Widget.Device.getAvailableApplications();
 * 
 * @returns An array of String of the application names. Possible value on the phone
 * may be "Dialer", "ProgMng","Sound Recorder","Sync", "FileMgr", "Browser","Monternet",
 * "Camera", "Picture", "Mobile TV" etc. This depends on what applications installed on 
 * phone
 *
 * @type Array
 */
Device.prototype.getAvailableApplications = function() {
	return new Array();
};

/**
 * Launch a specified native application with start parameters. <br>
 * <br>
 * e.g.<br>
 * &nbsp;&nbsp;&nbsp;&nbsp;Widget.Device.launchApplication("Media Player", "/sdcard/a.mp4");
 *  
 * @param {String} application The application to be launched. The application identifer String could be
 * "Camera", "Media Player", "Sound Recorder" etc., which can be get through getAvailableApplications() API. 
 * @param {String} startParameter The startup parameter passed to application.
 * 
 * @returns
 * @type void
 */
Device.prototype.launchApplication = function(application, startParameter) {
};

/**
 * Get array of file system root directories. <br>
 * <br>
 * e.g.<br>
 * &nbsp;&nbsp;&nbsp;&nbsp;var v = Widget.Device.getFileSystemRoots();
 * 
 * @returns An array of String about file system roots.
 * @type Array
 */
Device.prototype.getFileSystemRoots = function() {
	return new Array();
};

/**
 * String on the clip board
 * 
 * @type String
 */
Device.prototype.clipboardString = new String();

/**
 * the device power info.
 * 
 * @type PowerInfo
 */
Device.prototype.PowerInfo = new PowerInfo();

/**
 * the device account info.
 * 
 * @type AccountInfo
 */
Device.prototype.AccountInfo = new AccountInfo();

/**
 * the device info.
 * 
 * @type DeviceInfo
 */
Device.prototype.DeviceInfo = new DeviceInfo();

/**
 * the device State info.
 * 
 * @type DeviceStateInfo
 */
Device.prototype.DeviceStateInfo = new DeviceStateInfo();

/**
 * the device data network info.
 * 
 * @type DataNetworkInfo
 */
Device.prototype.DataNetworkInfo = new DataNetworkInfo();

/**
 * the device radio info.
 * 
 * @type RadioInfo
 */
Device.prototype.RadioInfo = new RadioInfo();

/**
 * the file of the file system on the device
 * 
 * @type File
 */
Device.prototype.File = new File();

/**
 * the device position info.
 * 
 * @type PositionInfo
 */
Device.prototype.PositionInfo = new PositionInfo();

/**
 * Name of the widget engine.
 * 
 * @type String
 */
Device.prototype.widgetEngineName = "JIL Widget Engine";

/**
 * The name of the party who provides the widget engine.
 * 
 * @type String
 */
Device.prototype.widgetEngineProvider = "JIL";

/**
 * The version of the widget engine.
 * 
 * @type String
 */
Device.prototype.widgetEngineVersion = "1.0";