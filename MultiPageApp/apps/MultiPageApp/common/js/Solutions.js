/* Script Solutions.js */

currentPage = {};

currentPage.init = function() {
	WL.Logger.debug("Solutions :: init");
};

currentPage.buttonClick = function() {
	WL.Logger.debug("Solutions :: buttonClick");
	WL.SimpleDialog.show("Solutions","My contact information",[{text:'OK'}]);
};

/* Chargement de la page précédente.
 * Les quatre cases de index.html ayant des contenus sont mises a jour. */
currentPage.back = function() {
	WL.Logger.debug("Solutions :: back");
	$("#bandeau").load(historyBandeau.pop());
	$("#back").load(historyBack.pop());
	$("#pagePort").load(historyPagePort.pop());
	$("#logo").load(historyLogo.pop());
};