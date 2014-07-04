var dao = require('DAO');
inicializarVista();


/**
 * Inicializamos la vista de este controlador 
 */
function inicializarVista(){
	$.index.open();
}

function ingresar() {
	
	if(dao.controlLogin($.textFieldUsuario.value,$.textFieldClave.value))
		cargaVistaTabsTareas();
	else
		alert("Ingreso incorrecto");
	
	
}

function cargaVistaTabsTareas(){
	$.index.visible = false;
	Alloy.createController("tabsTareas").getView().open();
	
}
