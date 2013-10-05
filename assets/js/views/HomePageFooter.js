define(
  "views/HomePageFooter",
  [
    "backbone",
    "text!templates/HomePageFooter.html"
  ],
  function(Backbone, HomePageFooter){
    "use strict"

    return Backbone.View.extend({
      el: $("#footer-container"),
      template: HomePageFooter,

      init: function(){
        this.render();
      },

      render: function(){
        var content = this.template
        this.$el.html(content);

        return this;
      }
    });
  }
)