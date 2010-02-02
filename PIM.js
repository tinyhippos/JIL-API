/** 
 * @fileoverview This file is used for listing all functions and properties of 
 * JavaScript object: PIM.
 *
 * @version 0.1 
 */

PIM.prototype = new Object();

/**
 * @class PIM is the container object for JIL PIM objects. <br>
 * <br>PIM is a sub-object of <I>Widget</I>. So we use PIM in this way: Widget.PIM.XXX<br>
 */
function PIM() {
};
Widget.PIM.prototype= new PIM();
/**
 * Add a contact to the device. <br>
 * <br>
 * e.g.<br>
 * &nbsp;&nbsp;&nbsp;&nbsp;var contact = new Widget.PIM.AddresBookItem();<br>
 * &nbsp;&nbsp;&nbsp;&nbsp;contact.setAttributeValue("mobilePhone", "10086");<br>
 * &nbsp;&nbsp;&nbsp;&nbsp;Widget.PIM.addAddressBookItem(contact);<br>
 * 
 * @param {AddressBookItem} contact A Contact object to be added
 * 
 * @returns 
 * @type void
 */
PIM.prototype.addAddressBookItem = function(contact) {
};

/**
 * Create a new contact group in the address book. <br>
 * <br>
 * e.g.<br>
 * &nbsp;&nbsp;&nbsp;&nbsp;Widget.PIM.createAddressBookGroup("Family");<br>
 * 
 * @param {String} groupName The name of the contact group to be created
 * 
 * @returns 
 * @type void
 */
PIM.prototype.createAddressBookGroup = function(groupName) {
};

/**
 * Creates an empty AddressBookItem. <br>
 * <br>
 * e.g.<br>
 * &nbsp;&nbsp;&nbsp;&nbsp;var contact = Widget.PIM.createAddressBookItem();<br>
 *
 * @returns an AddressBookItem object
 * @type AddressBookItem
 */
PIM.prototype.createAddressBookItem = function() {
	return new Widget.PIM.AddressBookItem();
};

/**
 * Delete a contact with the specified id. <br>
 * <br>
 * e.g.<br>
 * &nbsp;&nbsp;&nbsp;&nbsp;Widget.PIM.deleteAddressBookItem("1");<br> 
 * 
 * @param {String} contactid the unique identifier of the address book item to be deleted
 * 
 * @returns 
 * @type void
 */
PIM.prototype.deleteAddressBookItem = function(contactid) {
};

/**
 * Delete contact group in the address book. <br>
 * <br>
 * e.g.<br>
 * &nbsp;&nbsp;&nbsp;&nbsp;Widget.PIM.deleteAddressBookGroup("Family");<br> 
 * 
 * @param {String} groupName The name of the contact group to be deleted
 * 
 * @returns 
 * @type void
 */
PIM.prototype.deleteAddressBookGroup = function(groupName) {
};

/**
 * Get a contact from the specified index. <br>
 * <br>
 * e.g.<br>
 * &nbsp;&nbsp;&nbsp;&nbsp;var contact = Widget.PIM.getAddressBookItem("1");<br> 
 * 
 * @param {String} contactid the unique identifier of the address book item to be retrieved
 * 
 * @returns an AddressBookItem object
 * @type AddressBookItem
 */
PIM.prototype.getAddressBookItem = function(contactid) {
	return new Widget.PIM.AddressBookItem();
};

/**
 * Return how many contacts are available on the phone. <br>
 * <br>
 * e.g.<br>
 * &nbsp;&nbsp;&nbsp;&nbsp;var count = Widget.PIM.getAddressBookItemsCount(); <br>     
 * 
 * @returns a Number indicating how many contacts are present. This value should be an integer.
 * @type Number
 */
PIM.prototype.getAddressBookItemsCount = function() {
	return new Number();
};

/**
 * Return all unique listing of all group names associated with all contacts. <br>
 * <br>
 * e.g.<br>
 * &nbsp;&nbsp;&nbsp;&nbsp;var groupNames = Widget.PIM.getAvailableAddressGroupNames(); <br>     
 * 
 * @returns a String array containing the name of all the groups .
 * @type Array
 */
PIM.prototype.getAvailableAddressGroupNames = function() {
	return new Array();
};

/**
 * Find all AddressBookItems currently associated with the supplied group
 * name.Wildcards are supported and searches are case-insensitive.E.g., 
 * assigning "*smith*" to the "groupName" parameter will return all contacts
 * found within any group with "smith" in the name.his is an asynchronous 
 * function, and will invoke PIM.onAddressBookItemsFound() when search 
 * completes.<br>
 * e.g.<br>
 * &nbsp;&nbsp;&nbsp;&nbsp;var myCallBack = function(AddressBookItems){...}<br> 
 * &nbsp;&nbsp;&nbsp;&nbsp;Widget.PIM.onAddressBookItemsFound = myCallBack;<br>    
 * &nbsp;&nbsp;&nbsp;&nbsp;Widget.PIM.getAddressGroupMembers("family");<br> 
 * 
 * @param {groupName} group name of the contacts 
 */
