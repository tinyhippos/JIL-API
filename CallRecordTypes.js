/** 
 * @fileoverview This file is to list all functions and properties of 
 * JavaScript object: CallRecordTypes.
 *
 * @version 0.1 
 */
CallRecordTypes.prototype = new Object();

/**
 * @class CallRecordTypes represents the type of call record in the call log. <br>
 * <br>
 * CallRecordTypes is a sub-object of <I>Widget.Telephony</I>. <br>
 */
function CallRecordTypes() {
};

/**
 * The identifier used for an RECEIVED Call Record that is received and not missed,
 * referenced by Telephony and CallRecord.
 * 
 * @type String
 */
CallRecordTypes.prototype.RECEIVED = "received";

/**
 * The identifier used for an OUTGOING Call Record, 
 * referenced by Telephony and CallRecord. 
 * 
 * @type String
 */
CallRecordTypes.prototype.OUTGOING = "outgoing";
    
/**
 * The identifier used for an MISSED Call Record, 
 * referenced by Telephony and CallRecord. 
 * 
 * @type String
 */
CallRecordTypes.prototype.MISSED = "missed";