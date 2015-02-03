App-Rate
========

Rate this app - phonegap plugin

![alt tag](https://github.com/halachev/App-Rate/blob/master/apprate.png)
how to use:
========

	var apprate = new AppRate();

	apprate.openAppRate("Rate this app", "Thank you for your support", 
		"No thanks", "Remind later", "Rate Now", function (data) {

		var res = JSON.parse(data);
	
		if (res.body == "no") {
		  return false;
		}
	
		if (res.body == "later") {
			return false;
		}
	
		if (res.body == "ok") {
	
			window.open('market://details?id=<package name>', '_system');
			return true;
		}

	}, function () {
		alert("Error while rate this app!");
	});

