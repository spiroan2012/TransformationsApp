function createScaleDiv(){
    const html_scale = `<form class="form-horizontal">
        <div class="form-group">
            <label class = "control-label col-md-6 col-lg-6 col-xl-6" id = "sxc">Αλλαγή κλίμακας κατά x</label>
            <div   class = "col-md-6 col-lg-6 col-xl-6 textbox_padding">
                <input type = "text" id = "sx" size = "5" maxlength = "5">
            </div>
        </div>
        <div class="form-group">
            <label class = "control-label col-md-6 col-lg-6 col-xl-6" id = "syc">Αλλαγή κλίμακας κατά y</label>	
            <div  class = "col-md-6 col-lg-6 col-xl-6 textbox_padding">
                <input type = "text" id = "sy" size = "5" maxlength = "5">
            </div>
        </div>
        <br>
        <div class="btn-group btn-group-justified">
            <div class = "col-md-6 col-lg-6 col-xl-6"><button type = "button" id = "scbut" onclick = "insertScale()" class="btn btn-primary btn-md" ><span class="glyphicon glyphicon-plus"></span>  Εισαγωγή</button></div>
            <div class = "col-md-6 col-lg-6 col-xl-6"><button type = "button" id = "clearsc" class="btn btn-primary btn-md"><span class="glyphicon glyphicon-remove"></span>  Καθαρισμός</button></div>
        </div>
    </form>`;

    var newDiv = document.createElement('div');//Create the new point div and append it to the div
    newDiv.id = "scale";
    newDiv.innerHTML = html_scale;
    $('#transform_form').empty();
    document.getElementById("transform_form").appendChild(newDiv);
}