PIM.prototype.getAddressBookGroupMembers = function(groupName){
};

/**
 * Find all contacts matching the supplied comparison contact. Wildcard are supported 
 * and searches are case-insensitive.<br>
 * E.g., assigning "*smith*" to the "full_name" attribute of the comparisonContact will 
 * return all contacts having 'smith' in the name.<br>
 * Widget can specify only return a range of matched files between startInx and endInx.<br>
 * <br>
 * e.g.<br>
 * &nbsp;&nbsp;&nbsp;&nbsp;var contact = new Widget.PIM.AddresBookItem();<br> 
 * &nbsp;&nbsp;&nbsp;&nbsp;contact.setAttributeValue("mobilePhone", "10086");<br>    
 * &nbsp;&nbsp;&nbsp;&nbsp;Widget.PIM.findAddressBookItems(contact, 0, 9);<br> 
 * 
 * @param {AddressBookItem} comparisonContact A Contact containing attributes/values 
 * that are to be matched against the contact database
 * @param {Number} startInx an integer value to specify the index the returning search 
 * results starts from
 * @param {Number} endInx an integer value to specify the index to which the returning 
 * search results ends at 
 * 
 * @returns 
 * @type void
 */
PIM.prototype.findAddressBookItems = function(comparisonContact, startInx, endInx) {
};

/**
 * Callback method to invoke when PIM.findAddressBookItems completes. <br>
 * <br>
 * e.g.<br>
 * &nbsp;&nbsp;&nbsp;&nbsp;Widget.PIM.onAddressBookItemsFound = myCallBack;<br>
 * &nbsp;&nbsp;&nbsp;&nbsp;function myCallBack(addressBookItems) {<br>   
 * &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;var size = addressBookItems.length;<br>
 * &nbsp;&nbsp;&nbsp;&nbsp;}<br>
 * 
 * @param Array addressBookItemsFound An array of AddressBookItem objects
 * 
 * @returns
 * @type void
 */
PIM.prototype.onAddressBookItemsFound = function(addressBookItemsFound) {
};

/** 
 * Add a calendar item to the device. <br>
 * <br>
 * e.g.<br>
 * &nbsp;&nbsp;&nbsp;&nbsp;var day = new Date (2008, 9, 23, 0, 0, 0);<br>     
 * &nbsp;&nbsp;&nbsp;&nbsp;var calendarItem = new Widget.PIM.CalendarItem();<br>   
 * &nbsp;&nbsp;&nbsp;&nbsp;calendarItem.startTime = day;<br>   
 * &nbsp;&nbsp;&nbsp;&nbsp;calendarItem.eventName = "Meeting";<br>
 * &nbsp;&nbsp;&nbsp;&nbsp;calendarItem.eventRecurrence = Widget.PIM.EventRecurrenceTypes.WEEKLY_ON_DAY;<br>
 * &nbsp;&nbsp;&nbsp;&nbsp;Widget.PIM.addCalendarItem(calendarItem);<br> 
 * 
 * @param {CalendarItem} calendarItem A ContactItem object to be added
 * 
 * @returns
 * @type void
 */
PIM.prototype.addCalendarItem = function(calendarItem) {
};

/**
 * Delete a calendar item with a specified id. <br>
 * <br>
 * e.g.<br>
 * &nbsp;&nbsp;&nbsp;&nbsp;Widget.PIM.deleteCalendarItem("1");<br>      
 * 
 * @param {String} calendarId the unique identifier of the calendar item to be deleted.
 * 
 * @returns
 * @type void
 */
PIM.prototype.deleteCalendarItem = function(calendarId) {
};

/**
 * Get a calendar item of the specified index. <br>
 * <br>
 * e.g.<br>
 * &nbsp;&nbsp;&nbsp;&nbsp;var calendarItem = Widget.PIM.getCalendarItem("1");<br>      
 * 
 * @param {String} calendarId the unique identifier of the calendar item to be deleted
 * 
 * @returns a CalendarItem object
 * @type CalendarItem
 */
PIM.prototype.getCalendarItem = function(calendarId) {
	return new Widget.PIM.CalendarItem();
};

/**
 * Find all calendar items matching the supplied itemToMatch. Wildcards are supported 
 * and searches are case-insensitive. <br> 
 * E.g., assigning "*meeting*" to the 'eventNotes' attribute of the itemToMatch will 
 * return all calendar items having 'meeting' in the event notes.<br>
 * Widget can specify only search a range of files between startInx and endInx. This 
 * is an asynchronous function, and will invoke PIM.onCalendarItemsFound() when search 
 * completes.<br>
 * <br>
 * e.g.<br>
 * &nbsp;&nbsp;&nbsp;&nbsp;var calendarItem = new Widget.PIM.CalendarItem();<br>     
 * &nbsp;&nbsp;&nbsp;&nbsp;calendarItem.eventName = "*Meeting";<br>     
 * &nbsp;&nbsp;&nbsp;&nbsp;Widget.PIM.findCalendarItems(calendarItem, 0, 9); <br>     
 * 
 * @param {CalendarItem}itemToMatch A calendar item containing attributes/values that 
 * are to be matched against the calendar item database
 * @param {Number} startInx an integer value to specify the index the returning search 
 * results starts from
 * @param {Number} endInx an integer value to specify the index to which the returning 
 * search results ends at 
 * 
 * @returns
 * @type void
 */
