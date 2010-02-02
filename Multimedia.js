/**
 * @fileoverview This file is to be used for listing all functions and
 *               properties of JavaScript objects: Multimedia.
 * @version 0.1
 */
Multimedia.prototype = new Object();

/**
 * @class Multimedia is the container object for JIL Multimedia objects. <br>
 * <br>
 * Multimedia is a sub-object of <I>Widget</I>. Multimedia is accessed
 * directly from the object: Widget.Multimedia.XXX<br>
 * <br>
 * Support media format:<br>
 * Audio: MP3, AAC, AAC+ v1/v2, AMR-NB, AMR-WB<br>
 * Video: MPEG4, H.263, H.264<br>
 * Streaming: All above audio/video codec in 3GPP file formats<br>
 * Image: JPEG, PNG, GIF<br>
 */
function Multimedia() {
};

/**
 * Get audio volume. Value range is 0 - 15, where 0 is off. <br>
 * <br>
 * e.g.<br>
 * &nbsp;&nbsp;&nbsp;&nbsp;var v = Widget.Multimedia.getVolume();
 * 
 * @returns the value of volume. This field should be an integer value.
 * @type Number
 */
Multimedia.prototype.getVolume = function() {
	return new Number();
};


/**
 * Stop all audio and video play. <br>
 * <br>
 * e.g.<br>
 * &nbsp;&nbsp;&nbsp;&nbsp; Widget.Multimedia.stopAll();
 * 
 * @returns
 * @type void
 */
Multimedia.prototype.stopAll = function() {
};

/**
 * The flag to check if there is any audio playing. <br>
 * <br>
 * e.g.<br>
 * &nbsp;&nbsp;&nbsp;&nbsp;if (Multimedia.isAudioPlaying) {<br>
 * &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Multimedia.AudioPlayer.pause();<br>
 * &nbsp;&nbsp;&nbsp;&nbsp;}
 * 
 * @type Boolean
 */
Multimedia.prototype.isAudioPlaying = new Boolean();


/**
 * The flag to check if there is any video playing. <br>
 * <br>
 * e.g.<br>
 * &nbsp;&nbsp;&nbsp;&nbsp;if (Multimedia.isVideoPlaying) {<br>
 * &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Multimedia.VideoPlayer.pause();<br>
 * &nbsp;&nbsp;&nbsp;&nbsp;}
 * 
 * @type Boolean
 */
Multimedia.prototype.isVideoPlaying = new Boolean();

/**
 * The AudioPlayer object.
 * 
 * @type AudioPlayer
 */
Multimedia.prototype.AudioPlayer = new AudioPlayer();

/**
 * The Camera object.
 * 
 * @type Camera
 */
Multimedia.prototype.Camera = new Camera();

/**
 * The VideoPlayer object.
 * 
 * @type VideoPlayer
 */
Multimedia.prototype.VideoPlayer = new VideoPlayer();