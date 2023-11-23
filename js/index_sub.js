$(function(){
	$('#slider-div').slick({		
		infinite : true, 	
		slidesToShow : 1,		
		slidesToScroll : 1,		
		speed : 100,	 
		arrows : true,
		dots:true,
		autoplay : true,		
		autoplaySpeed : 5000, 	
		pauseOnHover : true,		
		prevArrow : "<button type='button' class='slick-prev'>Previous</button>",		
		nextArrow : "<button type='button' class='slick-next'>Next</button>",		
		draggable : true, 	
		
		responsive: [ 
			{  
				breakpoint: 768,
				settings: {
					
					slidesToShow:1
				} 
			},
			{ 
				breakpoint: 375, 
				settings: {	
					slidesToShow:1 
				} 
			}
		]

	});
	})




	$(function () {
		$('.btn_nav').click(function () {
			$('nav').css({
				'display': 'block'
			});
	
			$('.menu_box').animate({
				right: '0px'
			},300,'linear')
		});
	
		$('.btn_close').animate({
			right: '270px'
		},300, 'linear')
	});
	
	
	
	$(function(){
		$('.btn_close').click(function(){
			$('nav').css({'background':'none'})
	
			$('.menu_box').animate({
				right: '-532px'
			}, 300, 'linear',function(){
				$('nav').css({'display':'none'},300)
			})
		});
		
	});
	
	$(function(){
		$(window).resize(function(){
			var width = $(window).width();
			if(width>=1024){
				$('nav').css({'display':'block'});
			} else{
				$('nav').hide()
			}
		});resize()
	})
	