/** 
 * @fileoverview This file is to be used for listing all functions and properties of 
 * JavaScript objects: Config.
 *
 * @version 0.1 
 */
Config.prototype = new DeviceStateInfo();

/**
 * @class Config<br>
 * <br>
 * Config is a sub-object of <I>DeviceStateInfo</I>.<br>
 */
function Config() {
};



/**
 * Set Default Ringtone. <br>
 * <br>
 * e.g.<br>
 * &nbsp;&nbsp;&nbsp;&nbsp;Widget.Device.DeviceStateInfo.Config.setDefaultRingtone("/sdcard/myringtone.mp3");
 * 
 * @param {String} ringtoneFileurl The ringtone file url
 * 
 * @returns
 * @type void
 */
Config.prototype.setDefaultRingtone = function(ringtoneFileurl) {
};

/**
 * Set a picture as Wallpaper. <br>
 * <br>
 * e.g.<br>
 * &nbsp;&nbsp;&nbsp;&nbsp;Widget.Device.DeviceStateInfo.Config.setAsWallpaper("/sdcard/mypic.jpg");
 * 
 * @param {String} wallpaperFileurl The wallpaper file url
 * 
 * @returns
 * @type void  
 */
Config.prototype.setAsWallpaper = function(wallpaperFileurl) {
};

/**
 * The volume of the ringtone. Possible values are from 0 to 10.
 * <I>getMsgRingtoneVolume</I>.
 *
 * @type Number
 */
Config.prototype.ringtoneVolume = new Number();

/**
 * The volume of the ringtone to be played when a new message arrives. 
 * Possible values are from 0 to 10, where 0 is off, and 
 * 
 * @type Number
 */
Config.prototype.msgRingtoneVolume = new Number();

/**
 * The status indicating whether the vibration is set or not. 
 * Possible values are "ON" and "OFF".
 * 
 * @type String
 */
Config.prototype.vibrationSetting = "";
