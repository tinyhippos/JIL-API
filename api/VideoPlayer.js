/** 
 * @fileoverview This file is to be used for listing all functions and properties of 
 * JavaScript objects: VideoPlayer.
 *
 * @version 0.1 
 */
VideoPlayer.prototype = new Multimedia();

/**
 * @class VideoPlayer is the object for JIL Video play capabilities. <br>
 * <br>
 * VideoPlayer is a sub-object of <I>Multimedia</I>. We use VideoPlayer in this way:<br>
 * &nbsp;&nbsp;&nbsp;&nbsp;var mvplayer = Widget.Multimedia.VideoPlayer;<br>
 * &nbsp;&nbsp;&nbsp;&nbsp;mvplayer.xxxx<br>
 */

function VideoPlayer() {
};


/**
 * Open an video file which will be played by <i>play</i> function. <br> 
 * The widget engine is responsible for file caching, etc. The following protocols 
 * are supported by the open() function: "file://", "rtsp://","http://".<br>
 * If the parameter string doesn't start with the protocol syntax listed above, 
 * the widget engine will search the media files in the widget package.<br>
 * <br>
 * e.g.<br>
 * &nbsp;&nbsp;&nbsp;&nbsp;var Div = document.getElementById("PlayDiv");<br>
 * &nbsp;&nbsp;&nbsp;&nbsp;var mvplayer = Widget.Multimedia.VideoPlayer;<br>
 * &nbsp;&nbsp;&nbsp;&nbsp;var mvplayer.setWindow(Div);<br>
 * &nbsp;&nbsp;&nbsp;&nbsp;mvplayer.open("file:///sdcard/Sample.mp4");<br>
 * &nbsp;&nbsp;&nbsp;&nbsp;mvplayer.open("Sample.mp4");<br>
 * &nbsp;&nbsp;&nbsp;&nbsp;mvplayer.open("http://www.sample.com/sample.mp4");
 *
 * @param {String} fileUrl the url of the Video file to be played.
 *
 * @returns
 * @type void
 */
VideoPlayer.prototype.open = function(fileUrl) {
};


/**
 * This method attaches the player to a DOM object which specifites the video <br>
 * playing window.
 * <br>
 * e.g.<br>
 * &nbsp;&nbsp;&nbsp;&nbsp;var Div = document.getElementById("PlayDiv");<br>
 * &nbsp;&nbsp;&nbsp;&nbsp;var mvplayer = Widget.Multimedia.VideoPlayer;<br>
 * &nbsp;&nbsp;&nbsp;&nbsp;var mvplayer.setWindow(Div);<br>
 * &nbsp;&nbsp;&nbsp;&nbsp;mvplayer.open("file:///sdcard/Sample.mp4");<br>
 *
 * @param {Object} DomObject a DOM object which specifites the video playing window.
 *
 * @returns
 * @type void
 */
VideoPlayer.prototype.setWindow = function(DomObject) {
};

/**
 * Play the video which is opened by <i>open</i> function. <br>
 * <br>
 * e.g.<br>
 * &nbsp;&nbsp;&nbsp;&nbsp;var Div = document.getElementById("PlayDiv");<br>
 * &nbsp;&nbsp;&nbsp;&nbsp;var mvplayer = Widget.Multimedia.VideoPlayer;<br>
 * &nbsp;&nbsp;&nbsp;&nbsp;var mvplayer.setWindow(Div);<br>
 * &nbsp;&nbsp;&nbsp;&nbsp;mvplayer.onStateChange= myCallback(state);<br>
 * &nbsp;&nbsp;&nbsp;&nbsp;mvplayer.open("file:///sdcard/Sample.mp4");<br>
 * &nbsp;&nbsp;&nbsp;&nbsp;mvplayer.setVideoScreen(width,higth);<br>
 * &nbsp;&nbsp;&nbsp;&nbsp;function myCallback(state) {<br>
 * &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if (state == "opened")<br>
 * &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;myPlayer.play(5);<br>
 * &nbsp;&nbsp;&nbsp;&nbsp;}<br>
 *
 * @param {Number} repeatTimes an integer value specifies how many times the 
 * media file should be played.
 *
 * @returns
 * @type void
 */
VideoPlayer.prototype.play = function(repeatTimes) {
};

