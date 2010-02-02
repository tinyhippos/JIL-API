/** 
 * @fileoverview This file is to be used for listing all functions and properties of 
 * JavaScript objects: DeviceStateInfo.
 *
 * @version 0.1 
 */
DeviceStateInfo.prototype = new Device();

/**
 * @class DeviceStateInfo provides device state info.<br>
 */
function DeviceStateInfo() {
};

/**
 * This issues an asynchronous request for the phone's location. <br>
 * This is an asynchronous call. The widget must register with the 
 * <I>onPositionRetrieved</I> callback method in order to receive the position information 
 * once it is available.<br>
 * <br>
 * e.g.<br>
 * &nbsp;&nbsp;&nbsp;&nbsp;Widget.Device.DeviceStateInfo.requestPositionInfo();   
 * 
 * @param {String} method specifies how to get the position information, possible 
 * values are "cellid", "gps" and "agps"
 * 
 * @returns
 * @type void  
 */
DeviceStateInfo.prototype.requestPositionInfo = function(method) {
};

/**
 * This is a callback function that is invoked as a response to the requestLocationInfo() 
 * method. No object will be returned if the location could not be identified.<br>
 * <br>
 * e.g.<br>
 * &nbsp;&nbsp;&nbsp;&nbsp;Widget.Device.DeviceStateInfo.onPositionRetrieved = myCallback;<br>
 * &nbsp;&nbsp;&nbsp;&nbsp;function myCallback(locationInfo, method) {<br>
 * &nbsp;&nbsp;&nbsp;&nbsp;}
 * 
 * @param {Positioninfo} locationInfo The location info.
 * @param {String} method specifies how the position information has been obtained, 
 * possible values are "cellid", "gps" and "agps".
 * 
 * @returns
 * @type void  
 */
DeviceStateInfo.prototype.onPositionRetrieved = function(locationInfo, method) {
};

/**
 * The amount of RAM in KB, that is available on the phone. This field should be a 
 * double value.
 * 
 * @type Number
 */
DeviceStateInfo.prototype.availableMemory = new Number();

/**
 * The language that is currently in use on the hand set. This property is read only. 
 * This is an ISO 639.2 value (http://www.loc.gov/standards/iso639-2/php/English_list.php).
 * 
 * @type String
 */
DeviceStateInfo.prototype.language = "";

/**
 * The Config object to change some of the device's configuration settings.
 * 
 * @type Config
 */
DeviceStateInfo.prototype.Config = new Config();

/**
 * This callback function is invoked when the phone's display changes characteristics. 
 * E.g., this would be called if the phone were to switch from landscape to portrait mode.<br>
 * <br>
 * e.g.<br>
 * &nbsp;&nbsp;&nbsp;&nbsp;Widget.Device.DeviceStateInfo.onScreenChangeDimensions = myCallback;<br>
 * &nbsp;&nbsp;&nbsp;&nbsp;function myCallback(newWidth, newHeight) {<br>
 * &nbsp;&nbsp;&nbsp;&nbsp;}
 *
 * @param {Number} newWidth The new screen width. This field should be an integer value.
 * @param {Number} newHeight The new screen height. This field should be an integer value.
 *
 * @returns
 * @type void  
 */
DeviceStateInfo.prototype.onScreenChangeDimensions = function(newWidth, newHeight) {
};

/**
 * This is a callback event which is triggered when a clamshell opens or closes. 
 * The received parameter indicates if the clamshell has been closed.<br>
 * <br>
 * e.g.<br>
 * &nbsp;&nbsp;&nbsp;&nbsp;Widget.Device.DeviceStateInfo.onFlipEvent = myCallback;<br>
 * &nbsp;&nbsp;&nbsp;&nbsp;function myCallback(isNowClosed) {<br>
 * &nbsp;&nbsp;&nbsp;&nbsp;}
 *
 * @param {Boolean} isNowClosed The state of Flip.
 *
 * @returns
 * @type void  
 */
DeviceStateInfo.prototype.onFlipEvent = function(isNowClosed) {
};

/**
 * A read-only property indicating whether the keypad light is on or off.
 *
 * @type Boolean
 */
DeviceStateInfo.prototype.keypadLightOn = new Boolean();

/**
 * A read-only property indicating whether the back light is on or off.
 *
 * @type Boolean
 */
DeviceStateInfo.prototype.backLightOn = new Boolean();

/**
 * This is the percent utilization of the phone's processor. E.g., if the processor 
 * has a 20% load (80% idle) then the value will be 20.<br>
 * If the phone has multiple processors, then this value will be an average for all 
 * processors. 
 *
 * @type String
 */
DeviceStateInfo.prototype.processorUtilizationPercent = "";
 
/**
 * This property indicates where audio is currently configured for output. Valid 
 * values include "speaker", "receiver", "earphone".
 *
 * @type String
 */
DeviceStateInfo.prototype.audioPath = "";

/**
 * The accelerometer information of the phone.
 *
 * @type AccelerometerInfo
 */
DeviceStateInfo.prototype.AccelerometerInfo = new AccelerometerInfo();