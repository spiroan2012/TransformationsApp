function createRectangleDiv(){    
    const html_rect_frame = `<form class = "form-horizontal">
                        <div class = "form-group">
                            <label class = "control-label col-sm-4">Κάτω αριστερά σημείο</label>
                            <div class = "col-sm-4 textbox_padding">
                                <input type ="text" class = "form-control" id = "rxcor" size = "5" maxlength = "5" placeholder = "x">
                            </div>
                            <div class = "col-sm-4 textbox_padding">
                                <input type ="text" class = "form-control" id = "rycor" size = "5" maxlength = "5" placeholder = "y">
                            </div>
                        </div>
                        <div class = "form-group rectangle_textbox">
                            <label class = "control-label col-sm-4">Μήκος</label>
                            <div class = "col-sm-4">
                                <input type ="text" class = "form-control" id = "rwidth" size = "5" maxlength = "5">
                            </div>
                        </div>
                        <div class = "form-group rectangle_textbox">
                            <label class = "control-label col-sm-4">Ύψος</label>
                            <div class = "col-sm-4">
                                <input type ="text" class = "form-control" id = "rheight" size = "5" maxlength = "5">
                            </div>
                        </div>
                        <div class = "form-group">
                            <div class = "col-sm-offset-1 col-sm-2">
                                <button type="button" onclick = "drawRectangle()" class="btn btn-primary"><span class="glyphicon glyphicon-ok"></span> Σχεδίαση</button> 
                            </div>
                            <div class = "col-sm-offset-2 col-sm-2">
                                <button type="button" onclick = "resetShapeForm('rectangle')" class="btn btn-primary"><span class="glyphicon glyphicon-remove"></span> Καθαρισμός</button> 
                            </div>
                        </div>
                    </form>`;
        var newDiv = document.createElement('div');//Create the new point div and append it to the div
        newDiv.id = "rec";
        newDiv.innerHTML = html_rect_frame; 
        $('#shape_form').empty();
        document.getElementById("shape_form").appendChild(newDiv);
}