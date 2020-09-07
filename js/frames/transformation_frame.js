
html_transformation_div = 
`
    <div class = 'panel-group'>  
        <div class = "panel panel-primary" id = "drawnShapesPanel"><!--Panel where the shapes drawn by the user will be displayed on a table, so that the user can select the ones that he/she wants to implement the transofrmations on-->
            <div class = "panel-heading">Σχεδιασμένα Σχήματα</div>
            <div class = "container" id = "no_shapes_div">
                <h5>Δεν υπάρχουν σχεδιασμένα<br> σχήματα</h5>
            </div>
            <div class = "panel-body scroll" id = "drawn_shapes_div">
                <table id = "drawnShapesTable" class="table table-hover">
                </table>
            </div>
        </div>
        <div class="panel panel-primary" id = "dynTrans"><!--Panel where the transformations are stored when they are created and before they are implemented-->
            <div class = "panel-heading">Μετασχηματισμοί που θα υλοποιηθούν</div>
            <div class = "container" id = "no_transform_div">
                <h5>Δεν υπάρχουν μετασχηματισμοί</h5>
            </div>
            <div class="panel-body scroll" id = "table_div">
                <!--HTML board featu ring all the transformations. Initially blank-->
                <table id = "transTable" class="table table-hover">
                </table>
            </div>
            <div class = "panel-footer" id = "radio_footer" style = "display:none"><!--The user can choose what transformations will be drawn on canvas-->
                <div class="radio">
                    <label><input type="radio" name="optradio" id = "radio1" checked value = "0">Αρχικό και τελικό σχέδιο</label>
                </div>
                <div class="radio">
                    <label><input type="radio" name="optradio" id = "radio2" value = "1">Μόνο τελικό σχέδιο</label>
                </div>
                <div class="radio">
                    <label><input type="radio" name="optradio" id = "radio3" value = "2">Αρχικό τελικό και ενδιάμεσο</label>
                </div>
            </div>
        </div>
        <button type = "button" class = "btn-primary btn-block" id = "tranbtn" onclick = "implementTransformations()" disabled = "true"><span class="glyphicon glyphicon-ok"></span> Υποβολή Μετασχηματισμών</button>
        <button type = "button" class = "btn-primary btn-block" id = "deltranbtn" disabled = "true"><span class="glyphicon glyphicon-trash"></span> Διαγραφή Όλων</button>
    </div>`;