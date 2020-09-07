class ShapesDrawing{//Static class that deals with functionality about the shapes and transformations
    static #shape_list = [];//Stores the list of drawn shapes
    static #transformation_list = [];//Stores the list of transformations
    static #colorList = [];//Stores the list of colors (30 random colors)
    static #color_id;


    static clearData(){
        ShapesDrawing.#shape_list = [];
        ShapesDrawing.#transformation_list = [];
        ShapesDrawing.#color_id = 0;
    }
    
    static initialiseColorList(){//Method called on page load. It inisizlises an array of 30 colors for transformations. This array will be used by the transformations to determine the color of the transformations
        var letters = '0123456789abcdef';   
        for(var i = 0; i < 30; i++){
            var color = '#';
            for(var z = 0; z < 6; z++){
                color += letters[Math.floor(Math.random() * 16)];
            }
            ShapesDrawing.#colorList.push(color);
        }
        ShapesDrawing.#color_id = 0;
    }

    static resetTransformedShapes(){//Method that For every transformation deletes the transformed shapes
        for(var i = 0; i < ShapesDrawing.#transformation_list.length; i++){
            ShapesDrawing.#transformation_list[i].deleteAllTransformedShapes();
        }
    }

    static deleteSpecificShapeAndTransformationsForShape(shapeId){//Method that deletes a specific shape from drawn shapes array as well as from transformed shapes
        for(var i = 0 ; i < ShapesDrawing.#shape_list.length; i++){//Delete from basic shapes
            if(ShapesDrawing.#shape_list[i].shapeId == shapeId){   
                ShapesDrawing.#shape_list.splice(i, 1);
            }
        }
        for(var i = 0; i < ShapesDrawing.#transformation_list.length; i++){//Delete from transformed shapes
            ShapesDrawing.#transformation_list[i].deleteTransformedShape(shapeId);
        }
    }

    static applyTransformationsToShape(shape){
        var previous_transformed_shape = null;
        for(var i = 0; i < ShapesDrawing.#transformation_list.length; i++){//For all transformation
            if(i == 0){//If we traverse through the first transformation inserted by the user, then we transform the user created shape
                ShapesDrawing.#transformation_list[0].applyToShape(shape);
                previous_transformed_shape = ShapesDrawing.#transformation_list[0].getSpecificTransformedShape(ShapesDrawing.#transformation_list[0].transformedShapes.length - 1);//We store the newly create transformed shape so it can be used by the next transformation
            }
            else{//If we don't traverse through the first transformation inserted by the user, then we transform the last transformed shape of the previous transformation
            ShapesDrawing.#transformation_list[i].applyToShape(previous_transformed_shape);
                previous_transformed_shape = ShapesDrawing.#transformation_list[i].getSpecificTransformedShape(ShapesDrawing.#transformation_list[i].transformedShapes.length - 1);
            }
        }
    }

    //Method that returns information for all transformed shapes
    static getInformationForTransformedShapes(){
        var information_per_shape = [];
        if(ShapesDrawing.#transformation_list.length != 0){
            var transformed_shapes_index = 0;
            var transformed_shapes_array_size = ShapesDrawing.#transformation_list[0].getLegthOfTransformedShapes();
            while(transformed_shapes_index < transformed_shapes_array_size){
                var information_array = [];
                var transformation_information = "";
                for(var transformation of ShapesDrawing.#transformation_list){
                    var base_shape = transformation.getSpecificTransformedShape(transformed_shapes_index);
                    transformation_information += transformation.toString()+"<br>";
                    information_array.push({basic_shape: base_shape, transformation_info: transformation_information, color: transformation.transformationColor});
                } 
                information_per_shape.push(information_array);
                transformed_shapes_index++;
            }
            return information_per_shape;
        }
        return information_per_shape;
    }

    //Changes the transformation order at the list. It accepts the table with the transformation id's and their position
    static changeTransformationOrder(new_transformation_order){
        var new_transformation_array = [];//
        for(var i = 0; i < new_transformation_order.length; i++){
            var transformation_color = ShapesDrawing.#colorList[i];//Get the color of the transformation index 
            var transformation_index = ShapesDrawing.getTransformationIndexByTransformationId(new_transformation_order[i]);
            new_transformation_array.push(ShapesDrawing.#transformation_list[transformation_index]);
            new_transformation_array[i].transformationColor = transformation_color;
            new_transformation_array[i].changeColorForAllTransformedShapes();//Changes the colors of the transformation shapes to correnspond the new color of the transformation
        }
        ShapesDrawing.#transformation_list = new_transformation_array;
    }

    //Method shoub be private and called by changeTransformationOrder and deleteTransformation
    static getTransformationIndexByTransformationId(transformation_id){
        for(var i = 0; i < ShapesDrawing.#transformation_list.length; i++){
            if(ShapesDrawing.#transformation_list[i].transformationId == transformation_id){
                return i;
            }
        }
    }


    //Static method all soft deleted transformations
    static deleteAllSoftDeletedTransformations(){
        for(var i = 0; i < ShapesDrawing.#transformation_list.length; i++){
            if(ShapesDrawing.#transformation_list[i].isDeleted){
                ShapesDrawing.#transformation_list.splice(i, 1)
            }
        }
    }

    //Called when the user deletes a transformation or table
    static softDeleteTransformation(transformation_id){
        var transformation_index = ShapesDrawing.getTransformationIndexByTransformationId(transformation_id);//Finds the index of the transformation at the transformation list
        ShapesDrawing.#transformation_list[transformation_index].softDelete();
    }

    static drawTransformedShapes(){
        if(transformation_draw_mode == 0 || transformation_draw_mode == 1){//Draw only the last transformed shapes
            ShapesDrawing.#transformation_list[ShapesDrawing.#transformation_list.length - 1].drawTransformedShapes();
        }
        else{//Draw all transformed shapes
            for(var transformation of ShapesDrawing.#transformation_list){
                transformation.drawTransformedShapes();
            }
        }
    }

    static addTransformation(transformation){
        if(ShapesDrawing.#color_id > 30){
            ShapesDrawing.#color_id = 0;
        }
        transformation.transformationColor = ShapesDrawing.#colorList[ShapesDrawing.#color_id];
        ShapesDrawing.#transformation_list.push(transformation);
        ShapesDrawing.#color_id++;
    }

    static addShape(shape){
        ShapesDrawing.#shape_list.push(shape);
    }

    static get transformations(){
        return ShapesDrawing.#transformation_list;
    }

    static getSpecificTransformation(index){
        return ShapesDrawing.#transformation_list[index];
    }

    static get shapes(){
        return ShapesDrawing.#shape_list;
    }

    static getSpecificShape(index){
        return ShapesDrawing.#shape_list[index];
    }

    static drawAllShapes(){
        ShapesDrawing.#shape_list.forEach(function(shape){
            shape.draw();
        });
    }

    static getMinXForShapes(){
        var minx = [];
        ShapesDrawing.#shape_list.forEach(function(shape){
            minx.push(shape.findMinX());
        });
        ShapesDrawing.#transformation_list.forEach(function(transformation){
           for(var i = 0; i < transformation.getLegthOfTransformedShapes(); i++){
               minx.push(transformation.getSpecificTransformedShape(i).findMinX());
           }
        });
        return ShapesDrawing.findMin(minx);
    }

    static getMaxXForShapes(){
        var maxx = [];
        ShapesDrawing.#shape_list.forEach(function(shape){
            maxx.push(shape.findMaxX());
        });
        ShapesDrawing.#transformation_list.forEach(function(transformation){
            for(var i = 0; i < transformation.getLegthOfTransformedShapes(); i++){
                maxx.push(transformation.getSpecificTransformedShape(i).findMaxX());
            }
         });
        return ShapesDrawing.findMax(maxx);
    }

    static getMinYForShapes(){
        var miny = [];
        ShapesDrawing.#shape_list.forEach(function(shape){
            miny.push(shape.findMinY());
        });
        ShapesDrawing.#transformation_list.forEach(function(transformation){
            for(var i = 0; i < transformation.getLegthOfTransformedShapes(); i++){
                miny.push(transformation.getSpecificTransformedShape(i).findMinY());
            }
         });
        return ShapesDrawing.findMin(miny);
    }

    static getMaxYForShapes(){
        var maxy = [];
        ShapesDrawing.#shape_list.forEach(function(shape){
            maxy.push(shape.findMaxY());
        });
        ShapesDrawing.#transformation_list.forEach(function(transformation){
            for(var i = 0; i < transformation.getLegthOfTransformedShapes(); i++){
                maxy.push(transformation.getSpecificTransformedShape(i).findMaxY());
            }
         });
        return ShapesDrawing.findMax(maxy);
    }

    //Should be private
    static findMin(table){
        var min = table[0];
        for(var j = 0;j < table.length; j++){
            if(table[j] < min){
                min = table[j];
            }
        }
        return min;
    }

    //Should be private
    static findMax(table){
        var max = table[0];
        for(var j = 0;j < table.length; j++){
            if(table[j] > max){
                max = table[j];
            }
        }
        return max;
    }
}

