$(document).ready(function() {
	$(".boton-iniciar").click(function(event) {
		email();
		password();
	});
	function email(){
		var email = $("#email").val();
		if(!(/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(email))){
  			alert("Por favor ingresa un correo electrónico válido");
		}
	}
	
	function password(){
		var password = $("#password").val();
		if(password == ""){
			alert("Por favor ingresa una contraseña")
		}
	}
});