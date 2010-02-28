/** 
 * @fileoverview This file is to be used for listing all functions and properties of 
 * JavaScript objects: AudioPlayer.
 *
 * @version 0.1 
 */
AudioPlayer.prototype = new Multimedia();

/**
 * @class AudioPlayer is the object for JIL Audio player capabilities.<br>
 * <br>
 * AudioPlayer is a sub-object of <I>Multimedia</I>. We use AudioPlayer in this way:
 * Widget.Multimedia.AudioPlayer.XXX<br>
 */
function AudioPlayer() {
};

/**
 * Open an audio file which will be played by <i>play</i> function. <br> 
 * The widget engine is responsible for file caching, etc. The following protocols 
 * are supported by the open() function: "file://", "rtsp://","http://".<br>
 * If the parameter string doesn't start with the protocol syntax listed above, 
 * the widget engine will search the media files in the widget package.<br>
 * <br>
 * e.g.<br>
 * &nbsp;&nbsp;&nbsp;&nbsp;Widget.Multimedia.AudioPlayer.open("file:///sdcard/sample.mp3");<br>
 * &nbsp;&nbsp;&nbsp;&nbsp;Widget.Multimedia.AideoPlayer.open("sample.mp3");<br>
 * &nbsp;&nbsp;&nbsp;&nbsp;Widget.Multimedia.AudioPlayer.open("http://www.sample.com/sample.mp3");
 * 
 * @param {String} fileUrl the url of the audio file to be played.
 * 
 * @returns
 * @type void
 */
AudioPlayer.prototype.open = function(fileUrl) {
};

/**
 * Play the audio which is opened by <i>open</i> function. <br> 
 * <br>
 * e.g.<br>
 * &nbsp;&nbsp;&nbsp;&nbsp;Widget.Multimedia.AudioPlayer.open("sample.mp3");<br>
 * &nbsp;&nbsp;&nbsp;&nbsp;Widget.Multimedia.AudioPlayer.play(5);<br>
 * 
 * @param {Number} repeatTimes an integer value specifies how many times the 
 * media file should be played.
 * 
 * @returns
 * @type void
 */
AudioPlayer.prototype.play = function(repeatTimes) {
};

/**
 * Pause the audio which is played by <i>play</i> function. <br> 
 * <br>
 * e.g.<br>
 * &nbsp;&nbsp;&nbsp;&nbsp;Widget.Multimedia.AudioPlayer.onStateChange = myCallback(state);<br>
 * &nbsp;&nbsp;&nbsp;&nbsp;Widget.Multimedia.AudioPlayer.open("file:///sdcard/sample.mp3");<br>
 * &nbsp;&nbsp;&nbsp;&nbsp;Widget.Multimedia.AudioPlayer.play(5);<br>
 * &nbsp;&nbsp;&nbsp;&nbsp;function myCallback(state) {<br>
 * &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if (state == "playing") {<br>
 * &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Widget.Multimedia.AudioPlayer.pause();<br>
 * &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}<br>
 * &nbsp;&nbsp;&nbsp;&nbsp;}<br>
 * 
 * @returns
 * @type void
 */
AudioPlayer.prototype.pause = function() {
};

/**
 * Resume the audio which is paused by <i>pause</i> function. <br> 
 * <br>
 * e.g.<br>
 * &nbsp;&nbsp;&nbsp;&nbsp;Widget.Multimedia.AudioPlayer.onStateChange = myCallback(state);<br>
 * &nbsp;&nbsp;&nbsp;&nbsp;Widget.Multimedia.AudioPlayer.open("file:///sdcard/sample.mp3");<br>
 * &nbsp;&nbsp;&nbsp;&nbsp;Widget.Multimedia.AudioPlayer.play(5);<br>
 * &nbsp;&nbsp;&nbsp;&nbsp;Widget.Multimedia.AudioPlayer.pause();<br>
 * &nbsp;&nbsp;&nbsp;&nbsp;function myCallback(state) {<br>
 * &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if (state == "paused") {<br>
 * &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Widget.Multimedia.AudioPlayer.resume();<br>
 * &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}<br>
 * &nbsp;&nbsp;&nbsp;&nbsp;}<br>
 * 
 * @returns
 * @type void
 */
AudioPlayer.prototype.resume = function() {
};

/**
 * Stop the audio which is played by <i>play</i> function. <br> 
 * <br>
 * e.g.<br>
 * &nbsp;&nbsp;&nbsp;&nbsp;Widget.Multimedia.AudioPlayer.onStateChange = myCallback(state);<br>
 * &nbsp;&nbsp;&nbsp;&nbsp;Widget.Multimedia.AudioPlayer.open("file:///sdcard/sample.mp3");<br>
 * &nbsp;&nbsp;&nbsp;&nbsp;Widget.Multimedia.AudioPlayer.play(5);<br>
 * &nbsp;&nbsp;&nbsp;&nbsp;function myCallback(state) {<br>
 * &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if (state == "playing") {<br>
 * &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Widget.Multimedia.AudioPlayer.stop();<br>
 * &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}<br>
 * &nbsp;&nbsp;&nbsp;&nbsp;}<br>
 * 
 * @returns
 * @type void
 */
AudioPlayer.prototype.stop = function() {
};

/**
 * Call back method to invoke when the state of the audio player changes. <br>
 * <br>
 * e.g.<br>
 * &nbsp;&nbsp;&nbsp;&nbsp;Widget.Multimedia.AudioPlayer.onStateChange = myCallback(state);<br>
 * &nbsp;&nbsp;&nbsp;&nbsp;Widget.Multimedia.AudioPlayer.open("file:///sdcard/sample.mp3");<br>
 * &nbsp;&nbsp;&nbsp;&nbsp;function myCallback(state) {<br>
 * &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if (state == "opened") {<br>
 * &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Widget.Multimedia.AudioPlayer.play();<br>
 * &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}<br>
 * &nbsp;&nbsp;&nbsp;&nbsp;}<br>
 *
 * @param {String} state indicating the current state of the audio player. 
 * Possible values are "InitStatus", "opened","stopped" "paused", and "playing".
 *
 * @returns
 * @type void
 */
AudioPlayer.prototype.onStateChange = function(state) {
}