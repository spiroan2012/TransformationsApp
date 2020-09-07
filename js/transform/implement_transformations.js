function implementTransformations(){
    var c = checkIfAtLeastOneShapeIsChosenForTransformation();
    if(c){
        var new_transformation_order = [];
        clearInformationTable();//Clears the table that displays information about the drawn shapes
        ShapesDrawing.resetTransformedShapes();//We delete the transformed shapes from from the transformation objects
        transformation_draw_mode = parseInt($("input[name='optradio']:checked").val());//Get the selected value for radio buttons
        ShapesDrawing.deleteAllSoftDeletedTransformations();//Deletes all the transformations that where soft deleted by the user
        $("#transTable .transformationId").each(function(){
            new_transformation_order.push($(this).html());
        });
        ShapesDrawing.changeTransformationOrder(new_transformation_order);//Changes the transformation order at the array
        $("#drawnShapesTable tr").each(function(){//For each of the drawn shape
            var shape_index = $(this).find('.rowID').html() - 1;//We get the shape index of the current shape 
            var chosen_shape = ShapesDrawing.getSpecificShape(shape_index);//Using the index we get the shape by calling the appropriate method
            var isChosen = $(this).find('input[type=checkbox]').is(':checked');//We store whether the table row (drawn shape) is selected or not
            if(isChosen){//If the drawn shape is selected for transformation we call the method from the static class to apply all inserted transformations to the shape
                ShapesDrawing.applyTransformationsToShape(chosen_shape);
            }
        });
        redraw();
        createInformationShapesTable();//We create the information table which contains information about the shape of the canvas
        frames[2].frame.show();
        frames[2].is_shown = true;
    }
    else{
        alert("Πρέπει να επιλέξετε ένα τουλάχιστον σχήμα για μετασχηματισμό");
    }
}

function checkIfAtLeastOneShapeIsChosenForTransformation(){//Checks whether at least one shape is chosen for transformation
    var has_chosen_shape = false; 
    $("#drawnShapesTable tr").each(function(){//For each of the drawn shape
        var isChosen = $(this).find('input[type=checkbox]').is(':checked');
        if(isChosen && !has_chosen_shape){
            has_chosen_shape = true;
        }
    });
    return has_chosen_shape;
}