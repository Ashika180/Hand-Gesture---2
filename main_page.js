name = localStorage.getItem("Name");
document.getElementById("p1").innerHTML = "<label id= 'name'> Welcome " + name + "!";  ;
document.getElementById("p1").style.color = "black";

pic = localStorage.getItem("Display Pic");
document.getElementById("dp").src = pic;

Webcam.set({
width: 400,
height: 300,
image_format: 'jpg',
jpg_quality: 90 
});

Webcam.attach("camera");

function Take_snap(){
    Webcam.snap(function(data_uri){
        document.getElementById("snap").innerHTML = "<img id= 'captured_img' src= '" + data_uri + "'>";
    })
}

console.log(ml5.version);
classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/0CGkqv05t/model.json", modelLoaded);

function modelLoaded(){
    console.log("Model Loaded!");
}