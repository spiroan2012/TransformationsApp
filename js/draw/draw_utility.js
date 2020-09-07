function drawProcedure(newShape, kindOfShape){
    // if(kindOfShape != "circle"){
    //     newShape = new Polygon(edges, null, ctx.lineWidth, chk, sh, '#000000');
    // }
    // else{
    //     newShape = new Circle(edges, null,ctx.lineWidth, chk, sh, '#000000');
    // }
    ShapesDrawing.addShape(newShape);
    redraw();
    resetShapeForm(kindOfShape);
    addSpecificShapeToTable();
}

function redraw(){
    ctx.clearRect(0, 0, canvas_x, canvas_y);
    if(ShapesDrawing.shapes.length == 0){
        draw_x_min = 0, draw_x_max = 40;//Global variable that stores the minimum and maximum values of the coordinate
        draw_y_min = 0, draw_y_max = 20;
    }
    else{ 
        changeBoundaries();
        if(transformation_draw_mode != 1){   
            ShapesDrawing.drawAllShapes();
        }
    }
    
    ShapesDrawing.drawTransformedShapes();
    transformCoords();
    drawAxes();
    ctx.restore();
}

function changeBoundaries(){
    var min_x, min_y, max_x, max_y;
    var min_x = Math.round(ShapesDrawing.getMinXForShapes());
    var min_y = Math.round(ShapesDrawing.getMinYForShapes());
    var max_x = Math.round(ShapesDrawing.getMaxXForShapes());
    var max_y = Math.round(ShapesDrawing.getMaxYForShapes());
    if(draw_x_min > min_x){
        draw_x_min = min_x - 1;
        draw_y_min = draw_x_min / 2;
        draw_y_max = draw_x_max / 2;
    }
    else if(min_x < 0){
        draw_x_min = min_x - 1;
        draw_y_min = draw_x_min / 2;
        draw_y_max = draw_x_max / 2;
    }
    if(draw_x_max < max_x){
        draw_x_max = max_x + 1;
        draw_y_min = draw_x_min / 2;
        draw_y_max = draw_x_max / 2;
    }
    else if(max_x > 40){
        draw_x_max = max_x + 1;
        draw_y_min = draw_x_min / 2;
        draw_y_max = draw_x_max / 2;
    }
    if(draw_y_min > min_y){
        draw_y_min = min_y - 1;
        draw_x_min = draw_y_min * 2;
        draw_x_max = draw_y_max * 2;
    }
    else if(min_y < 0){
        draw_y_min = min_y - 1;
        draw_x_min = draw_y_min * 2;
        draw_x_max = draw_y_max * 2; 
    }
    if(draw_y_max < max_y){
        draw_y_max = max_y + 1;
        draw_x_min = draw_y_min * 2;
        draw_x_max = draw_y_max * 2;
    }
    else if(max_y > 20){
        draw_y_max = max_y + 1;
        draw_x_min = draw_y_min * 2;
        draw_x_max = draw_y_max * 2;
    }
    draw_x_min = Math.ceil(draw_x_min);
    draw_x_max = Math.ceil(draw_x_max);
    draw_y_min = Math.ceil(draw_y_min);
    draw_y_max = Math.ceil(draw_y_max);
}