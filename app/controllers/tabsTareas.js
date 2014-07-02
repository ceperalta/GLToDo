inicializarVista();


/**
 * Inicializamos la vista de este controlador 
 */
function inicializarVista(){
	$.winTab1.title = Ti.App.Properties.getString("TituloApp");
	$.winTab2.title = Ti.App.Properties.getString("TituloApp");
	$.winTab3.title = Ti.App.Properties.getString("TituloApp");
	$.tabsTareas.open();	
}
