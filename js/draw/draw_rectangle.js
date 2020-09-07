function drawRectangle(){
    var rxcor = $('#rxcor').val();
    var rycor = $('#rycor').val();
    var rwidth = $('#rwidth').val();
    var rheight = $('#rheight').val();
    if(checkValidityOfRectangleFields(rxcor, rycor, rwidth, rheight)){
        var rectangle = [];
        rectangle["xcor"] = parseFloat(rxcor);
        rectangle["ycor"] = parseFloat(rycor);
        rectangle["width"] = parseFloat(rwidth);
        rectangle["height"] = parseFloat(rheight);
        var points = Polygon.createPointsForPolygon(rectangle, "rectangle");
        var sh = {type:"Ορθογώνιο", c1: "Κάτω αριστερά σημείο("+rxcor+","+rycor+")", c2: "Μήκος οριζόντιας πλευράς: "+rwidth+"", c3: "Μήκος κάθετης πλευράς: "+rheight+""};
        var newShape = new Polygon(points, null, ctx.lineWidth, true, sh, '#000000');
        drawProcedure(newShape, "rectangle");
    }
}

function checkValidityOfRectangleFields(rxcor, rycor, rwidth, rheight){
    if(rxcor == "" || rycor == "" || rwidth == "" || rheight == ""){
        alert("Οι συντεταγμενες του ορθογωνίου καθώς και τα μήκη των πλευρών του δεν πρέπει να είναι κενά");
        return false;
    }
    if(isNaN(rxcor) || isNaN(rycor) || isNaN(rwidth) || isNaN(rheight)){
        alert("Οι συντεταγμενες του ορθογωνίου καθώς και τα μήκη των πλευρών του πρέπει να είναι  αριθμοι");
        return false;
    }
    if(rwidth == 0 || rheight ==0){
        alert("Τα μήκη των πλευρών του ορθογωνίου δεν μπορεί να είναι 0");
        return false;
    }
    return true;
}