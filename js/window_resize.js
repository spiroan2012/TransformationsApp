$(window).resize(function(){//Event triggered when the user resizes the window
    var activeFrame = ($('#collapse1').hasClass('in')) ? 0 : 1;//Stores the active collapse (0 for draw frame, 1 for transform frame)
    setCanvasSize();//The canvas size is recalculated according to the size of the window
    var chosen_shape_frame_data = getChosenShapeContents();
    var chosen_transformation = getChosenTransformation();
    redraw();//The canvas axis and shapes are being redrawn
    var chosen_shape_data = getShapeFrameContents(chosen_shape_frame_data.chosen_shape);
    var chosen_transformation_data = getChosenTransformationFrameContents(chosen_transformation);
    closeFrames();//Closes the current draw frames
    info_frame_is_shown = frames[2].is_shown;//Stores the variable is_shown of the 3rd frame before we destroy the frames
    frames = [];//Clears all the frames
    createNewFrame(chosen_shape_frame_data, chosen_transformation, info_frame_is_shown);
    setShapeFrameContents(chosen_shape_frame_data.chosen_shape, chosen_shape_data);
    setTransformationFrameContents(chosen_transformation, chosen_transformation_data);
    enableOrDisbaleForTransformations(false);
    if($("#transTable tr").length != 0){//First we get the legth of the above-mentioned tables)
        $("#deltranbtn").prop("disabled", false);
    } 
    frames[0].show();
    frames[1].show();
    if(info_frame_is_shown){
        frames[2].frame.show();
    }
    if(activeFrame == 0){//The active accordion is shown
        $('#collapse1').addClass('in');
    }
    else{
        $('#collapse2').addClass('in');
    }
});