/**
 * Pause the video which is played by <i>play</i> function. <br>
 * <br>
 * e.g.<br>
 * &nbsp;&nbsp;&nbsp;&nbsp;var Div = document.getElementById("PlayDiv");<br>
 * &nbsp;&nbsp;&nbsp;&nbsp;var mvplayer = Widget.Multimedia.VideoPlayer;<br>
 * &nbsp;&nbsp;&nbsp;&nbsp;var mvplayer.setWindow(Div);<br>
 * &nbsp;&nbsp;&nbsp;&nbsp;mvplayer.open("file:///sdcard/Sample.mp4");<br>
 * &nbsp;&nbsp;&nbsp;&nbsp;mvplayer.setVideoScreen(width,higth);<br>
 * &nbsp;&nbsp;&nbsp;&nbsp;mvplayer.onStateChange= myCallback(state);<br>
 * &nbsp;&nbsp;&nbsp;&nbsp;mvplayer.play(5);<br>
 * &nbsp;&nbsp;&nbsp;&nbsp;function myCallback(state) { <br>
 * &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if (state == "playing") <br>
 * &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;myPlayer.pause(); <br>
 * &nbsp;&nbsp;&nbsp;&nbsp;} <br>
 *
 * @returns
 * @type void
 */
VideoPlayer.prototype.pause = function() {
};

/**
 * Resume the video which is paused by <i>pause</i> function. <br>
 * <br>
 * e.g.<br>
 * &nbsp;&nbsp;&nbsp;&nbsp;var Div = document.getElementById("PlayDiv");<br>
 * &nbsp;&nbsp;&nbsp;&nbsp;var mvplayer = Widget.Multimedia.VideoPlayer;<br>
 * &nbsp;&nbsp;&nbsp;&nbsp;var mvplayer.setWindow(Div);<br>
 * &nbsp;&nbsp;&nbsp;&nbsp;mvplayer.open("file:///sdcard/Sample.mp4");<br>
 * &nbsp;&nbsp;&nbsp;&nbsp;mvplayer.onStateChange= myCallback(state);<br>
 * &nbsp;&nbsp;&nbsp;&nbsp;mvplayer.play(5);<br>
 * &nbsp;&nbsp;&nbsp;&nbsp;mvplayer.pause();
 * &nbsp;&nbsp;&nbsp;&nbsp;function myCallback(state) { <br>
 * &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if (state == "paused") <br>
 * &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;myPlayer.resume(); <br>
 * &nbsp;&nbsp;&nbsp;&nbsp;} <br>
 *
 * @returns
 * @type void
 */
VideoPlayer.prototype.resume = function() {
};

/**
 * Stop the video which is played by <i>playing</i> function. <br>
 * <br>
 * e.g.<br>
 * &nbsp;&nbsp;&nbsp;&nbsp;var Div = document.getElementById("PlayDiv");<br>
 * &nbsp;&nbsp;&nbsp;&nbsp;var mvplayer = Widget.Multimedia.VideoPlayer;<br>
 * &nbsp;&nbsp;&nbsp;&nbsp;var mvplayer.setWindow(Div);<br>
 * &nbsp;&nbsp;&nbsp;&nbsp;mvplayer.open("file:///sdcard/Sample.mp4");<br>
 * &nbsp;&nbsp;&nbsp;&nbsp;mvplayer.setVideoScreen(width,higth);<br>
 * &nbsp;&nbsp;&nbsp;&nbsp;mvplayer.onStateChange= myCallback(state);<br>

 * &nbsp;&nbsp;&nbsp;&nbsp;mvplayer.play(5);<br>
 * &nbsp;&nbsp;&nbsp;&nbsp;function myCallback(state) { <br>
 * &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if (state == "playing") <br>
 * &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;myPlayer.stop(); <br>
 * &nbsp;&nbsp;&nbsp;&nbsp;} <br>
 *
 * @returns
 * @type void
 */
VideoPlayer.prototype.stop = function() {
};

/**
 * Call back method to invoke when the state of the video player changes. <br>
 * <br>
 * e.g.<br>
 * &nbsp;&nbsp;&nbsp;&nbsp;var Div = document.getElementById("PlayDiv");<br>
 * &nbsp;&nbsp;&nbsp;&nbsp;var mvplayer = Widget.Multimedia.VideoPlayer;<br>
 * &nbsp;&nbsp;&nbsp;&nbsp;var mvplayer.setWindow(Div);<br>
 * &nbsp;&nbsp;&nbsp;&nbsp;mvplayer.open("file:///sdcard/Sample.mp4");<br>
 * &nbsp;&nbsp;&nbsp;&nbsp;mvplayer.setVideoScreen(width,higth);<br>
 * &nbsp;&nbsp;&nbsp;&nbsp;mvplayer.onStateChange= myCallback(state);<br>
 * &nbsp;&nbsp;&nbsp;&nbsp;mvplayer.play(5);<br>
 * &nbsp;&nbsp;&nbsp;&nbsp;function myCallback(state) { <br>
 * &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if (state == "playing") <br>
 * &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;myPlayer.stop(); <br>
 * &nbsp;&nbsp;&nbsp;&nbsp;} <br>
 *
 * @param {String} state indicating the current state of the video player. 
 * Possible values are "InitStatus", "opened", "stopped", "paused" and "playing".
 *
 * @returns
 * @type void
 */
VideoPlayer.prototype.onStateChange = function(state) {
};