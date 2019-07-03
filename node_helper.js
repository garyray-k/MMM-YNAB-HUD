const ynab = require("ynab")
var NodeHelper = require("node_helper")

module.exports = NodeHelper.create({
	start: function() {

	},
	socketNotificationReceived: function(notification, payload) {
		switch(notification) {
		case "QUERY_YNAB_MONTH":
			console.log("YNAB being queried.");
			// let ynabAPI = new ynab.API(payload);
			// ynabAPI.months
			// 	.getBudgetMonth(
			// 		"6f46cbb6-f198-40e2-af2d-24410636768e",
			// 		ynab.utils.getCurrentMonthInISOFormat())
			// 	.then(response => {
			// 		if (responseHasError(response)) {
			// 			this.sendSocketNotification("MONTH_QUERY_ERROR");
			// 		} else {
			// 			let budgetMonth = response.data.month;
			// 			let queryResults = createCategoryAmountArray(budgetMonth);
			// 			console.log("YNAB queried with results:");
			// 			console.log(queryResults);
			this.sendSocketNotification("QUERY_COMPLETE", [
				"Makeup => $0.00",
				"Water Utility 1st => $0.00",
				"Car Maintenance => $0.00",
				"Politics => $0.00",
				"Investment => $0.00",
				"To Angela Monthly => $0.00",
				"YMCA 15th => $0.00",
				"Gold IRA => $0.00",
				"Spotify/Music 15th => $0.00",
				"College/Certs => $0.00",
				"Home Goods => $0.00",
				"Clothing => $0.00",
				"Deferred Income SubCategory => $0.00",
				"Amazon Prime => $50.65",
				"Mint Credit Monitor => $0.00",
				"Monthly Date Night => $0.00",
				"YNAB => $50.00",
				"Moving => $0.00",
				"Æla => $0.00",
				"AmazonCard => $170.06",
				"Gary Navy Fed Credit => $0.00",
				"Medical => $0.00",
				"Gifts => $34.98",
				"Website Hosting => $0.00",
				"Wedding => $0.00",
				"Electric Utility 1st => $0.00",
				"Marriott Card (Chase) => $0.00",
				"Auto Insurance 15th => $0.00",
				"New Computer => $0.00",
				"CLOSED => $0.00",
				"New Car => $1750.12",
				"Home Maintenance => $0.00",
				"Stuff I Forgot to Budget For => $0.00",
				"Dining Out => $150.00",
				"Gary Short Term Want => $100.00",
				"Angela Short Term Want => $0.00",
				"Fitness => $0.00",
				"Dancing => $0.00",
				"6mo of Living Expenses => $3914.02",
				"Pella/Wells Fargo 1st => $0.00",
				"Dept Ed Payment 15th => $0.00",
				"Hygiene => $0.00",
				"Angela Long Term Want => $0.00",
				"American Fund 15th => $0.00",
				"Travel PerDiem => $0.00",
				"Mortgage 1st => $0.00",
				"Home Renovation => $0.00",
				"Holiday Travel => $0.00",
				"Wedding Travel => $0.00",
				"Pets 15th => $4.55",
				"Waste Utility 1st => $0.00",
				"ODU Payment 15th => $0.00",
				"Haircuts => $0.00",
				"Netflix 15th => $0.00",
				"Cell Phone 15th => $0.00",
				"Theft => $0.00",
				"Vacation! => $0.00",
				"Interest & Fees => $0.00",
				"Gary Long Term Want => $0.00",
				"Gadgets => $0.00",
				"Uncategorized => $0.00",
				"Roth IRA Contribution 15th => $0.00",
				"To be Budgeted => $266261.02",
				"Rent 1st => $0.00",
				"Angela Checking Account => $0.00",
				"Jetta 15th => $0.00",
				"CBD => $0.00",
				"Church  => $0.00",
				"Transportation => $69.24",
				"Christmas => $241.39",
				"Internet 1st => $0.00",
				"Gas Utlity 1st => $0.00",
				"Google Drive => $0.00",
				"Storage Unit 1st => $0.00",
				"Groceries => $425.76"
			]);
			// 	}
			// });
			break;
		}
	},
})

function createCategoryAmountArray(objectWithCategories) {
	results = [];
	for (let category of objectWithCategories.categories) {
		let categoryBalance = ynab.utils
			.convertMilliUnitsToCurrencyAmount(category.balance, 2)
			.toFixed(2);
		results.push(`${category.name} => $${categoryBalance}`);
	}
	return results;
}

function responseHasError(response) {
	if (response.error) {
		console.log(`Error: ${response.error.id} ${response.error.name}`);
		return true;
	}
	return false;
}