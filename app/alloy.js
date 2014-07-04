// The contents of this file will be executed before any of
// your view controllers are ever executed, including the index.
// You have access to all functionality on the `Alloy` namespace.
//
// This is a great place to do any initialization for your app
// or create any global variables/functions that you'd like to
// make available throughout your app. You can easily make things
// accessible globally by attaching them to the `Alloy.Globals`
// object. For example:
//
// Alloy.Globals.someGlobalFunction = function(){};

Alloy.Collections.tareas = Alloy.createCollection('tareas');


var dao = require('DAO');
dao.cargaDataEjemplar();

inicilizarPropiedadesAppSoloSiEstanVacias();

/**
 * Inicializamos las propiedades generales de la App solo si ya no fueron inicializadas
 */
function inicilizarPropiedadesAppSoloSiEstanVacias() {

	if (!Ti.App.Properties.getBool("AppInicializada")) {

		console.warn("configurando propiedades");

		var listaDePrioridades = [{
			orden : 1,
			lbl : "Alta"
		}, {
			orden : 2,
			lbl : "Media"
		}, {
			orden : 3,
			lbl : "Baja"
		}];
		
		var listaDeEstados = [{pendiente:"Pendiente",en_progreso:"En Progreso",finalizada:"Finalizada"}];
		
		var listaDeUsuarios = [{
			id : 1,
			usuario : "carlos",
			pass : "carlos"
		}, {
			id : 2,
			usuario : "cefe",
			pass : "cefe"
		}];

		Ti.App.Properties.setString("ListaDePrioridades", listaDePrioridades);
		Ti.App.Properties.setString('ListaDeEstados',JSON.stringify(listaDeEstados));
		Ti.App.Properties.setString("ListaDeUsuarios",JSON.stringify(listaDeUsuarios));

		Ti.App.Properties.setString("TituloApp", "GLToDo");

		Ti.App.Properties.setBool("AppInicializada", true);
	} else {
		console.warn("propiedades ya configuradas");
	}
}

