var robot = require("kbm-robot");
var ps = require("ps-node");
module.exports = {
	pressKey: function(key, msPerTime) {
		robot.startJar();

		if(process.platform=="darwin"){
			console.info("Switching windows to Minecraft...");
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
		if(key == "w"){
			var i;
				robot.press("w")
				.sleep(msPerTime)
				.release("w")
				.go()
				.then(robot.stopJar);
		}
	}
};