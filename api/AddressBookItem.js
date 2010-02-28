/** 
 * @fileoverview This file is to list all functions and properties of 
 * JavaScript object: AddressBookItem.
 *
 * @version 0.1 
 */
AddressBookItem.prototype = new PIM();

/**
 * @class AddressBookItem represents a PIM Contact. A contact consists of values 
 * associated with attributes. Its possible values are "addressBookItemId", "fullName",
 * "mobilePhone", "homePhone", "workPhone", "eMail", "company", "title", "address". <br>
 */
function AddressBookItem() {
};

Widget.PIM.AddressBookItem.prototype= new AddressBookItem();

/** 
 * This is a unique indicator (potentially assigned by the WRT) for identifying the contact.
 * 
 * @type String
 */
AddressBookItem.prototype.addressBookItemId = "";

/**
 * This is the full name of the contact.
 * 
 * @type String
 */
AddressBookItem.prototype.fullName = "fullName";

/**
 * This is the mobile phone number of the contact.
 * 
 * @type String
 */
AddressBookItem.prototype.mobilePhone = "mobilePhone";

/**
 * This is the home phone number of the contact.
 * 
 * @type String
 */
AddressBookItem.prototype.homePhone = "homePhone";

/**
 * This is the work phone number of the contact.
 * 
 * @type String
 */
AddressBookItem.prototype.workPhone = "workPhone";

/**
 * This is the email address of the contact.
 * 
 * @type String
 */
AddressBookItem.prototype.eMail = "eMail";

/**
 * This is the company name of the contact.
 * 
 * @type String
 */
AddressBookItem.prototype.company = "company";

/**
 * This is the title of the contact.
 * 
 * @type String
 */
AddressBookItem.prototype.title = "title";

/**
 * This is the address of the contact.
 * 
 * @type String
 */
AddressBookItem.prototype.address = "address";

/**
 * Assigns a value for the specified attribute. All attribute but "addressBookItemId" 
 * can be set a new value. <br>
 * <br>
 * e.g.<br>
 * &nbsp;&nbsp;&nbsp;&nbsp;var contact = new Widget.PIM.AddressBookItem();<br>
 * &nbsp;&nbsp;&nbsp;&nbsp;contact.setAttributeValue("fullName", "George Brown");
 * 
 * @param {String} attribute this parameter should reference PIM contact attributes values
 * @param {String} value the value to be assigned
 * 
 * @returns
 * @type void
 */
AddressBookItem.prototype.setAttributeValue = function(attribute, value) {
};

/**
 * Puts the contact into multiple contact groups. <br>
 * <br>
 * e.g.<br>
 * &nbsp;&nbsp;&nbsp;&nbsp;var contact = Widget.PIM.getAddressBookItem("1");<br>
 * &nbsp;&nbsp;&nbsp;&nbsp; var groups = new Array("Friends", "Family");<br>
 * &nbsp;&nbsp;&nbsp;&nbsp;contact.setAddressGroupNames(groups);<br>
 * 
 * @param {Array} groups an array of String containing the group names that the contact 
 * is going to be put in 
 * 
 * @returns
 * @type void
 */
AddressBookItem.prototype.setAddressGroupNames = function(groups) {
};

/**
 * The value associated with the specified attribute. <br> 
 * <br>
 * e.g.<br>
 * &nbsp;&nbsp;&nbsp;&nbsp;Widget.PIM.onAddressBookItemsFound = myCallBack;<br>
 * &nbsp;&nbsp;&nbsp;&nbsp;var myContact = new Widget.PIM.AddressBookItem();<br>
 * &nbsp;&nbsp;&nbsp;&nbsp;myContact.setAttributeValue("mobilePhone", "10086");<br>
 * &nbsp;&nbsp;&nbsp;&nbsp;Widget.PIM.findAddressBookItems(myContact, 0, 9);<br>
 * &nbsp;&nbsp;&nbsp;&nbsp;function myCallBack(addressBookItems) {<br>
 * &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;var contact = addressBookItems[0];<br>
 * &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;var name = contact.getAttributeValue("fullName");<br>
 * &nbsp;&nbsp;&nbsp;&nbsp;}<br>
 * 
 * @param {String} attribute one of the attribute fields of the <i>AddressBookItem</i> object
 *
 * @returns the associated value
 * @type String
 */
AddressBookItem.prototype.getAttributeValue = function(attribute) {
	return new String();
};

/**
 * Returns the group names the contact belongs to. <br> 
 * <br>
 * e.g.<br>
 * &nbsp;&nbsp;&nbsp;&nbsp;var contact = Widget.PIM.getAddressBookItem("1");<br>
 * &nbsp;&nbsp;&nbsp;&nbsp;var groups = contact.getAddressGroupNames();<br>
 * 
 * @returns an array of group names that the contact belongs to. Each element in the 
 * array should be a string.
 * @type Array
 */
AddressBookItem.prototype.getAddressGroupNames = function() {
	return new Array();
};

/**
 * Returns the attributes assigned to the contact. <br>
 * <br>
 * e.g.<br>
 * &nbsp;&nbsp;&nbsp;&nbsp;var contact = new Widget.PIM.AddressBookItem();<br>
 * &nbsp;&nbsp;&nbsp;&nbsp;var attributeValue = contact.getAvailableAttributes();
 * 
 * @returns an array of attributes having assigned values or an empty array 
 * if none are assigned. Each element in the array should be a string. 
 * @type Array
 */
AddressBookItem.prototype.getAvailableAttributes = function() {
	return new Array();
};

/**
 * Field changes to the addressbookItem will be applied after this method is invoked. <br>
 * <br>
 * e.g.<br>
 * &nbsp;&nbsp;&nbsp;&nbsp;Widget.PIM.onAddressBookItemsFound = myCallBack;<br>
 * &nbsp;&nbsp;&nbsp;&nbsp;var myContact = new Widget.PIM.AddressBookItem();<br>
 * &nbsp;&nbsp;&nbsp;&nbsp;myContact.setAttributeValue("mobilePhone", "10086");<br>
 * &nbsp;&nbsp;&nbsp;&nbsp;Widget.PIM.findAddressBookItems(myContact, 0, 9);<br>
 * &nbsp;&nbsp;&nbsp;&nbsp;function myCallBack(addressBookItems) {<br>
 * &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;var contact = addressBookItems[0];<br>
 * &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;contact.setAttributeValue("mobilePhone", "12580");<br>
 * &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;contact.update();<br>
 * &nbsp;&nbsp;&nbsp;&nbsp;}<br>
 * 
 * @returns 
 * @type void
 */
AddressBookItem.prototype.update = function() {
};