var test = require('tape'),
    FPSDisplay, obj;

function beforeTest() {
  document.body.innerHTML = '';
  FPSDisplay.el = null;
  FPSDisplay.active = false;
  FPSDisplay.fps = 0;
  FPSDisplay.totalItems = 0;
  FPSDisplay._frameCount = 0;
}

test('load FPSDisplay.', function(t) {
  FPSDisplay = require('../src/fpsdisplay');
  t.ok(FPSDisplay, 'object loaded');
  t.end();
});

test('check static properties.', function(t) {
  t.equal(FPSDisplay.name, 'FPSDisplay', 'should have a name.');
  t.equal(FPSDisplay.active, false, 'active = false.');
  t.equal(FPSDisplay.totalItems, 0, 'totalItems = 0.');
  t.equal(FPSDisplay.fps, 0, 'fps = 0.');
  t.ok(FPSDisplay._time, 'has a _time property.');
  t.ok(FPSDisplay._timeLastFrame, 'has a _timeLastFrame.');
  t.ok(FPSDisplay._timeLastSecond, 'has a _timeLastSecond.');
  t.equal(FPSDisplay._frameCount, 0, '_frameCount = 1.');
  t.end();
});

test('init() should initialize the FPSDisplay.', function(t) {

  beforeTest();

  FPSDisplay.init();
  t.equal(typeof FPSDisplay.el, 'object', 'el is a DOM element.');
  t.equal(FPSDisplay.el.id, 'FPSDisplay', 'el id = FPSDisplay.');
  t.equal(FPSDisplay.el.className, 'fpsDisplay', 'el className = fpsDisplay.');
  t.ok(FPSDisplay.totalElementsValue, 'should have a _totalElementsValue property.');
  t.ok(FPSDisplay.fpsValue, 'should have a _fpsValue property.');
  t.equal(document.querySelectorAll('.fpsDisplay').length, 1, 'should append a view.');
  t.end();
});

test('hide() should hide the FPSDisplay.', function(t) {
  beforeTest();
  FPSDisplay.init();
  FPSDisplay.hide();
  var view = document.querySelectorAll('.fpsDisplay')[0];
  t.equal(view.style.display, 'none', 'should hide the view.');
  t.end();
});

test('show() should show the FPSDisplay.', function(t) {
  beforeTest();
  FPSDisplay.init();
  FPSDisplay.hide();
  FPSDisplay.show();
  var view = document.querySelectorAll('.fpsDisplay')[0];
  t.equal(view.style.display, 'block', 'should show the view.');
  t.end();
});

test('update() should update fps every second.', function(t) {
  t.plan(3);
  document.body.innerHTML = '';
  FPSDisplay.init();
  FPSDisplay._timeLastSecond = Date.now();
  FPSDisplay.update(10);
  FPSDisplay.update(11);
  FPSDisplay.update(21);
  setTimeout(function() {
    FPSDisplay.update(18);
    t.equal(FPSDisplay.fps, 4, 'fps should increment.');
    var view = document.querySelectorAll('.fpsDisplay')[0];
    t.equal(FPSDisplay.fpsValue.textContent, '4', 'fps field should display fps value');
    t.equal(FPSDisplay.totalElementsValue.textContent, '18', 'totalElements field should display totalElementsValue value');
  }, 1001)
});
