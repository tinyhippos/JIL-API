/** 
 * @fileoverview This file is to list all functions and properties of 
 * JavaScript object: DeviceInfo. <br>
 *
 * @version 0.1 
 */
DeviceInfo.prototype = new Device();

/**
 * @class DeviceInfo is a sub-object of <I>Widget.Device</I>. <br>
 * <br>
 * This represents static information about the host device. This is read-only 
 * information that does not change during runtime.<br>  
 * <br>
 * This is in contrast to the <I>DeviceStateInfo</I> object, which provides information 
 * about a phone that can change. E.g., available memory and keypad light status.<br>
 */
function DeviceInfo() {
};

/**
 * This is the information of the handset's owner which contains the same information as
 * other address book items.
 * 
 * @type {AddressBookItem}
 */
DeviceInfo.prototype.ownerInfo = new AddressBookItem();

/**
 * This is the color depth of the primary screen in its primary mode of operation.
 * 
 * @type Number
 */
DeviceInfo.prototype.phoneColorDepthDefault = new Number();

/**
 * This is the firmware version for the operating system.
 * 
 * @type String
 */
DeviceInfo.prototype.phoneFirmware = "";

/**
 * This is the manufacturer of the phone. E.g. "Nokia".
 * 
 * @type String
 */
DeviceInfo.prototype.phoneManufacturer = "";

/**
 * This is the model of the phone. E.g., "N95".
 * 
 * @type String
 */
DeviceInfo.prototype.phoneModel = "";

/**
 * This is the operating system of the phone. E.g., "Windows Mobile 6.0".
 * 
 * @type String
 */
DeviceInfo.prototype.phoneOS = "";

/**
 * This is the software version of the phone.
 * 
 * @type String
 */
DeviceInfo.prototype.phoneSoftware = "";

/**
 * This is the pixel height of the primary screen in its primary mode of operation.
 * 
 * @type Number
 */
DeviceInfo.prototype.phoneScreenHeightDefault = new Number();

/**
 * This is the pixel width of the primary screen in its primary mode of operation.
 * 
 * @type Number
 */
DeviceInfo.prototype.phoneScreenWidthDefault = new Number();

/**
 * This is the total amount of RAM in kilobytes installed on the phone. This field 
 * should be double value.
 * 
 * @type Number
 */
DeviceInfo.prototype.totalMemory = new Number();
