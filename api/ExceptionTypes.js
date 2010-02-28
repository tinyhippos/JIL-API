/** 
 * @fileoverview This file is to be used for listing all functions and properties of 
 * JavaScript objects: ExceptionTypes.
 *
 * @version 0.1 
 */
ExceptionTypes.prototype = new Widget();

/**
 * @class ExceptionTypes contains common values that are referenced by the Exception.type.<br>
 * 
 * @constructor
 */
function ExceptionTypes() {
};

/**
 * This exception means the paramters do not meet the parameter requirement of a function.
 * 
 * @type String
 */
ExceptionTypes.prototype.INVALID_PARAMETER = new String();

/**
 * This exception means the widget hasn't privilege to access the function.
 * 
 * @type String
 */
ExceptionTypes.prototype.SECURITY = new String();

/**
 * This exception means the exception is not belong to the defined exceptions.
 * 
 * @type String
 */
ExceptionTypes.prototype.UNKNOWN = new String();

/**
 * This exception means the function is not supported by widget engine.
 * 
 * @type String
 */
ExceptionTypes.prototype.UNSUPPORTED = new String();