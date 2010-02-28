/** 
 * @fileoverview This file is to be used for listing all functions and properties of 
 * JavaScript objects: Camera.
 *
 * @version 0.1 
 */
Camera.prototype = new Multimedia();

/**
 * @class Camera is the object for JIL Camera capabilities<br>
 * <br>
 * Camera is a sub-object of <I>Multimedia</I>. We use AudioPlayer in this way:
 * Widget.Multimedia.Camera.XXX<br>
 */
function Camera() {
};

/**
 * Capture still image and save to a file. <br>
 * <br>
 * e.g.<br>
 * &nbsp;&nbsp;&nbsp;&nbsp;Widget.Multimedia.Camera.onCameraCaptured = myCallBack;<br>
 * &nbsp;&nbsp;&nbsp;&nbsp;Widget.Multimedia.Camera.captureImage("/sdcard/a.jpg", false);<br>
 * &nbsp;&nbsp;&nbsp;&nbsp;function myCallBack(String fileName) {<br>
 * &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;var v = fileName;<br>
 * &nbsp;&nbsp;&nbsp;&nbsp;} <br>
 * 
 * @param {String} fileName the relative path where the captured image to be 
 * saved. If filename includes a fullPath, then image file is saved to
 *  that exact location.
 * @param {Boolean} lowRes the flag to specify if low resolution is used. 
 *    	    
 * @returns the full path of the saved file. 
 * This value is identical to the file path provided by onCameraCaptured().
 * @type String
 */
Camera.prototype.captureImage = function(fileName,lowRes) {
};
/**
 * This method attaches the camera to a DOM object which specifies the preview <br>
 * window before taking a picture or recording a video.Note:The size of Preview<br>
 * Window should larger than 32(pixel) * 24(pixel)
 * <br>
 * e.g.<br>
 * &nbsp;&nbsp;&nbsp;&nbsp;var Div = document.getElementById("CameraDiv");<br>
 * &nbsp;&nbsp;&nbsp;&nbsp;var mCamera = Widget.Multimedia.Camera;<br>
 * &nbsp;&nbsp;&nbsp;&nbsp; mCamera.setWindow(Div);<br>
 *
 * @param {Object} DomObject a DOM object which specifites the  preview window.
 *
 * @returns
 * @type void
 */
Camera.prototype.setWindow = function(DomObject) {
};
/**
 * Start video capture. <br> 
 * <br>
 * e.g.<br>
 * &nbsp;&nbsp;&nbsp;&nbsp;Widget.Multimedia.Camera.onCameraCaptured = myCallBack;<br>
 * &nbsp;&nbsp;&nbsp;&nbsp;function myCallBack(String fileName) {<br>
 * &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;var v = fileName;<br>
 * &nbsp;&nbsp;&nbsp;&nbsp;}<br>
 * &nbsp;&nbsp;&nbsp;&nbsp;Widget.Multimedia.Camera.startVideoCapture("a.3gp", false, 30, true);
 * 
 * @param {String} fileName the full path where the captured image to be saved. 
 * If filename includes a fullPath, then image file is saved to that exact location. 
 * @param {Boolean} lowRes the flag to specify if low resolution is used. 
 * @param {Number} maxDurationSeconds the max capture time. The unit is in second. 
 * This field should be an interger value.
 * @param {Boolean} showDefaultControls the flag to specify whether to show 
 * default controls.
 * @returns
 * @type void
 */
Camera.prototype.startVideoCapture = function(fileName,lowRes,maxDurationSeconds,showDefaultControls) {
};

/**
 * Explicitly stop a video capture in process. <br> 
 * <br>
 * e.g.<br>
 * &nbsp;&nbsp;&nbsp;&nbsp;Widget.Multimedia.Camera.startVideoCapture("a.3gp", false, 30, true);<br>
 * &nbsp;&nbsp;&nbsp;&nbsp;Widget.Multimedia.Camera.stopVideoCapture();
 * 
 * @returns
 * @type void
 */
Camera.prototype.stopVideoCapture = function() {
};

/**
 * Callback function when the camera stops capturing images or video. <br>
 * <br>
 * e.g.<br>
 * &nbsp;&nbsp;&nbsp;&nbsp;Widget.Camera.onCameraCaptured = myCallBack;<br>
 * &nbsp;&nbsp;&nbsp;&nbsp;function myCallBack(String fileName) {<br>
 * &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;var v = fileName; <br>
 * &nbsp;&nbsp;&nbsp;&nbsp;}<br>
 * &nbsp;&nbsp;&nbsp;&nbsp;Widget.Multimedia.Camera.captureImage("/sdcard/a.jpg", false);<br>
 *
 * @param {String} fileName full path of the saved file.
 *
 * @returns
 * @type void
 */
Camera.prototype.onCameraCaptured = function(fileName) {
}