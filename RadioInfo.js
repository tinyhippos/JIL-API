/** 
 * @fileoverview This file is to list all functions and properties of 
 * JavaScript object: RadioInfo.
 * 
 * @version 0.1 
 */
RadioInfo.prototype = new Object();

/**
 * @class RadioInfo is a sub-object of <I>Widget.Device</I>.<br>
 * <br>
 * This represents dynamic information on phone radio. It is read-only.<br>
 */
function RadioInfo() {
};

/**
 * This field indicates whether the phone is roaming.
 * 
 * @type Boolean
 */
RadioInfo.prototype.isRoaming = new Boolean();

/**
 * This field indicates the percentage of signal strength. This field should be an integer value.
 * 
 * @type Number
 */
RadioInfo.prototype.radioSignalStrengthPercent = new Number();

/**
 * Call back method to invoke when the signal source changes. <br>
 * <br>
 * e.g.<br>
 * &nbsp;&nbsp;&nbsp;&nbsp;Widget.Device.RadioInfo.onSignalSourceChange = myCallBack;<br>
 * &nbsp;&nbsp;&nbsp;&nbsp;function myCallBack(signalSource, isRoaming) {<br>
 * &nbsp;&nbsp;&nbsp;&nbsp;}
 *  
 * @param {Number} signalSource source of the signal
 * @param {Boolean} isRoaming roaming status
 *
 * @returns
 * @type void  
 */
RadioInfo.prototype.onSignalSourceChange = function(signalSource, isRoaming) {
};

/**
 * This field indicates whether the phone is allowed to connect to radio network.
 *
 * @type Boolean
 */
RadioInfo.prototype.isRadioEnabled = new Boolean();

/**
 * This field indicates the singal source of the radio network. Possible values 
 * include "gsm", "gprs", "edge", "e911", etc.
 *
 * @type String
 */
RadioInfo.prototype.radioSignalSource = new String();
