/* Script main.js */

var historyBandeau = [];
var historyPagePort = [];
var historyLogo = [];
var currentPage = {};
var path = "";

/* Chargement des fichiers .html */
function wlCommonInit() {
	
	// Special case for Windows Phone 8 only.
	if (WL.Client.getEnvironment() == WL.Environment.WINDOWS_PHONE_8) {
	    path = "/www/default/";
	}
	
	$.getScript(path + "js/MainPage.js", function() {
		if (mainPage.init) {
			mainPage.init();
		}
	});
	
	$("#bandeau").load(path + "pages/MainPageBandeau.html");
	$("#back").load(path + "pages/Back.html");
	$("#pagePort").load(path + "pages/MainPage.html");
	$("#logo").load(path + "pages/Logo.html");
	
}