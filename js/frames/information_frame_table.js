function createInformationShapesTable(){
    clearInformationTable();//The first step is to clear the table
    var index = 1;
    if(transformation_draw_mode != 1){
        ShapesDrawing.shapes.forEach(function(shape){
            var length = document.getElementById("shapesTable").rows.length;
            var row = document.getElementById("shapesTable").insertRow(length);
            var cel1 = row.insertCell(0);
            var pop = "<a href = \"#\" data-toggle=\"popover\" title=\""+shape.string.type+"\" data-trigger=\"hover\" data-content= \""+shape.toString()+"\">"+"Αρχικό Σχήμα "+index+": "+shape.string.type+"</a>";
            cel1.innerHTML = pop;    
            var cel2 = row.insertCell(1);
            cel2.style.backgroundColor = '#000000';
            index++;
        });
    }
    var information_array = ShapesDrawing.getInformationForTransformedShapes();
    index = 1;
    if(transformation_draw_mode  == 2){
        information_array.forEach(function(shape_info){//Transformed Shapes
            shape_info.forEach(function(info){
                var length = document.getElementById("shapesTable").rows.length;
                var row = document.getElementById("shapesTable").insertRow(length);
                var cel1 = row.insertCell(0);
                var pop = "<a href = \"#\" data-toggle=\"popover\" title=\" Αρχικό Σχήμα:<br><br>"+info.basic_shape.string.type+"<br>"+info.basic_shape.toString()+"\" data-trigger=\"hover\" data-content= \"Μετασχηματισμοί:<br>"+info.transformation_info+"\">"+"Μετασχηματισμένο Σχήμα "+index+": "+info.basic_shape.string.type+"</a>";
                cel1.innerHTML = pop;    
                var cel2 = row.insertCell(1);
                cel2.style.backgroundColor = info.color;
                index++;
            });
        });   

    }
    else{
        information_array.forEach(function(shape_info){//Transformed Shapes
            var length = document.getElementById("shapesTable").rows.length;
            var row = document.getElementById("shapesTable").insertRow(length);
            var cel1 = row.insertCell(0);
            var pop = "<a href = \"#\" data-toggle=\"popover\" title=\" Αρχικό Σχήμα:<br><br>"+shape_info[shape_info.length - 1].basic_shape.string.type+"<br>"+shape_info[shape_info.length - 1].basic_shape.toString()+"\" data-trigger=\"hover\" data-content= \"Μετασχηματισμοί:<br>"+shape_info[shape_info.length - 1].transformation_info+"\">"+"Μετασχηματισμένο Σχήμα "+index+": "+shape_info[shape_info.length - 1].basic_shape.string.type+"</a>";
            cel1.innerHTML = pop;    
            var cel2 = row.insertCell(1);
            cel2.style.backgroundColor = shape_info[shape_info.length - 1].color;
            index++;
        });
        
    } 
}

function clearInformationTable(){
    var table = document.getElementById("shapesTable");
	if(table != null){//Delete the table
		while(table.rows.length > 0) {
			table.deleteRow(0);
		}
    }
}
