/** 
 * @fileoverview This file is used for listing all functions and properties of 
 * JavaScript object: WidgetManager.
 *
 * @version 0.1 
 */
Window.prototype.WidgetManager = new WidgetManager();

/**
 * @class WidgetManager<br>
 */
function WidgetManager() {
};

 

/**
 * This method is used to check the installation status of a specific widget.
 * 
 * @param {String} The id of the widget to be checked.This value corresponds to value of the wid tag   
 * specified in the config.xml
 * @param {String} The name of the widget to be checked.This value corresponds to the vlaue of the name tag  
 * specified in the config.xml.
 * @param {String} The version of the widget to be checked.This value corresponds to the vlaue of the 
 * version tag specified in the config.xml.
 * 
 * @returns
 * @type String
 */
WidgetManager.prototype.checkWidgetInstallationStatus (widgetId, widgetName, widgetVersion) {
	return "";
};