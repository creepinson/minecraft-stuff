#! /user/bin/env node
'use strict';

var utils = require('./utils.js');
	function walkforward(msPerActivation){
		console.info("Starting robot for key presses...");
		setTimeout(function () {
			console.info("Please switch windows to Minecraft if you haven't already. ");
        }, 1000);
		
		console.info("Walking forward in 5 seconds. ");

		setTimeout(function() {
			moveForward(msPerActivation);
		}, 5000);
	}
    function moveForward(msPerTime){
		utils.pressKey("w", msPerTime);
	}
if(process.argv[2] != null){
	walkforward(process.argv[2]);
	return;
} else {
	console.error("Please enter the required argument - the amount of milliseconds to walk forward for.");
}