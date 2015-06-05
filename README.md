# An Introduction to Grunt

## Objectives

By the end of this lesson, students will be able to do the following:

* Use conventional project layouts in node projects
* Explain the use of task runners like Grunt in automation
* Use pre-configured Grunt to assist in development tasks

## What are we talking about today?

Grunt is a task runner for Javascript.  This means that it automates repetitive tasks so that you can invoke them quickly or so that they can run in the background.

You have already used something very similar in `rake`.  When you say `rake:dbreset` in a Rails environment, rake runs a series of tasks to destroy your old database and recreate a fresh one.  Nothing prevents you from doing this by hand in Terminal.app, but it is much simpler to say `rake:dbreset`.

Why don't we just use `rake`? When we work on projects in Ruby, we should use `rake`.  But when we work on projects in Javascript, we use Grunt, because Grunt is written in Javascript and thus integrates more smoothly.

## Conventional Project Layout

Let's consider what projects and programmers need to have automated.  You've seen several node modules by now.  What are some of the things they involve?

* Project configuration and dependency information 
* Third-party libraries and modules
* Source code 
* Tests
* Tools configuration

A conventional node project is laid out like this:

```
grunt/
lib/
node_modules/
spec/
app.js
Gruntfile.js
package.json
README.md
```

Project configuration and dependency information goes in `package.json`.

Third-party libraries and modules go in `node_modules`.

Our source code goes in `lib/` and `app.js`.  We separate it from other people's source code so that our automation tools can find it more easily for things like code quality analysis and running tests.  Each node module has a file that is the entry point for the module, called (by convention) `app.js` or `main.js` or `index.js`.

Tests, which are the *spec*ification for the program, go in `spec/`.

Tools configuration varies by tool, but Grunt configuration goes in `Gruntfile.js` and the `grunt/` directory.

Adhering to this standard layout means you get a lot of benefits for free.

## An actual project

You have an actual project in front of you.  Let's look at the files in it and see what each does.


##
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



<!--
1 - what is a task runner? like rake
2 - what do we need in our projects
 - package.json, node_modules, lib/, spec/, grunt/, app.js
 - where do we find them in this project?

3 - tour through project
    - who creates these files & when & why?

4 - demo grunt tools
  - when you had problems with earlier projects what did I have you do?
  - discuss cli output
  - grunt jshint 
  - grunt debug - explain nodemon diagram & file watching
  - grunt test
  - grunt nag
  - grunt reformat

5 - grunt messaging
  - aborted due to failure?
  - time graph
  - configuring chains in aliases.json

6 - extra resources (readme only)
 - how to reformat-on-save in sublime 
 - how to run tests in sublime
-->
