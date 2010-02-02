/** 
 * @fileoverview This file is to list all functions and properties of 
 * JavaScript object: CallRecord.
 *
 * @version 0.1 
 */
CallRecord.prototype = new Object();

/**
 * @class CallRecord represents the record items in the call log.<br>
 */
function CallRecord() {
};
Widget.Telephony.CallRecord.prototype= new CallRecord();
/**
 * A String indicating the type of call record, i.e. "received", "outgoing", "missed".
 * This corresponds to the constants defined in the CallRecordType object.
 * 
 * @type String
 */
CallRecord.prototype.callRecordType = "";

/**
 * A unique indicator (potentially assigned by the WRT) for identifying the call record.
 * 
 * @type String
 */
CallRecord.prototype.callRecordId = "";

/**
 * The phone number on call record. <br>
 * <br>
 * If this is an received or missed call record, then this is the phone number of 
 * the party originating the call. <br>
 * <br>
 * If this is an outgoing call record, then this is the phone number of the party 
 * receiving the call. 
 * 
 * @type String
 */
CallRecord.prototype.callRecordAddress = "";

/**
 * The addressbook name on call record. <br>
 * <br>
 * If this is an received or missed call record, then this is the name from the 
 * address book that the phone was able to associate with the source phone number, 
 * if any applies. <br>
 * <br>
 * If this is an outgoing call record, then this is the name from the address 
 * book that the phone was able to associate with the destination phone number, 
 * if any applies.
 * 
 * @type String
 */
CallRecord.prototype.callRecordName = "";

/**
 * The number of seconds occupied by the call. This field should be an integer 
 * value. Due to limitation of some handsets, this could be an approximate value.
 * 
 * @type Number
 */
CallRecord.prototype.durationSeconds = new Number();

/**
 * The time and date when the call begins. 
 * 
 * @type Date
 */
CallRecord.prototype.startTime = new Date();