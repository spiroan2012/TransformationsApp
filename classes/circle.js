class Circle extends Polygon{
    #center;
    #radius;

    constructor(center, radius, points, isTransformed, lineWidth, closePoint, string, color){
        super(points, isTransformed, lineWidth, closePoint, string, color);
        this.#center = center;
        this.#radius = radius;
    }

    draw(){
        transformCoords();
        ctx.beginPath();
        ctx.moveTo(this.points[0].x, this.points[0].y);
        for(var i = 1; i < this.points.length; ++i){
            if(i <= this.points.length - 3){
                ctx.bezierCurveTo(this.points[i].x, this.points[i].y, this.points[++i].x, this.points[i].y, this.points[++i].x, this.points[i].y);		
            }
            else{
                ctx.bezierCurveTo(this.points[i].x, this.points[i].y, this.points[++i].x, this.points[i].y, this.points[0].x, this.points[0].y);
            }
        }	
        ctx.restore();
        ctx.strokeStyle = this.color;
        var line = ctx.lineWidth;
        ctx.lineWidth = this.lineWidth;
        ctx.stroke();
        ctx.lineWidth = line;
        ctx.strokeStyle = '#000000';
    }

    isCurved(){
        return true;
    }

    // //Overide the isWithinshape method for circle
    // isWithinShape(mouseX, mouseY){
    //   // In this case, it is easier to convert mouse coordinates to drawing units
    //   var mouseX_units = (mouseX - margin.left) / sx + draw_x_min;
    //   var mouseY_units = (mouseY + margin.bottom - canvas_y) / sy + draw_y_min;
      
    //   var d = Math.sqrt(Math.pow(mouseX_units - this.#center.x, 2) + Math.pow(mouseY_units - this.#center.y, 2));
      
    //   return d < this.#radius;
    // }

    static createPointsForCircle(elements){
        var cxcor = elements["xcor"];
        var cycor = elements["ycor"];
        var radius = elements["radius"];
        var w = radius * 2;
        var h = w;
        var cx = cxcor - w / 2.0;
        var cy = cycor - h / 2.0;
        var kappa = .5522848,
                    ox = (w / 2) * kappa,
                    oy = (h / 2) * kappa,
                    xe = cx + w,
                    ye = cy + h,
                    xm = cx + w / 2,
                    ym = cy + h / 2;
        var points = [];
        points.push({x:cx, y:ym});
        points.push({x:cx, y:ym - oy});
        points.push({x:xm - ox, y:cy});
        points.push({x:xm, y:cy});
        points.push({x:xm + ox, y:cy});
        points.push({x:xe, y:ym - oy});
        points.push({x:xe, y:ym});
        points.push({x:xe , y:ym + oy});
        points.push({x:xm + ox, y:ye});
        points.push({x:xm, y:ye});
        points.push({x:xm - ox, y:ye});
        points.push({x:cx, y:ym + oy});
        return points;
    }
}
