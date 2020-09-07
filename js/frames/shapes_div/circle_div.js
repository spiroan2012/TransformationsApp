function createCircleDiv(){    
    const html_circle_frame = `<form class = "form-horizontal">
                    <div class = "form-group">
                        <label class = "control-label col-sm-4">Κέντρο</label>
                        <div class = "col-sm-4">
                            <input type ="text" class = "form-control" id = "cxcor" size = "5" maxlength = "5" placeholder = "x">
                        </div>
                        <div class = "col-sm-4">
                            <input type ="text" class = "form-control" id = "cycor" size = "5" maxlength = "5" placeholder = "y">
                        </div>
                    </div>
                    <div class = "form-group">
                        <label class = "control-label col-sm-4">Ακτίνα</label>
                        <div class = "col-sm-4">
                            <input type ="text" class = "form-control" id = "radius" size = "5" maxlength = "5">
                        </div>
                    </div>
                    <div class = "form-group">
                        <div class = "col-sm-offset-1 col-sm-2">
                            <button type="button" onclick = "drawCircle()" class="btn btn-primary"><span class="glyphicon glyphicon-ok"></span> Σχεδίαση</button> 
                        </div>
                        <div class = "col-sm-offset-2 col-sm-2">
                            <button type="button" onclick = "resetShapeForm('circle')" class="btn btn-primary"><span class="glyphicon glyphicon-remove"></span> Καθαρισμός</button> 
                        </div>
                    </div>
                </form>`;
    var newDiv = document.createElement('div');//Create the new point div and append it to the div
    newDiv.id = "cir";
    newDiv.innerHTML = html_circle_frame; 
    $('#shape_form').empty();
    document.getElementById("shape_form").appendChild(newDiv);
}