diference=0;
nosex=0;
nosey=0;
leftwristx=0;
rightwristx=0;
function setup() {
    video=createCapture(VIDEO);
    video.size (550, 500);
    canvas=createCanvas(550,550);
    canvas.position(560,150);
    poseNet=ml5.poseNet(video, modelLoaded);
    poseNet.on('pose',gotPoses);
}
function modelLoaded(){
    console.log('posenet inicio');
}
function draw() {
    background('#969A97');
    fill('#F54321');
    stroke('#54321');
    square(nosex,nosey,diference);
}
function gotPoses(results) {
    if(results.length>0){
        console.log(results);
        nosex=results[0].pose.nose.x;
        nosey=results[0].pose.nose.y;
        console.log("nosex= "+nosex+"nosey="+nosey);
        leftwristx=results[0].pose.leftWrist.x;
        rightwristx=results[0].pose.rightWrist.x;
        diference=floor(leftwristx-rightwristx);
        console.log("leftwristx= "+leftwristx+"rightwristx= "+rightwristx+"diference= "+diference);
    }
}