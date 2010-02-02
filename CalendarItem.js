/** 
 * @fileoverview This file is to list all functions and properties of 
 * JavaScript object: CalendarItem.
 *
 * @version 0.1 
 */
CalendarItem.prototype = new Object();

/**
 * @class CalendarItem represents a PIM calendar event. A calendar event consists of 
 * values associated with attributes, such as eventName, alarmDate, etc.<br>
 */
function CalendarItem() {
};
Widget.PIM.CalendarItem.prototype= new CalendarItem();
/** 
 * A unique indicator (potentially assigned by the WRT) for identifying the calendar event
 * 
 * @type String
 */
CalendarItem.prototype.calendarItemId = "";

/**
 * Alarm time of this event
 * 
 * @type Date
 */
CalendarItem.prototype.alarmDate = new Date();

/**
 * Start time of this event
 * 
 * @type Date
 */
CalendarItem.prototype.eventStartTime = new Date();

/**
 * End time of this event
 * 
 * @type Date
 */
CalendarItem.prototype.eventEndTime = new Date();

/**
 * Subject of this event.
 * 
 * @type String
 */
CalendarItem.prototype.eventName = "";

/**
 * Description of this event
 * 
 * @type String
 */
CalendarItem.prototype.eventNotes = "";
	
/** 
 * Recurrent interval of this event.The values are defined in 
 * EventRecurrenceTypes Object
 * 
 * 
 * @type {EventRecurrenceTypes}
 */
CalendarItem.prototype.eventRecurrence = new EventRecurrenceTypes();

/**
 * Indicates whether an alarm is to be activated for the event
 * 
 * @type Boolean
 */
CalendarItem.prototype.alarmed = new Boolean();

/**
 * The field changes of the calendarItem will apply after this method is invoked. <br>
 * <br>
 * e.g.<br>
 * &nbsp;&nbsp;&nbsp;&nbsp;Widget.PIM.onCalendarItemAlert = myCallBack;<br>
 * &nbsp;&nbsp;&nbsp;&nbsp;var myCalendarItem = new Widget.PIM.CalendarItem();<br>
 * &nbsp;&nbsp;&nbsp;&nbsp;myCalendarItem.eventStartTime = new Date(2008, 9, 22, 0, 0, 0);<br> 
 * &nbsp;&nbsp;&nbsp;&nbsp;Widget.PIM.findCalendarItems(myCalendarItem, 0, 9);<br>
 * &nbsp;&nbsp;&nbsp;&nbsp;function myCallBack(calendarItems) {<br>
 * &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;var calendarItem = calendarItems[0];<br>
 * &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;calendarItem.eventStartTime = new Date(2008, 9, 23, 0, 0, 0);<br>
 * &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;calendarItem.update(); <br>
 * &nbsp;&nbsp;&nbsp;&nbsp;}<br>
 * 
 * @returns 
 * @type void     
 */
CalendarItem.prototype.update = function() {
};
