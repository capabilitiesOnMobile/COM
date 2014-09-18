/* Script Industries.js */

industriesPage = {};

industriesPage.init = function() {
	WL.Logger.debug("Industry :: init");
};

industriesPage.loadPage = function(previousDirectory, newDirectory, script) {
	WL.Logger.debug("MainPage :: loadPage :: pageIndex: " + newDirectory);
	
	historyBandeau.push(path + "pages/" + previousDirectory + "Bandeau.html");
	historyPagePort.push(path + "pages/" + previousDirectory + ".html");
	historyLogo.push(path + "pages/" + "Logo" + ".html");
	
	$("#bandeau").load(path + "pages/" + newDirectory + "Bandeau.html");
	$("#pagePort").load(path + "pages/" + newDirectory + ".html");
	$("#logo").load(path + "pages/" + newDirectory + "Logo.html");
	$.getScript(path + "js/" + script + ".js");
};

industriesPage.back = function() {
	WL.Logger.debug("Industry :: back");
	$("#pagePort").load(historyPagePort.pop());
	$("#bandeau").load(historyBandeau.pop());
	$("#logo").load(historyLogo.pop());
};

/*
industriesPage.buttonClick = function() {
	WL.Logger.debug("Industry :: buttonClick");
	WL.SimpleDialog.show("Industry","Button on Industry was clicked",[{text:'OK'}]);
};

industriesPage.loadSolution = function(previousDirectory, NewFile){
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

industriesPage.loadMainPage = function(){
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

industriesPage.loadSWIRL = function(){
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

industriesPage.insertFragment = function() {
	WL.Logger.debug("Industry :: insertFragment");
	$("#FragmentsDiv").load(path + "pages/fragment.html");
};

*/