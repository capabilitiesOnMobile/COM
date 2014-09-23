/* Script MainPage.js */

currentPage = {};

currentPage.init = function(){
	WL.Logger.debug("MainPage :: init");
};

/* Chargement de la page suivante (selon le lien choisi).
 * Les quatre cases de index.html ayant des contenus sont mises a jour. */
currentPage.loadPage = function(previousDirectory, newDirectory, script) {
	WL.Logger.debug("MainPage :: loadPage :: pageIndex: " + newDirectory);
	
	historyBandeau.push(path + "pages/" + previousDirectory + "Bandeau.html");
	historyBack.push(path + "pages/MainPageBack.html");
	historyPagePort.push(path + "pages/" + previousDirectory + ".html");
	historyLogo.push(path + "pages/" + "Logo" + ".html");
	
	$("#bandeau").load(path + "pages/" + newDirectory + "Bandeau.html");
	$("#pagePort").load(path + "pages/" + newDirectory + ".html");
	$("#back").load(path + "pages/Back.html");
	$("#logo").load(path + "pages/" + "Logo.html");
	$.getScript(path + "js/" + script + ".js");
};