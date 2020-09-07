function insertTransportation(){
    if($('#hor').val() == "" || $('#ver').val() == ""){
        alert("Καμία από τις δύο τιμές δεν πρέπει να είναι κενή");
        return;
    }
    var hor = ($('#hor').val() != "") ? $('#hor').val() : "0";
    var ver = ($('#ver').val() != "") ? $('#ver').val() : "0";
    if(isNaN(hor) || isNaN(ver)){//Αλλαγή
        alert("Οι τιμές της οριζόντιας και της κάθετης μεταφοράς πρέπει να είναι αριθμοι");
        return;
    }
    var translation = new Translation(hor, ver);
    ShapesDrawing.addTransformation(translation);
    setAndDisplayTransformationsTable(translation);
    resetTransformationForm("transport");
}