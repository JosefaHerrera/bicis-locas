function validateForm(){
	/* Escribe tú código aquí */
	
	//validar nombre
	function nombre(){
		var nombre = document.getElementById('name').value; //valor ingresado al input en el id='name'
		     //validar que nombre no esté vacío
		if(nombre === "" || nombre === undefined || nombre.length === 0){
			alert("Error, debe ingresar nombre");
			//validar que 1° caracter sea mayúscula
		}else if(nombre.charAt(0) != nombre.charAt(0).toUpperCase()){
			alert("Error, el nombre debe comenzar con mayúscula");
			//validar que sean solo letras
		}else if(/[0-9]/.test(nombre)){
			alert("Error, no debe ingresar números")
		}else{
			alert("Nombre ingresado correctamente")
		}
	}
	nombre();
		//validar apellido
		function Apellido(){
		var Apellido = document.getElementById('lastname').value; 
			//validar que Apellido no esté vacío
		if(Apellido === "" || Apellido === undefined || Apellido.length === 0){
			alert("Error, debe ingresar Apellido");
			//validar que 1° caracter sea mayúscula
		}else if(Apellido.charAt(0) != Apellido.charAt(0).toUpperCase()){
			alert("Error, el Apellido debe comenzar con mayúscula");
			//validar que sean solo letras
		}else if(/[0-9]/.test(Apellido)){
			alert("Error, no debe ingresar números")
		}else{
			console.log("Apellido ingresado correctamente")
		}
	}
	Apellido();

	//validar contraseña
	function password(){
		var contrasenia = document.getElementById('input-password').value;
			//no vacio
		if(contrasenia === "" || contrasenia === undefined || contrasenia.length === 0){
			alert("Error, debe ingresar contraseña");
			//que no sea 1234 ni "password"
		}else if(contrasenia === "1234" || contrasenia === "password"){
			alert("Error, la contraseña debe ser distinta a 1234 o password");
			//que tenga al menos 6 caracteres
		}else if(contrasenia.length < 6){
			console.log("Error, la contraseña debe tener al menos 6 caracteres");
		}else{
			alert("Contraseña ingresada correctamente");
		}
	}
	password();
	//validar select
	//enseñado por Ale en ayudantia <3 
	function opciones(){
	 	var seleccion = document.getElementsByTagName('select');
		//var seleccion = document.getElementsByClassName('form-control')[2]; //hay más de una class con el mismo nombre, entonces necesito la etiqueta en la posición 2, //con ctrl+f puedo buscar
		for(var i = 0; i < seleccion.length; i++){ //se usa for porque hay que recorrer todas las opciones del select
			if(seleccion[i].value == "0"){	
				alert("Debe seleccionar una opción");
			}
		}
	}

	opciones();
	
	function email() {
		var correo = document.getElementById("input-email")
	    var expRegCorreo = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
	    if (expRegCorreo.test(correo)) {
	        console.log('correo valido');
	    } else {
	        alert('correo no valido');
	    }
	};
	email();

};




