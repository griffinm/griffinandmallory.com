require.config({
	baseUrl: 'assets/js/',
	paths: {
      lodash: "lodash"
  },
  shim: {
    "backbone": {
      deps: ["lodash"],
      exports: "Backbone"
    },
    "lodash": {
      exports: "_"
    }
  } // end Shim Configuration
});