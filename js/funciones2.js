//$(document).ready(function () {
$(()=>{
	//Calendario
	$.datepicker.regional['es'] = {
		closeText: 'Cerrar',
		prevText: '',
		nextText: ' ',
		currentText: 'Hoy',
		monthNames: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
		monthNamesShort: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
		dayNames: ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'],
		dayNamesShort: ['Dom', 'Lun', 'Mar', 'Mié', 'Juv', 'Vie', 'Sáb'],
		dayNamesMin: ['Do', 'Lu', 'Ma', 'Mi', 'Ju', 'Vi', 'Sá'],
		weekHeader: 'Sm',
		dateFormat: 'dd/mm/yy',
		firstDay: 1,
		isRTL: false,
		showMonthAfterYear: false,
		yearSuffix: ''
	};

	$.datepicker.setDefaults($.datepicker.regional['es']);	

	$("#datepicker").datepicker({
		firstDay: 1
	});	

	// Menu hambuergesa
	$("#effect").toggle(false);
	$("#hamburger").on("click",event => {
		event.stopPropagation();
		$( "#effect" ).toggle( "slide"); 
	});

	$(document).on("click",() => {
		$("#effect").toggle(false);
	});

	$("#effect").on("click",(event) =>{
		event.stopPropagation();
	}); 

	/*Menu User*/
	$(".MenuUser, .MenuUser1").hide();
	$('.imgShowMenuUser').on("click", () => {
		$(".MenuUser, .MenuUser1").toggle("ver");
	});

	// Menu seguimiento
	$("#seguimiento").toggle(true);

	$(".hamburgerSeg").on("click", event =>{
		event.stopPropagation();
		$(".seguimiento").toggle("slide"); 
	});

	$(document).on("click", ()=>{
		$(".seguimiento").toggle(false);
	});
	$(".seguimiento").on("click", event =>{
		event.stopPropagation();
	});
	/********Para selects*******************/
	$("select").dropkick({
		mobile: true
	});

	/*Valida buscador del menu de hamburgesa*/
	function valida(f) {
		if (f.busca.value == "") {
			alert("Es necesario que introduzca un valor");
		} else {
			return false;
		}
	}
	
	/*Detecta resolucion de pantalla*/
	if (matchMedia) {
		const mq = window.matchMedia("(min-width: 780px)");
		mq.addListener(WidthChange);
		WidthChange(mq);
	}
	
	function WidthChange(mq) {
		if (mq.matches) {
			$("#menu ul").addClass("normal");
			$("#menu ul li").removeClass("in");
			$('ul.nivel1 >li > ul, ul.nivel2 >li > ul').slideUp();
			//$('ul.nivel2 >li > ul').slideUp();
			$('ul.nivel1>li, ul.nivel2>li').off("click");
			//$('ul.nivel2>li').off("click");
		} else {
			$("#menu ul").removeClass("normal");

			$('ul.nivel1>li').on('click', event => {
				event.stopPropagation();			
				let $this = $(this),
					$target = $this.children();						

				if ($this.hasClass("in")) {
					$('ul.nivel2').slideUp();
					$this.removeClass("in");
					$('.flecha').removeClass("rotar");
				} else {
					$('ul.nivel1 > li').removeClass("in");
					$('ul.nivel2, ul.nivel3').slideUp();
					//$('ul.nivel3').slideUp();
					$('ul.nivel2>li').removeClass("in");
					$this.addClass("in");
					$target.slideDown();
					$('ul.nivel1 > li > a .flecha').addClass("rotar");
				}
			});

			$('ul.nivel2>li').on('click', event => {
				var $this = $(this),
					$target = $this.children();
				event.stopPropagation();					

				if ($this.hasClass("in")) {
					$('ul.nivel3').slideUp();
					$this.removeClass("in");
					$('ul.nivel2 > li > a .flecha').removeClass("rotar");
				} else {
					$('ul.nivel2 > li').removeClass("in");
					$('ul.nivel3').slideUp();
					$this.addClass("in");
					$target.slideDown();
					$('ul.nivel2 > li > a .flecha').addClass("rotar");
				}
			});

			$('ul.nivel3>li').on('click', function (event) {
				event.stopPropagation();
			});
		}
	}
});