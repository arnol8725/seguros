
//Calendario
	$.datepicker.regional['es'] = {
		 closeText: 'Cerrar',
		 prevText: '',
		 nextText: ' ',
		 currentText: 'Hoy',
		 monthNames: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
		 monthNamesShort: ['Ene','Feb','Mar','Abr', 'May','Jun','Jul','Ago','Sep', 'Oct','Nov','Dic'],
		 dayNames: ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'],
		 dayNamesShort: ['Dom','Lun','Mar','Mié','Juv','Vie','Sáb'],
		 dayNamesMin: ['Do','Lu','Ma','Mi','Ju','Vi','Sá'],
		 weekHeader: 'Sm',
		 dateFormat: 'dd/mm/yy',
		 firstDay: 1,
		 isRTL: false,
		 showMonthAfterYear: false,
		 yearSuffix: ''
	 };
	$.datepicker.setDefaults($.datepicker.regional['es']);
	$(function() {
		$( "#datepicker" ).datepicker({
			firstDay: 1 
		});
	});

$(document).ready(function() {
	// Menu hambuergesa
	$("#effect").toggle(false);
	$("#hamburger").click(function (event) {
		event.stopPropagation();
		 $( "#effect" ).toggle( "slide"); 
	});

	$(document).click(function() {
		$("#effect").toggle(false);
	});
	$("#effect").click (function (event){
		event.stopPropagation();
	}); 

	/*Menu User*/
	$(".MenuUser, .MenuUser1").hide();
	$('.imgShowMenuUser').click(function() {
		$(".MenuUser, .MenuUser1").toggle("ver");
	});
	
	// Menu seguimiento
	$("#seguimiento").toggle(true);
	
	$(".hamburgerSeg").click(function (event) {
		event.stopPropagation();
		 $( ".seguimiento" ).toggle( "slide"); 
	});

	$(document).click(function() {
		$(".seguimiento").toggle(false);
	});
	$(".seguimiento").click (function (event){
		event.stopPropagation();
	});
	/********Para selects*******************/
	$( "select").dropkick({
		mobile: true
	});	
});

/*Valida buscador del menu de hamburgesa*/
function valida(f) {
	if (f.busca.value == "")  {
		alert("Es necesario que introduzca un valor");
	}else { 
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
		$('ul.nivel1 >li > ul').slideUp();
		$('ul.nivel2 >li > ul').slideUp();
		$('ul.nivel1>li').off("click");
		$('ul.nivel2>li').off("click");
	} else {
	   $("#menu ul").removeClass("normal");

		$('ul.nivel1>li').on('click', function(event) {
			event.stopPropagation();
			
			$target = $(this).children();

			if ($(this).hasClass("in"))  {
			    $('ul.nivel2').slideUp();

				$(this).removeClass("in");
				$('.flecha').removeClass("rotar");
			}else {
			  	$('ul.nivel1 > li').removeClass("in");
				$('ul.nivel2').slideUp();
				$('ul.nivel3').slideUp();
				$('ul.nivel2>li').removeClass("in");
				$(this).addClass("in");
			  	$target.slideDown();
				$('ul.nivel1 > li > a .flecha').addClass("rotar");
				
			}
		});
		$('ul.nivel2>li').on('click', function(event) {
			event.stopPropagation();
		
			$target = $(this).children();

			if ($(this).hasClass("in"))  {
			    $('ul.nivel3').slideUp();
				$(this).removeClass("in");
				$('ul.nivel2 > li > a .flecha').removeClass("rotar");
			}else {
			  	$('ul.nivel2 > li').removeClass("in");
				$('ul.nivel3').slideUp();
				$(this).addClass("in");
			  	$target.slideDown();
				$('ul.nivel2 > li > a .flecha').addClass("rotar");
			}
		});
		$('ul.nivel3>li').on('click', function(event) {
			event.stopPropagation();
		});
	}
}
 $("#check1").click(function() {  
	if($(this).is(':checked')) {  
		$('#txtApellidoP').addClass('desac');
	} else {  
		$('#txtApellidoP').removeClass('desac');
	}  
});  

 $("#check2").click(function() {  
	if($(this).is(':checked')) {  
		$('#txtApellidoM').addClass('desac');
	} else {  
		$('#txtApellidoM').removeClass('desac');
	}  
});  

$(".divName").hide();
$(".divTarjeta").hide();
$(".divCuenta").hide();
$(".divClienteU").hide();
$(".divBuscar").hide();

$('#selCriterios').change(function() {
	if($('#selCriterios option:selected').val() == 1) {
		$(".divName").show();
		$(".divTarjeta").hide();
		$(".divClienteU").hide();
		$(".divCuenta").hide();
	};
	if($('#selCriterios option:selected').val() == 2) {
		$(".divName").hide();
		$(".divTarjeta").show();
		$(".divClienteU").hide();
		$(".divCuenta").hide();
	};
	if($('#selCriterios option:selected').val() == 3) {
		$(".divName").hide();
		$(".divTarjeta").hide();
		$(".divClienteU").hide();
		$(".divCuenta").show();
	};
	if($('#selCriterios option:selected').val() == 4) {
		$(".divName").hide();
		$(".divTarjeta").hide();
		$(".divCuenta").hide();
		$(".divClienteU").show();
	};
	
	if($('#selCriterios option:selected').val() !== 0) {
		$(".btnBuscar").removeClass("desac");
		$(".divBuscar").hide();
	};
});

