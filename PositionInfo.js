/** 
 * @fileoverview This file is to list all functions and properties of 
 * JavaScript object: PositionInfo.
 * 
 * @version 0.1 
 */
PositionInfo.prototype = new Device();

/**
 * @class PositionInfo is the container object for JIL PositionInfo object. <br>
 * <br>
 * This object provides read-only information about the device's position information.
 * This information will be undefined if the back-end services should be unavailable 
 * (e.g., due to network unavailability) or if the Widget does not have sufficient 
 * security permissions to obtain this information. <br>
 *
 */
function PositionInfo() {
};

/**
 * Latitude in degrees using the World Geodetic System 1984 (WGS84) datum. This field 
 * should be a double value.
 * 
 * @type Number
 */
PositionInfo.prototype.latitude = new Number();

/**
 * Longitude in degrees using the World Geodetic System 1984 (WGS84) datum. This field 
 * should be a double value.
 * 
 * @type Number	
 */
PositionInfo.prototype.longitude = new Number();

/**
 * Altitude in meters using the World Geodetic System 1984 (WGS84) datum. This field 
 * should be a double value.
 * 
 * @type Number
 */
PositionInfo.prototype.altitude = new Number();
	
/**
 * This is the id of the cell. This field should be an interger value.
 * 
 * @type Number
 */
PositionInfo.prototype.cellID = new Number();

/**
 * The horizontal accuracy of the position in meters, or null if not available. 
 * This field should be a double value.
 *
 * @type Number
 */
PositionInfo.prototype.accuracy = new Number();

/**
 * The vertical accuracy of the position in meters, or null if not available. 
 * This field should be a double value.
 *
 * @type Number
 */
PositionInfo.prototype.altitudeAccuracy = new Number();

/**
 * The time when the location was established.
 *
 * @type Date
 */
PositionInfo.prototype.timeStamp = new Date();