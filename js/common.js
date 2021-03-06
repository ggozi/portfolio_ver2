$(document).ready(function(){
	textRolling();
	rainDrop();
	hoverSlideUp();
	Html.include();
});

function rainDrop(){
	$('#contact').raindrops({
		waveLength: 340,
		canvasWidth:2000,
		canvasHeight: 5,
		color:'#008381',
		frequency: 8,
		waveHeight: 80,
		density: 0.02,
		rippleSpeed: 0.1,
		rightPadding: 10,
		position:'absolute',
		positionBottom:0,
		positionLeft:0
	});
}

function textRolling(){
	$('.tlt').textillate({
		in: {
			effect: 'fadeInLeft',
			callback: function(){
				$('.tlt2').show().textillate({
					in: {
						effect: 'fadeInLeftBig'
					}
				});
			}
		}
	});
}

function hoverSlideUp(){
	$('.work_list > li > a').on('mouseover', function(){
		$('.bg_work_list').hide();
		$(this).children('.bg_work_list').stop().slideDown(400);
	})
}

var Html = {
	include:function(){
		var $elements = $.find('*[data-include-html]');
		var $fileName = location.pathname.split('/').pop();
		if($elements.length){
			$.each($elements,function(){
				var $this = $(this),
					$html = $this.data('include-html'),
					$htmlAry = $html.split('/'),
					$htmlFile = $htmlAry[$htmlAry.length-1],
					$atvIdx = $this.data('active');
				if($atvIdx == undefined)$atvIdx = 1;
				$this.load($html,function(res,sta,xhr){
					if(sta == 'success'){
						console.log('Include '+$htmlFile+'!');
					}
				});
			});
		}
	}
};