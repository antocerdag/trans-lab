$(document).ready(function() {
	$(".boton-iniciar").click(function(event) {
		event.preventDefault();

		localStorage.email = $("#email").val();

		
		var email = $("#email").val();
		var password = $("#password").val();
		if(!(/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(localStorage.email))){
			alert("Por favor ingresa un correo electrónico válido");
		} else if((password == "")|| (password < 8) ){
			alert("Por favor ingresa una contraseña, debe contener 8 números")
		} else{
			window.location.href = "home.html";
		}
		
		$(".email-local").append(localstorage.email);

	});
	
	$(".agregar-tarjeta").click(function(event) {
		var numerotarjeta = $("#numerotarjeta").val();

		$(".numero").append("<li>"+numerotarjeta+"</li>");
		$('input:text').focus(function(){
        	$(this).val('');
    	});
	});

	$.ajax({
		url: '/path/to/file',
		type: 'default GET (Other values: POST)',
		dataType: 'default: Intelligent Guess (Other values: xml, json, script, or html)',
		data: {param1: 'value1'},
	})
	.done(function() {
		console.log("success");
	})
	.fail(function() {
		console.log("error");
	})
	.always(function() {
		console.log("complete");
	});
	


	$('.collapsible').collapsible();
	 $('select').material_select();


});

/* FUNCION PARA EL ANCHO DEL MENU DESPLEGABLE AL ABRIRSE */
	function openNav() {
	    document.getElementById("mySidenav").style.width = "312px";
	}

	/* FUNCION PARA ESCONDER EL MENU DESPLEGABLE */
	function closeNav() {
	    document.getElementById("mySidenav").style.width = "0";
	}