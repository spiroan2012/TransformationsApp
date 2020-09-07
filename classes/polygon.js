class Polygon{
    static #shape_id;
    #cur_shape_id;
    #points;
    #lineWidth;
    #isClosed;
    #string;
    #color;
    #transformations_strings;

    constructor(points, base_shape_id, lineWidth, isClosed, string, color){
        this.#points = points;//Points of the polygon
        this.#lineWidth = lineWidth;
        this.#isClosed = isClosed;//Boolean property which indicates wether the polygon is closed or not
        this.#string = string;
        this.#color = color;
        this.#transformations_strings = new Map();
        if(base_shape_id == null){
            this.#cur_shape_id = Polygon.#shape_id;
            Polygon.#shape_id++;
        }
        else{
            this.#cur_shape_id = base_shape_id; 
        }
    }
    static initialiseShapeId(){
       Polygon.#shape_id = 0;
    }

    get shapeId(){
        return this.#cur_shape_id;
    }

    get points()
    {
        return this.#points;
    }

    get lineWidth(){
        return this.#lineWidth;
    }

    get isClosed(){
        return this.#isClosed;
    }

    get string(){
        return this.#string;
    }

    get color(){
        return this.#color;
    }

    set color(new_color){
        this.#color = new_color;
    }
    
    addTransformationStringAndColorToShape(transformation_string, transformation_color){
        this.#transformations_strings.set(transformation_string, transformation_color);
    }

    getTransformationsStringAndColor(){
        return this.#transformations_strings;
    }

    draw(){
        transformCoords();
        ctx.beginPath();
        ctx.moveTo(this.#points[0].x, this.#points[0].y);
        for(var i = 1; i < this.#points.length; i++){
            ctx.lineTo(this.#points[i].x, this.#points[i].y);
        }
        if(this.#isClosed){//If the shape is a closed polygon a line is drawn from the last to the first point
            ctx.lineTo(this.#points[0].x, this.#points[0].y);
        }
        ctx.restore();
        ctx.strokeStyle = this.#color;
        var line = ctx.lineWidth;
        ctx.lineWidth = this.#lineWidth;
        ctx.stroke();
        ctx.lineWidth = line;
        ctx.strokeStyle = '#000000';
    }

    isWithinShape(mouseX, mouseY){
        var mouseX_units = (mouseX - margin.left) / sx + draw_x_min;
        var mouseY_units = (mouseY + margin.bottom - canvas_y) / sy + draw_y_min;
        console.log();
        console.log();
        console.log("Mouse_x: "+mouseX_units+", Mouse_y: "+mouseY_units);
        console.log(this.#points);
        console.log();
        console.log();
        var j = this.#points.length - 1;
        var oddNodes = false;
        for(var i = 0; i < this.#points.length; i++){
            if(this.#points[i].y < mouseY_units && this.#points[j].y >= mouseY_units || this.#points[j].y < mouseY_units && this.#points[i].y >= mouseY_units){
                if(this.#points[i].x + (mouseY_units - this.#points[i].y) / (this.#points[j].y - this.#points[i].y) * (this.#points[j].x - this.#points[i].x) < mouseX_units){
                    oddNodes = !oddNodes;
                }
            }
            j = i;
        }
        return oddNodes;
    }
    
    //The following methods are used by the change boundaries method to find the min and max coordinates of the polygon and change the boundaries of the canvas. 
    findMinX(){
        var ar = [];
        for(var j = 0; j < this.#points.length; j++){
            ar.push(this.#points[j].x);
        }
        return ShapesDrawing.findMin(ar);
    }
    
    findMinY(){
        var ar = [];
        for(var j = 0; j < this.#points.length; j++){
            ar.push(this.#points[j].y);
        }
        return ShapesDrawing.findMin(ar);
    }

    findMaxX(){
        var ar = [];
        for(var j = 0; j < this.#points.length; j++){
            ar.push(this.#points[j].x);
        }
        return ShapesDrawing.findMax(ar);
    }

    findMaxY(){
        var ar = [];
        for(var j = 0; j < this.#points.length; j++){
            ar.push(this.#points[j].y);
            ar.push(this.#points[j].y);
        }
        return ShapesDrawing.findMax(ar); 
    }

    isCurved(){
        return false;
    }

    toString(){
        var text = "";
        for(var key in this.#string){
            if(key != "type"){
                text += this.#string[key]+"<br>";
            } 
        }
        return text;
    }

    static createPointsForPolygon(elements, type){
        var points = [];
        if(type == "triangle"){
            points.push({x: elements["fxcor"], y: elements["fycor"]});
            points.push({x: elements["sxcor"], y: elements["sycor"]});
            points.push({x: elements["txcor"], y: elements["tycor"]});
        }
        else if(type == "square"){
            points.push({x: elements["xcor"], y: elements["ycor"]});
            points.push({x: elements["xcor"], y: elements["ycor"] + elements["width"]});
            points.push({x: elements["xcor"] + elements["width"], y: elements["ycor"] + elements["width"]});
            points.push({x: elements["xcor"] + elements["width"], y: elements["ycor"]});
        }
        else if(type == "rectangle"){
            points.push({x: elements["xcor"], y: elements["ycor"]});
            points.push({x: elements["xcor"], y: elements["ycor"] + elements["height"]});
            points.push({x: elements["xcor"] + elements["width"], y: elements["ycor"] + elements["height"]});
            points.push({x: elements["xcor"] + elements["width"], y: elements["ycor"]});
        }
        return points;
    }
}