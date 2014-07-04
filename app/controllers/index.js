inicializarVista();


function inicializarVista(){
	$.index.open();
}

function ingresar() {
	if(dao.controlLogin($.textFieldUsuario.value,$.textFieldClave.value)){
		strUsuarioActual = $.textFieldUsuario.value;
		cargaVistaTabsTareas();
	}
	else{
		alert("Usuario y/o clave incorrecta","Control de acceso");
	}
}

function cargaVistaTabsTareas(){
	$.index.visible = false;
	Alloy.createController("tabsTareas").getView().open();
	
}
