
inicializarVista();

/**
 * Inicializamos la vista de este controlador 
 */
function inicializarVista(){
	$.winTab1.title = Ti.App.Properties.getString("TituloApp");
	$.winTab2.title = Ti.App.Properties.getString("TituloApp");
	$.winTab3.title = Ti.App.Properties.getString("TituloApp");
	
	var tareasPendientes = dao.tomarTareasOrdenadasPorPrioridadParaEstadoPendientes();
	console.warn(tareasPendientes.length);
	var arrayTitlesTabla =  [];
	for(var i=0;i<tareasPendientes.length;i++)
		arrayTitlesTabla.push({title:tareasPendientes.at(i).get('texto')});

	$.tableViewPendientes.data = arrayTitlesTabla;
	
	$.tabsTareas.open();	
}


function agregarTarea(){
	
}

function cerrarSesion(){
	$.tabsTareas.close();
	Alloy.createController("index").getView().open();
}
