// как только слои инициализированы инициализируем и нашу переключалку
define([
		'jQuery',
		'Underscore',
		'Backbone',
], function ($, _, Backbone) {

	var initialize = function () {
		$(window).ready(function() {
            $('#main').html('Hello, world!');
        });
	};

	return {
		initialize:initialize
	};
});
