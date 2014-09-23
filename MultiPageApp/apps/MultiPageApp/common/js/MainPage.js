/* Script MainPage.js */

currentPage = {};

currentPage.init = function(){
	WL.Logger.debug("MainPage :: init");
};

/* Chargement de la page suivante (selon le lien choisi).
 * Les trois cases de index.html ayant des contenus sont mises a jour. */
currentPage.loadPage = function(previousDirectory, newDirectory, script) {
	WL.Logger.debug("MainPage :: loadPage :: pageIndex: " + newDirectory);
	
	historyBandeau.push(path + "pages/" + previousDirectory + "Bandeau.html");
	historyPagePort.push(path + "pages/" + previousDirectory + ".html");
	historyLogo.push(path + "pages/" + "Logo" + ".html");
	
	$("#back").load(path + "pages/Back.html");
	$("#bandeau").load(path + "pages/" + newDirectory + "Bandeau.html");
	$("#pagePort").load(path + "pages/" + newDirectory + ".html");
	$("#logo").load(path + "pages/" + "Logo.html");
	$.getScript(path + "js/" + script + ".js");
};