PIM.prototype.findCalendarItems = function(itemToMatch, startInx, endInx) {
};

/**
 * Callback method to invoke when PIM.findCalendarItems completes. <br>
 * <br>
 * e.g.<br>
 * &nbsp;&nbsp;&nbsp;&nbsp;Widget.PIM.onCalendarItemsFound = myCallBack;<br>
 * &nbsp;&nbsp;&nbsp;&nbsp;function myCallBack(calendarItems) {<br>   
 * &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;var size = calendarItems.length;<br>
 * &nbsp;&nbsp;&nbsp;&nbsp;}<br>
 *
 * @param Array calendarItemsFound An array of CalendarItem objects
 *
 * @returns
 * @type void
 */
PIM.prototype.onCalendarItemsFound = function(calendarItemsFound) {
};

/**
 * Find all events that are scheduled to happen between the specified start and end time. <br> 
 * <br>
 * e.g.<br>
 * &nbsp;&nbsp;&nbsp;&nbsp;var startTime = new Date(2008, 9, 11, 0, 0, 0);<br>     
 * &nbsp;&nbsp;&nbsp;&nbsp;var endTime = new Date(2008, 9, 23, 0, 0, 0);<br>     
 * &nbsp;&nbsp;&nbsp;&nbsp;var addressBookItems = Widget.PIM.getCalendarItems(startTime, endTime);<br>     
 *
 * @param {Date} startTime the time that the event is scheduled to start
 * @param {Date} endTime the time that the event is scheduled to end
 *
 * @returns An array of CalendarItem objects.
 * @type Array
 */
PIM.prototype.getCalendarItems = function(startTime, endTime) {
	return new Array();
};

/**
 * Call back method to invoke when the alarm associated with a calendar item starts. <br>
 * <br>
 * e.g.<br>
 * &nbsp;&nbsp;&nbsp;&nbsp;Widget.PIM.onCalendarItemAlert = myCallBack;<br>   
 * &nbsp;&nbsp;&nbsp;&nbsp;function myCallBack(calendarItem) {<br>   
 * &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;var eventName = calendarItem.eventName; <br>
 * &nbsp;&nbsp;&nbsp;&nbsp;}<br>    
 *  
 * @param {CalendarItem} calendarItem CalendarItem object that the alarm is associated with
 * 
 * @returns
 * @type void  
 */
PIM.prototype.onCalendarItemAlert = function(calendarItem) {
};

/**
 * This is an asynchronous function that takes in an Array of AddressBookItems and 
 * exports them into a vCard file. <br> 
 * <br>
 * e.g.<br>
 * &nbsp;&nbsp;&nbsp;&nbsp;var contact = Widget.PIM.getAddressBookItem("1");<br>   
 * &nbsp;&nbsp;&nbsp;&nbsp;var arrayContacts = new Array(contact);<br>     
 * &nbsp;&nbsp;&nbsp;&nbsp;Widget.PIM.exportAsVCard(arrayContacts); <br>     
 * 
 * @param Array addressBookItems the address book items that are to be exported 
 * 
 * @returns
 * @type void
 */
PIM.prototype.exportAsVCard = function(addressBookItems) {
};

/**
 * Callback method to invoke when the widget finishes exporting the vCard file. <br>
 * <br>
 * e.g.<br>
 * &nbsp;&nbsp;&nbsp;&nbsp;Widget.PIM.onVCardExportingFinish = myCallBack;<br>
 * &nbsp;&nbsp;&nbsp;&nbsp;function myCallBack(path) {<br>   
 * &nbsp;&nbsp;&nbsp;&nbsp;}<br>
 *
 * @param {String} vCardFilePath a string value points to the location of the vCard file 
 *
 * @returns
 * @type void
 */
PIM.prototype.onVCardExportingFinish = function(vCardFilePath) {
};

/**
 * The AddressBookItem in PIM object.
 *
 * @type AddressBookItem
 */
PIM.prototype.AddressBookItem = new Widget.PIM.AddressBookItem();

/**
 * The CalendarItem in PIM object.
 *
 * @type CalendarItem
 */
PIM.prototype.CalendarItem = new Widget.PIM.CalendarItem();

/**
 * The EventRecurrenceTypes in PIM object.
 *
 * @type EventRecurrenceTypes
 */
PIM.prototype.EventRecurrenceTypes = new EventRecurrenceTypes();