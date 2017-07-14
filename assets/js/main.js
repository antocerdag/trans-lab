$(document).ready(function() {
	$(".boton-iniciar").click(function(event) {
		event.preventDefault();

		localStorage.email = $("#email").val();

		
		var email = $("#email").val();
		var password = $("#password").val();
		if(!(/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(localStorage.email))){
			alert("Por favor ingresa un correo electrónico válido");
		} else if((password == "")|| (password.length < 8) || (password.length > 8) ){
			alert("Por favor ingresa una contraseña, debe contener 8 números")
		} else{
			window.location.href = "home.html";
		}
		
		$(".email-local").append(localstorage.email);

	});
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
		var id = $(".inputsaldo").val();
		var value = $(".numeroguardado").val();
		if(id == ""){
			alert("Ingresa un numero de tarjeta válido");
		} else{

		 $.ajax({
            url : 'api/v1/solicitudes.json',
            type : 'GET',
            dataType: 'json',
            data : {'bip' : numTarjeta},
            beforeSend: function(){
                $('#modalresultado').modal('show');
            },
        success : function(data){
        	$(".datos-tarjeta").append('<b>Saldo tarjeta bip: </b>'+data.saldoTarjeta+'<br>'+'<b>Fecha saldo: </b>'+data.fechaSaldo+'<br>'+'<b>ID Tarjeta: </b>'+data.id+'<br>'+'<b>Estado contrato: </b>'+data.estadoContrato+'<br>');
        }
		
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