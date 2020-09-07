function addSpecificShapeToTable(){//Function called when the user draws a shape, so that the shape is inserted on the drawn shapes table
    var table = document.getElementById("drawnShapesTable");
    var table_length = table.rows.length;
    addShapeToDrawnShapeTable(table_length);
}

function addAllShapesToTable(){//Function called when the user resizes the frame so the frame and by extension the drawn shape table has to be recreated
    for(var i = 0; i < ShapesDrawing.shapes.length; i++){
        addShapeToDrawnShapeTable(i);
    }
}

function addShapeToDrawnShapeTable(index){
    if(index == 0){
        $("#no_shapes_div").css("display", "none");
        $("#drawn_shapes_div").css("display", "block");
    }
    var row = document.getElementById("drawnShapesTable").insertRow(index); 
    var cel1 = row.insertCell(0);
    var cel2 = row.insertCell(1);
    var cel3 = row.insertCell(2);
    var cel4 = row.insertCell(3);
    var cel5 = row.insertCell(4);
    cel1.innerHTML = parseInt(index) + 1;
    cel1.className = "rowID";

    $('<input />', {//The checkbox that will be added next to the shape cell so that the user can select the shape
        class : ' selectItems',
        type : 'checkbox',
        id: 'id_' + index,
    }).appendTo(cel2);
    $('#id_' + index).prop('checked', true);//By default all shapes are checked
    cel2.className = "isChosen";

    var title = ShapesDrawing.getSpecificShape(index).string["type"];//The title of the popover(shown on the table) will be the type of the drawn shape
    var content = ShapesDrawing.getSpecificShape(index).toString();//The content of the popover(displayed when the user hovers the cursor on the 2nd table cell) are the details of drawn shape
    var pop = "<a href = \"#\" data-toggle=\"popover\" title=\""+title+"\" data-trigger=\"hover\" data-content= \""+content+"\">"+title+"</a>";
    cel3.innerHTML = pop;

    cel4.innerHTML = "<button type = \"button\" id = \"delete_shape_button\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Διαγραφή Σχήματος\" class=\"btn btn-default\" value = \"Διαγραφή\"><span class=\"glyphicon glyphicon-trash\"></span></button>";

    cel5.innerHTML = ShapesDrawing.getSpecificShape(index).shapeId;
    cel5.className = "shapeId";
    cel5.style = "display:none";
    enableOrDisbaleForTransformations(false);
    row.addEventListener('click', function(e){//Listener that activates a click event when the user clicks a table row
        if(e.target.type == "button" || e.target.nodeName == "SPAN"){//If the user clicks the button or the span inside the button
            var tableRows = document.getElementById("drawnShapesTable").rows;
            var conf = confirm("Είστε σίγουροι ότι θέλετε να διαγράψετε το σχήμα; Όσοι μετασχηματισμοί έχουν εφαρμοστεί στο σχήμα θα διαγραφούν");
            if(conf){
                var length = tableRows.length;
                ShapesDrawing.deleteSpecificShapeAndTransformationsForShape($(this).closest('tr')[0].cells[4].innerHTML);//Accepts shape id
                $(this).closest('tr').remove();
                redraw();
                createInformationShapesTable();
                tableRows = document.getElementById("drawnShapesTable").rows;
                for(var i = 0; i < tableRows.length; i++){
                    tableRows[i].cells[0].innerHTML = i + 1;
                }
                //For an unexpected reason the length of the table do not update when the user deletes a row
                if(length - 1 == 0){//If there are no more transformations on the table, the form is erased and hidden
                    $("#no_shapes_div").css("display", "block");
                    $("#drawn_shapes_div").css("display", "none");
                    enableOrDisbaleForTransformations(false);
                    $('#collapse1').collapse('show');
                    frames[2].frame.hide();
                    frames[2].is_shown = false;
                }
            }
        }
        else if(e.target.type == "checkbox"){
            if($('#id_' + index).is(':checked')){
                $('#id_' + index).prop('checked', true);
            }
            else{
                $('#id_' + index).prop('checked', false);
            }
        }
        else{
            if($('#id_' + index).is(':checked')){
                $('#id_' + index).prop('checked', false);
            }
            else{
                $('#id_' + index).prop('checked', true);
            }
        }
    });
}

function deleteDrawnShapesTable(){
    var table = document.getElementById("drawnShapesTable");
    $("#no_shapes_div").css("display", "block");
    $("#drawn_shapes_div").css("display", "none");
    enableOrDisbaleForTransformations(false);
    $('#collapse1').collapse('toggle');
    $('#collapse2').collapse('hide');
	if(table != null){//Delete the table
		while(table.rows.length > 0) {
			table.deleteRow(0);
		}
    }
    enableOrDisbaleForTransformations(false);
    frames[2].frame.hide();
    frames[2].is_shown = false;
}