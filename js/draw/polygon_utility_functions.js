function addPoint(){//Function called when the user clicks the add point button on polygon frame
    number_of_polygon_points++;//The number of polygon points is increased
    document.getElementById("dynamic_polygon_points").appendChild(createPolygonPoint(number_of_polygon_points));//Adds the point to the polygon points div
    $('#rem_f').attr("disabled", false);//Enable the remove point(-) button
    $('#respol').attr("disabled", false);//Enable the reset polygon form button
}

/*
When the user removes a point from the polygon form
    1. The programm checks whether the point that is about to be removed, contains data. If it does a confirm dialog is displayed on the screen asking the user if he really wants to
        delete the point
    2. If the user confirms the action then The current polygon form data are stored and the last point is removed from the array
    3. The old frame is closed
    4. A new polygon frame is created with width equals to the previous form width and height equals to the previous form height - 50
    5. The points of the polygon are recreated and attatched to the parent div, excluding the removed point
*/ 
function removePoint(){//Removal of last polygon point
    $("#add_f").attr("disabled", false);//Enable the add point button
    var point_to_remove_id = parseInt(number_of_polygon_points);//Get the id of the last point
    if($("#x"+point_to_remove_id).val() != "" || $("#y"+point_to_remove_id).val() != ""){//Confirm that the user wants the removal of the last point
        var r = confirm("Το σημείο που θέλετε να αφαιρέσετε περιέχει τιμές. Είστε σίγουροι ότι θέλετε να ολοκληρώσετε την ενέργεια;");
        if(!r){
            return;
        }
    }
    $("#"+point_to_remove_id+"f").remove();//Remove the div of the point
    number_of_polygon_points--;
    if(number_of_polygon_points == 4){//If number of points is equal to 5 then the form is at its initial state 
        $('#rem_f').attr("disabled", true);//Disable add point(+) button
        $('#respol').attr("disabled", true);//Disable reset form button 
    }
}

function resetPolygonForm(){//Resets the polygon frame to default (4 polygon points)
    number_of_polygon_points = 4;
    $('#dynamic_polygon_points').empty();
    createPolygonInitialPoints();
    $('#rem_f').attr("disabled", true);//Disable add point(+) button
    $('#respol').attr("disabled", true);//Disable reset form button 
}

function createPolygonInitialPoints(){//When called it appends to the dynamic_polygon_points div a number of points equals to number_of_polygon_points (initially 4)
    for(var i = 0; i < number_of_polygon_points; i++){
        document.getElementById("dynamic_polygon_points").appendChild(createPolygonPoint(i+1));
    }
}

function createPolygonPoint(point_id){
    var newDiv = document.createElement('div');//Create the new point div and append it to the dyna div
    newDiv.className = "form-group";
    newDiv.id = point_id+"f";
    newDiv.innerHTML = 
    "<label class = 'control-label col-sm-4'>"+point_id+"η κορυφή </label>"+
    "<div class = 'col-sm-4'>"+
    "<input type = 'text' class = 'form-control' id = 'x"+point_id+"' size = '2' maxlength = '5' placeholder = 'x'> "+
    "</div>"+
    "<div class = 'col-sm-4'>"+
    "<input type ='text' class = 'form-control' id = 'y"+point_id+"' size = '2' maxlength = '5' placeholder = 'y'>"+
    "</div>"
    "</div>";
    return newDiv;
}