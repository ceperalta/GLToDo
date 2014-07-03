
 
exports.tomarTodasLasTareas = function() {
 
 	Alloy.Collections.tareas.fetch();
 	
 	return Alloy.Collections.tareas;
 
  	/*
	var tareasCollection = Alloy.Collections.tareas;

    var tareaModel = Alloy.createModel('Tareas', {
        texto : "carne"
    });

    // add new model to the global collection
    tareasCollection.add(tareaModel);

    // save the model to persistent storage
    tareaModel.save();
    
    // reload the tasks
    tareasCollection.fetch();
	
	
 	console.warn("tamaño coll: " + tareasCollection.length);
 
      for(var i=0; i<tareasCollection.length;i++)
           console.warn(tareasCollection.at(i).get("alloy_id") + tareasCollection.at(i).get("texto"));
	*/ 
  	
};