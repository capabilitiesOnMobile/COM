/* Script Solutions.js */

solutionsPage = {};

solutionsPage.init = function() {
	WL.Logger.debug("Solutions :: init");
};

solutionsPage.buttonClick = function() {
	WL.Logger.debug("Solutions :: buttonClick");
	WL.SimpleDialog.show("Solutions","My contact information",[{text:'OK'}]);
};

solutionsPage.back = function() {
	WL.Logger.debug("Solutions :: back");
	$("#pagePort").load(historyPagePort.pop());
	$("#bandeau").load(historyBandeau.pop());
	$("#logo").load(historyLogo.pop());
};