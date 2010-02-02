/** 
 * @fileoverview This file is to list all functions and properties of 
 * JavaScript object: ApplicationTypes.
 *
 * @version 0.1 
 */
ApplicationTypes.prototype = new Device();

/**
 * @class  ApplicationTypes contains common values that are referenced by the Device.launchApplication. <br>
 * <br>
 * ApplicationTypes is a sub-object of <I>Device</I>. <br>
 */
function ApplicationTypes() {
};

/**
 * This represents the alarm clock application on the device.
 * 
 * @type String
 */
ApplicationTypes.prototype.ALARM = new String();

/**
 * This represents the browser application on the device.
 * 
 * @type String
 */
ApplicationTypes.prototype.BROWSER = new String();

/**
 * This represents the calculator application on the device.
 * 
 * @type String
 */
ApplicationTypes.prototype.CALCULATOR = new String();

/**
 * This represents the calendar application on the device.
 * 
 * @type String
 */
ApplicationTypes.prototype.CALENDAR = new String();

/**
 * This represents the camera application on the device.
 * 
 * @type String
 */
ApplicationTypes.prototype.CAMERA = new String();

/**
 * This represents the contact application on the device.
 * 
 * @type String
 */
ApplicationTypes.prototype.CONTACTS = new String();

/**
 * This represents the file manager application on the device.
 * 
 * @type String
 */
ApplicationTypes.prototype.FILES = new String();

/**
 * This represents the game manager or game folder on the device.
 * 
 * @type String
 */
ApplicationTypes.prototype.GAMES = new String();

/**
 * This represents the mail application on the device.
 * 
 * @type String
 */
ApplicationTypes.prototype.MAIL = new String();