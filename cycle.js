img="";
status="";
function setup(){
    canvas=createCanvas(640,420);
    canvas.center();
    objectDetector=ml5.objectDetector('cocossd',ModelLoaded);
    document.getElementById("status").innerHTML="Status:Detecting Objects";
}
function preload(){
img=loadImage("CYCLE AND PEOPLE.jpg");
}
function draw(){
image(img,0,0,640,420);
fill("#000000");
text("PERSON",45,75);
noFill();
stroke("#FF0000");
rect(45,35,300,510);
fill("#000000");
text("CYCLE",210,160);
noFill();
stroke("#FF0000");
rect(200,150,300,510);

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