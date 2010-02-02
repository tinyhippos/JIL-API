/** 
 * @fileoverview This file is to list all functions and properties of 
 * JavaScript object: AccountInfo.
 *
 * @version 0.1 
 */
AccountInfo.prototype = new Object();

/**
 * @class AccountInfo is a sub-object of <I>Widget.Device</I>.<br>
 * <br>
 * This object provides read-only information about the user account associated 
 * with the phone. This relies on back-end network services in order to obtain 
 * this information.<br>
 * <br>
 * This information will be undefined if the back-end services are unavailable 
 * (e.g., due to network unavailability) or if the Widget does not have sufficient
 * security permissions to obtain this information. <br>
 *
 */
function AccountInfo() {
};

/**
 * This is a value guaranteed to be unique to the user account. 
 * 
 * @type String
 */
AccountInfo.prototype.phoneUserUniqueId = "";

/**
 * This is the mobile phone number associated with the account. This corresponds to 
 * the dialed mobile number and not necessarily to the phone's internal Mobile 
 * Identification Number (MIN). 
 * 
 * @type String
 */
AccountInfo.prototype.phoneMSISDN = "";

/**
 * This is the name of the operator hosting the user account.
 * 
 * @type String
 */
AccountInfo.prototype.phoneOperatorName = "";

/**
 * This is the financial account balance in the default currency for the user account. 
 * This field should be double value.This is expected to use network resources.
 * 
 * @type Number
 */
AccountInfo.prototype.userAccountBalance = "";

/**
 * This indicates the type of billing for the account. Valid values include â€˜prepaidâ€™, 
 * 'postpaid', and 'other'. This is expected to use network resources.
 * 
 * @type String
 */
AccountInfo.prototype.userSubscriptionType = "";