function eraseCanvas(){
    ctx.clearRect(0, 0, canvas_x, canvas_y);
    draw_x_min = 0;
    draw_y_min = 0;
    draw_x_max = 40;
    draw_y_max = 20;
    draw_min = null;
    draw_max = null;
    transformCoords();
    drawAxes();
    ShapesDrawing.clearData();//Clears the static arrays for drawn shapes and transformations at the ShapesDrawing class
    deleteDrawnShapesTable();//Resets the html table for drawn shapes
    deleteTransformationTable();//Resets the html table for transformations
}

function transformCoords(){//Transofrms the coords from default to Cartesian coordinate system
    ctx.save();
    sx = canvas_x / (draw_x_max - draw_x_min);
    sy = canvas_y / (draw_y_min - draw_y_max);
    var center_x = -draw_x_min * sx + margin.left;
    var center_y = -draw_y_max * sy - margin.bottom;
    ctx.translate(center_x, center_y);
    ctx.scale(sx, sy);
}

function drawAxes(){//Function that draws the axis
    var col = ctx.fillStyle;
    //ctx.strokeStyle = "black";
    var tmp = ctx.lineWidth;
    ctx.beginPath();
    //x axis   	
    ctx.moveTo(draw_x_min, 0);
    ctx.lineTo(draw_x_max, 0);
    //y axis 
    ctx.moveTo(0, draw_y_min);
    ctx.lineTo(0, draw_y_max);
    //addlabels();
    ctx.restore();
    ctx.lineWidth = 1;
    ctx.fillStyle = "#737373";
    ctx.stroke();
    ctx.lineWidth = tmp;
    ctx.fillStyle = col;
    addLabels();
}

function addLabels(){
    ctx.font = "10pt sans-serif";
    var col = ctx.fillStyle;
    ctx.fillStyle = "#737373";
    //x-axis labels
    // draw_x_min = Math.round(draw_x_min);
    // draw_x_max = Math.round(draw_x_max);
    // draw_y_min = Math.round(draw_y_min);
    // draw_y_max = Math.round(draw_y_max);
    xLabels();
    yLabels();
    ctx.fillStyle = col;
}

function xLabels(){
    for(var i = draw_x_min; i < draw_x_max; i++){
        if(i != draw_x_max - 1){//It does not draw the last label so that it won't be cut
            var x = Math.round(i * sx - draw_x_min * sx + margin.left);
            //var y = Math.round((canvas_y - 5) - draw_y_min * sy);
            var y = Math.round((canvas_y -5) - draw_y_min * sy);
            ctx.textAlign = "center";
            ctx.fillText(" "+i, x, y);
            y -= margin.bottom;
            ctx.fillText("|", x, y);
        }
    }
}

function yLabels(){
    for(var i = draw_y_min; i < draw_y_max; i++){
        if(i != draw_y_max - 1){
            var x = 1 - draw_x_min * sx;
            //var y = canvas_y - i * (-sy) - draw_y_min * sy - margin.bottom + 5;
            var y = canvas_y - i * (-sy) - draw_y_min * sy - margin.bottom + 5;
            ctx.textAlign = "left";
            ctx.fillText(" "+i, x, y);
            x += margin.left;
            ctx.fillText("-", x, y);
        }
    }
}

function setCanvasSize(){
    var w = $("#paint").width() - 100;//Canvas size according to parent div width
    canvas.width = w;
    canvas.height = w/2;
    canvas_x = w;
    canvas_y = w/2
}