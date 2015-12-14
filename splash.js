var splash = function(){
	$('body').css("overflow-y","hidden");
	var mid_x = 1366/2 - 100;
	var mid_y = 675/2 - 100;
	$('.logo').css("top",mid_y);
	$('.particles').append('<img id="t1" class="particle" src="t21.svg" style="height: 200px; width: 100px; top: '+mid_y+'; left: -100;"/>');
	$('.particles').append('<img id="t2" class="particle" src="t22.svg" style="height: 200px; width: 100px; top: '+mid_y+'; left: 1366;"/>');
	$('.particles').append('<img id="t3" class="particle" src="t23.svg" style="height: 100px; width: 200px; top: -100px; left: '+mid_x+';"/>');
	$('.particles').append('<img id="t4" class="particle" src="t24.svg" style="height: 100px; width: 200px; top: 675px; left: '+mid_x+';"/>');
	var duration = 500;
	$('#t1').animate({
		"left": mid_x
	},duration);
	$('#t2').animate({
		"left": mid_x+100
	},duration);
	$('#t3').animate({
		"top": mid_y
	},duration);
	$('#t4').animate({
		"top": mid_y+100
	},duration,function(){
		$('.logo').fadeTo(duration,1.00,function(){
			$('.logo').animate({
				"left": 278,
				"width": 840
			},duration,function(){
				mid_y -= 150;
				$('.logo').animate({"top":mid_y},duration/2);
				$('.bg img').animate({
					"top":2
				},duration/2,function(){
					$('body').css("overflow-y","visible");
					$('#pattern').fadeTo(duration,0.05);
				});

			});
		});
		$('.particles').fadeOut(duration,function(){
			$('.particles').remove();
		});

	});
};