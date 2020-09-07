function closeFrames(){//Closes all the shape frames
    for(var i = 0; i < frames.length; i++){
        if(i != 2){
            frames[i].closeFrame();
        }
        else{
            frames[2].frame.closeFrame();
        }

    }
}

function resetShapeForm(type){
    if(type == "triangle"){
        $('#fxcor').val("");
        $('#sxcor').val("");
        $('#txcor').val("");
        $('#fycor').val("");
        $('#sycor').val("");
        $('#tycor').val("");
    }
    else if(type == "square"){
        $('#xcor').val("");
        $('#ycor').val("");
        $('#width').val("");
    }
    else if(type == "rectangle"){
        $('#rxcor').val("");
        $('#rycor').val("");
        $('#rwidth').val("");
        $('#rheight').val("");
    }
    else if(type == "circle"){
        $('#cxcor').val("");
        $('#cycor').val("");
        $('#radius').val("");
    }
    else if(type == "parallelogram"){
        $('#pxcor').val("");
        $('#pycor').val("");
        $('#pwidth').val("");
        $('#pheight').val("");
        $('#log').val("");
    }
    else{
        for(var i = 0; i< number_of_polygon_points; i++){
            $("#x"+(i + 1)).val("");
            $("#y"+(i + 1)).val("");
        }
    }
}

function resetTransformationForm(type){
    if(type == "transport"){
        $('#hor').val("");
        $('#ver').val("");
        $('#v').show();
        $('#ver').show();
        $('ver_chk').prop("checked", false);
        $('hor_chk').prop("checked", false);
        $('#h').show();
        $('#hor').show();
    }
    else if(type == "rotate"){
        $("#deg").val("");
    }
    else{
        $('#sx').val("");
        $('#sy').val("");
        $('#syc').show();
        $('#sy').show();
        $('#sxc').html("Αλλαγή κλίμακας κατά x");
        $('#chk').attr("disabled", false);
        $('#chk').prop("checked", false);
    }
}