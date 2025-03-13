"use strict";

const setLanguageHrefs = function() {

		const languageSwitchDE = document.getElementById("languageSwitchDE");
		const languageSwitchEN = document.getElementById("languageSwitchEN");
		const languageSwitchJP = document.getElementById("languageSwitchJP");

		const url = window.location.href;

		let urlDE, urlEN, urlJP;
		urlDE = urlEN = urlJP = url;

		if (languageSwitchDE != null ){
			urlDE = url.replace("/Help01/", "/Help49/").replace("/EN/", "/DE/").replace("/en/", "/de/").replace("/Help81/", "/Help49/").replace("/JA/", "/DE/").replace("/ja/", "/de/");
			languageSwitchDE.href = urlDE;
		}
		if (languageSwitchEN != null ){
			urlEN = url.replace("/Help49/", "/Help01/").replace("/DE/", "/EN/").replace("/de/", "/en/").replace("/Help81/", "/Help01/").replace("/JA/", "/EN/").replace("/ja/", "/en/");
			languageSwitchEN.href = urlEN;
		}
		if (languageSwitchJP != null ){
			urlJP = url.replace("/Help49/", "/Help81/").replace("/DE/", "/JA/").replace("/de/", "/ja/").replace("/Help01/", "/Help81/").replace("/EN/", "/JA/").replace("/en/", "/ja/");
			languageSwitchJP.href = urlJP;
		}
	}

window.addEventListener("load", (event) => {
	
	setLanguageHrefs();

});