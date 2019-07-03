Module.register("MMM-YNAB-HUD", {
	defaults: {
		apiKey: "put-your-api-token-in-config.js-for-main-magic-mirror" // this.config.apiKey
	},
	start: function() {
		Log.log(this.name + " started without error.");
	}, // executed on module load
	getDom: function() {
		var element = document.createElement("div");
		element.id = "ynabContent";
		element.innerHTML = "Loading YNAB categories...";
		return element;
	},
	notificationReceived: function(notification, payload, sender) {
		switch (notification) {
		case "DOM_OBJECTS_CREATED":
			Log.log("DOM created.");
			this.sendSocketNotification(
				"QUERY_YNAB_MONTH",
				this.config.apiKey
			);
			Log.log("QUERY_YNAB_MONTH sent...")
			break;
		}
	},
	socketNotificationReceived: function(notification, payload) {
		switch(notification) {
		case "QUERY_COMPLETE":
			Log.log("Receiving query...");
			var ynabContent = document.getElementById("ynabContent");
			ynabContent.innerHTML = "";
			Log.log(ynabContent)
			for (let result of payload) {
				element = ynabContent.appendChild(document.createElement("div"));
				element.innerHTML = result
			}
			break;

		case "MONTH_QUERY_ERROR":
			var ynabContent = document.getElementById("ynabContent");
			ynabContent.innerHTML = "Error with YNAB query for monthly budget. Sorry! :("
			break;
		}
	},
});
