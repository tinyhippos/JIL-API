/** 
 * @fileoverview This file is used for listing all functions and properties of 
 * JavaScript object: Telephony.
 *
 * @version 0.1 
 */
Telephony.prototype = new Widget();

/**
 * @class Telephony is the container object for JIL Telephony objects. <br>
 * <br>
 * Telephony is a sub-object of <I>Widget</I>. So we use Telephony in this way: 
 * Widget.Telephony.XXX<br>
 */
function Telephony() {
};
//Widget.Telephony.prototype= new Telephony();
/**
 * Automatically initiates an outgoing voice call with the string specified. Expected to 
 * invoke the native dialer application.<br>
 * <br>
 * e.g.<br>
 * &nbsp;&nbsp;&nbsp;&nbsp;Widget.Telephony.initiateVoiceCall("10086");
 * 
 * @param {String} phoneNumber a string containing the phone number to be dialed for the voice call.
 * 
 * @returns
 * @type void
 */
Telephony.prototype.initiateVoiceCall = function(phoneNumber) {
};

/**
 * Get the number of call records from the call log for the specified call record type. <br>
 * <br>
 * e.g.<br>
 * &nbsp;&nbsp;&nbsp;&nbsp;Widget.Telephony.getCallRecordCnt(Widget.Telephony.CallRecordTypes.MISSED);
 * 
 * @param {String} callRecordType A String value corresponding to a CallRecordTypes entry
 * 
 * @returns the total number of records for the specified type. 0 is returned if the 
 * type is unknown
 * @type Number 
 */
Telephony.prototype.getCallRecordCnt = function(callRecordType) {
	return new Number();
};

/**
 * Retrieves the call record of the specified call record type by index. <br>
 * <br>
 * e.g.<br>
 * &nbsp;&nbsp;&nbsp;&nbsp;Widget.Telephony.getCallRecord(Widget.Telephony.CallRecordTypes.MISSED, "10");
 * 
 * @param {String} callRecordType A String value corresponding to a CallRecordTypes entry
 * @param {String} id String value uniquely identifies the call record in the call log. 
 * This value is assigned by the widget engine. 
 * 
 * @returns  a CallRecord object specified by <i>id</i> parameter
 * @type CallRecord
 */
Telephony.prototype.getCallRecord = function(callRecordType, id) {
	return new CallRecord();
};

/**
 * Deletes the call record of the specified call record type by index. <br>
 * <br>
 * e.g.<br>
 * &nbsp;&nbsp;&nbsp;&nbsp;Widget.Telephony.deleteCallRecord(Widget.Telephony.CallRecordTypes.MISSED, "123");
 * 
 * @param {String} callRecordType a String value corresponding to a CallRecordType entry
 * @param {String} id a String value uniquely identifies the call record in the call log. 
 * This value is assigned by the widget engine.
 * 
 * @returns
 * @type void
 */
Telephony.prototype.deleteCallRecord = function(callRecordType, id) {
};

/**
 * Deletes all call records of the specified call record type. <br>
 * <br>
 * e.g.<br>
 * &nbsp;&nbsp;&nbsp;&nbsp;Widget.Telephony.deleteAllCallRecords(Widget.Telephony.CallRecordTypes.OUTGOING);
 * 
 * @param {String} callRecordType a String value corresponding to a CallRecordTypes entry 
 * 
 * @returns
 * @type void
 */
Telephony.prototype.deleteAllCallRecords = function(callRecordType) {
};

