exports.tomarTareasOrdenadasPorPrioridadParaEstadoFinalizadas = function() {
    var estados = JSON.parse(Ti.App.Properties.getString("ListaDeEstados"));
    Alloy.Collections.tareas.fetch({
        query: 'SELECT * from tareas where estado="' + estados[0].finalizada + '" order by prioridad ASC'
    });
    return Alloy.Collections.tareas;
};

exports.tomarTareasOrdenadasPorPrioridadParaEstado = function(strEstado) {
    Alloy.Collections.tareas.fetch({
        query: 'SELECT * from tareas where estado="' + strEstado + '" and usuario="' + strUsuarioActual + '" order by prioridad ASC'
    });
    return Alloy.Collections.tareas;
};

exports.tomarTextoTareaParaID = function(strID) {
    Alloy.Collections.tareas.fetch({
        query: 'SELECT * from tareas where alloy_id="' + strID + '"'
    });
    return Alloy.Collections.tareas.at(0).get("texto");
};

exports.agregaTarea = function(strTexto, intPrioridad, strEstado) {
    var tareaModel = Alloy.createModel("Tareas", {
        texto: strTexto,
        prioridad: intPrioridad,
        estado: strEstado,
        usuario: strUsuarioActual
    });
    Alloy.Collections.tareas.add(tareaModel);
    tareaModel.save();
};

exports.eliminiarTareaParaID = function(idTareaActualEdicion) {
    var tarea = Alloy.Collections.tareas.get(idTareaActualEdicion);
    tarea.destroy();
};

exports.editaTextoTareaParaID = function(strID, strTexto, intPrioridad, strEstado) {
    var tareaModel = Alloy.createModel("Tareas", {
        alloy_id: strID,
        texto: strTexto,
        prioridad: intPrioridad,
        estado: strEstado,
        usuario: strUsuarioActual
    });
    Alloy.Collections.tareas.add(tareaModel);
    tareaModel.save();
};

exports.controlLogin = function(strUsuario, strClave) {
    var usuarios = JSON.parse(Ti.App.Properties.getString("ListaDeUsuarios"));
    for (i in usuarios) if (strUsuario == usuarios[i].usuario && strClave == usuarios[i].pass) return true;
    return false;
};

exports.cargaDataEjemplar = function() {
    var tareaModel = Alloy.createModel("Tareas", {
        texto: "comprar carne p3 carlos",
        prioridad: 3,
        estado: "Pendiente",
        usuario: "carlos"
    });
    Alloy.Collections.tareas.add(tareaModel);
    tareaModel.save();
    var tareaModel = Alloy.createModel("Tareas", {
        texto: "comprar carne p1 carlos",
        prioridad: 1,
        estado: "Pendiente",
        usuario: "carlos"
    });
    Alloy.Collections.tareas.add(tareaModel);
    tareaModel.save();
    var tareaModel = Alloy.createModel("Tareas", {
        texto: "comprar carne p2 cefe",
        prioridad: 2,
        estado: "Pendiente",
        usuario: "cefe"
    });
    Alloy.Collections.tareas.add(tareaModel);
    tareaModel.save();
    tareaModel = Alloy.createModel("Tareas", {
        texto: "comprar leña cefe",
        prioridad: 2,
        estado: "Finalizada",
        usuario: "cefe"
    });
    Alloy.Collections.tareas.add(tareaModel);
    tareaModel.save();
    tareaModel = Alloy.createModel("Tareas", {
        texto: "comprar pan carlos",
        prioridad: 1,
        estado: "En Progreso",
        usuario: "carlos"
    });
    Alloy.Collections.tareas.add(tareaModel);
    tareaModel.save();
};