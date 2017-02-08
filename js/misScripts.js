/*Ponemos a la imagen banner de servicios opaca al pasar el mouse*/
$(document).ready(function(){
	$('.img_banner_servicios').on('mouseover', function() {
		$(this).fadeTo('slow', 0.8);
	});

	$('.img_banner_servicios').on('mouseout', function() {
		$(this).fadeTo('slow', 1);
	});

	/*al pasar el mouse por el map(callbackfn: Function, thisArg?: any) quitamos el opacity y al quitar el mismo, ponemos opacity*/
	$('iframe').css('opacity', 0.7);

	$('.map').on('mouseover', function() {
		$(this).fadeTo('fast', 1);
	});

	$('.map').on('mouseout', function() {
		$(this).fadeTo('slow', 0.7);
	});

	// /*saludo inicial 1*/
	// $('.saludo1').fadeIn(1000).animate({
	// 	left : 22,
	// 	bottom : 724,
	// }, 2000);
	// /*desaparezco el saludo 1*/
	// $('.saludo1').fadeOut(3000).animate({
	// 	left : 500,
	// 	bottom : 750,
	// },2000);



	// /*saludo inicial 2*/
	// $('.saludo2').fadeIn(1000).animate({
	// 	left : 345,
	// 	bottom : 814,
	// },2000);
	// /*desaparezco el saludo 2*/
	// $('.saludo2').fadeOut(3000).animate({
	// 	left : 500,
	// 	bottom : 750,
	// },2000);
	
	/*muestro el contenido q sale del centro hacia arriba*/
	// $('.caja').fadeIn(2000).animate({
	// 	bottom : 270,
	// },2000);

	/*medimos el scroll y al llegar a cierto punto mostramos los servicios*/

	/*aca damos opciones al boton dropdown*/
  $('.dropdown-button').dropdown({
      inDuration: 300,
      outDuration: 225,
      hover: true, // Activate on hover
    }
  );

});

