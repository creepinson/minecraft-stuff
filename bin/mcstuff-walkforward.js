#!/usr/bin/env node
var shell = require("shelljs");
const path = require('path');
if(process.argv[2] != null && process.argv[3] != null){
	shell.exec("node " + __dirname + "/.." + path.sep + "minecraftwalkforward.js " + process.argv[2] + " " + process.argv[3]);
} else {
	console.error("Please enter the required arguments - the amount of milliseconds to walk forward for, and the minecraft version.");
}