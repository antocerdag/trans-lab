$(document).ready(function() {
	$(".boton-iniciar").click(function(event) {
		
		localStorage.email = $("#email").val();

		function email(){
			var email = $("#email").val();
			if(!(/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(localStorage.email))){
	  			alert("Por favor ingresa un correo electrónico válido");
			}
		}
		email();
		function password(){
			var password = $("#password").val();
			if(password == ""){
				alert("Por favor ingresa una contraseña")
			}
		}
		password();



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