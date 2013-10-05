define(
	"views/NavBar",
	[
		"backbone",
		"text!templates/NavBar.html"
	],
	function(Backbone, NavBarTemplate){
		"use strict"

		return Backbone.View.extend({
			el: $("#navbar-container"),
			template: NavBarTemplate,

			init: function(){
				this.render();
			},

			render: function(){
				var content = this.template;
				this.$el.html(content);

				return this;
			}
		})

	}
)