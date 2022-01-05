img="";
status="";
function setup(){
    canvas=createCanvas(640,420);
    canvas.center();
    objectDetector=ml5.objectDetector('cocossd',ModelLoaded);
    document.getElementById("status").innerHTML="Status:Detecting Objects";
}
function preload(){
img=loadImage("BED AND FRAME.JPG");
}
function draw(){
image(img,0,0,640,420);

fill("#000000");
text("BED",20,239);
noFill();
stroke("#FF0000");
rect(12,230,800,950);

fill("#000000");
text("FRAME",180,120);
noFill();
stroke("#FF0000");
rect(175,100,150,120);


}
function ModelLoaded(){
console.log("Model Loaded!");
status=true;
objectDetector.detect(img,gotResults);
}
function gotResults(error,results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results)
    }
}
function back(){
    window.location="index.html";
}