function createTransportationDiv(){
    const html_translate = `<form class="form-horizontal">
        <div class="form-group">
            <label class = "control-label col-md-6 col-lg-6 col-xl-6" id = "h">Μεταφορά στον οριζόντιο άξονα</label>
            <div  class = "col-md-6 col-lg-6 col-xl-6 textbox_padding">
                <input type = "text" id = "hor" size = "5" maxlength = "5">
            </div>
        </div>
        <div class="form-group">
            <label class = "control-label col-md-6 col-lg-6 col-xl-6" id = "v">Μεταφορά στον κάθετο άξονα</label>
            <div  class = "col-md-6 col-lg-6 col-xl-6 textbox_padding">
                <input type = "text" id = "ver" size = "5" maxlength = "5">
            </div>
        </div>
        <br>
        <div class="btn-gr oup btn-group-justified">
            <div class = "col-md-6 col-lg-6 col-xl-6"><button type = "button" onclick = "insertTransportation()" class="btn btn-primary btn-md" ><span class="glyphicon glyphicon-plus"></span>  Εισαγωγή</button></div>
            <div class = "col-md-6 col-lg-6 col-xl-6"><button type = "button" id = "cleartra" class="btn btn-primary btn-md"><span class="glyphicon glyphicon-remove"></span>  Καθαρισμός</button></div>
        </div>
    </form>`;

    var newDiv = document.createElement('div');//Create the new point div and append it to the div
    newDiv.id = "transport";
    newDiv.innerHTML = html_translate;
    $('#transform_form').empty();
    document.getElementById("transform_form").appendChild(newDiv);
}