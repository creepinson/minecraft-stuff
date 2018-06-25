'use strict';
var utils = require('./utils.js');
var ps = require('ps-node');
var shell = require("shelljs");
	function walkforward(msPerActivation, mcversion){
		console.info("Starting robot for key presses...");
		console.info("If you are using Microsoft Windows, please switch your current application shown on-screen to Minecraft.");
		
		setTimeout(function () {
			console.info("Walking forward in 5 seconds. ");
        }, 1250);
		
		

		setTimeout(function() {
			moveForward(msPerActivation);
		}, 5000);
	}
    function moveForward(msPerTime){
		utils.pressKey("w", msPerTime);
	}
if(process.argv[2] != null && process.argv[3] != null){
	walkforward(process.argv[2],process.argv[3]);
} else {
	console.error("Please enter the required arguments - the amount of milliseconds to walk forward for, and the minecraft version.");
}