define(
  "routers/router",
  [
    "views/Home"
  ],
  function(HomeView){

    return Backbone.Router.extend({
      routes: {
        "": "home",
        "home": "home",
        "about": "about"
      },

      home: function(){
        hv = new HomeView();
        hv.init();
      },

      about: function(){
      
      }
    })

  }
)