!function(e){if("object"==typeof exports)module.exports=e();else if("function"==typeof define&&define.amd)define(e);else{var f;"undefined"!=typeof window?f=window:"undefined"!=typeof global?f=global:"undefined"!=typeof self&&(f=self),f.FPSDisplay=e()}}(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(_dereq_,module,exports){
/*global document, window */

/**
 * Creates a new FPSDisplay object.
 *
 * Use this class to create a field in the
 * top-left corner that displays the current
 * frames per second and total number of elements
 * in an optional passed array.
 *
 * Note: FPSDisplay will not function in browsers
 * whose Date object does not support Date.now().
 * These include IE6, IE7, and IE8.
 *
 * @constructor
 */
function FPSDisplay() {}

/**
 * Name
 * @private
 * @memberof FPSDisplay
 */
FPSDisplay.name = 'FPSDisplay';

/**
 * Set to false to stop requesting animation frames.
 * @private
 * @memberof FPSDisplay
 */
FPSDisplay.active = false;

/**
 * Frames per second.
 * @private
 * @memberof FPSDisplay
 */
FPSDisplay.fps = false;

/**
 * The current time.
 * @private
 * @memberof FPSDisplay
 */
FPSDisplay._time = Date.now();

/**
 * The time at the last frame.
 * @private
 * @memberof FPSDisplay
 */
FPSDisplay._timeLastFrame = FPSDisplay._time;

/**
 * The time the last second was sampled.
 * @private
 * @memberof FPSDisplay
 */
FPSDisplay._timeLastSecond = FPSDisplay._time;

/**
 * Holds the total number of frames
 * between seconds.
 * @private
 * @memberof FPSDisplay
 */
FPSDisplay._frameCount = 0;

/**
 * Initializes the FPSDisplay.
 * @function update
 * @memberof FPSDisplay
 */
FPSDisplay.init = function() {

  FPSDisplay.active = true;

  /**
   * A reference to the DOM element containing the display.
   * @private
   */
  FPSDisplay.el = document.createElement('div');
  FPSDisplay.el.id = 'FPSDisplay';
  FPSDisplay.el.className = 'FPSDisplay';
  FPSDisplay.el.style.backgroundColor = 'black';
  FPSDisplay.el.style.color = 'white';
  FPSDisplay.el.style.fontFamily = 'Helvetica';
  FPSDisplay.el.style.padding = '0.5em';
  FPSDisplay.el.style.opacity = '0.5';
  FPSDisplay.el.style.position = 'absolute';
  FPSDisplay.el.style.top = 0;
  FPSDisplay.el.style.right = 0;
  FPSDisplay.el.style.left = 0;
  FPSDisplay.el.style.zIndex = 1000;


  // create totol elements label
  var labelContainer = document.createElement('span');
  labelContainer.className = 'statsDisplayLabel';
  labelContainer.style.marginLeft = '0.5em';
  label = document.createTextNode('total elements: ');
  labelContainer.appendChild(label);
  FPSDisplay.el.appendChild(labelContainer);

  // create textNode for totalElements
  FPSDisplay.totalElementsValue = document.createTextNode('0');
  FPSDisplay.el.appendChild(FPSDisplay.totalElementsValue);

  // create fps label
  labelContainer = document.createElement('span');
  labelContainer.className = 'statsDisplayLabel';
  labelContainer.style.marginLeft = '0.5em';
  var label = document.createTextNode('fps: ');
  labelContainer.appendChild(label);
  FPSDisplay.el.appendChild(labelContainer);

  // create textNode for fps
  FPSDisplay.fpsValue = document.createTextNode('0');
  FPSDisplay.el.appendChild(FPSDisplay.fpsValue);

  document.body.appendChild(FPSDisplay.el);

};

/**
 * If 1000ms have elapsed since the last evaluated second,
 * fps is assigned the total number of frames rendered and
 * its corresponding textNode is updated. The total number of
 * elements is also updated.
 *
 * @function update
 * @memberof FPSDisplay
 * @param {Number} [opt_totalItems] The total items in the system.
 */
FPSDisplay.update = function(opt_totalItems) {

  var sd = FPSDisplay,
      totalItems = opt_totalItems || 0;

  sd._time = Date.now();
  sd._frameCount++;

  // at least a second has passed
  if (sd._time > sd._timeLastSecond + 1000) {

    sd.fps = sd._frameCount;
    sd._timeLastSecond = sd._time;
    sd._frameCount = 0;

    sd.fpsValue.nodeValue = sd.fps;
    sd.totalElementsValue.nodeValue = totalItems;
  }
};

/**
 * Hides FPSDisplay from DOM.
 * @function hide
 * @memberof FPSDisplay
 */
FPSDisplay.hide = function() {
  var sd = document.getElementById(FPSDisplay.el.id);
  sd.style.display = 'none';
  FPSDisplay.active = false;
};

/**
 * Shows FPSDisplay from DOM.
 * @function show
 * @memberof FPSDisplay
 */
FPSDisplay.show = function() {
  var sd = document.getElementById(FPSDisplay.el.id);
  sd.style.display = 'block';
  FPSDisplay.active = true;
};

module.exports = FPSDisplay;

},{}]},{},[1])
(1)
});