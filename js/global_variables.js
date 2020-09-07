var canvas = document.getElementById('myCanvas');
const jsFrame = new JSFrame();//Object of JSFrame library
var ctx = canvas.getContext('2d');//Global Variable that holds the canvas
var frames = [];//Array that contains all the frames for shape drawing and shape transformation
var canvas_x;//Global Variable that holds the width of the canvas
var canvas_y;//Global variable that holds the height of the canvas
var draw_x_min = 0, draw_x_max = 40;//Global variable that stores the minimum and maximum values of the coordinate
var draw_y_min = 0, draw_y_max = 20;
var sx, sy;
var shape_draw;//Instance of ShapeDrawing class 
var transformation_draw_mode = null//Variable that stores the selected mode(selected radio button) during the time when the user clicks the implement transformation button
var draw_min, draw_max;
var margin = {left: 25, right: 25, to: 25, bottom: 25};
var number_of_polygon_points = 4;//The number of points for polygon (Default: 4)
const limit = 15;//The limit of the number of points for polygon (15)
var BB;
var offsetX, offsetY;