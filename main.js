nose_x = 0;
nose_y = 0;
difference = 0;
right_wrist_x = 0;
left_wrist_x = 0;

function setup(){
    video = createCapture(VIDEO);
    video.size(550,500);
    canvas = createCanvas(550,500);
    canvas.position(560,150);
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose',gotPoses);
}
function modelLoaded(){
    console.log('poseNet is inizialised');
}
function draw(){
background('red');
fill('blue');
stroke('blue');
square(nose_x,nose_y,difference);
}


function preload (){

}
function gotPoses(results){
if (results.lenght>0){
    console.log(results);
    nose_x = results[0].pose.nose.x;
    nose_y = results[0].pose.nose.y;
    console.log("nose_x ="+ nose_x +" nose_y ="+ nose_y);
    left_wrist_x = results[0].pose.leftWrist.x;
    right_wrist_x = results[0].pose.rightWrist.x;
    diffrence = floor(left_wrist_x - right_wrist_x);
    console.log("left_wrist =" + left_wrist_x + "right_wrist_x" + right_wrist_x + "difference =" + difference);
    document.getElementById("square_sides").text = "width and height of square is -" + difference;
}
}