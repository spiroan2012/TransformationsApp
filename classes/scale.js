class Scale extends Transformation{
    #sx;
    #sy;

    constructor(sx, sy){
        super();
        this.#sx = parseFloat(sx);
        this.#sy = parseFloat(sy);
    }

    get sx(){
        return this.#sx;
    }

    get sy(){
        return this.#sy;
    }

    applyToShape(shape){
        var edges = [];
        for(var i = 0; i < shape.points.length; i++){
            var x_edge = parseFloat(shape.points[i]. x) * this.#sx;
            var y_edge = parseFloat(shape.points[i].y) * this.#sy;
            var edge = {x: x_edge, y: y_edge};
            edges.push(edge);
        }
        this.addTransformedShape(shape, edges);
    }

    toString(){
        return "S("+this.#sx+", "+this.#sy+")";
    }
}