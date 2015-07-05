require(['jquery',
         'underscore',
         'backbone',
         'views/header-login-vw'],
function($,_,Backbone,LoginView){	
	
	var loginVW = null;
	var initialize = function() {
		this.loginVW = new LoginView({
			el:$('#dab-header')
		});
	};
	
	initialize();
	
});