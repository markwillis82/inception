#!/usr/bin/env node
var flatiron = require('flatiron'),
    path = require('path'),
    app = flatiron.app;

app.config.file({ file: path.join(__dirname, 'config', 'config.json') });

app.use(flatiron.plugins.cli, {
  source: path.join(__dirname, 'lib', 'commands'),
  usage: require( path.join(__dirname, 'lib', 'usage')),
  dir: require('path').join(__dirname, 'lib', 'commands') // A directory with commands to lazy-load
});

app.start();
