class Rotation extends Transformation{
    #degrees;

    constructor(degrees){
        super();
        this.#degrees = parseFloat(degrees);
    }

    get degrees(){
        return this.#degrees;
    }

    applyToShape(shape){
        var edges = [];
        for(var i = 0; i < shape.points.length; i++){
            var x_edge = shape.points[i].x * Math.cos(this.#degrees * Math.PI / 180) - shape.points[i].y * Math.sin(this.#degrees * Math.PI / 180);//Convert degrees to radians
            var y_edge = shape.points[i].x * Math.sin(this.#degrees * Math.PI / 180) + shape.points[i].y * Math.cos(this.#degrees * Math.PI / 180);
            var edge = {x: x_edge, y: y_edge};
            edges.push(edge);
        }
        this.addTransformedShape(shape, edges);
    }

    toString(){
        return "R("+this.#degrees+"°)";
    }
}