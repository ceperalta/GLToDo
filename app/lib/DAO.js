/**
 * Ejemplo de uso:
 * var dao = require('DAO');
 * var finalizadasColl = dao.tomarTareasOrdenadasPorPrioridadParaEstadoFinalizadas();
 * console.warn(finalizadasColl.at(0).get("texto"));
 */
exports.tomarTareasOrdenadasPorPrioridadParaEstadoFinalizadas = function() {
	
	var estados = JSON.parse(Ti.App.Properties.getString('ListaDeEstados'));
	Alloy.Collections.tareas.fetch({query:'SELECT * from tareas where estado="'+estados[0].finalizada+'" order by prioridad ASC'});
 	
 	return Alloy.Collections.tareas;
};

exports.tomarTareasOrdenadasPorPrioridadParaEstadoPendientes = function() {
	
	var estados = JSON.parse(Ti.App.Properties.getString('ListaDeEstados'));
	Alloy.Collections.tareas.fetch({query:'SELECT * from tareas where estado="'+estados[0].pendiente+'" order by prioridad ASC'});
 	
 	return Alloy.Collections.tareas;
};


exports.controlLogin = function(strUsuario,strClave) {
	
	var usuarios = JSON.parse(Ti.App.Properties.getString('ListaDeUsuarios'));

	for(i in usuarios){
		if(strUsuario==usuarios[i].usuario && strClave==usuarios[i].pass)
			return true;
	}
	return false;

};


exports.cargaDataEjemplar = function() {
 
    var tareaModel = Alloy.createModel('Tareas', {
        texto : "comprar carne p3",
        prioridad: 3,
        estado: "Pendiente"
    });
    Alloy.Collections.tareas.add(tareaModel);
    tareaModel.save();
    
     var tareaModel = Alloy.createModel('Tareas', {
        texto : "comprar carne p1",
        prioridad: 1,
        estado: "Pendiente"
    });
    Alloy.Collections.tareas.add(tareaModel);
    tareaModel.save();
    
     var tareaModel = Alloy.createModel('Tareas', {
        texto : "comprar carne p2",
        prioridad: 2,
        estado: "Pendiente"
    });
    Alloy.Collections.tareas.add(tareaModel);
    tareaModel.save();
    
    
    
    tareaModel = Alloy.createModel('Tareas', {
        texto : "comprar leña",
        prioridad: 2,
        estado: "Finalizada"
    });
    Alloy.Collections.tareas.add(tareaModel);
    tareaModel.save();
    
     tareaModel = Alloy.createModel('Tareas', {
        texto : "comprar pan",
        prioridad: 1,
        estado: "En Progreso"
    });
    Alloy.Collections.tareas.add(tareaModel);
    tareaModel.save();
  
};