function Controller() {
    function inicializarVista() {
        $.index.open();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "index";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
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
        width: "100px",
        height: "100px"
    });
    $.__views.__alloyId0.add($.__views.imageViewIconoApp);
    $.__views.__alloyId1 = Ti.UI.createTextField({
        hintText: "usuario",
        height: "40",
        width: Ti.UI.FILL,
        id: "__alloyId1"
    });
    $.__views.__alloyId0.add($.__views.__alloyId1);
    $.__views.__alloyId2 = Ti.UI.createTextField({
        hintText: "clave",
        passwordMask: "true",
        height: "40",
        width: Ti.UI.FILL,
        id: "__alloyId2"
    });
    $.__views.__alloyId0.add($.__views.__alloyId2);
    $.__views.__alloyId3 = Ti.UI.createButton({
        title: "ingresar",
        height: "40",
        width: Ti.UI.FILL,
        id: "__alloyId3"
    });
    $.__views.__alloyId0.add($.__views.__alloyId3);
    exports.destroy = function() {};
    _.extend($, $.__views);
    inicializarVista();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;