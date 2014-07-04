exports.definition = {
    config: {
        columns: {
            alloy_id: "INTEGER",
            texto: "TEXT",
            prioridad: "INTEGER",
            estado: "TEXT",
            usuario: "TEXT"
        },
        adapter: {
            type: "sql",
            collection_name: "tareas"
        }
    },
    extendModel: function(Model) {
        _.extend(Model.prototype, {});
        return Model;
    },
    extendCollection: function(Collection) {
        _.extend(Collection.prototype, {});
        return Collection;
    }
};

var Alloy = require("alloy"), _ = require("alloy/underscore")._, model, collection;

model = Alloy.M("tareas", exports.definition, []);

collection = Alloy.C("tareas", exports.definition, model);

exports.Model = model;

exports.Collection = collection;