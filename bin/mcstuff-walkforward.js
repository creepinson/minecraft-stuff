#!/usr/bin/env node
var shell = require("shelljs");
const path = require('path');
if(process.argv[2] != null){
	shell.exec("node " + __dirname + "/.." + path.sep + "minecraftwalkforward.js " + process.argv[2]);
} else {
	console.error("Please enter the required argument - the amount of milliseconds to walk forward for.");
}
