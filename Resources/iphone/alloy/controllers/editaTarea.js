function Controller() {
    function inicializarVista() {
        $.textFieldTarea.value = dao.tomarTextoTareaParaID(idTareaActualEdicion);
    }
    function abreWin() {
        $.textFieldTarea.focus();
    }
    function editar() {
        dao.editaTextoTareaParaID(idTareaActualEdicion, $.textFieldTarea.value, intPrioridadActual, strEstadoActual);
        $.editaWin.close();
    }
    function eliminar() {
        dao.eliminiarTareaParaID(idTareaActualEdicion);
        $.editaWin.close();
    }
    function cancelar() {
        $.editaWin.close();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "editaTarea";
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
    var __alloyId8 = [];
    $.__views.__alloyId9 = Ti.UI.createButton({
        title: "editar",
        height: "40",
        borderColor: "blue",
        id: "__alloyId9"
    });
    __alloyId8.push($.__views.__alloyId9);
    editar ? $.__views.__alloyId9.addEventListener("click", editar) : __defers["$.__views.__alloyId9!click!editar"] = true;
    $.__views.__alloyId10 = Ti.UI.createButton({
        systemButton: Ti.UI.iPhone.SystemButton.FLEXIBLE_SPACE
    });
    __alloyId8.push($.__views.__alloyId10);
    $.__views.__alloyId11 = Ti.UI.createButton({
        title: "eliminar",
        height: "40",
        borderColor: "blue",
        id: "__alloyId11"
    });
    __alloyId8.push($.__views.__alloyId11);
    eliminar ? $.__views.__alloyId11.addEventListener("click", eliminar) : __defers["$.__views.__alloyId11!click!eliminar"] = true;
    $.__views.__alloyId12 = Ti.UI.createButton({
        systemButton: Ti.UI.iPhone.SystemButton.FLEXIBLE_SPACE
    });
    __alloyId8.push($.__views.__alloyId12);
    $.__views.__alloyId13 = Ti.UI.createButton({
        title: "cancelar",
        height: "40",
        borderColor: "blue",
        id: "__alloyId13"
    });
    __alloyId8.push($.__views.__alloyId13);
    cancelar ? $.__views.__alloyId13.addEventListener("click", cancelar) : __defers["$.__views.__alloyId13!click!cancelar"] = true;
    $.__views.__alloyId6 = Ti.UI.iOS.createToolbar({
        items: __alloyId8,
        top: "20",
        width: "80%",
        id: "__alloyId6"
    });
    $.__views.editaWin.add($.__views.__alloyId6);
    exports.destroy = function() {};
    _.extend($, $.__views);
    inicializarVista();
    __defers["$.__views.editaWin!open!abreWin"] && $.__views.editaWin.addEventListener("open", abreWin);
    __defers["$.__views.__alloyId9!click!editar"] && $.__views.__alloyId9.addEventListener("click", editar);
    __defers["$.__views.__alloyId11!click!eliminar"] && $.__views.__alloyId11.addEventListener("click", eliminar);
    __defers["$.__views.__alloyId13!click!cancelar"] && $.__views.__alloyId13.addEventListener("click", cancelar);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;