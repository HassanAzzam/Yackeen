var splash = function(){
	$('body').css("overflow-y","hidden");
	var x = 1366/2 - 100;
	var y = 675/2 - 100;
	$('.logo').css({
		"height": 200,
		"top": y,
		"left": x,
	});
	$('#mask').css({
		"background-color": $('.header').css('background-color'),
		"height": 200,
		"width": 200,
		"top": y,
		"left": x,
	});
	$('#mask').animate({
		"top": y-200
	},2000,function(){
		x=y=100;
		$('#mask').css("left",1360);
		$('.logo img').animate({
			"height" : 100
		},1000);
		$('.logo').animate({
			"top": y,
			"left": x,
			"height": 100
		},1000,function(){
			$('.logo').css("width",810);
			$('#mask').css({
				"left": x+100,
				"top": y,
				"width": 500,
				"height": 100,
			});
			$('#skyline').fadeTo(1000,1);
			$('#backcity').fadeTo(1000,1);
			$('#mask').animate({
				"left": 810
			},1000,function(){
				$('body').css("overflow-y","visible");
				cloud();
				$('#mask').remove();
			});
		});
	});
	
};

function cloud(){
	var num = Math.floor(Math.random())+1;
	for(var i=0;i<num;i++){
		var p = $('<img class="cloud" src="cloud.svg"/>');
		p.css({
			"top": Math.floor(Math.random()*350),
			"left": 1366
		});
		$('.clouds').append(p);
		p.animate({
			"left": -150
		},Math.floor(Math.random()*30000)+10000,function(){
			$(this).remove();
			cloud();
		});
	}
}