function drawTriangle(){
    var fxcor = $('#fxcor').val();
    var sxcor = $('#sxcor').val();
    var txcor = $('#txcor').val();
    var fycor = $('#fycor').val();
    var sycor = $('#sycor').val();
    var tycor =  $('#tycor').val(); 
    if(checkValidityOfTriangleFields(fxcor, sxcor, txcor, fycor, sycor, tycor)){
        var triangle = [];
        triangle["fxcor"] = parseFloat(fxcor);
        triangle["fycor"] = parseFloat(fycor);
        triangle["sxcor"] = parseFloat(sxcor);
        triangle["sycor"] = parseFloat(sycor);
        triangle["txcor"] = parseFloat(txcor);
        triangle["tycor"] = parseFloat(tycor);
        var sh = {type:"Τρίγωνο", c1: "Α("+fxcor+","+fycor+")", c2: "B("+sxcor+","+sycor+")", c3: "Γ("+txcor+","+tycor+")" }; 
        var points = Polygon.createPointsForPolygon(triangle, "triangle");
        var newShape = new Polygon(points, null, ctx.lineWidth, true, sh, '#000000');
        drawProcedure(newShape, "triangle");
    }
}

function checkValidityOfTriangleFields(fxcor, sxcor, txcor, fycor, sycor, tycor){
    if(fxcor == "" || fycor == "" || sxcor == "" || sycor == "" || txcor == "" || tycor == ""){
        alert("Οι συντεταγμενες του τριγώνου δεν πρέπει να είναι κενές");
        return false;
    }
    if((isNaN(fxcor) % 1 !== 0) || isNaN(fycor) || isNaN(sxcor) || isNaN(sycor) || isNaN(txcor) || isNaN(tycor)){
        alert("Οι συντεταγμενες πρέπει να είναι  αριθμοι");
        return false;
    }
    if((fxcor * (sycor - tycor) + sxcor * (tycor - fycor) + txcor * (fycor - sycor)) == 0){
        alert("Τα 3 σημεία που επιλέξατε είναι συνευθειακά");
        return false;
    }
    return true;
}