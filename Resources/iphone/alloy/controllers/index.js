function Controller() {
    function inicializarVista() {
        $.index.open();
    }
    function ingresar() {
        cargaVistaTabsTareas();
    }
    function cargaVistaTabsTareas() {
        $.index.visible = false;
        Alloy.createController("tabsTareas").getView().open();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "index";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.index = Ti.UI.createWindow({
        backgroundColor: "#fff",
        layout: "vertical",
        id: "index"
    });
    $.__views.index && $.addTopLevelView($.__views.index);
    $.__views.__alloyId0 = Ti.UI.createView({
        layout: "vertical",
        top: "70px",
        width: "70%",
        id: "__alloyId0"
    });
    $.__views.index.add($.__views.__alloyId0);
    $.__views.imageViewIconoApp = Ti.UI.createImageView({
        id: "imageViewIconoApp",
        image: "/appicon.png",
        width: "200px",
        height: "200px"
    });
    $.__views.__alloyId0.add($.__views.imageViewIconoApp);
    $.__views.textFieldUsuario = Ti.UI.createTextField({
        id: "textFieldUsuario",
        hintText: "usuario",
        height: "40",
        width: Ti.UI.FILL
    });
    $.__views.__alloyId0.add($.__views.textFieldUsuario);
    $.__views.textFieldClave = Ti.UI.createTextField({
        id: "textFieldClave",
        hintText: "clave",
        passwordMask: "true",
        height: "40",
        width: Ti.UI.FILL
    });
    $.__views.__alloyId0.add($.__views.textFieldClave);
    $.__views.__alloyId1 = Ti.UI.createButton({
        title: "Ingresar",
        height: "40",
        width: Ti.UI.FILL,
        borderColor: "blue",
        id: "__alloyId1"
    });
    $.__views.__alloyId0.add($.__views.__alloyId1);
    ingresar ? $.__views.__alloyId1.addEventListener("click", ingresar) : __defers["$.__views.__alloyId1!click!ingresar"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    require("DAO");
    inicializarVista();
    __defers["$.__views.__alloyId1!click!ingresar"] && $.__views.__alloyId1.addEventListener("click", ingresar);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;