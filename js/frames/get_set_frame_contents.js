function createNewFrame(chosen_shape_frame_data, chosen_transformation, info_frame_is_shown){
    var w = window.innerWidth - 28;
    if(chosen_shape_frame_data.chosen_shape == "tr"){
        frames[0] = createFrame({left: w - 300, top: 65}, "Πίνακας Ελέγχου", html_main_frame, 300, 490);//The new frame is located at the end of the canvas
        createTriangleDiv();//The appropriate shape div is appended to the frame. In this case the user has selected the triangle shape, so the triangle div is appended. 
    }
    else if(chosen_shape_frame_data.chosen_shape == "sq"){
        frames[0] = createFrame({left: w - 300, top: 65}, "Πίνακας Ελέγχου", html_main_frame, 300, 480);//The new frame is located at the end of the canvas
        createSquareDiv();
    }
    else if(chosen_shape_frame_data.chosen_shape == "rec"){
        frames[0] = createFrame({left: w - 300, top: 65}, "Πίνακας Ελέγχου", html_main_frame, 300, 570);//The new frame is located at the end of the canvas
        createRectangleDiv();
    }
    // else if(chosen_shape_frame_data.chosen_shape == "para"){
    //     frames[0] = createFrame({left: w - 490, top: 65}, "Πίνακας Ελέγχου", html_main_frame, 490, 580);//The new frame is located at the end of the canvas
    //     createParDiv();
    // }
    else if(chosen_shape_frame_data.chosen_shape == "cir"){
        frames[0] = createFrame({left: w - 300, top: 65}, "Πίνακας Ελέγχου", html_main_frame, 300, 450);//The new frame is located at the end of the canvas
        createCircleDiv();
    }
    else{
        frames[0] = createFrame({left: w - 300, top: 65}, "Πίνακας Ελέγχου", html_main_frame, 300, 640);//The new frame is located at the end of the canvas
        createPolygonDiv();
        createPolygonInitialPoints();
        if(number_of_polygon_points > 4){
            $('#rem_f').attr("disabled", false);
            $('#respol').attr("disabled", false);//Disable reset form button 
        }
    }
    createTransformationDiv(chosen_transformation);//The transformation div is recreated 
    $("#shape_selection").val(chosen_shape_frame_data.chosen_shape);//The chosen shape is changed to match the selection of the old frame
    $("#width_selection").prop('selectedIndex', chosen_shape_frame_data.lineWidth);
    changeLineWidthSelection();
    frames[1] = createFrame({left: w - 550, top: 65}, "Μετασχηματισμοί", html_transformation_div, 250, 620);//Create the second frame
    setAndDisplayTransformationsTableForAllTransformations();//Set contents of the two tables
    addAllShapesToTable();
    if(transformation_draw_mode == 0){//Change the selection of the radio button according to the user selection
        $('#radio1').prop('checked', true);
    }
    else if(transformation_draw_mode == 1){
        $('#radio2').prop('checked', true);
    }
    else{
        $('#radio3').prop('checked', true);
    }
    frames[2] = {frame:  createFrame({left: w - 800, top: 65}, "Σχήματα", html_information_frame, 250, 550), is_shown: info_frame_is_shown};//Create the third frame
    createInformationShapesTable();
}

function createTransformationDiv(chosen_transformation){
    if(chosen_transformation == "transport"){
        createTransportationDiv();
    }
    else if(chosen_transformation == "rotate"){
        createRotationDiv();
    }
    else{
        createScaleDiv();
    }
    $('#transformation_selection').val(chosen_transformation);
}

function getShapeFrameContents(shape_chosen){//Function that stores the values of the text fields of the active draw shape frame
    if(shape_chosen == "tr"){
        return {fxcor: $('#fxcor').val(), fycor: $('#fycor').val(), sxcor: $('#sxcor').val(), sycor: $('#sycor').val(), txcor: $('#txcor').val(), tycor: $('#tycor').val()};
    }
    else if(shape_chosen == "sq"){
        return {xcor: $('#xcor').val(), ycor: $('#ycor').val(), width: $('#width').val()};
    }
    else if(shape_chosen == "rec"){
        return {rxcor: $('#rxcor').val(), rycor: $('#rycor').val(), rwidth: $('#rwidth').val(), rheight: $('#rheight').val()};
    }
    else if(shape_chosen == "para"){
        return {pxcor: $('#pxcor').val(), pycor: $('#pycor').val(), pwidth: $('#pwidth').val(), pheight: $('#pheight').val(), log: $('#log').val()};
    }
    else if(shape_chosen == "cir"){
        return {cxcor: $('#cxcor').val(), cycor: $('#cycor').val(), radius: $('#radius').val()};
    }
    else if(shape_chosen == "polyg"){
        var polygon_points = [];
        for(var i = 0; i < number_of_polygon_points; i++){
            polygon_points.push({x: $('#x'+(i+1)).val(), y: $('#y'+(i+1)).val()});
        }
        return {points: polygon_points, closed:  $("#chko").is(':checked')};
    }
}


