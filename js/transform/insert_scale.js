function insertScale(){
    if($('#sx').val() == "" || $('#sy').val() == ""){
        alert("Καμία από τις δύο τιμές δεν πρέπει να είναι κενή");
        return;
    }
    var sx = ($("#sx").val() != "") ? $("#sx").val() : $("#sy").val();
    var sy = ($("#sy").val() != "") ? $("#sy").val() : $("#sx").val();
    if(isNaN(sx) || isNaN(sy)){//Αλλαγή
        alert("Οι παράγοντες αλλαγής κλίμακας πρέπει να είναι αριθμοι");
        return;
    }
    if(sx == 0 || sy == 0){
        alert("Οι παράγοντες αλλαγής κλίμακας δεν πρέπει να είναι 0");
        return;
    }
    var scale = new Scale(sx, sy);
    ShapesDrawing.addTransformation(scale);
    setAndDisplayTransformationsTable(scale);
    resetTransformationForm("scale");
}