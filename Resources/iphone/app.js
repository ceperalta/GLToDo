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
            orden: 3,
            lbl: "Baja"
        } ];
        var listaDeEstados = [ {
            pendiente: "Pendiente",
            en_progreso: "En Progreso",
            finalizada: "Finalizada"
        } ];
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
        Ti.App.Properties.setString("ListaDeEstados", JSON.stringify(listaDeEstados));
        Ti.App.Properties.setString("ListaDeUsuarios", JSON.stringify(listaDeUsuarios));
        Ti.App.Properties.setString("TituloApp", "GLToDo");
        Ti.App.Properties.setBool("AppInicializada", true);
    }
}

var Alloy = require("alloy"), _ = Alloy._, Backbone = Alloy.Backbone;

Alloy.Collections.tareas = Alloy.createCollection("tareas");

var dao = require("DAO");

dao.cargaDataEjemplar();

inicilizarPropiedadesAppSoloSiEstanVacias();

Alloy.createController("index");