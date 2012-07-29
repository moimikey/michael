define([
	"app"
],
	function (app) {
		"use strict";

		var Router = Backbone.Router.extend({
			routes: {
				"": "index"
			},
			index: function () {
			}
		});

		return Router;
	});
