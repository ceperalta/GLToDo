function Controller() {
    function inicializarVista() {
        $.winTab1.title = Ti.App.Properties.getString("TituloApp");
        $.winTab2.title = Ti.App.Properties.getString("TituloApp");
        $.winTab3.title = Ti.App.Properties.getString("TituloApp");
        var tareasPendientes = dao.tomarTareasOrdenadasPorPrioridadParaEstadoPendientes();
        console.warn(tareasPendientes.length);
        var arrayTitlesTabla = [];
        for (var i = 0; tareasPendientes.length > i; i++) {
            arrayTitlesTabla.push({
                title: tareasPendientes.at(i).get("texto")
            });
            console.warn(tareasPendientes.at(i).get("texto"));
        }
        var strJsonArrayTitlesTabla = JSON.stringify(arrayTitlesTabla);
        console.warn(strJsonArrayTitlesTabla);
        $.tableViewPendientes.data = arrayTitlesTabla;
        $.tabsTareas.open();
    }
    function agregarTarea() {}
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
    var __alloyId2 = [];
    $.__views.winTab1 = Ti.UI.createWindow({
        id: "winTab1",
        backgroundColor: "white",
        layout: "vertical"
    });
    var __alloyId5 = [];
    $.__views.__alloyId6 = Ti.UI.createButton({
        title: "[+] Agregar",
        height: "40",
        borderColor: "blue",
        id: "__alloyId6"
    });
    __alloyId5.push($.__views.__alloyId6);
    agregarTarea ? $.__views.__alloyId6.addEventListener("click", agregarTarea) : __defers["$.__views.__alloyId6!click!agregarTarea"] = true;
    $.__views.__alloyId7 = Ti.UI.createButton({
        systemButton: Ti.UI.iPhone.SystemButton.FLEXIBLE_SPACE
    });
    __alloyId5.push($.__views.__alloyId7);
    $.__views.__alloyId8 = Ti.UI.createButton({
        title: "Cerrar",
        height: "40",
        borderColor: "blue",
        id: "__alloyId8"
    });
    __alloyId5.push($.__views.__alloyId8);
    cerrarSesion ? $.__views.__alloyId8.addEventListener("click", cerrarSesion) : __defers["$.__views.__alloyId8!click!cerrarSesion"] = true;
    $.__views.__alloyId3 = Ti.UI.iOS.createToolbar({
        items: __alloyId5,
        layout: "horizontal",
        height: "40",
        id: "__alloyId3"
    });
    $.__views.winTab1.add($.__views.__alloyId3);
    $.__views.tableViewPendientes = Ti.UI.createTableView({
        width: Ti.UI.FILL,
        id: "tableViewPendientes"
    });
    $.__views.winTab1.add($.__views.tableViewPendientes);
    $.__views.tab1 = Ti.UI.createTab({
        window: $.__views.winTab1,
        id: "tab1",
        title: "Pendientes",
        icon: "KS_nav_ui.png"
    });
    __alloyId2.push($.__views.tab1);
    $.__views.winTab2 = Ti.UI.createWindow({
        id: "winTab2",
        backgroundColor: "white"
    });
    $.__views.tab2 = Ti.UI.createTab({
        window: $.__views.winTab2,
        id: "tab2",
        title: "En Progreso",
        icon: "KS_nav_ui.png"
    });
    __alloyId2.push($.__views.tab2);
    $.__views.winTab3 = Ti.UI.createWindow({
        id: "winTab3",
        backgroundColor: "white"
    });
    $.__views.tab3 = Ti.UI.createTab({
        window: $.__views.winTab3,
        id: "tab3",
        title: "Finalizadas",
        icon: "KS_nav_ui.png"
    });
    __alloyId2.push($.__views.tab3);
    $.__views.tabsTareas = Ti.UI.createTabGroup({
        tabs: __alloyId2,
        id: "tabsTareas"
    });
    $.__views.tabsTareas && $.addTopLevelView($.__views.tabsTareas);
    exports.destroy = function() {};
    _.extend($, $.__views);
    inicializarVista();
    __defers["$.__views.__alloyId6!click!agregarTarea"] && $.__views.__alloyId6.addEventListener("click", agregarTarea);
    __defers["$.__views.__alloyId8!click!cerrarSesion"] && $.__views.__alloyId8.addEventListener("click", cerrarSesion);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;