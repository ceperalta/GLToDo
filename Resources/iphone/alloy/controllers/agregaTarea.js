function Controller() {
    function inicializarVista() {}
    function abreWin() {
        $.textFieldTarea.focus();
    }
    function agregar() {
        dao.agregaTarea($.textFieldTarea.value, 1, "Pendiente");
        $.editaWin.close();
    }
    function cancelar() {
        $.editaWin.close();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "agregaTarea";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.editaWin = Ti.UI.createWindow({
        id: "editaWin",
        layout: "vertical",
        height: "60%",
        width: "90%",
        backgroundColor: "gray",
        borderRadius: "30"
    });
    $.__views.editaWin && $.addTopLevelView($.__views.editaWin);
    abreWin ? $.__views.editaWin.addEventListener("open", abreWin) : __defers["$.__views.editaWin!open!abreWin"] = true;
    $.__views.textFieldTarea = Ti.UI.createTextField({
        id: "textFieldTarea",
        top: "20",
        height: "40",
        width: "90%",
        borderRadius: "20",
        textAlign: "center",
        backgroundColor: "lightgray"
    });
    $.__views.editaWin.add($.__views.textFieldTarea);
    var __alloyId2 = [];
    $.__views.__alloyId3 = Ti.UI.createButton({
        title: "agregar",
        height: "40",
        borderColor: "blue",
        id: "__alloyId3"
    });
    __alloyId2.push($.__views.__alloyId3);
    agregar ? $.__views.__alloyId3.addEventListener("click", agregar) : __defers["$.__views.__alloyId3!click!agregar"] = true;
    $.__views.__alloyId4 = Ti.UI.createButton({
        systemButton: Ti.UI.iPhone.SystemButton.FLEXIBLE_SPACE
    });
    __alloyId2.push($.__views.__alloyId4);
    $.__views.__alloyId5 = Ti.UI.createButton({
        title: "cancelar",
        height: "40",
        borderColor: "blue",
        id: "__alloyId5"
    });
    __alloyId2.push($.__views.__alloyId5);
    cancelar ? $.__views.__alloyId5.addEventListener("click", cancelar) : __defers["$.__views.__alloyId5!click!cancelar"] = true;
    $.__views.__alloyId0 = Ti.UI.iOS.createToolbar({
        items: __alloyId2,
        top: "20",
        width: "80%",
        id: "__alloyId0"
    });
    $.__views.editaWin.add($.__views.__alloyId0);
    exports.destroy = function() {};
    _.extend($, $.__views);
    inicializarVista();
    __defers["$.__views.editaWin!open!abreWin"] && $.__views.editaWin.addEventListener("open", abreWin);
    __defers["$.__views.__alloyId3!click!agregar"] && $.__views.__alloyId3.addEventListener("click", agregar);
    __defers["$.__views.__alloyId5!click!cancelar"] && $.__views.__alloyId5.addEventListener("click", cancelar);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;