  /* ================
      MENU FIXED
  ==================*/

  var element_position = $('.list-items-interna-fornecedor').offset().top;

  function detect_load(element_position){
      var y_scroll_pos = window.pageYOffset;
      var scroll_pos_test = element_position;

      if(y_scroll_pos > scroll_pos_test) {
          $(".list-items-interna-fornecedor").addClass('fixed');
      }else{
        $(".list-items-interna-fornecedor").removeClass('fixed');
      }
  };

  $(window).on('load', function() {detect_load(element_position);});
  $(window).on('scroll', function() {detect_load(element_position);});
  
  /* ================
      end MENU FIXED
  ==================*/

  /* ================
      CARROUSEL
  ==================*/

  $('.carousel').slick({
    	dots: false,
    	arrows: true,
    	centerPadding: '-20%',
    	centerMode: true,
  		speed: 300,
  		infinite: true,
  		slidesToShow: 1,
  		slidesToScroll: 1,
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
