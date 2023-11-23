$(document).ready(function() {
	$('#fullpage').fullpage({
		//options here
		autoScrolling:true,
		anchors: ['1rdPage', '2rdPage', '3rdPage', '4rdPage', '5rdPage'],
		scrollHorizontally: true,
		navigation:false,
		responsiveWidth: 1024,
		navigationPosition:'right',
	});
	//methods
	//$.fn.fullpage.setAllowScrolling(false);
});

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
		$('.menu_box').animate({
			right: '-532px'
		}, 300, 'linear',function(){
			$('nav').css({'display':'none'},300)
		})
	});
});

$(function(){
	$('nav').click(function(){
		$('.menu_box').animate({
			right:'-532px'
		}, 300, 'linear', function(){
			$('nav').css({'display':'none'},300)
		})
	})
})

$(function(){
	$(window).resize(function(){
		var width = $(window).width();
		if(width>=1024){
			$('nav').css({'display':'block'});
		} else{
			$('nav').hide()
		};
	})
});



$(function(){
	$('#slider-div').slick({		
		infinite : true, 	
		slidesToShow : 1,		
		slidesToScroll : 1,		
		speed : 100,	 
		arrows : true,
		dots:true,
		autoplay : true,		
		autoplaySpeed : 3000, 	
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


	$(function(){
		$('.slick_list').slick({	
			infinite : true, 	
			slidesToShow : 1,		
			slidesToScroll : 1,		
			speed : 100,
			draggable:true,
			arrows : true, 	
			dots : false, 		
			autoplay : true,			
			autoplaySpeed : 3000, 	
			pauseOnHover : true,		
			prevArrow : "<button type='button' class='slick-prev'>Previous</button>",		
			nextArrow : "<button type='button' class='slick-next'>Next</button>",		
			dotsClass : "slick-dots", 	
			draggable : true, 	
			
			responsive: [ 
				{  
					breakpoint: 3000,
					settings: {
						
						slidesToShow:4
					} 
				},
				{  
					breakpoint: 1643,
					settings: {
						
						slidesToShow:3
					} 
				},
				{  
					breakpoint: 1280,
					settings: {
						
						slidesToShow:2
					} 
				},
				{  
					breakpoint: 1024,
					settings: {
						
						slidesToShow:1
					} 
				},
			]
	
		});
		})
	$(function(){
		$('.slick-dots').addClass("motion03");
	});
		


