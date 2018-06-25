var robot = require("kbm-robot");
module.exports = {
	pressKey: function(key, msPerTime) {
		robot.startJar();
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