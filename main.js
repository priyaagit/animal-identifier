camera = document.getElementById("web_cam");
Webcam.set({
    width: 350,
    height: 200,
    image_format: 'png',
    png_quality: 90
});

Webcam.attach(camera);

function img_capture(){
    Webcam.snap(function(snapshot){
        document.getElementById("picture_click").innerHTML = "<img src = '"+snapshot+"' id = 'picture'/>";
    });
}

myclassifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/tpvOPb7to/model.json', loaded );

function loaded(){
    console.log("myclassifier");
}

function img_identify(){
    picture = document.getElementById("picture");
    myclassifier.classify(picture, checkresult);
}


function checkresult(error, results){
if(error){
    console.error(error);
}
else if(results){
    console.log(results);
    document.getElementById("result_object").innerHTML = results[0].label;
    document.getElementById("result_accuracy").innerHTML = (results[0].confidence  *100).toFixed(2) +"%";
}
}
