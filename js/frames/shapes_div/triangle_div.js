function createTriangleDiv(){
    const html_triangle_frame = `<form class = "form-horizontal">
        <div class = "form-group">
            <label class = "control-label col-sm-4">1η Κορυφή</label>
            <div class = "col-sm-4">
                <input type ="text" class = "form-control" id = "fxcor" size = "5" maxlength = "5" placeholder = "x">
            </div>
            <div class = "col-sm-4">
                <input type ="text" class = "form-control" id = "fycor" size = "5" maxlength = "5" placeholder = "y">
            </div>
        </div>
        <div class = "form-group">
            <label class = "control-label col-sm-4">2η Κορυφή</label>
            <div class = "col-sm-4">
                <input type ="text" class = "form-control" id = "sxcor" size = "5" maxlength = "5" placeholder = "x">
            </div>
            <div class = "col-sm-4">
                <input type ="text" class = "form-control" id = "sycor" size = "5" maxlength = "5" placeholder = "y">
            </div>
        </div>
        <div class = "form-group">
            <label class = "control-label col-sm-4">3η Κορυφή</label>
            <div class = "col-sm-4">
                <input type ="text" class = "form-control" id = "txcor" size = "5" maxlength = "5" placeholder = "x">
            </div>
            <div class = "col-sm-4">
                <input type ="text" class = "form-control" id = "tycor" size = "5" maxlength = "5" placeholder = "y">
            </div>
        </div>
        <div class = "form-group">
            <div class = "col-sm-offset-1 col-sm-2">
                <button type="button" onclick = "drawTriangle();" class="btn btn-primary"><span class="glyphicon glyphicon-ok"></span> Σχεδίαση</button> 
            </div>
            <div class = "col-sm-offset-2 col-sm-2">
                <button type="button" onclick = "resetShapeForm('triangle')" class="btn btn-primary"><span class="glyphicon glyphicon-remove"></span> Καθαρισμός</button> 
            </div>
        </div>
    </form>`

    var newDiv = document.createElement('div');//Create the new point div and append it to the div
    newDiv.id = "tr";
    newDiv.innerHTML = html_triangle_frame; 
    $('#shape_form').empty();
    document.getElementById("shape_form").appendChild(newDiv);
}



