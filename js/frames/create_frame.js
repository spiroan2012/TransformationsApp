function createInitialFrames(shape_chosen){
    var w = window.innerWidth - 28 ;//The x-axis position where the frame will end
    var h = window.innerHeight - 65;//The y_axis positions where the frame will end
    frames.push(createFrame({left: w - 300, top: 65}, "Πίνακας Ελέγχου", html_main_frame, 300, 490));//This frame will be positioned first just before the canvas end
    frames.push(createFrame({left: w - 550, top: 65}, "Μετασχηματισμοί", html_transformation_div, 250, 620));
    frames.push({frame: createFrame({left: w - 800, top: 65}, "Σχήματα", html_information_frame, 250, 550), is_shown: false});//The cell for the information frame stores an object with two fields. The frame field contains the frame and the is_shown field is  a boolean variable which is true if the information frame is displayed to the user, false elsewhere
    $("#collapse1").addClass("in");
    createTriangleDiv();
    createTransportationDiv();
}

function createFrame(position, frameTypeString, html, width, height){
    var appear = jsFrame.createPresetStyle('redstone');//Windows 10 style
    const frame = jsFrame.create({
        title: frameTypeString,
        resizable: false,
        left: position.left, top: position.top, width: width, height: height,
        style: {
            backgroundColor: 'rgba(255,255,255,0.5)',
            overflow: 'hidden',
            fontSize: '13px'//The size of the frame labels
        },
        appearance: appear,
        html: html
    });
    frame.setControl({
        minimizeButton: 'minimizeButton',
        deminimizeButton: 'deminimizeButton',
        hideButton: false,
        animation: true,
        animationDuration: 150
    });
    frame.hideFrameComponent('maximizeButton');//We don't need the maximize button so we hide it
    frame.hideFrameComponent('closeButton');//We don't need the close button so we hide it

    frame.on('deminimizeButton', 'click', (_frame) => {//Event for deminimizing the frame (Restored from minimized state)
        _frame.control.doDeminimize({
            duration: 200
        });
    });
    
    if(frameTypeString == "Πίνακας Ελέγχου"){//The event should be included only if the frame created is the main frame
        $('#collapse2').on('show.bs.collapse', function(e){//Event triggered when the user clicks the 2nd accordion element
            if(ShapesDrawing.shapes.length == 0){
                alert("Για να εισάγετε μετασχηματισμούς θα πρέπει να έχετε σχεδιάσει τουλάχιστον ένα σχήμα");
                e.preventDefault();
            }
        });
    }

    return frame;
} 