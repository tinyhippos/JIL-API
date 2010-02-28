/** 
 * @fileoverview This file is to list all functions and properties of 
 * JavaScript object: EventRecurrenceTypes.
 *
 * @version 0.1 
 */
EventRecurrenceTypes.prototype = new PIM();

/**
 * @class EventRecurrenceTypes represents the reminder you can select.<br>
 */
function EventRecurrenceTypes() {
};

/** 
 * This represents the reminder will not repeat.
 * 
 * @type String
 */
EventRecurrenceTypes.prototype.NOT_REPEAT = "";

/**
 * This represents the reminder will  repeat daily.
 * 
 * @type String
 */
EventRecurrenceTypes.prototype.DAILY = "";

/**
 * This represents the reminder will repeat on weekday.
 * 
 * @type String
 */
EventRecurrenceTypes.prototype.EVERY_WEEKDAY = "";

/**
 * This represents the reminder will repeat every week.
 * 
 * @type String
 */
EventRecurrenceTypes.prototype.WEEKLY_ON_DAY = "";

/**
 * This represents the reminder will repeat monthly, on the weekday every month.
 * 
 * @type String
 */
EventRecurrenceTypes.prototype.MONTHLY_ON_DAY = "";

/**
 * This represents the reminder will repeat monthly, on the monthday every month.
 * 
 * @type String
 */
EventRecurrenceTypes.prototype.MONTHLY_ON_DAY_COUNT = "";

/**
 * This represents the reminder will repeat yearly.
 * 
 * @type String
 */
EventRecurrenceTypes.prototype.YEARLY = "";