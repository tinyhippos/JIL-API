/** 
 * @fileoverview This file is to list all functions and properties of 
 * JavaScript object: RadioSignalSourceTypes.
 *
 * @version 0.1 
 */
RadioSignalSourceTypes.prototype = new RadioInfo();

/**
 * @class  RadioSignalSourceTypes contains common values that are referenced by the                
 * RadioInfo.radioSignalSource. <br>
 * <br>
 * RadioSignalSourceTypes is a sub-object of <I>Device.RadioInfo</I>. <br>
 */
function RadioSignalSourceTypes() {
};

/**
 * The radio signal source is CDMA.
 * 
 * @type String
 */
RadioSignalSourceTypes.prototype.CDMA = "CDMA";

/**
 *  The radio signal source is GSM.
 * 
 * @type String
 */
RadioSignalSourceTypes.prototype.GSM = "GSM";
    
/**
 *  The radio signal source is LTE. 
 * 
 * @type String
 */
RadioSignalSourceTypes.prototype.LTE = "LTE";

/**
 * The radio signal source is TDSCDMA. 
 * 
 * @type String
 */
RadioSignalSourceTypes.prototype.TDSCDMA = "TDSCDMA";

/**
 * The radio signal source is WCDMA.
 * 
 * @type String
 */
RadioSignalSourceTypes.prototype.WCDMA = "WCDMA";