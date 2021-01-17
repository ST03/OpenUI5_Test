sap.ui.define([
	"sap/ui/core/mvc/XMLView"
], function (XMLView) {
	"use strict";

	XMLView.create({
		viewName: "open.ui.test.landing.view.App"
	}).then(function (oView) {
		oView.placeAt("content");
	});

});
