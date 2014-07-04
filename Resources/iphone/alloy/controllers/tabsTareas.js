function Controller() {
    function inicializarVista() {
        $.winTab1.title = Ti.App.Properties.getString("TituloApp");
        $.winTab2.title = Ti.App.Properties.getString("TituloApp");
        $.winTab3.title = Ti.App.Properties.getString("TituloApp");
        $.tabsTareas.open();
    }
    function cargaTablaTab(strEstado) {
        var tareas;
        var arrayTitlesTabla = [];
        switch (strEstado) {
          case estados[0].pendiente:
            tareas = dao.tomarTareasOrdenadasPorPrioridadParaEstado(estados[0].pendiente);
            for (var i = 0; tareas.length > i; i++) arrayTitlesTabla.push({
                id: tareas.at(i).get("alloy_id"),
                prioridad: tareas.at(i).get("prioridad"),
                estado: tareas.at(i).get("estado"),
                title: creaMarcaStrPrioridad(tareas.at(i).get("prioridad")) + tareas.at(i).get("texto")
            });
            $.tableViewPendientes.data = arrayTitlesTabla;
            break;

          case estados[0].en_progreso:
            tareas = dao.tomarTareasOrdenadasPorPrioridadParaEstado(estados[0].en_progreso);
            for (var i = 0; tareas.length > i; i++) arrayTitlesTabla.push({
                id: tareas.at(i).get("alloy_id"),
                prioridad: tareas.at(i).get("prioridad"),
                estado: tareas.at(i).get("estado"),
                title: creaMarcaStrPrioridad(tareas.at(i).get("prioridad")) + tareas.at(i).get("texto")
            });
            $.tableViewEnProgreso.data = arrayTitlesTabla;
            break;

          case estados[0].finalizada:
            tareas = dao.tomarTareasOrdenadasPorPrioridadParaEstado(estados[0].finalizada);
            for (var i = 0; tareas.length > i; i++) arrayTitlesTabla.push({
                id: tareas.at(i).get("alloy_id"),
                prioridad: tareas.at(i).get("prioridad"),
                estado: tareas.at(i).get("estado"),
                title: creaMarcaStrPrioridad(tareas.at(i).get("prioridad")) + tareas.at(i).get("texto")
            });
            $.tableViewFinalizadas.data = arrayTitlesTabla;
        }
    }
    function creaMarcaStrPrioridad(intPrioridad) {
        var strPrioridad = "";
        switch (intPrioridad) {
          case 1:
            strPrioridad = "[A] ";
            break;

          case 2:
            strPrioridad = "[M] ";
            break;

          case 3:
            strPrioridad = "[B] ";
        }
        return strPrioridad;
    }
    function selPendiente(e) {
        idTareaActualEdicion = e.source.id;
        intPrioridadActual = e.source.prioridad;
        strEstadoActual = e.source.estado;
        Alloy.createController("editaTarea").getView().open();
    }
    function cambiaTabPendientes() {
        cargaTablaTab(estados[0].pendiente);
    }
    function cambiaTabEnProgreso() {
        cargaTablaTab(estados[0].en_progreso);
    }
    function cambiaTabFinalizadas() {
        cargaTablaTab(estados[0].finalizada);
    }
    function agregarTarea() {
        Alloy.createController("agregaTarea").getView().open();
    }
    function cerrarSesion() {
        $.tabsTareas.close();
        Alloy.createController("index").getView().open();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "tabsTareas";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    var __alloyId16 = [];
    $.__views.winTab1 = Ti.UI.createWindow({
        id: "winTab1",
        backgroundColor: "white",
        layout: "vertical"
    });
    $.__views.__alloyId18 = Ti.UI.createButton({
        title: "Cerrar",
        height: "40",
        borderColor: "blue",
        id: "__alloyId18"
    });
    cerrarSesion ? $.__views.__alloyId18.addEventListener("click", cerrarSesion) : __defers["$.__views.__alloyId18!click!cerrarSesion"] = true;
    $.__views.winTab1.rightNavButton = $.__views.__alloyId18;
    $.__views.__alloyId20 = Ti.UI.createButton({
        title: "[+] Agregar",
        height: "40",
        borderColor: "blue",
        id: "__alloyId20"
    });
    agregarTarea ? $.__views.__alloyId20.addEventListener("click", agregarTarea) : __defers["$.__views.__alloyId20!click!agregarTarea"] = true;
    $.__views.winTab1.leftNavButton = $.__views.__alloyId20;
    $.__views.tableViewPendientes = Ti.UI.createTableView({
        width: Ti.UI.FILL,
        id: "tableViewPendientes"
    });
    $.__views.winTab1.add($.__views.tableViewPendientes);
    selPendiente ? $.__views.tableViewPendientes.addEventListener("click", selPendiente) : __defers["$.__views.tableViewPendientes!click!selPendiente"] = true;
    $.__views.tab1 = Ti.UI.createTab({
        window: $.__views.winTab1,
        id: "tab1",
        title: "Pendientes",
        icon: "KS_nav_ui.png"
    });
    __alloyId16.push($.__views.tab1);
    cambiaTabPendientes ? $.__views.tab1.addEventListener("focus", cambiaTabPendientes) : __defers["$.__views.tab1!focus!cambiaTabPendientes"] = true;
    $.__views.winTab2 = Ti.UI.createWindow({
        id: "winTab2",
        backgroundColor: "white"
    });
    $.__views.__alloyId22 = Ti.UI.createButton({
        title: "Cerrar",
        height: "40",
        borderColor: "blue",
        id: "__alloyId22"
    });
    cerrarSesion ? $.__views.__alloyId22.addEventListener("click", cerrarSesion) : __defers["$.__views.__alloyId22!click!cerrarSesion"] = true;
    $.__views.winTab2.rightNavButton = $.__views.__alloyId22;
    $.__views.tableViewEnProgreso = Ti.UI.createTableView({
        width: Ti.UI.FILL,
        id: "tableViewEnProgreso"
    });
    $.__views.winTab2.add($.__views.tableViewEnProgreso);
    $.__views.tab2 = Ti.UI.createTab({
        window: $.__views.winTab2,
        id: "tab2",
        title: "En Progreso",
        icon: "KS_nav_ui.png"
    });
    __alloyId16.push($.__views.tab2);
    cambiaTabEnProgreso ? $.__views.tab2.addEventListener("focus", cambiaTabEnProgreso) : __defers["$.__views.tab2!focus!cambiaTabEnProgreso"] = true;
    $.__views.winTab3 = Ti.UI.createWindow({
        id: "winTab3",
        backgroundColor: "white"
    });
    $.__views.__alloyId24 = Ti.UI.createButton({
        title: "Cerrar",
        height: "40",
        borderColor: "blue",
        id: "__alloyId24"
    });
    cerrarSesion ? $.__views.__alloyId24.addEventListener("click", cerrarSesion) : __defers["$.__views.__alloyId24!click!cerrarSesion"] = true;
    $.__views.winTab3.rightNavButton = $.__views.__alloyId24;
    $.__views.tableViewFinalizadas = Ti.UI.createTableView({
        width: Ti.UI.FILL,
        id: "tableViewFinalizadas"
    });
    $.__views.winTab3.add($.__views.tableViewFinalizadas);
    $.__views.tab3 = Ti.UI.createTab({
        window: $.__views.winTab3,
        id: "tab3",
        title: "Finalizadas",
        icon: "KS_nav_ui.png"
    });
    __alloyId16.push($.__views.tab3);
    cambiaTabFinalizadas ? $.__views.tab3.addEventListener("focus", cambiaTabFinalizadas) : __defers["$.__views.tab3!focus!cambiaTabFinalizadas"] = true;
    $.__views.tabsTareas = Ti.UI.createTabGroup({
        tabs: __alloyId16,
        id: "tabsTareas"
    });
    $.__views.tabsTareas && $.addTopLevelView($.__views.tabsTareas);
    exports.destroy = function() {};
    _.extend($, $.__views);
    inicializarVista();
    __defers["$.__views.__alloyId18!click!cerrarSesion"] && $.__views.__alloyId18.addEventListener("click", cerrarSesion);
    __defers["$.__views.__alloyId20!click!agregarTarea"] && $.__views.__alloyId20.addEventListener("click", agregarTarea);
    __defers["$.__views.tableViewPendientes!click!selPendiente"] && $.__views.tableViewPendientes.addEventListener("click", selPendiente);
    __defers["$.__views.tab1!focus!cambiaTabPendientes"] && $.__views.tab1.addEventListener("focus", cambiaTabPendientes);
    __defers["$.__views.__alloyId22!click!cerrarSesion"] && $.__views.__alloyId22.addEventListener("click", cerrarSesion);
    __defers["$.__views.tab2!focus!cambiaTabEnProgreso"] && $.__views.tab2.addEventListener("focus", cambiaTabEnProgreso);
    __defers["$.__views.__alloyId24!click!cerrarSesion"] && $.__views.__alloyId24.addEventListener("click", cerrarSesion);
    __defers["$.__views.tab3!focus!cambiaTabFinalizadas"] && $.__views.tab3.addEventListener("focus", cambiaTabFinalizadas);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;