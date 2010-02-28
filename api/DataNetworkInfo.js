/** 
 * @fileoverview This file is to list all functions and properties of 
 * JavaScript object: DataNetworkInfo.
 * 
 * @version 0.1 
 */
DataNetworkInfo.prototype = new Device();

/**
 * @class DataNetworkInfo is a sub-object of <I>Widget.Device</I>.<br>
 */
function DataNetworkInfo() {
};

/**
 * Indicates whether the phone is connected to data network.
 * 
 * @type Boolean
 */
DataNetworkInfo.prototype.isDataNetworkConnected = new Boolean();

/**
 * The array propery contains the types of the network connections to which the handset is currently connecting. 
 * e.g. "radio", "wifi", "bluetooth", "irda".
 *
 * @type Array
 */
DataNetworkInfo.prototype.networkConnectionType = new Array();

/**
 * Call back method to invoke when the phone connects to another data network. <br>
 * <br>
 * e.g.<br>
 * &nbsp;&nbsp;&nbsp;&nbsp;Widget.Device.DataNetworkInfo.onNetworkConnectionChanged = myCallBack;<br>
 * &nbsp;&nbsp;&nbsp;&nbsp;function myCallBack(newConnectionName) {<br>
 * &nbsp;&nbsp;&nbsp;&nbsp;}
 * 
 * @param {String} newConnectionName name of the new network connection that the
 *            phone connects to.
 * 
 * @returns 
 * @type void
 */
DataNetworkInfo.prototype.onNetworkConnectionChanged = function(newConnectionName) {
};

/**
 * Retrieves the network connection name, specified by the type of the connection. E.g. "linksys", "WAP Gateway".
 *
 * @param {String} networkConnecionType the type of the network connection, see <I>DataNetworkInfo.networkConnectionType</I>.
 *
 * @returns the name of the network connection, if the specified connect is not existed, return null.
 * @type String  
 */
DataNetworkInfo.prototype.getNetworkConnectionName =function(networkConnecionType) {
	return new String();
};

/**
 * DataNetworkConnectionTypes contains common values that are referenced by the       DataNetworkInfo.networkConnectionType.
 * 
 * @type DataNetworkConnectionTypes
 */
DataNetworkInfo.prototype.DataNetworkConnectionTypes = new DataNetworkConnectionTypes();