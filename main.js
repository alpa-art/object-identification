img="";
status="";

function preload()
{img=loadImage('dog_cat.jpg')}
function setup()
{
  canvas=createCanvas(640,420);
    canvas.center();
objectDetector= ml5.objectDetector('cocossd',modelLoaded);
document.getElementById("status").innerHTML="Status : Detecting Objects";
}
function modelLoaded()
{
    console.log("Model Loaded!");
    status=true;
    objectDetector.detect = (img, gotResult);

}
function gotResults(error,results)
    {
if (error){
    console.log(error);
}
console.log(results);
    }



function draw()
{
    image(img,0,0,640,420);
    Fill("#FF0000");
    text("Dog",45 , 75);
    nofill();
    stroke("#FF0000");
    rect(30,60,40,350);
    fill("#FF0000");
    text("cat",320,120);
    noFill();
    stroke("FF0000");
    rect(300,90,270,320);
}