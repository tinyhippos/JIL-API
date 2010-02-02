/** 
 * @fileoverview This file is to list all functions and properties of 
 * JavaScript object: PowerInfo.
 *
 * @version 0.1 
 */
PowerInfo.prototype = new Device();

/**
 * @class PowerInfo is a sub-object of <I>Widget.Device</I>.<br>
 * <br>
 * This represents dynamic information of phone power. It is read-only.<br>
 * 
 */
function PowerInfo() {
};

/**
 * This field indicates whether the phone is now charging.
 * 
 * @type Boolean
 */
PowerInfo.prototype.isCharging = new Boolean();

/**
  * This field indicates the percentage of battery power remaining. This field 
  * should be an integer value.
  * 
  * @type Number
  */
PowerInfo.prototype.percentRemaining = new Number();

/**
 * Call back method to invoke when the charge state changes. 
 * 
 * @param {String} state string value of the phone's charging status. Possible values 
 * are "charging", "discharging" and "full".
 * 
 * @returns
 * @type void  
 */
PowerInfo.prototype.onChargeStateChange = function(state) {
};

/**
 * Callback method to invoke when the battery is low. 
 *
 * @param {Number} percentRemaining integer value indicating the percentage of 
 * the remaining power.
 *
 * @returns
 * @type void  
 */
PowerInfo.prototype.onLowBattery = function(percentRemaining) {
};

/**
 * Callback method to invoke when the percentage of the remaining battery changes 
 * during the charging process. 
 *
 * @param {Number} newPercentageRemaining integer value indicating the percentage 
 * of power remaining.
 *
 * @returns
 * @type void  
 */
PowerInfo.prototype.onChargeLevelChange = function(newPercentageRemaining) {
};
