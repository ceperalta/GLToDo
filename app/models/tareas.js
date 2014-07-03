exports.definition = {
	config: {
		columns: {
			"alloy_id":"intenger",
		    "texto": "text"
		},
		adapter: {
			type: "sql",
			collection_name: "tareas"
		}
	},
	extendModel: function(Model) {
		_.extend(Model.prototype, {
			// extended functions and properties go here
		});

		return Model;
	},
	extendCollection: function(Collection) {
		_.extend(Collection.prototype, {
			// extended functions and properties go here
		});

		return Collection;
	}
};