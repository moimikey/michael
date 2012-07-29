require([
	"app",
	"router"
],
	function (app, Router) {
		"use strict";

		app.router = new Router();

		Backbone.history.start({ pushState: true, root: app.root });

		$(document).on("click", "a:not([data-bypass])", function (e) {
			var href = $(this).prop("href"),
				root = location.protocol + "//" + location.host + app.root;

			if (href && href.slice(root.length) === root) {
				e.preventDefault();

				Backbone.history.navigate(href.slice(root.length), true);
			}
		});
	});