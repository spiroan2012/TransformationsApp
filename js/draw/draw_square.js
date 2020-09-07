function drawSquare(){
    var xcor = $('#xcor').val();
    var ycor = $('#ycor').val();
    var width = $('#width').val();
    if(checkValidityOfSquareFields(xcor, ycor, width)){
        var square = [];
        square["xcor"] = parseFloat(xcor);
        square["ycor"] = parseFloat(ycor);
        square["width"] = parseFloat(width);
        var sh = {type:"Τετράγωνο", c1: "Κάτω αριστερά σημείο("+xcor+","+ycor+")", c2: "Μήκος Πλευράς: "+width+""};
        var points = (Polygon.createPointsForPolygon(square, "square"));
        var newShape = new Polygon(points, null, ctx.lineWidth, true, sh, '#000000');
        drawProcedure(newShape, "square");
    }
}

function checkValidityOfSquareFields(xcor, ycor, width){
    if(xcor == "" || ycor == "" || width == ""){
        alert("Οι συντεταγμενες του τετραγώνου καθώς και το μήκος της πλευράς του δεν πρέπει να είναι κενά");
        return false;
    }
    if(isNaN(xcor) || isNaN(ycor) || isNaN(width)){
        alert("Οι συντεταγμενες και το μήκος της πλευράς του τετραγώνου πρέπει να είναι αριθμοι");
        return false;
    }
    if(width == 0){
        alert("Τo μήκος των πλευρών του τετραγώνου δεν μπορεί να είναι 0");
        return false;
    }
    return true;
}