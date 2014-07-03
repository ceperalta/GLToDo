function inicilizarPropiedadesAppSoloSiEstanVacias() {
    if (Ti.App.Properties.getBool("AppInicializada")) console.warn("propiedades ya configuradas"); else {
        console.warn("configurando propiedades");
        var listaDePrioridades = [ {
            orden: 1,
            lbl: "Alta"
        }, {
            orden: 2,
            lbl: "Media"
        }, {
            orden: 2,
            lbl: "Baja"
        } ];
        var listaDeEstados = [ "Pendiente", "En Progreso", "Finalizada" ];
        var listaDeUsuarios = [ {
            id: 1,
            usuario: "carlos",
            pass: "carlos"
        }, {
            id: 2,
            usuario: "cefe",
            pass: "cefe"
        } ];
        Ti.App.Properties.setString("ListaDePrioridades", listaDePrioridades);
        Ti.App.Properties.setString("listaDeEstados", listaDeEstados);
        Ti.App.Properties.setString("listaDeUsuarios", listaDeUsuarios);
        Ti.App.Properties.setString("TituloApp", "GLToDo");
        Ti.App.Properties.setBool("AppInicializada", true);
    }
}

var Alloy = require("alloy"), _ = Alloy._, Backbone = Alloy.Backbone;

Alloy.Collections.tareas = Alloy.createCollection("tareas");

inicilizarPropiedadesAppSoloSiEstanVacias();

Alloy.createController("index");