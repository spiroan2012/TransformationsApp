$(document).ready(function(){
    ShapesDrawing.initialiseColorList();
    createInitialFrames();
    frames[0].show();
    frames[1].show();
    $("#transTable").tableDnD();

    setCanvasSize();
    transformCoords();
    drawAxes();
    BB=canvas.getBoundingClientRect();
    offsetX=BB.left;
    offsetY=BB.top;    
    // canvas.addEventListener('click', function() { //Listener that activate the click event when the user clicks on the canvas. If the user has closed (hide) the frame, it will be reshowed.
    //     frames[0].show();
    //     frames[1].show();
    //     if(frames[2].is_shown){
    //         frames[2].frame.show();
    //     }
    // }, false);
    Transformation.initialiseTransformationId();//Initialise the transformation id to zero
    Polygon.initialiseShapeId();
    var popOverSettings = {//Popovert settings
        placement: 'left',
        container: 'body',
        trigger: 'hover',
        html: true,
        selector: '[data-toggle="popover"]', //Sepcify the selector here
        content: function () {
            return $('#popover-content').html();
        }
    }
    $('body').popover(popOverSettings);
    //Settings for the popover and bind of the dynamic popover
    $('body').on("click", "[data-toggle=\"popover\"]", function (e) {
        e.preventDefault();
    });
});