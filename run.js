'use strict'

const $deploy = require("./core/deploy/deploy.js");
const $hook   = require("./hook.js");

var deploy = new $deploy("es5", "./app/bootstrap.js");
deploy.build($hook);
deploy.watch();