$(function(){

	/* ================
	   SELECT LANGUAGE
	==================*/
    $('.select-language').flagStrap({
    	placeholder:{
    		text: null,
    	},
        onSelect: function (value, element) {
            alert(value);
            console.log(element);
        }
    });
    /* ================
	end SELECT LANGUAGE
	==================*/

    /* ================
	   CALC DISTÂNCIA
	==================*/
	$('.distancia-calc :radio').change(function() {
		esvaziarEstrela();
			preencherEstrela(this.value);
	});

	function preencherEstrela(number){
		$(".star-"+number).removeClass("fa-star-o");
			$(".star-"+number).addClass("fa-star");
	}

	function esvaziarEstrela(){
		$(".star i").addClass("fa-star-o");
		$(".star i").removeClass("fa-star");
	}
	/* ================
	end CALC DISTÂNCIA
	==================*/

	/* ================
	       	MODAL
	==================*/
	var videoSrc;  

	$('.video-btn').click(function() {
	    videoSrc = $(this).data("src");
	});

	$('#modal-video').on('hidden.bs.modal', function () {
		$('#video').each(function(){
			var el_src = $(this).attr("src");
        	$(this).attr("src",el_src);
		});
	}); 
	/* ================
	      END MODAL
	==================*/

	/* ================
	       SCROLL
	==================*/
	$('.scroll').on("click", function(){
    	id = $(this).data("scroll");	
    	scroll('#'+id);
    });
    function scroll(id){
    	$(window).on('mousewheel', function() {
			$('html, body').stop();
		});
        $('html, body').stop().animate({
            scrollTop: $(id).offset().top
        }, 1000, 'easeInOutExpo');
    }
    /* ================
	      END SCROLL
	==================*/

	/* ================
      NAVTABS REGISTER
	==================*/

	$('body').on('shown.bs.modal', '#loginModal', function () {
	    $('input:visible:enabled:first', this).focus();
	});

	$('body').on('shown.bs.modal', '#createModal', function () {
	    $('input:visible:enabled:first', this).focus();
	});

	$(".toogle-button").on("click", function(){
		$(".toogle-button").removeClass("active");
		$(this).addClass("active");
		// PEGAR ID DO ELEMENTO
		element = "#"+$(this).data("element");
		// PEGAR CLASSE DO ELEMENTO
		classe = "."+$(this).data("show");
		// MOSTRAR A PENAS ELEMENTO SELECIONADO
		$(classe).slideUp(200, function(){
			$(element).slideDown();
			$(classe+" input").val("");
			$(element+" .autofocus").focus();
		});
	})

	/* ================
    end NAVTABS REGISTER
	==================*/


	/* ================
    	  ACCORDION
	==================*/
	$(".item_accordion").on("click", function(){
		$(".item_accordion").removeClass("active");
		// SE O ACCORDION ESTIVER ABERTO
		if($(this).next().css("display") == 'block'){
			$('.body_accordion').slideUp("swing");
		}else{
			// SE O ACCORDION ESTIVER FECHADO
			$(this).addClass("active");
			$('.body_accordion').slideUp("swing");
			$(this).next().slideToggle("swing")
  		}
  	});	
    /* ================
       end ACCORDION
	==================*/

	/*================
         INPUT RANGE
	==================*/

	function getVals(){
	  	// Get slider values
	  	var parent = this.parentNode;
	  	var slides = parent.getElementsByTagName("input");
	    var slide1 = parseFloat( slides[0].value );
	    var slide2 = parseFloat( slides[1].value );
	  	// Neither slider will clip the other, so make sure we determine which is larger
	  	if( slide1 > slide2 ){ var tmp = slide2; slide2 = slide1; slide1 = tmp; }
	  
	  	var displayElement = parent.getElementsByClassName("rangeValues")[0];
	    displayElement.innerHTML = slide1 + "km - " + slide2 + "km";
	}

  	// Initialize Sliders
  	var sliderSections = document.getElementsByClassName("range-slider");
    for( var x = 0; x < sliderSections.length; x++ ){
        var sliders = sliderSections[x].getElementsByTagName("input");
        for( var y = 0; y < sliders.length; y++ ){
          	if( sliders[y].type ==="range" ){
            	sliders[y].oninput = getVals;
            	// Manually trigger event first time to display values
            	sliders[y].oninput();
          	}
        }
    }

	/*================
	  end INPUT RANGE
	==================*/

});


/*===========
Galeria
============*/

let modalId = $('#image-gallery');

$(document)
  .ready(function () {

    loadGallery(true, 'a.thumbnail');

    //This function disables buttons when needed
    function disableButtons(counter_max, counter_current) {
      $('#show-previous-image, #show-next-image')
        .show();
      if (counter_max === counter_current) {
        $('#show-next-image')
          .hide();
      } else if (counter_current === 1) {
        $('#show-previous-image')
          .hide();
      }
    }

    /**
     *
     * @param setIDs        Sets IDs when DOM is loaded. If using a PHP counter, set to false.
     * @param setClickAttr  Sets the attribute for the click handler.
     */

    function loadGallery(setIDs, setClickAttr) {
      let current_image,
        selector,
        counter = 0;

      $('#show-next-image, #show-previous-image')
        .click(function () {
          if ($(this)
            .attr('id') === 'show-previous-image') {
            current_image--;
          } else {
            current_image++;
          }

          selector = $('[data-image-id="' + current_image + '"]');
          updateGallery(selector);
        });

      function updateGallery(selector) {
        let $sel = selector;
        current_image = $sel.data('image-id');
        $('#image-gallery-title')
          .text($sel.data('title'));
        $('#image-gallery-image')
          .attr('src', $sel.data('image'));
        disableButtons(counter, $sel.data('image-id'));
      }

      if (setIDs == true) {
        $('[data-image-id]')
          .each(function () {
            counter++;
            $(this)
              .attr('data-image-id', counter);
          });
      }
      $(setClickAttr)
        .on('click', function () {
          updateGallery($(this));
        });
    }
  });

// build key actions
$(document)
  .keydown(function (e) {
    switch (e.which) {
      case 37: // left
        if ((modalId.data('bs.modal') || {})._isShown && $('#show-previous-image').is(":visible")) {
          $('#show-previous-image')
            .click();
        }
        break;

      case 39: // right
        if ((modalId.data('bs.modal') || {})._isShown && $('#show-next-image').is(":visible")) {
          $('#show-next-image')
            .click();
        }
        break;

      default:
        return; // exit this handler for other keys
    }
    e.preventDefault(); // prevent the default action (scroll / move caret)
  });

 /**Add categorias */


 $('#bttn').click(function(){
    var textAdd = $('#inpudAdd').val();
	$('#inpudAdd').val('').focus();
	$('.boxLista').append(' <label class="item">' + textAdd + '<i class="fa fa-times float-right"></>' + '</label>');
	
    
});


$(document).on('click', '.item', function(){
     $(this).remove();
});

/**Add produtos */

$('#bt-prod').click(function(){
	let textCategoria = $('#inputCategoria').val();
	let textTitulo = $('#inputTitulo').val();
	let texDescricao = $(' #inputDescricao').val();
	$('#inputCategoria').val('').focus();
	$('#inputTitulo').val('').focus();
	$('#inputDescricao').val('').focus();
	$('.tableList').append('<tr class="itens"><td>' + textCategoria + '</td><td>' + textTitulo + '</td><td>' + texDescricao + '</td><td>' + '<i style="margin-left:17px;" class="fa fa-trash"></>' + '</td></tr>');
});

$(document).on('click', '.itens', function(){
	$(this).remove();
});



