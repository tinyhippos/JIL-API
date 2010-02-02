/** 
 * @fileoverview This file is used for listing all functions and properties of 
 * JavaScript object: Exception.
 *
 * @version 0.1 
 */
Exception.prototype = new Widget();

/**
 * @class Exception represents a Exception event.
 * Widget Exception is a sub-object of Widget.<br>
 *
 */
function Exception() {
};

/**
 * The detail message of the exception, exact value depends on the widget engine implementation.
 * 
 * @type String
 */
Exception.prototype.message = new String();

/**
 * The type of Exception.
 * 
 * @type String
 */
Exception.prototype.type = new String();