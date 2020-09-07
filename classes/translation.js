class Translation extends Transformation{
    #horizontal;//Horizontal 
    #vertical;

    constructor(horizontal, vertical){
        super();
        this.#horizontal = parseFloat(horizontal);
        this.#vertical = parseFloat(vertical);
    }

    get horizontal(){
        return this.#horizontal;
    }

    get vertical(){
        return this.#vertical;
    }

    applyToShape(shape){//This method calculates the points of the transformed shape and then it sets the transformed_shape field
        var edges = [];
        for(var i = 0; i < shape.points.length; i++){
            var x_edge = parseFloat(shape.points[i].x) + this.#horizontal;
            var y_edge = parseFloat(shape.points[i].y) + this.#vertical;
            var edge = {x: x_edge, y: y_edge};
            edges.push(edge)
        }
        this.addTransformedShape(shape, edges);
    }

    toString(){
        return "T("+this.#horizontal+", "+this.#vertical+")";
    }
}