function drawPolygon(){
    var edges = [];
    var sh = {type: "Πολύγωνο"};
    for(var i = 0; i < number_of_polygon_points; i++){
        var korifi = "c"+(i + 1);
        var x = $('#x'+(i + 1)).val();
        var y = $('#y'+(i + 1)).val();
        if(!checkValidityOfPolygonFields(x, y, (i + 1))){
            return;
        }
        x = parseFloat(x);
        y = parseFloat(y);
        var temp =  (i + 1)+"η: ("+x+","+y+") ";//Add the ith point to the string
        sh[korifi] = temp; 
        edges.push({x:x, y:y});
    }
    var chk = $("#chko").is(':checked');
    var newShape = new Polygon(edges, null, ctx.lineWidth, chk, sh, '#000000');
    drawProcedure(newShape, "polygon");
    resetPolygonForm();
}

function checkValidityOfPolygonFields(x, y, i){
    if(x == "" || y == ""){
        alert("Η "+i+"η κορυφή του πολυγώνου δεν πρέπει να είναι κενή");
        return false;
    }
    if(isNaN(x) || isNaN(y)){
        alert("Οι συντεταγμενες πρέπει να είναι ακεραιοι  αριθμοι");
        return false; 
    }
    return true;
}