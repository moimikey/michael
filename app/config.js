require.config({
	deps: ["main"],
	paths: {
		libs:     "../assets/js/libs",
		plugins:  "../assets/js/plugins",
		vendor:   "../assets/js/vendor",

		jquery:   "../assets/js/libs/jquery",
		lodash:   "../assets/js/libs/lodash",
		backbone: "../assets/js/libs/backbone"
	},
	shim: {
		backbone:                         {
			deps:    ["lodash", "jquery"],
			exports: "Backbone"
		},
		"plugins/backbone.layoutmanager": ["backbone"]
	}

});