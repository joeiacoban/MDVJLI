// Joseph Iacoban
// SDI 1304
// Project 2
// Preparing Dinner

// My Variables
var eggs = 2;
	omeletTime = "My omelet turned out good.";
	notGood = "I burnt my omelet.";
	timeLeftForDinner = 15;
	dinnerChoices = ["Hot Pockets", "Ramen Noodles", "Fruit"];
	benefits = ["is tasty.", "is quick to make.", "is healthy."];

console.log("Today I have to make dinner.");

// Procedure
var chefJoeyardine = function(time) {
	if (time < 7) {
		console.log("It is only " + time + " so I have time to cook something tasty.");
	} else {
		console.log("I will make Ramen Noodles.");
	}
};
chefJoeyardine(6);

// Boolean Function

console.log("If I have enough time and all the ingredients, I want to make a chicken stir fry");
	
var	stirFry = function(minutes) {
	var tomato = true;
		onion = true;
		chicken = false;
		whatToCook = "string";
	if ((minutes < 45) && (tomato && onion && chicken)) {
		whatToCook = "I will make a delicious stir fry!";
	} else {
		whatToCook = "Oh no! I have no chicken, so I will have to make something else.";
	}
	return whatToCook;
};

var cookSomethingElse = stirFry(30);
console.log(cookSomethingElse);

// Number Function

console.log("I decide to make an omelet.");


while (eggs <= 4) {
	var bigOmelet = "I added " + eggs + " eggs to the omelet.";
	console.log(bigOmelet);
	eggs = eggs + 1;
};

// String Function
	
var myOmelet = function(min) {
	if (min <= 5) {
		var dinnerTime = "I let my omelet cook for " + min + " minutes. " + omeletTime;
		return dinnerTime;
	} else {
		var ohNo = "I let my omelet cook for " + min + " minutes. " + notGood;
		return ohNo;
	}
};

var whatNext = myOmelet(10);
console.log(whatNext);

