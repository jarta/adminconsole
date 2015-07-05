(function(require){
	"use strict";
	
	require.config({
		baseUrl: 'js/app',
		paths: {
			jquery:'../lib/jquery/jquery',
			underscore:'../lib/underscore/underscore',
			backbone:'../lib/backbone/backbone',
			text:'../lib/require/text',
			bootstrap:'../lib/bootstrap/bootstrap.min'
		},
		shim: {
			'underscore': {
				exports: '_'
			},
			'backbone': {
				deps: ['jquery','underscore'],
				exports: 'Backbone'
			},
			'bootstrap': {
				deps: ['jquery']
			}			
		},
		deps:['dab-app']
	});
	
})(require);