function setShapeFrameContents(shape_chosen ,chosen_shape_data){//Function that sets the values of the text fields of the newly created active draw shape frame
    if(shape_chosen == "tr"){
        $('#fxcor').val(chosen_shape_data.fxcor);
        $('#fycor').val(chosen_shape_data.fycor);
        $('#sxcor').val(chosen_shape_data.sxcor);
        $('#sycor').val(chosen_shape_data.sycor); 
        $('#txcor').val(chosen_shape_data.txcor); 
        $('#tycor').val(chosen_shape_data.tycor);
    }
    else if(shape_chosen == "sq"){
        $('#xcor').val(chosen_shape_data.xcor);
        $('#ycor').val(chosen_shape_data.ycor);
        $('#width').val(chosen_shape_data.width);
    }
    else if(shape_chosen == "rec"){
        $('#rxcor').val(chosen_shape_data.rxcor);
        $('#rycor').val(chosen_shape_data.rycor);
        $('#rwidth').val(chosen_shape_data.rwidth);
        $('#rheight').val(chosen_shape_data.rheight);
    }
    else if(shape_chosen == "para"){
        $('#pxcor').val(chosen_shape_data.pxcor);
        $('#pycor').val(chosen_shape_data.pycor);
        $('#pwidth').val(chosen_shape_data.pwidth);
        $('#pheight').val(chosen_shape_data.pheight);
        $('#log').val(chosen_shape_data.log);
    }
    else if(shape_chosen == "cir"){
        $('#cxcor').val(chosen_shape_data.cxcor);
        $('#cycor').val(chosen_shape_data.cycor);
        $('#radius').val(chosen_shape_data.radius);
    }
    else if(shape_chosen == "polyg"){
        var polygon_points = chosen_shape_data.points;
        $('#chko').prop('checked', chosen_shape_data.closed);
        for(var i = 0; i < polygon_points.length; i++){
            $('#x'+(i+1)).val(polygon_points[i].x);
            $('#y'+(i+1)).val(polygon_points[i].y);
        }
    }
}

function getChosenTransformationFrameContents(transformation_chosen){
    if(transformation_chosen == "transport"){
        return {hor: $('#hor').val(), ver: $('#ver').val(), hor_chk:  $("#hor_chk").is(':checked'), ver_chk:  $("#ver_chk").is(':checked')};
    }
    else if(transformation_chosen == "rotate"){
        return {deg: $('#deg').val()}
    }
    else{
        return {sx: $('#sx').val(), sy: $('#sy').val(), chk:  $("#chk").is(':checked')};
    }
}

function setTransformationFrameContents(transformation_chosen, chosen_transformation_data){
    if(transformation_chosen == "transport"){
        $('#hor').val(chosen_transformation_data.hor);
        $('#ver').val(chosen_transformation_data.ver);
        $('#hor_chk').prop('checked', chosen_transformation_data.hor_chk);
        $('#ver_chk').prop('checked', chosen_transformation_data.ver_chk);
    }
    else if(transformation_chosen == "rotate"){
        $('#deg').val(chosen_transformation_data.deg);
    }
    else{
        $('#sx').val(chosen_transformation_data.hor);
        $('#sy').val(chosen_transformation_data.ver);
        $('#chk').prop('checked', chosen_transformation_data.chk);
    }
}

function getChosenShapeContents(){//Function that returns the value of the selected shape and the line width selection
    return {chosen_shape: $("#shape_selection").val(), lineWidth: $("#width_selection").prop('selectedIndex')};
}

function getChosenTransformation(){
    return $("#transformation_selection").val();
}