$(".btnBuscar").click(function() {  
	if($('#selCriterios option:selected').val() == 1) {
		var objNombre = {
			value : {
				ApellidoM : $("#txtApellidoM").val(),
				ApellidoP : $("#txtApellidoP").val(),
				Nombre : $("#txtNombre").val()
			}		
		}
		v.peticion("http://10.51.244.66/Servicio/ConSaldoService.svc/rest/GetNombre", objNombre,v.getNombre,"POST");
	};
	if($('#selCriterios option:selected').val() == 2) {
		var objTarjeta = {
			value : {
				Tarjeta : $("#txtTarjeta").val()
			}		
		}
		v.peticion("http://10.51.244.66/Servicio/ConSaldoService.svc/rest/GetTarjeta", objTarjeta,v.getNombre,"POST");
	};
	if($('#selCriterios option:selected').val() == 3) {
		var objCuenta = {
			value : {
				Cuenta:'Contenido de la cadena'
			}		
		}
		v.peticion("http://10.51.244.66/Servicio/ConSaldoService.svc/rest/GetCuenta", objCuenta,v.getNombre,"POST");
	};
	if($('#selCriterios option:selected').val() == 4) {
		var obj = {
		value : {
			Pais : $("#txtPais").val(),
			Canal : $("#txtCanal").val(),
			Sucursal : $("#txtSucursal").val(),
			Cons : $("#txtCons").val()
			}		
		}
		v.peticion("http://10.51.244.66/Servicio/ConSaldoService.svc/rest/GetCu", obj,v.getCu,"POST");
	};	
});  


var v = new Vue({
		el: "#app",
		data:{
			vacio: ""
		},
		methods:{
			peticion: function(_url, _data, _f, _method){	
				console.log(_data);
				var header = { headers: { "content-type": "application/json" } };		
				if(_method == "GET"){
					this.$http.get(_url+_data).then((data) => {						
						data && _f(data);
					}, error => {
						console.log(error);
					});
				}else{
					this.$http.post(_url,_data,header).then((data) => {
						data && _f(data);
					}, error => {
						console.log(error);
					});
				}
			},
			getNombre: function(datos){
				$(".divBuscar").show();				
				console.log("vue", datos);
				console.log("vue", datos.body.Cu);   
				$('#tbListadoBody tr').remove();				
				$('#tbListadoBody').append('<tr>' +
					'<td>' + datos.body.d.Cu + '</td>' +
					'<td>' + datos.body.d.Cuenta + '</td>' +
					'<td><image src="' + datos.body.d.TipoCuenta + '" /></td>' +
					'<td>' + datos.body.d.ApellidoP + '</td>' +
					'<td>' + datos.body.d.ApellidoM + '</td>' +
					'<td>' + datos.body.d.Nombre + '</td>' +
					'<td>' + datos.body.d.FechaNac + '</td>' +
					'<td>' + datos.body.d.T + '</td>' +
					'</tr>'
				);				
			},
			getTarjeta: function(datos){
				$(".divBuscar").show();				
				console.log("vue", datos);
				console.log("vue", datos.body.Cu);   
				$('#tbListadoBody tr').remove();				
				$('#tbListadoBody').append('<tr>' +
					'<td>' + datos.body.d.Cu + '</td>' +
					'<td>' + datos.body.d.Cuenta + '</td>' +
					'<td><image src="' + datos.body.d.TipoCuenta + '" /></td>' +
					'<td>' + datos.body.d.ApellidoP + '</td>' +
					'<td>' + datos.body.d.ApellidoM + '</td>' +
					'<td>' + datos.body.d.Nombre + '</td>' +
					'<td>' + datos.body.d.FechaNac + '</td>' +
					'<td>' + datos.body.d.T + '</td>' +
					'</tr>'
				);	
			},
			getCuenta: function(datos){
				$(".divBuscar").show();				
				console.log("vue", datos);
				console.log("vue", datos.body.Cu);   
				$('#tbListadoBody tr').remove();				
				$('#tbListadoBody').append('<tr>' +
					'<td>' + datos.body.d.Cu + '</td>' +
					'<td>' + datos.body.d.Cuenta + '</td>' +
					'<td><image src="' + datos.body.d.TipoCuenta + '" /></td>' +
					'<td>' + datos.body.d.ApellidoP + '</td>' +
					'<td>' + datos.body.d.ApellidoM + '</td>' +
					'<td>' + datos.body.d.Nombre + '</td>' +
					'<td>' + datos.body.d.FechaNac + '</td>' +
					'<td>' + datos.body.d.T + '</td>' +
					'</tr>'
				);	
			},
			getCu: function(datos){
				$(".divBuscar").show();
				console.log("vue", datos);
				$('#tbListadoBody tr').remove();
				for (let i = 0; i < datos.body.d.length; i++) {
					$('#tbListadoBody').append('<tr>' +
						'<td>' + datos.body.d[i].Cu + '</td>' +
						'<td>' + datos.body.d[i].Cuenta + '</td>' +
						'<td><image src="' + datos.body.d[i].TipoCuenta + '" /></td>' +
						'<td>' + datos.body.d[i].ApellidoP + '</td>' +
						'<td>' + datos.body.d[i].ApellidoM + '</td>' +
						'<td>' + datos.body.d[i].Nombre + '</td>' +
						'<td>' + datos.body.d[i].FechaNac + '</td>' +
						'<td>' + datos.body.d[i].T + '</td>' +
						'</tr>'
					);	
				}		
			}
		}
	});

