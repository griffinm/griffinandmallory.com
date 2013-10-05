define(
  "views/Home",
  [
    "backbone",
    "text!templates/home/body.html"
  ],
  function(Backbone, HomePageFooter, HomePageBody){
    "use strict"

    return Backbone.View.extend({
      el: $("#content"),
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