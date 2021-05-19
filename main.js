function setup(){
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/GT9vj5-XP/model.json",modelloaded);
}

function draw(){
    image(video,0,0,300,300);
    classifier.classify(video,gotresult);
  }
  
  function modelloaded(){
    console.log("Model loaded succesfully")
  }
  
  function gotresult(e,r){
    if(e){
    console.error(e);
    }
    else{
      console.log(r);
      document.getElementById("Object").innerHTML = r[0].label;
      document.getElementById("Accuracy").innerHTML = r[0].confidence.toFixed(3);
    }
  }
  