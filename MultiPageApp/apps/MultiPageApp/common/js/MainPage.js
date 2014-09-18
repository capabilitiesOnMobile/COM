/* Script MainPage.js */

mainPage = {};

mainPage.init = function(){
	WL.Logger.debug("MainPage :: init");
};

mainPage.loadPage = function(previousDirectory, newDirectory, script) {
	WL.Logger.debug("MainPage :: loadPage :: pageIndex: " + newDirectory);
	
	historyBandeau.push(path + "pages/" + previousDirectory + "Bandeau.html");
	historyPagePort.push(path + "pages/" + previousDirectory + ".html");
	historyLogo.push(path + "pages/" + "Logo" + ".html");
	
	$("#bandeau").load(path + "pages/" + newDirectory + "Bandeau.html");
	$("#pagePort").load(path + "pages/" + newDirectory + ".html");
	$("#logo").load(path + "pages/" + "Logo" + ".html");
	$.getScript(path + "js/" + script + ".js");
};