function setAndDisplayTransformationsTable(transformation){//Function called when a transformation is inserted to create and/or display the transformations table    
    var transformations_table_length = $('#transTable tbody tr').length;
    createTransformationsTable(transformation, transformations_table_length, "#000000");
    if(transformations_table_length == 0){//No previous transformations are on the transformations table se the panel has to be redesigned 
        $("#no_transform_div").css("display", "none");
        $("#table_div").css("display", "block");
        enableOrDisbaleForTransformations(true);
    }
    $("#transTable").tableDnDUpdate();//When the row is inserted, the table has to be dnd again(Drag and Drop)
}

//Function called when the user resizes the window and the frame has to be recreated
function setAndDisplayTransformationsTableForAllTransformations(){
    var table_index = 0;
    for(var transformation of ShapesDrawing.transformations){
        if(!transformation.isDeleted){
            createTransformationsTable(transformation, table_index, "#000000");
            if(table_index == 0){
                $("#no_transform_div").css("display", "none");
                $("#table_div").css("display", "block");
                enableOrDisbaleForTransformations(true);
            }
            table_index++;
        }
    }
    $("#transTable").tableDnD();
}

function createTransformationsTable(transformation, length, col){//Adds a row to the transformations table
    var row = document.getElementById("transTable").insertRow(length);
    row.style.color = col;
    var cel1 = row.insertCell(0);
    cel1.className = "trString";//Cell 1 Content: (string of the transformation)
    var cel2 = row.insertCell(1);
    cel1.innerHTML = transformation.toString();
    var but_id = document.getElementById("transTable").rows.length - 1;//Cell 1 Content: (delete transformation button)
    cel2.innerHTML = "<button type = \"button\" id = \""+but_id+"\" class=\"btn btn-default delete_btn\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Διαγραφή Μετασχηματισμού\" value = \"Διαγραφή\"><span class=\"glyphicon glyphicon-trash\"></span></button>";
    var cel3 = row.insertCell(2);
    cel3.className = "transformationId";
    cel3.innerHTML = transformation.transformationId;////Cell 1 Content: (Id of transformation hidden)
    cel3.style.display = 'none';
}



$(document).on('click', '.delete_btn', function(){//Event called when the user clicks the delete row(transformation button)
    var tableRows = document.getElementById("transTable").rows;
    var conf = confirm("Είστε σίγουροι ότι θέλετε να διαγράψετε τον μετασχηματισμό;");
    if(conf){
        $(this).closest('tr').remove();
        var length = tableRows.length;
        ShapesDrawing.softDeleteTransformation(parseInt($(this).closest('tr')[0].cells[2].innerHTML));//Calls the static Method of the ShapesDrawing class, deleteTransformation. The method accepts a parameter which
        if(length == 0){//If there are no more transformations on the table, the form is erased and hidden
            $("#no_transform_div").css("display", "block");
            $("#table_div").css("display", "none");
            enableOrDisbaleForTransformations(true);
        }
    }
});

//When the dynamically created delete button on the transformation table is clicked
$(document).on("click", "#deltranbtn", function(){
    var conf = confirm("Είστε σίγουροι ότι θέλετε να διαγράψετε όλους τους μετασχηματισμούς;");
    if(conf){
        deleteTransformationTable();
    }
});

//The function deletes the transformation table and resets the form
function deleteTransformationTable(){//The del variable tells us if the deletion is be pemanent or if the table will be recreated
    var table = document.getElementById("transTable");
    $("#no_transform_div").css("display", "block");
    $("#table_div").css("display", "none");
	if(table != null){//Delete the table
		while(table.rows.length > 0) {
			table.deleteRow(0);
		}
    }
    for(var i = 0; i < ShapesDrawing.transformations.length; i++){
        ShapesDrawing.softDeleteTransformation(i);
    }
    enableOrDisbaleForTransformations(true);
}

function enableOrDisbaleForTransformations(for_transformations_table){//Function that checks if the drawn shapes table or the transformation table are empty and disables/hides all the form elements for implementing the transformations
    var shapes_table_length = $("#drawnShapesTable tr").length;//First we get the legth of the above-mentioned tables
    var transformation_table_length = $("#transTable tr").length;
    if(shapes_table_length == 0 || transformation_table_length == 0){//If either of the two tables is empty
        $("#radio_footer").css("display", "none");//Hide the radio buttons 
        $("#tranbtn").prop("disabled", true);//Disable the buttons for implementing and deleting transformations
        if(for_transformations_table){  
            $("#deltranbtn").prop("disabled", true);
        }
    }
    else{//If neither of the tables are empty then 
        $("#radio_footer").css("display", "block");//Display the radio buttons
        $("#tranbtn").prop("disabled", false);//Enable implement transformation button
        if(for_transformations_table){  
            $("#deltranbtn").prop("disabled", false);
        }
    }
}