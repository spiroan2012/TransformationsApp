$("#transbut").click(function(){
    hideForms("shape");
    resetShapeForm("triangle");
    resetShapeForm("square");
    resetShapeForm("circle");
    resetShapeForm("parallelogram");
    resetShapeForm("rectangle");
    resetShapeForm("polygon");
    $("#trbut_div").hide();//Hide  the "go to transformations" div
    $("#draw_tools").hide();// Hide the draw tools
    $("#tr").prop('checked',true);//Reset the draw tools to default
    $("#del").hide();
    $("#drawbut").show();//Display the button for returning to draw
    $("#trans_tools").show();//Display the transformation tools
    $("#transport").show();//Display the transport panel and hide the rest transformations panels
    $("#rotate").hide();
    $("#scale").hide();
    $("#dynTrans").hide();
});