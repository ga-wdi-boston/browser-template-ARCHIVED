# An Introduction to Grunt

## Objectives

By the end of this lesson, students will be able to do the following:

* Explain the use of task runners like Grunt in automation
* Use pre-configured Grunt to assist in development tasks

## Why Grunt?

* Task runners automate repetitive tasks

## Installation

fork and clone as usual
in the project directory:

```
ulimit -n 10000
npm install
npm install -g jshint jasmine grunt-cli
```

(The ulimit command is because OS X puts a limit on how many files one process may have open simultaneously, and the npm install process may exceed it and corrupt the npm cache, a problem that is much easier to avoid than to fix.)

## What does this get you?

### grunt debug

You can't use the Chrome Inspector to debug node.  You can, however, use the Node Inspector, which is a forked version of the Chrome Inspector.  Expect to run into differences here and there, but the layout and workflows are mostly the same.

Invoking it with `grunt debug` will start your app and the Node Inspector, and open a Chrome window to look at it.

### grunt test

Remember our session on automated testing?  Node is where it comes into its own.  Grunt will find any tests under the `spec/` directory with the extension `.spec.js` and run them.

### grunt nag

If you want to make your code clearer, `grunt nag` will tell you what's wrong with it.  It analyzes Javascript and JSON code according to JSLint, js-beautify, and the AirBnB style guide, and tells you everything it finds wrong.

### grunt reformat

Like Sublime's Edit > Line > Reindent on steroids, it reformats your code according to js-beautify's style preferences. 
