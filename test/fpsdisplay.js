var test = require('tape'),
    FPSDisplay, obj;

function beforeTest() {

}

test('load FPSDisplay.', function(t) {
  FPSDisplay = require('../src/fpsdisplay');
  t.ok(FPSDisplay, 'object loaded');
  t.end();
});

