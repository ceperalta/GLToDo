inicializarVista();

function inicializarVista(){
	
}

function abreWin(){
		$.textFieldTarea.focus();
}

function agregar(){
	dao.agregaTarea($.textFieldTarea.value,1,"Pendiente");
	$.editaWin.close();
}

function cancelar(){
	$.editaWin.close();
}
