$('#myCanvas').mousemove(function(e){//User hovers over camvas
    handleMouseMove(e);
});


function handleMouseMove(e){
    e.preventDefault();
    e.stopPropagation();
    redraw();//Draws the shapes again
    ctx.font = "bold 12px Georgia";
    var mouseX = parseInt(e.clientX - offsetX);//Gets x coordinate of cursor position
    var mouseY = parseInt(e.clientY - offsetY) +  $(window).scrollTop();//Gets y coordinate of cursor position
    var currentYPosition = mouseY;
    if(transformation_draw_mode != 1){
        for(var i = 0; i < ShapesDrawing.shapes.length; i++){
            if(ShapesDrawing.getSpecificShape(i).isWithinShape(mouseX, currentYPosition)){
                var array = ShapesDrawing.getSpecificShape(i).string;
                mouseY = basicShapeInfo(array, mouseX, mouseY);
            }
            mouseY += 24;
        }
    }
    var transformations = ShapesDrawing.transformations;
    if(transformation_draw_mode == 0 || transformation_draw_mode == 1){
        mouseY = informationForTransformedShapes(transformations[transformations.length - 1], transformations.length - 1, mouseX, mouseY,currentYPosition);
    }
    else{
        for(var i = 0; i < transformations.length; i++){
            mouseY = informationForTransformedShapes(transformations[i], i, mouseX, mouseY,currentYPosition);
        }
    }
}

function basicShapeInfo(basic_shape_info, positionX, mouseY){
    var initialMouseX = positionX;
    var currentPropertyIndex = 0;
    var basic_shape_info_count = 0;
    for(var property in basic_shape_info){
        if(property == "type"){
            ctx.fillText(basic_shape_info[property]+": ", positionX, mouseY);
            if(basic_shape_info[property] == "Τρίγωνο" || basic_shape_info[property] == "Κύκλος"){
                positionX += 60;
            }
            else if(basic_shape_info[property] == "Τετράγωνο" || basic_shape_info[property] == "Ορθογώνιο" || basic_shape_info[property] == "Πολύγωνο"){
                positionX += 80;
            }
            var type = basic_shape_info[property];
            basic_shape_info_count++;
        }
        else{
            if(basic_shape_info_count == basic_shape_info.length - 1){  
                ctx.fillText(basic_shape_info[property]+", ", positionX, mouseY);
            }
            else{
                ctx.fillText(basic_shape_info[property], positionX, mouseY);
            }
            if(type == "Τρίγωνο"){  
                positionX += 80;
            }
            else if(type == "Τετράγωνο"){
                positionX += 200;   
            }
            else if(type == "Ορθογώνιο"){
                positionX += 220;
            }
            else if(type == "Κύκλος"){
                positionX += 110;
            }
            else{
                currentPropertyIndex++;
                if(currentPropertyIndex % 4 == 0){
                    positionX = initialMouseX + 80;
                    mouseY += 24;
                }
                else{
                    positionX += 80;
                }
            }
        }
        
   }
   return mouseY;
}

/*
    Parameters:
        transformation: The transformation whose shape will be checked
        transformation_index: The index of the transformation on the transformation list
        mouseX: The x-coordinate of the position of the cursor
        mouseY: The y-coordinate of the position of the last drawed text
        currentPosition: The y-coordinate of the position of the cursor
*/
function informationForTransformedShapes(transformation, transformation_index, mouseX, mouseY,currentYPosition){
    
    var transformed_shapes = transformation.transformedShapes;
    for(var j = 0; j < transformed_shapes.length; j++){
        if(transformed_shapes[j].isWithinShape(mouseX, currentYPosition)){
            ctx.font = "bold 12px Georgia";
            var basic_shape_array_string = transformed_shapes[j].string;
            mouseY = basicShapeInfo(basic_shape_array_string, mouseX, mouseY);
            mouseY += 24;
            ctx.font = "12px Georgia";
            ctx.fillText("Μετασχηματισμοί: ", mouseX, mouseY);
            mouseY += 24;
            var array = ShapesDrawing.getInformationForTransformedShapes()[j][transformation_index].transformation_info.split("<br>");
            array.pop();  // Remove superfluous last element
            var info = array.join(",  ");
            ctx.fillText(info, mouseX, mouseY);
            
            mouseY += 24;
        }
    }
    return mouseY;
}
