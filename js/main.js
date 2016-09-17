jQuery(document).ready(function($){
	 $('#f_nav').hide();
  $("a").eq(0).click(function(){
		var x = $(window).width();
		$('.camera').fadeIn();
	if(x<700)
		$('#first_nav').hide();
    $('.cont img,video').eq(0).fadeOut('slow');
    $($("#m1")[0]).prependTo($('.cont'));
	$('#m1').fadeIn('slow');
  });
  $("a").eq(1).click(function(){
  	var x = $(window).width();
  	$('.camera').fadeIn();
  	if(x<700)
		$('#first_nav').hide();
	$('.cont img,video').eq(0).fadeOut('slow');
	$($("#m2")[0]).prependTo($('.cont'));
	$('#m2').fadeIn('slow');
  });
  $("a").eq(2).click(function(){
  	var x = $(window).width();
  	$('.camera').fadeIn();
  	if(x<700)
		$('#first_nav').hide();
	$('.cont img,video').eq(0).fadeOut('slow');
	$($("#m3")[0]).prependTo($('.cont'));
	$('#m3').fadeIn('slow');
  });
	$("a").eq(3).click(function(){
		$('.cont img,video').eq(0).fadeOut('slow');
	$($("#m6")[0]).prependTo($('.cont'));
	$('#m6').fadeIn('slow');
	$('#m6').get(0).currentTime = 0;
	$('.camera').fadeOut('slow');
  $('#m6').get(0).play();
    	var x = $(window).width();
  	if(x<700)
		$('#first_nav').fadeOut('slow');
});
	$("a").eq(4).click(function(){
    	var x = $(window).width();
  	if(x<700)
		$('#first_nav').fadeOut('slow');
	$('.camera').fadeIn('slow');
	$('.cont img,video').eq(0).fadeOut('slow');
	$($("#m4")[0]).prependTo($('.cont'));
	$('#m4').fadeIn('slow');
});
	$('#f_nav span').click(function(){
		if($('#first_nav').css('display') =='none')
		{
			$('#first_nav ul').addClass('nav-stacked');
			$('#first_nav').fadeIn('slow');
		}
		else{
			$('#first_nav ul').removeClass('nav-stacked');
			$('#first_nav').fadeOut('slow');
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