/**
 * Retrieves all call records of the specified call record type having a match against 
 * the specified fields defined in the comparisonRecord. Supports * as wildcards in 
 * Strings. Search is case insensitive.<br>
 * <br>
 * Widget can specify only return a range of matched files between startInx and endInx. <br>
 * <br>
 * e.g.<br>
 * &nbsp;&nbsp;&nbsp;&nbsp;Widget.Telephony.onCallRecordsFound = myCallBack;<br>
 * &nbsp;&nbsp;&nbsp;&nbsp;var record = new CallRecord();<br>
 * &nbsp;&nbsp;&nbsp;&nbsp;record.callRecordAddress = "55555555";<br>
 * &nbsp;&nbsp;&nbsp;&nbsp;Widget.Telephony.findCallRecords(record, 0, 9); 
 * &nbsp;&nbsp;&nbsp;&nbsp;function myCallBack(callRecords) {<br>
 * &nbsp;&nbsp;&nbsp;&nbsp;}
 * 
 * @param {CallRecord} comparisonRecord a CallRecord object containing fields to match 
 * against in the call records. Leave a field blank if you do not wish to check against 
 * it. If the CallRecordType field is blank, then all CallRecord types are searched. 
 * Wildcards are supported in the name strings and address strings. To search for records 
 * in a given time/date range, define the start time for the search in the startTime 
 * value of the comparisonRecord and set the durationSeconds to reflect the end time for 
 * the search.
 * @param {Number} startInx an integer value to specify the index the returning search 
 * results starts from
 * @param {Number} endInx an integer value to specify the index to which the returning 
 * search results ends at 
 * 
 * @returns 
 * @type void
 */
Telephony.prototype.findCallRecords = function(comparisonRecord, startInx, endInx) {
};

/**
 * This is a call back method which will be triggered when there's an received
 * call, missed call or outgoing call. <br>
 * <br>
 * e.g.<br>
 * &nbsp;&nbsp;&nbsp;&nbsp;Widget.Telephony.onCallEvent = myCallBack;<br>
 * &nbsp;&nbsp;&nbsp;&nbsp;function myCallBack(callType, phoneNumber) {<br>
 * &nbsp;&nbsp;&nbsp;&nbsp;if(callType == "missed") {<br>
 * &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;var missedCall = phoneNumber;<br>
 * &nbsp;&nbsp;&nbsp;&nbsp;}<br>
 * 
 * @param {String} callType identifies the type of the call event, possible values are 
 *                          "received", "missed" and "outgoing" 
 * @param {String} phoneNumber if this is an received or missed call, then this is 
 *                          the destination phone number; if this is an outgoing
 *                          call, then this is the source phone number. 
 * 
 * @returns 
 * @type void
 */
Telephony.prototype.onCallEvent = function(callType, phoneNumber) {
};

/**
 * This is a call back method to invoke when Telephony.findCallRecords completes.  <br>
 * <br>
 * e.g.<br>
 * &nbsp;&nbsp;&nbsp;&nbsp;Widget.Telephony.onCallRecordsFound = myCallBack;<br>
 * &nbsp;&nbsp;&nbsp;&nbsp;var record = new CallRecord();<br>
 * &nbsp;&nbsp;&nbsp;&nbsp;record.callRecordAddress = "55555555";<br>
 * &nbsp;&nbsp;&nbsp;&nbsp;Widget.Telephony.findCallRecords(record, 0, 9); 
 * &nbsp;&nbsp;&nbsp;&nbsp;function myCallBack(callRecords) {<br>
 * &nbsp;&nbsp;&nbsp;&nbsp;}
 * 
 * @param Array callRecords An array of CallRecord objects if either startInx or 
 * endInx is negative in Telephony.findCallRecords function, the returned callRecordsFound 
 * will be an empty array. if startInx equals endInx in Telephony.findCallRecords 
 * function, the returned callRecordsFound will contain only one item whose sequence 
 * number is startInx. if startInx is greater than endInx in Telephony.findCallRecords 
 * function, the returned callRecordsFound will be an empty array. if startInx is greater 
 * than the number of found items in Telephony.findCallRecords function, the returned 
 * callRecordsFound will be an empty array. if endInx is greater than the number of 
 * found items in Telephony.findCallRecords function, the returned callRecordsFound 
 * will contain items bwteeen startInx and the last returned item inclusively.
 * 
 * @returns 
 * @type void
 */
Telephony.prototype.onCallRecordsFound = function(callRecords) {
};

/**
 *  The type of call record in the call log.
 * @type CallRecordTypes
 */
Telephony.prototype.CallRecordTypes = new CallRecordTypes();

/**
 * The record items in the call log.
 * @type CallRecord
 */
Telephony.prototype.CallRecord = new CallRecord();