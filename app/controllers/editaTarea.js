inicializarVista();

function inicializarVista(){
	$.textFieldTarea.value = dao.tomarTextoTareaParaID(idTareaActualEdicion);
}

function abreWin(){
	$.textFieldTarea.focus();
}

function editar(){
	dao.editaTextoTareaParaID(idTareaActualEdicion,$.textFieldTarea.value,intPrioridadActual,strEstadoActual);
	$.editaWin.close();
}

function eliminar(){
	dao.eliminiarTareaParaID(idTareaActualEdicion);
	$.editaWin.close();
}

function cancelar(){
	$.editaWin.close();
}
