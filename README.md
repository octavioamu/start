# Start [![Stories in Ready](https://badge.waffle.io/gabrihellmateus/start.png?label=Ready)](https://waffle.io/gabrihellmateus/start)

A Front End workflow to start a simple project

## Getting Started
This plugin requires Grunt `~0.4.0`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins.


## Usage
Go to the grunt folder and install all dependecies:

```
npm install
```

In `bower.json` configure the dependecies that you want. Then run the build task:

```
grunt build
```
*This will run bower and makes some pre-configurations*

You ready to go, in development run the default task:

```
grunt
```

For production, run the deploy task:

```
grunt deploy --force
```
*Force to overrides the images in the optimization*

[OPTIONAL] For best pratices, hints and stuff, you can lint your `.css` and `.js` files with:

```
grunt lint
```

## The dependecies:

#### HTML:
  * [grunt-contrib-htmlbuild](https://github.com/spatools/grunt-html-build)
  * [grunt-contrib-htmlmin](https://github.com/gruntjs/grunt-contrib-htmlmin)

#### Stylesheets:
  * [grunt-csso](https://github.com/t32k/grunt-csso)
  * [grunt-contrib-less](https://github.com/gruntjs/grunt-contrib-less)
  * [grunt-contrib-csslint](https://github.com/gruntjs/grunt-contrib-csslint)

#### Images:
  * [grunt-spritesmith](https://github.com/Ensighten/grunt-spritesmith)
  * [grunt-contrib-imagemin](https://github.com/gruntjs/grunt-contrib-imagemin)
 

*Note: to install properly `grunt-spritesmith` you need to install this [requirements](https://github.com/Ensighten/grunt-spritesmith#requirements) first* 


#### Javascript:
  * [grunt-contrib-jshint](https://github.com/gruntjs/grunt-contrib-jshint)
  * [grunt-contrib-uglify](https://github.com/gruntjs/grunt-contrib-uglify)
  * [grunt-contrib-concat](https://github.com/gruntjs/grunt-contrib-concat)

#### Development:
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
*

##License
Copyright (c) 2013 gabrihellmateus

Licensed under the MIT license.
