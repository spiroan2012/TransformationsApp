function createRotationDiv(){
    const html_rotate = `<form class="form-horizontal">
        <div class="form-group">
            <label class = "col-md-6 col-lg-6 col-xl-6" id = "degr">Μοίρες περιστροφής</label>
            <div  class = "col-md-6 col-lg-6 col-xl-6 textbox_padding">
                <input type = "text" id = "deg" size = "5" maxlength = "5">
            </div>
        </div>
        <br>
        <div class="btn-group btn-group-justified">
            <div class = "col-md-12 col-lg-12 col-xl-12"><button type = "button" id = "rotbut" onclick = "insertRotation()" class="btn btn-primary btn-md" ><span class="glyphicon glyphicon-plus"></span>  Εισαγωγή περιστροφής</button></div>
        </div>
    </form>`;

    var newDiv = document.createElement('div');//Create the new point div and append it to the div
    newDiv.id = "rotate";
    newDiv.innerHTML = html_rotate;
    $('#transform_form').empty();
    document.getElementById("transform_form").appendChild(newDiv);
}