function Controller() {
    function inicializarVista() {
        $.index.open();
    }
    function ingresar() {
        if (dao.controlLogin($.textFieldUsuario.value, $.textFieldClave.value)) {
            strUsuarioActual = $.textFieldUsuario.value;
            cargaVistaTabsTareas();
        } else alert("Usuario y/o clave incorrecta", "Control de acceso");
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
    $.__views.__alloyId14 = Ti.UI.createView({
        layout: "vertical",
        top: "70px",
        width: "70%",
        id: "__alloyId14"
    });
    $.__views.index.add($.__views.__alloyId14);
    $.__views.imageViewIconoApp = Ti.UI.createImageView({
        id: "imageViewIconoApp",
        image: "/appicon.png",
        width: "200px",
        height: "200px"
    });
    $.__views.__alloyId14.add($.__views.imageViewIconoApp);
    $.__views.textFieldUsuario = Ti.UI.createTextField({
        id: "textFieldUsuario",
        hintText: "usuario",
        height: "40",
        width: Ti.UI.FILL
    });
    $.__views.__alloyId14.add($.__views.textFieldUsuario);
    $.__views.textFieldClave = Ti.UI.createTextField({
        id: "textFieldClave",
        hintText: "clave",
        passwordMask: "true",
        height: "40",
        width: Ti.UI.FILL
    });
    $.__views.__alloyId14.add($.__views.textFieldClave);
    $.__views.__alloyId15 = Ti.UI.createButton({
        title: "Ingresar",
        height: "40",
        width: Ti.UI.FILL,
        borderColor: "blue",
        id: "__alloyId15"
    });
    $.__views.__alloyId14.add($.__views.__alloyId15);
    ingresar ? $.__views.__alloyId15.addEventListener("click", ingresar) : __defers["$.__views.__alloyId15!click!ingresar"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    inicializarVista();
    __defers["$.__views.__alloyId15!click!ingresar"] && $.__views.__alloyId15.addEventListener("click", ingresar);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;