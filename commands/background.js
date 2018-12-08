chrome.commands.onCommand.addListener(function(command) {
        console.log('Command:', command);
	if (command === "open_swagger_inspector") {
		var newURL = "http://inspector.swagger.io";
		chrome.tabs.create({ url: newURL })
	} else if (command === "open_swaggerhub") {
		var newURL = "http://app.swaggerhub.com";
		chrome.tabs.create({ url: newURL })
	}
});
