# Start [![Stories in Ready](https://badge.waffle.io/gabrihellmateus/start.png?label=Ready)](https://waffle.io/gabrihellmateus/start)

> Fron End Workflow

## Getting Started
This plugin requires Grunt `~0.4.0`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins.


## Usage
Go to the grunt folder :

```
cd grunt
```
Install all dependecies:

```
npm install
```
For development, run the build task:

```
grunt build
```
*this will run bower and makes some pre-configurations*

Then run the default task:

```
grunt
```

For testing, run the test task
```
grunt test
```

For production, run the deploy task
```
grunt deploy --force
```

### The grunt tasks in this project:

For HTML:

   * [grunt-contrib-htmlbuild](https://github.com/spatools/grunt-html-build)
   * [grunt-contrib-htmlmin](https://github.com/gruntjs/grunt-contrib-htmlmin)

For Stylesheets:

   * [grunt-csso](https://github.com/t32k/grunt-csso)
   * [grunt-contrib-less](https://github.com/gruntjs/grunt-contrib-less)
   * [grunt-contrib-csslint](https://github.com/gruntjs/grunt-contrib-csslint)

For Images:

   * [grunt-spritesmith](https://github.com/Ensighten/grunt-spritesmith)
   * [grunt-contrib-imagemin](https://github.com/gruntjs/grunt-contrib-imagemin)

For Javascript:

   * [grunt-contrib-jshint](https://github.com/gruntjs/grunt-contrib-jshint)
   * [grunt-contrib-uglify](https://github.com/gruntjs/grunt-contrib-uglify)
   * [grunt-contrib-concat](https://github.com/gruntjs/grunt-contrib-concat)

For Development:

   * [grunt-contrib-open](https://github.com/jsoverson/grunt-open)
   * [grunt-contrib-notify](https://github.com/dylang/grunt-notify)
   * [grunt-contrib-copy](https://github.com/gruntjs/grunt-contrib-copy)
   * [grunt-contrib-watch](https://github.com/gruntjs/grunt-contrib-watch)
   * [grunt-contrib-clean](https://github.com/gruntjs/grunt-contrib-clean)
   * [grunt-contrib-bower](https://github.com/yatskevich/grunt-bower-task)
   * [grunt-contrib-connect](https://github.com/gruntjs/grunt-contrib-connect)

# Release History
* 0.1.0 Initial Release
* 0.1.1 Creates the grunt folder and separates the tasks
* 0.1.2 Creates app/development and public/production structure enviroments
