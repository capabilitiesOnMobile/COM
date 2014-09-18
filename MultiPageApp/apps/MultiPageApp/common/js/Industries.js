/* Script Industries.js */

currentPage={};

currentPage.init = function() {
	WL.Logger.debug("Industry :: init");
};

currentPage.buttonClick = function() {
	WL.Logger.debug("Industry :: buttonClick");
	WL.SimpleDialog.show("Industry","Button on Industry was clicked",[{text:'OK'}]);
};


currentPage.loadMainPage = function(){
	WL.Logger.debug("Industry :: loadMainPage");
	pagesHistory.push(path + "pages/Industries/SmarterCities.html");
	$("#pagePort").load(path + "pages/MainPage.html", function(){
		$.getScript(path + "js/MainPage.js", function() {
			if (currentPage.init) {
				currentPage.init();
			}
		});
	});
};



currentPage.loadSolution = function(previousDirectory, NewFile){
	WL.Logger.debug("Industry :: loadPage :: pageIndex: " + previousDirectory);
	historyBandeau.push(path + "pages/" + previousDirectory + "Bandeau.html");
	historyPagePort.push(path + "pages/" + previousDirectory + ".html");
	$("#pagePort").load(path + "pages/" + previousDirectory + '/' + NewFile + ".html");
	$.getScript(path + "js/Solutions.js", function() {
		if (currentPage.init) {
			currentPage.init();
		}
	});
};

/*
currentPage.loadSWIRL = function(){
	WL.Logger.debug("Industry :: loadSWIRL");
	pagesHistory.push(path + "pages/Industries/Industry.html");
	$("#pagePort").load(path + "pages/Industries/Industry/SWIRL.html", function(){
		$.getScript(path + "js/Industries/Industry/SWIRL.js", function() {
			if (currentPage.init) {
				currentPage.init();
			}
		});
	});
};
*/
currentPage.insertFragment = function() {
	WL.Logger.debug("Industry :: insertFragment");
	$("#FragmentsDiv").load(path + "pages/fragment.html");
};

currentPage.back = function(){
	WL.Logger.debug("Industry :: back");
	$("#pagePort").load(historyPagePort.pop());
	$("#bandeau").load(historyBandeau.pop());
};

