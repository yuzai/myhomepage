jQuery(document).ready(function($){
	 $('#f_nav').hide();
  $("a").eq(0).click(function(){
		$($("#m1")[0]).prependTo($('.cont'));
  });
  $("a").eq(1).click(function(){
  	$($("#m2")[0]).prependTo($('.cont'));
  });
  $("a").eq(2).click(function(){
  		$($("#m3")[0]).prependTo($('.cont'));
  });
	$("a").eq(3).click(function(){
  $($("#m4")[0]).prependTo($('.cont'));
});
	$("a").eq(4).click(function(){
  $($("#m5")[0]).prependTo($('.cont'));
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
		$('#first_nav').show();
	}
})