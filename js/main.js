jQuery(document).ready(function($){
	var x = $(window).width();
	$('.cont img,video').hide();
	$('.cont img,video').eq(0).fadeIn();
	if(x<700)
	{

		$('.cont').hide();
		$('body').css({'background':'white'});
		$('#f_nav').show();
		$('#first_nav').hide();
		$('#first_nav').css({'position':'absolute','z-index':'1','left':'1%'});
		$('.camera').hide();
		$('.foot1').css({'position':'initial'});
	}
	else
	{
		$('body').css({'background':'none'});
		$('.cont').show();
		$('#f_nav').hide();
		$('#first_nav ul').removeClass('nav-stacked');
		$('#first_nav').css({'position':'initial'});
		$('#first_nav').show();
		$('.camera').show();
		$('.foot1').css({'position':'absulute'});

	}
  $("a").eq(0).click(function(){
		$('.container').show();
		$('.my_pane').show();
		var x = $(window).width();
	if(x<700)
		$('#first_nav').hide();
    $('.cont img,video').eq(0).hide();
    $($("#m1")[0]).prependTo($('.cont'));
	$('#m1').fadeIn('slow');
  });
  $("a").eq(1).click(function(){
		$('.container').show();
		$('.my_pane').show();
  	var x = $(window).width();
  	$('.camera').fadeIn();
  	if(x<700)
		$('#first_nav').hide();
		$('.cont img,video').eq(0).hide();
	$($("#m2")[0]).prependTo($('.cont'));
	$('#m2').fadeIn('slow');
  });
  $("a").eq(2).click(function(){
		$('.container').show();
		$('.my_pane').show();
  	var x = $(window).width();
  	$('.camera').fadeIn();
  	if(x<700)
		$('#first_nav').hide();
	$('.cont img,video').eq(0).hide();
	$($("#m3")[0]).prependTo($('.cont'));
	$('#m3').fadeIn('slow');
  });
	$("a").eq(3).click(function(){
		$('.cont img,video').eq(0).hide();
    	var x = $(window).width();
  	if(x<700){
			$('#first_nav').hide();
			$('#m7').show();
			$('#m7').get(0).currentTime = 0;
		  $('#m7').get(0).play();
			$('.my_pane').hide();
		}
		else {
			$($("#m6")[0]).prependTo($('.cont'));
			$('#m6').fadeIn('slow');
			$('.container').hide();
			$('#m6').get(0).currentTime = 0;
		  $('#m6').get(0).play();
			$('.container').hide();
			$('.my_pane').show();
		}
});
	$("a").eq(4).click(function(){
		$('.container').show();
		$('.my_pane').show();
    	var x = $(window).width();
  	if(x<700)
		$('#first_nav').hide();
	$('.camera').fadeIn('slow');
	$('.cont img,video').eq(0).hide();
	$($("#m4")[0]).prependTo($('.cont'));
	$('#m4').fadeIn('slow');
});
	$('#f_nav span').click(function(){
		if($('#first_nav').css('display') =='none')
		{
			$('#first_nav ul').addClass('nav-stacked');
			$('#first_nav').css({'position':'absolute','z-index':'1','left':'1%'});
			$('#first_nav').show();
		}
		else{
			$('#first_nav ul').removeClass('nav-stacked');
			$('#first_nav').css({'position':'initial'});
			$('#first_nav').hide();
		}
	});
})
$(window).resize(function(){
	var x = $(window).width();
	if(x<700)
	{
		$('.foot1').css({'position':'initial'});
    $('.cont').hide();
		$('body').css({'background':'white'});
		$('#first_nav').css({'position':'absolute','z-index':'1'});
		$('#f_nav').show();
		$('#first_nav').hide();
		$('.camera').hide();
	}
	else
	{
		$('.foot1').css({'position':'absolute'});
		$('body').css({'background':'none'});
		$('.cont').show();
		$('#f_nav').hide();
		$('#first_nav ul').removeClass('nav-stacked');
		$('#first_nav').css({'position':'initial'});
		$('#first_nav').show();
		$('.camera').show();
	}
})
