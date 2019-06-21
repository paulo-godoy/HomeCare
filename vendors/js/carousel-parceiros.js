$('.carousel-parceiros').slick({
  	dots: true,
  	arrows: false,
  	centerPadding: '-20%',
  	centerMode: true,
		speed: 300,
		infinite: true,
		slidesToShow: 4,
		slidesToScroll: 4,
		responsive: [
	{
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});
