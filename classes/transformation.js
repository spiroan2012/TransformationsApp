class Transformation{//Transformation base class
    static #transformation_id;//Id used to track the changes of the rows on transformation table
    #cur_transformation_id;
    #transformed_shapes;//The transforemed shape
    #transformation_color;//The color of the shape of the specific transformation
    #is_deleted;//Boolean field that stores whether the transformation has been deleted(It is usefull when the user deletes a transformation and resizes the window before he submits the transformations)

    constructor(){//We do not create instances of the transformation. We create instances of the three subclasses(translation, rotation and scale). This class is a type of abstract class 
        this.#transformed_shapes = [];
        this.#cur_transformation_id = Transformation.#transformation_id;
        Transformation.#transformation_id++;
        this.#is_deleted = false;
    }

    set transformationColor(color){
        this.#transformation_color = color;
    }

    set transformationId(id){
        this.#cur_transformation_id = id;
    }

    getLegthOfTransformedShapes(){//Returns the number of shapes that are transformed with the transformation
        return this.#transformed_shapes.length;
    }

    deleteTransformedShape(basic_shape_id){//Deletes the shape specified by the index given as parameter
        for(var i = 0; i < this.#transformed_shapes.length; i++){
            if(this.#transformed_shapes[i].shapeId == basic_shape_id){
                this.#transformed_shapes.splice(i, 1);
            }
        }
    }

    deleteAllTransformedShapes(){//Deletes the array that stored the transformed shapes for the transformation
        this.#transformed_shapes = [];
    }

    softDelete(){
        this.#is_deleted = true;
    }

    get isDeleted(){
        return this.#is_deleted;
    }

    static initialiseTransformationId(){//Initialises the static transformation_id for the transformation. Called on the page loading
        Transformation.#transformation_id = 0;
    }

    get transformationId(){
        return this.#cur_transformation_id;
    }

    get transformedShapes(){
        return this.#transformed_shapes;
    }

    getSpecificTransformedShape(index){
        return this.#transformed_shapes[index];
    }

    get transformationColor(){
        return this.#transformation_color;
    }

    //Changes the colors of all transformed shapes according to the new transformation color
    changeColorForAllTransformedShapes(){
        for(var i = 0; i < this.#transformed_shapes.length; i++){
            this.#transformed_shapes[i].color = this.#transformation_color;
        }
    }

    addTransformedShape(shape ,edges){//Called from the subclasses. The method creates a new shape and initializes the transformed shape 
        if(shape instanceof Circle){//Depending on the type of the shape, a new shape is created 
            this.#transformed_shapes.push(new Circle(shape.center, shape.radius,edges, shape.shapeId, shape.lineWidth, shape.isClosed, shape.string, this.#transformation_color));
        }
        else{
            this.#transformed_shapes.push(new Polygon(edges, shape.shapeId, shape.lineWidth, shape.isClosed, shape.string, this.#transformation_color));
        }
    }

    drawTransformedShapes(){//Calls the draw method of the polygon class for all the transformed shapes of the transformation(transformed shapes array/list)
         for(var shape of this.#transformed_shapes){
             shape.draw();
         }
    }

}