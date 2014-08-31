![Build status](https://travis-ci.org/vinceallenvince/fpsdisplay.svg?branch=master)

# fpsdisplay

A simple frames per second display.

##Install

To include fpsdisplay as a component in your project, use the node module.

```
npm install fpsdisplay --save
```

You can also use the [standalone version](https://github.com/vinceallenvince/fpsdisplay/releases/latest) and reference the js file from your document.

```
<html>
  <head>
    <script src="scripts/fpsdisplay.min.js" type="text/javascript" charset="utf-8"></script>
  </head>
  ...
```

##Usage

The module exports a FPSDisplay class. In a nodejs project, you access it via:

```
var FPSDisplay = require('../src/fpsdisplay');
```

Please review [the docs](http://vinceallenvince.github.io/fpsdisplay/doc/) for more details.

##Building this project

This project uses [Grunt](http://gruntjs.com). To build the project first install the node modules.

```
npm install
```

Next, run grunt.

```
grunt
```

To run the tests, run 'npm test'.

```
npm test
```

To check test coverage run 'grunt coverage'.

```
grunt coverage
```

A pre-commit hook is defined in /pre-commit that runs jshint. To use the hook, run the following:

```
ln -s ../../pre-commit .git/hooks/pre-commit
```

A post-commit hook is defined in /post-commit that runs the Plato complexity analysis tools. To use the hook, run the following:

```
ln -s ../../post-commit .git/hooks/post-commit
```

View the [code complexity](http://vinceallenvince.github.io/fpsdisplay/reports/) report.
