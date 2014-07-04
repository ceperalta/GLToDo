
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

function cargaTablaTab(strEstado){
	
	var tareas;
	var arrayTitlesTabla =  [];
		
	switch(strEstado) {
		
		case estados[0].pendiente:
			tareas = dao.tomarTareasOrdenadasPorPrioridadParaEstado(estados[0].pendiente);
			for(var i=0;i<tareas.length;i++)
				arrayTitlesTabla.push({
					id:tareas.at(i).get('alloy_id'),
					prioridad: tareas.at(i).get('prioridad'),
					estado: tareas.at(i).get('estado'),
					title:creaMarcaStrPrioridad(tareas.at(i).get('prioridad')) + tareas.at(i).get('texto')
				});
			$.tableViewPendientes.data = arrayTitlesTabla;
			break;
		
		case estados[0].en_progreso:
			tareas = dao.tomarTareasOrdenadasPorPrioridadParaEstado(estados[0].en_progreso);
			for(var i=0;i<tareas.length;i++)
				arrayTitlesTabla.push({
					id:tareas.at(i).get('alloy_id'),
					prioridad: tareas.at(i).get('prioridad'),
					estado: tareas.at(i).get('estado'),
					title:creaMarcaStrPrioridad(tareas.at(i).get('prioridad')) + tareas.at(i).get('texto')
				});
			$.tableViewEnProgreso.data = arrayTitlesTabla;
			break;
		
		case estados[0].finalizada:
			tareas = dao.tomarTareasOrdenadasPorPrioridadParaEstado(estados[0].finalizada);
			for(var i=0;i<tareas.length;i++)
				arrayTitlesTabla.push({
					id:tareas.at(i).get('alloy_id'),
					prioridad: tareas.at(i).get('prioridad'),
					estado: tareas.at(i).get('estado'),
					title:creaMarcaStrPrioridad(tareas.at(i).get('prioridad')) + tareas.at(i).get('texto')
				});
			$.tableViewFinalizadas.data = arrayTitlesTabla;
			break;  	
	}	
	
}

function creaMarcaStrPrioridad(intPrioridad){
	var strPrioridad = "";
	switch(intPrioridad){
		case 1:
			strPrioridad = "[A] ";
			break;
		case 2:
			strPrioridad = "[M] ";
			break;
		case 3:
			strPrioridad = "[B] ";
			break;
	}
	
	return strPrioridad;
}

function selPendiente(e){
	
	idTareaActualEdicion = e.source.id;
	intPrioridadActual = e.source.prioridad;
	strEstadoActual = e.source.estado;
	Alloy.createController("editaTarea").getView().open();
}


function cambiaTabPendientes(){
	cargaTablaTab(estados[0].pendiente);
}

function cambiaTabEnProgreso(){
	cargaTablaTab(estados[0].en_progreso);
}

function cambiaTabFinalizadas(){
	cargaTablaTab(estados[0].finalizada);
}



function agregarTarea(){
	Alloy.createController("agregaTarea").getView().open();
}

function cerrarSesion(){
	$.tabsTareas.close();
	Alloy.createController("index").getView().open();
}
