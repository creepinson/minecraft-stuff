'use strict';
var utils = require('./utils.js');
var ps = require('ps-node');
var shell = require("shelljs");
	function walkforward(msPerActivation, mcversion){
		console.info("Starting robot for key presses...");
		console.info("Switching windows to Minecraft...");
		
		if(process.platform=="darwin"){
			ps.lookup({
			command: 'javaw',
			}, function(err, resultList ) {
				if (err) {
						throw new Error( err );
				}

				resultList.forEach(function( prss ){
					if( prss ){
							 var script = "run script \"set theTitle to \"Minecraft " + mcversion + "\" \n tell application \"System Events\" \n    tell process \"appIT\" \n        set frontmost to true \n        perform action \"AXRaise\" of (windows whose title is theTitle) \n    end tell \n    end tell \"";
							 shell.exec("osascript " + script);
							 return;
					} else {
						console.log("No minecraft process found!");
					}
				});
		});
		}
		
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