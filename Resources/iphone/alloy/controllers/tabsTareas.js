function Controller() {
    function inicializarVista() {
        $.winTab1.title = Ti.App.Properties.getString("TituloApp");
        $.winTab2.title = Ti.App.Properties.getString("TituloApp");
        $.winTab3.title = Ti.App.Properties.getString("TituloApp");
        $.tabsTareas.open();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "tabsTareas";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __alloyId4 = [];
    $.__views.winTab1 = Ti.UI.createWindow({
        id: "winTab1"
    });
    $.__views.__alloyId5 = Ti.UI.createLabel({
        text: "1",
        id: "__alloyId5"
    });
    $.__views.winTab1.add($.__views.__alloyId5);
    $.__views.tab1 = Ti.UI.createTab({
        window: $.__views.winTab1,
        id: "tab1",
        title: "Pendientes",
        icon: "KS_nav_ui.png"
    });
    __alloyId4.push($.__views.tab1);
    $.__views.winTab2 = Ti.UI.createWindow({
        id: "winTab2"
    });
    $.__views.__alloyId6 = Ti.UI.createLabel({
        text: "2",
        id: "__alloyId6"
    });
    $.__views.winTab2.add($.__views.__alloyId6);
    $.__views.tab2 = Ti.UI.createTab({
        window: $.__views.winTab2,
        id: "tab2",
        title: "En Progreso",
        icon: "KS_nav_ui.png"
    });
    __alloyId4.push($.__views.tab2);
    $.__views.winTab3 = Ti.UI.createWindow({
        id: "winTab3"
    });
    $.__views.__alloyId7 = Ti.UI.createLabel({
        text: "3",
        id: "__alloyId7"
    });
    $.__views.winTab3.add($.__views.__alloyId7);
    $.__views.tab3 = Ti.UI.createTab({
        window: $.__views.winTab3,
        id: "tab3",
        title: "Finalizadas",
        icon: "KS_nav_ui.png"
    });
    __alloyId4.push($.__views.tab3);
    $.__views.tabsTareas = Ti.UI.createTabGroup({
        tabs: __alloyId4,
        id: "tabsTareas"
    });
    $.__views.tabsTareas && $.addTopLevelView($.__views.tabsTareas);
    exports.destroy = function() {};
    _.extend($, $.__views);
    inicializarVista();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;