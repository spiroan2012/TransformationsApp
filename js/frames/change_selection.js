
function changeShapeSelection(){//Function called when the user changes the select option for shape selection
    var framePosition = frames[0].getPosition();
    var frameWidth = frames[0].getSize().width;//Stores the position and width of the old frame
    var selectedShapeIndex = $("#shape_selection").prop('selectedIndex');
    var selectedTransformationIndex = $("#transformation_selection").prop('selectedIndex');
    var selected_line_width = $("#width_selection").prop('selectedIndex');
    frames[0].closeFrame();//Closes the frame
    /*Based on the selection of the user a new frame is created and the appropriate form is displayed, so that the user is able to draw the desired shape. 
    The position of the new frame is determined by the position of the old frame minus the width of the old frame minus the width of the new frame.
    Ex: Let's say that the old selected shape is a triangle. Suppose that the user selects a polygon as the new shape. The position of the new frame will be:
        position of the old frame - 490(the width of the frame with the polygon form displayed) - 350 (the width of the frame with the triangle form displayed) = 140
    Ex2: Let's say that the old selected shape is a triangle. Suppose that the user selects a square as the new shape. The position of the new frame will be:
        position of the old frame - 350(the width of the frame with the polygon form displayed) - 350 (the width of the frame with the triangle form displayed) = 0
    This procedure is followed so that the right portion of the frame is always located at the same position regardless the width of the frame*/
    if(selectedShapeIndex == 0){
        frames[0] = createFrame({left: framePosition.x - (300 - frameWidth), top: framePosition.y}, "Πίνακας Ελέγχου", html_main_frame, 300, 490);
        createTriangleDiv();//The appropriate shape div is appended to the frame. In this case the user has selected the triangle shape, so the triangle div is appended. 
    }
    else if(selectedShapeIndex == 1){
        frames[0] = createFrame({left: framePosition.x - (300 - frameWidth), top: framePosition.y}, "Πίνακας Ελέγχου", html_main_frame, 300, 480);
        createSquareDiv();
    }
    else if(selectedShapeIndex == 2){
        frames[0] = createFrame({left: framePosition.x - (300 - frameWidth), top: framePosition.y}, "Πίνακας Ελέγχου", html_main_frame, 300, 570);
        createRectangleDiv();
    }
    else if(selectedShapeIndex == 3){
        frames[0] = createFrame({left: framePosition.x - (300 - frameWidth), top: framePosition.y}, "Πίνακας Ελέγχου", html_main_frame, 300, 450);
        createCircleDiv();
    }
    // else if(selectedShapeIndex == 4){
    //     frames[0] = createFrame({left: framePosition.x - (490 - frameWidth), top: framePosition.y}, "Πίνακας Ελέγχου", html_main_frame, 300, 580);
    //     createParDiv();
    // }
    else{
        frames[0] = createFrame({left: framePosition.x - (300 - frameWidth), top: framePosition.y}, "Πίνακας Ελέγχου", html_main_frame, 300, 640);
        createPolygonDiv();
        createPolygonInitialPoints();
        if(number_of_polygon_points > 4){
            $('#rem_f').attr("disabled", false);
            $('#respol').attr("disabled", false);//Disable reset form button 
        }
    }
    $("#shape_selection").prop('selectedIndex', selectedShapeIndex);//The shape selection of the new frame is changed according to the selection of the user
    $("#transformation_selection").prop('selectedIndex', selectedTransformationIndex);
    $("#width_selection").prop('selectedIndex', selected_line_width);
    createTransformationDivAccordingToSelection(selectedTransformationIndex);
    $("#collapse1").addClass("in");
    frames[0].show();
}

//Funtion called when the user changes the select option for the shape line width selection
function changeLineWidthSelection(){
    var selected_shape_width_index = $("#width_selection").prop('selectedIndex');//Stores the electio of the user
    //Based on the selection of the user, the width of the shape is changed accordingly
    if(selected_shape_width_index == 0){//Small size
        ctx.lineWidth = 2;
        lineW = 2;
    }
    else if(selected_shape_width_index == 1){//Medium size 
        ctx.lineWidth = 5;
        lineW = 5;
    }
    else if(selected_shape_width_index == 2){//Large size
        ctx.lineWidth = 10;
        lineW = 10;
    }
    else{//Huge size
        ctx.lineWidth = 15;
        lineW = 15;
    }
    $("#width_selection").prop('selectedIndex', selected_shape_width_index);
}
    
function changeTransformationSelection(){
    var selectedIndex = $("#transformation_selection").prop('selectedIndex');
    createTransformationDivAccordingToSelection(selectedIndex);
}

function createTransformationDivAccordingToSelection(selectedIndex){
    if(selectedIndex == 0){
        createTransportationDiv();//The appropriate shape div is appended to the frame. In this case the user has selected the triangle shape, so the triangle div is appended. 
    }
    else if(selectedIndex == 1){
        createRotationDiv();
    }
    else if(selectedIndex == 2){
        createScaleDiv();
    }
}