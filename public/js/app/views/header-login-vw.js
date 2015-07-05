define([
        'models/user-model'
        ,'text!templates/header-template.html'
], function(UserModel, HeaderTpl){
	
	var LoginView = Backbone.View.extend({
		initialize: function(){
			this.template = _.template(HeaderTpl);
			this.model = UserModel;
			this.render();
		},
		render: function() {
			this.$el.html(this.template({}));
			return this;
		}
	});
	return LoginView;
});