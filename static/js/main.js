require.config({
	baseUrl:'./static/js',
	paths: {
		tpl: "libs/tpl",
		templates: "/static/templates",
		jQuery:"libs/jquery-1.8.3.min",
		Backbone:'libs/backbone',
		Underscore: "libs/underscore",
		BackboneEventBroker: 'libs/backbone-eventbroker',
		'jQuery.Bootstrap': 'libs/bootstrap/bootstrap.min',
		models: "models",
		views: "views"
	},
	shim:{
		'jQuery':{
			exports: 'jQuery'
		},
		'Underscore':{
			deps: ['jQuery'],
			exports: 'Underscore'
		},
		'Backbone': {
			//These script dependencies should be loaded before loading
			//backbone.js
			deps: ['Underscore', 'jQuery'],
			//Once loaded, use the global 'Backbone' as the
			//module value.
			exports: 'Backbone'
		},
		'BackboneEventBroker': {
			deps: ['Backbone'],
			exports: 'BackboneEventBroker'
		},
		'jQuery.Bootstrap': {
			deps: ['jQuery'],
			exports:'jQuery'
		}
	}

});
require([
	'app',
	'jQuery',
	'Underscore',
	'Backbone',
	'BackboneEventBroker'
], function(App){
	App.initialize();
});
