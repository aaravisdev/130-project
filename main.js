img = "";
objects= [];
status = "";
function draw(){
 image(img,0,0,600,400)
}

 function preload(){
 img = loadImage("xd.png")
 }

 function setup(){
canvas= createCanvas(600,400)
 canvas.center();
 objectDetection = ml5.objectDetector("cocossd",modelLoaded);
 document.getElementById('status').innerHTML = "Status :Detecting Objects";
 }
function modelLoaded(){
    console.log("Model loaded ");
    status = true;
    objectDetection.detect(img,gotResults);
}
function gotResults(error,results){
    if(error){
        console.log(error)
    }
    else { 
        console.log(results)
        objects= results
    }
    
}