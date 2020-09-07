function createPolygonDiv(){    
    const html_polygon_frame = 
    `<form class = "form-horizontal" id = "polygon_form">
        <div id = "dynamic_polygon_points" class = "scroll">
            
        </div>    
        <div class="form-group">
            <div class = "col-sm-8">
                <button type = "button" id = "rem_f" onclick = "removePoint()" class="btn btn-primary btn-md pull-right" disabled = "true"  data-toggle="tooltip" data-placement="top" title="Διαγραφή σημείου"></><span class="glyphicon glyphicon-minus-sign" disabled = "true"></span></button>
                <button type = "button" id = "add_f" onclick = "addPoint()" class="btn btn-primary btn-md pull-right" data-toggle="tooltip" data-placement="top" title="Εισαγωγή σημείου"><span class="glyphicon glyphicon-plus-sign"></span></button>
            </div>
        </div>
        <div class="checkbox-inline form-group" id = "checkbox_div">
            <label><input type="checkbox" id = "chko">  Κλειστό Πολύγωνο</label>
        </div>    
        <div class = "form-group">
            <center><div class = "btn-group btn-group-sm">
                <button type = "button" id = "paintpol" class="btn btn-primary btn-md" onclick = "drawPolygon();" ><span class="glyphicon glyphicon-ok"></span>  Σχεδίαση</button>
                <button type = "button" id = "clearpol" class="btn btn-primary btn-md" onclick = "resetShapeForm('polygon')"><span class="glyphicon glyphicon-remove"></span>  Καθαρισμός</button>
                <button type = "button" id = "respol" class="btn btn-primary btn-md" onclick = "resetPolygonForm()" disabled = "true"><span class="glyphicon glyphicon-repeat"></span>  Επαναφορά</button>
            </div>
        </div>
    </form>`;
    var newDiv = document.createElement('div');//Create the new point div and append it to the div
    newDiv.id = "polyg";
    newDiv.innerHTML = html_polygon_frame; 
    $('#shape_form').empty();
    document.getElementById("shape_form").appendChild(newDiv);
}   