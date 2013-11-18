var onAnimate = false;

$(function(){
	var currentHash = ""
	$("#nav li").on("click", function(){
    $("nav li").removeClass("active");
		$(this).addClass("active");
	});

	$('#nav .nav a').click(function(e){
		e.preventDefault();
		var des = $(this).attr('href');
		goToSectionID(des);
	});

  $(document).scroll(function(){
  	if(!onAnimate){
	    $('.section').each(function () {
	      var top = window.pageYOffset;
	      var distance = top - $(this).offset().top;
	      var hash = $(this).attr('id');
	      if (distance < 10 && distance > -10 && currentHash != hash) {
	        window.location.hash = (hash);
	        currentHash = hash;
	        $("#nav li").removeClass("active");
	        $("#nav li." + hash + "-link-container").addClass("active");
	      }
	    }); //end loop
		} //end if
  }); //end document scroll

});

function goToSectionID(des){
	var os = (history.pushState)?51:0;
	os = (jQuery(window).width()>800)?os:0;

	var pos = (jQuery(des).length>0 )?jQuery(des).offset().top-os:0;
	onAnimate = true;
	jQuery('html,body').animate({scrollTop:pos},1000,function(){
		if(history.pushState){
			history.pushState(null,null,des);
		}	else {
			window.location.hash = des;
		}
		jQuery(window).scrollTop(pos);
		onAnimate=false
	});
}

jQuery(function($){
var dateStr=$('#countdown').attr('data-until'); //returned from mysql timestamp/datetime field
var a=dateStr.split(" ");
var d=a[0].split("-");
var t=a[1].split(":");
var counto = new Date(d[0],(d[1]-1),d[2],t[0],t[1],t[2]);
$('#countdown').countdown({until: counto});
})