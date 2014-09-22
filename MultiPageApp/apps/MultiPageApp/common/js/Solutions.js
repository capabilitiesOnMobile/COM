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
 * Les trois cases de index.html ayant des contenus sont mises a jour. */
currentPage.back = function() {
	WL.Logger.debug("Solutions :: back");
	$("#pagePort").load(historyPagePort.pop());
	$("#bandeau").load(historyBandeau.pop());
	$("#logo").load(historyLogo.pop());
};