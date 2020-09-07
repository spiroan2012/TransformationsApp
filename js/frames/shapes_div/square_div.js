function createSquareDiv(){
    const html_square_frame =  `<form class = "form-horizontal">
        <div class = "form-group">
            <label class = "control-label col-sm-4">Κάτω αριστερά σημείο</label>
            <div class = "col-sm-4">
                <input type ="text" class = "form-control" id = "xcor" size = "5" maxlength = "5" placeholder = "x">
            </div>
            <div class = "col-sm-4">
                <input type ="text" class = "form-control" id = "ycor" size = "5" maxlength = "5" placeholder = "y">
            </div>
        </div>
        <div class = "form-group">
            <label class = "control-label col-sm-4">Μήκος Πλευράς</label>
            <div class = "col-sm-4">
                <input type ="text" class = "form-control" id = "width" size = "5" maxlength = "5">
            </div>
        </div>
        <div class = "form-group">
            <div class = "col-sm-offset-1 col-sm-2">
                <button type="button" onclick = "drawSquare()" class="btn btn-primary"><span class="glyphicon glyphicon-ok"></span> Σχεδίαση</button> 
            </div>
            <div class = "col-sm-offset-2 col-sm-2">
                <button type="button" onclick = "resetShapeForm('square')" class="btn btn-primary"><span class="glyphicon glyphicon-remove"></span> Καθαρισμός</button> 
            </div>
        </div>
    </form>`

    var newDiv = document.createElement('div');//Create the new point div and append it to the div
    newDiv.id = "sq";
    newDiv.innerHTML = html_square_frame; 
    $('#shape_form').empty();
    document.getElementById("shape_form").appendChild(newDiv);
}

