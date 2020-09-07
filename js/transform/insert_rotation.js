function insertRotation(){
    colors = [];
    var deg = $("#deg").val();
    if(deg == ""){
        alert("H τιμή της περιστροφής δεν μπορεί να είναι κενή");
        return;
    }
    // if(deg % 1 !== 0){
    //     alert("H τιμή της περιστροφής πρέπει να είναι ακεραιοι  αριθμοι");
    //     return;
    // }
    if(deg < -180 || deg > 180){
        alert("H τιμή της περιστροφής πρέπει να είναι μεγαλύτερη του -180 και μικρότερη του 180");
        return;
    }
    if(deg == 0){
        alert("H τιμή της περιστροφής δεν μπορεί να είναι 0");
        return;
    }
    var rotation = new Rotation(deg);
    ShapesDrawing.addTransformation(rotation);
    setAndDisplayTransformationsTable(rotation);
    resetTransformationForm("rotate");
}