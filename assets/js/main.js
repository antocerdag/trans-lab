$(document).ready(function() {
	$(".boton-iniciar").click(function(event) {
		event.preventDefault();

		localStorage.setItem("email", $("#email").val());

		var password = $("#password").val();
		if(!(/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(localStorage.email))){
			alert("Por favor ingresa un correo electrónico válido");
		} else if((password == "")|| (password.length < 8) || (password.length > 8) ){
			alert("Por favor ingresa una contraseña, debe contener 8 números")
		} else{
			window.location.href = "home.html";
		}
		
		//$(".email-local").append(localstorage.email);

	});

	document.getElementsByClassName("email-local").innerHTML = localStorage.getItem("email");
	// FUNCION PARA IMPRIMIR NUMEROS DE TARJETAS
	$(".agregar-tarjeta").click(function(event) {
		localStorage.numerotarjeta = $("#numerotarjeta").val();
		if((localStorage.numerotarjeta.length < 8 ) || (localStorage.numerotarjeta == "")|| (localStorage.numerotarjeta.length > 8 )){
			alert("Ingrese un numero de tarjeta Bip! válido, deben ser 8 números");
			$('input:text').focus(function(){
        	$(this).val('');
    		});
		}else{
			$(".numero").append("<li>"+localStorage.numerotarjeta+"</li>");
			$('input:text').focus(function(){
        	$(this).val('');
    		});
    		$(".numeroguardado").append(localStorage.numerotarjeta);
		}
		
	});
	//ver saldo
	$(".ver-saldo").click(function(event) {
		var id = ($(".inputsaldo").val());
		var value = $(".numeroguardado").val();
		if(id.length = 8){
			$.ajax({
	            url:'http://bip-servicio.herokuapp.com/api/v1/solicitudes.json?bip='+id+'',
	            type: 'GET',
	            datatype: 'json',
	        	})
	        .done(function(response){
	            console.log(response.saldoTarjeta);
	            $(".cajas-saldo").append("<b>Saldo tarjeta bip: </b>"+response.saldoTarjeta+"<br><b>Fecha saldo: </b>"+response.fechaSaldo+"<br><b>ID Tarjeta: </b>"+response.id+"<br><b>Estado contrato: </b>"+response.estadoContrato+"<br>");
	        })
		    .fail(function(){
		        console.log("error");
		    })
			
		}
	
	});

// CALCULAR SALDO
	$(".calcu-saldoboton").click(function(event) {
		$(".cajas").append("<div class='col s10 center-align center-block caja1'><div class='cabecera'><h2>Costo Pasaje</h2></div> <div class='bodycaja'><h6>Costo</h6></div></div>");
		$(".cajas").append("<div class='col s10 center-align center-block caja2'><div class='cabecera'><h2>Saldo Final</h2></div><div class='bodycaja'><h5>Saldo</h5></div></div>");
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