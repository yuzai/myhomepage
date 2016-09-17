jQuery(document).ready(function($){
	 $('#f_nav').hide();
  $("a").eq(0).click(function(){
		var x = $(window).width();
		$('.camera').fadeIn();
	if(x<700)
		$('#first_nav').hide();
    $('.cont img,video').eq(0).fadeOut();
    $($("#m1")[0]).prependTo($('.cont'));
	$('#m1').fadeIn();
  });
  $("a").eq(1).click(function(){
  	var x = $(window).width();
  	$('.camera').fadeIn();
  	if(x<700)
		$('#first_nav').hide();
	$('.cont img,video').eq(0).fadeOut();
	$($("#m2")[0]).prependTo($('.cont'));
	$('#m2').fadeIn();
  });
  $("a").eq(2).click(function(){
  	var x = $(window).width();
  	$('.camera').fadeIn();
  	if(x<700)
		$('#first_nav').hide();
	$('.cont img,video').eq(0).fadeOut();
	$($("#m3")[0]).prependTo($('.cont'));
	$('#m3').fadeIn();
  });
	$("a").eq(3).click(function(){
		$('.cont img,video').eq(0).fadeOut();
	$($("#m6")[0]).prependTo($('.cont'));
	$('#m6').fadeIn();
	$('#m6').get(0).currentTime = 0;
	$('.camera').fadeOut();
  $('#m6').get(0).play();
    	var x = $(window).width();
  	if(x<700)
		$('#first_nav').hide();
});
	$("a").eq(4).click(function(){
    	var x = $(window).width();
  	if(x<700)
		$('#first_nav').hide();
	$('.camera').fadeIn();
	$('.cont img,video').eq(0).fadeOut();
	$($("#m4")[0]).prependTo($('.cont'));
	$('#m4').fadeIn();
});
	$('#f_nav span').click(function(){
		if($('#first_nav').css('display') =='none')
		{
			$('#first_nav ul').addClass('nav-stacked');
			$('#first_nav').show();
		}
		else{
			$('#first_nav ul').removeClass('nav-stacked');
			$('#first_nav').hide();
		}
	});
	// }
	// $('#f_nav span').click(
 //  	$(this).css('border','1px solid red');
 //  	) 
})
$(window).resize(function(){
	var x = $(window).width();
	if(x<700)
	{
		$('#f_nav').show();
		$('#first_nav').hide();
	}
	else
	{
		$('#f_nav').hide();
		$('#first_nav ul').removeClass('nav-stacked');
		$('#first_nav').show();
	}
})