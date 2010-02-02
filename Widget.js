/** 
 * @fileoverview This file is used for listing all functions and properties of 
 * JavaScript object: Widget.
 *
 * @version 0.1 
 */
Window.prototype.Widget = new Widget();

/**
 * @class Widget<br>
 */
function Widget() {
};

/**
 * Static Device object associated with this Widget
 * 
 * @type Device
 */
Widget.prototype.Device = new Device();

/**
 * Static PIM object associated with this Widget
 * 
 * @type PIM
 */
Widget.prototype.PIM = new PIM();

/**
 * Static Messaging object associated with this Widget
 * 
 * @type Messaging
 */
Widget.prototype.Messaging = new Messaging();

/**
 * Static Telephony object associated with this Widget
 * 
 * @type Telephony
 */
Widget.prototype.Telephony = new Telephony();

/**
 * Static Multimedia object associated with this Widget
 * 
 * @type Multimedia
 */
Widget.prototype.Multimedia = new Multimedia();

/**
 * This is a call back method which will be triggered when the widget is restored 
 * to default display mode. <br>
 * <br>
 * e.g.<br>
 * &nbsp;&nbsp;&nbsp;&nbsp;function Widget.onRestore() {<br>
 * &nbsp;&nbsp;&nbsp;&nbsp;alert("widget is restored to default display mode");<br>
 * &nbsp;&nbsp;&nbsp;&nbsp;}
 *
 * @returns 
 * @type void
*/
Widget.prototype.onRestore = function() {
};
	
/**
 * This is a call back method which will be triggered when the widget is displayed 
 * in the maximized display mode. <br>
 * <br>
 * e.g.<br>
 * &nbsp;&nbsp;&nbsp;&nbsp;function Widget.onMaximize() {<br>
 * &nbsp;&nbsp;&nbsp;&nbsp;alert("widget is displayed in the maximized display mode.");<br>
 * &nbsp;&nbsp;&nbsp;&nbsp;}
 *
 * @returns 
 * @type void
*/
Widget.prototype.onMaximize =function() {
};
	
/**
 * This is a call back method which will be triggered when the widget gains focus 
 * when multiple widgets are displayed on the same screen. <br>
 * <br>
 * e.g.<br>
 * &nbsp;&nbsp;&nbsp;&nbsp;function Widget.onFocus() {<br>
 * &nbsp;&nbsp;&nbsp;&nbsp;alert("widget gains focus in floating mode.");<br>
 * &nbsp;&nbsp;&nbsp;&nbsp;}
 *
 * @returns 
 * @type void
*/
Widget.prototype.onFocus = function() {
};
	
/**
 * A call back method is called when the widget is triggered to wake up. <br>
 * <br>
 * e.g.<br>
 * &nbsp;&nbsp;&nbsp;&nbsp;function Widget.onWakeup() {<br>
 * &nbsp;&nbsp;&nbsp;&nbsp;alert("widget wakes up");<br>
 * &nbsp;&nbsp;&nbsp;&nbsp;}
 *
 * @returns 
 * @type void
*/
Widget.prototype.onWakeup = function() {
};

/**
 * This method takes a String argument, <i>Key</i>. When called, this method will 
 * return a string that has previously been stored with the setPrefernceForKey 
 * method, or undefined if the key does not exist.
 * 
 * @param {String} key identifier of the preference
 * 
 * @returns preference value of the key
 * @type String
 */
Widget.prototype.preferenceForKey = function(key) {
	return "";
};

/**
 * This method takes two String arguments, <i>preference</i> and <i>key</i>. When 
 * called, this method will store the string in the <i>preference</i> argument with 
 * the key named in the <i>key</i> argument for later retrieval using the 
 * preferenceForKey() method. If the setPreferenceForKey() method is called with 
 * the value null in the preference argument, the key identified in the <i>key</i> 
 * argument will be deleted.
 * 
 * @param {String} key identifier of the preference
 * @param {String} preference string value of the preference
 * 
 * @returns
 * @type void
 */
Widget.prototype.setPreferenceForKey = function(key, preference) {
};


/**
 * This method will launch the device browser implementation to the url specified 
 * in the string argument. <br>
 * <br>
 * e.g.<br>
 * &nbsp;&nbsp;&nbsp;&nbsp;Widget.openURL("http://www.jil.org");
 * 
 * @param {String} URL to access, upon browser launch
 * 
 * @returns 
 * @type void
*/
Widget.prototype.openURL = function(url) {
};