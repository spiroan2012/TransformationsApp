function drawCircle(){
    var cxcor = $('#cxcor').val();
    var cycor = $('#cycor').val();
    var radius = $('#radius').val();
    if(checkValidityOfCircleFields(cxcor, cycor, radius)){
        var circle = [];
        circle["xcor"] = parseFloat(cxcor);
        circle["ycor"] = parseFloat(cycor);
        circle["radius"] = parseFloat(radius);
        var points = Circle.createPointsForCircle(circle);
        var sh = {type:"Κύκλος", c1: "Κέντρο("+cxcor+","+cycor+")", c2: "Ακτίνα: "+radius+""};
        newShape = new Circle({x:circle["xcor"], y: circle["ycor"]}, circle["radius"],points, null,ctx.lineWidth, true, sh, '#000000');
        drawProcedure(newShape, "circle");
    }
}

function checkValidityOfCircleFields(cxcor, cycor, radius){
    if(cxcor == "" || cycor == "" || radius == ""){
        alert("Οι συντεταγμενες του κέντρου του κύκλου καθώς και η ακτίνα του δεν πρέπει να είναι κενά");
        return false;
    }
    if(isNaN(cxcor) || isNaN(cycor)|| isNaN(radius)){
        alert("Οι συντεταγμενες του κέντρου και η ακτίνα του κύκλου πρέπει να είναι  αριθμοι");
        return false;
    }
    if(radius == 0){
        alert("Η ακτίνα του κύκλου δεν μπορεί να είναι 0");
        return false;
    }
    return true;
}