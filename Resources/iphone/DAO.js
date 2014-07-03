exports.tomarTodasLasTareas = function() {
    Alloy.Collections.tareas.fetch();
    return Alloy.Collections.tareas;
};