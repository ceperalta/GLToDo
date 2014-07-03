inicializarVista();


/**
 * Inicializamos la vista de este controlador 
 */
function inicializarVista(){
	
	var dao = require('DAO');
	var tareasCollection = dao.tomarTodasLasTareas();
	
	console.warn(tareasCollection.at(0).get("alloy_id") + tareasCollection.at(0).get("texto"));
	
	$.index.open();

}
