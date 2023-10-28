const MAX_TICKS = 100
var tick = MAX_TICKS - 1
function setup() {
	canvas = createCanvas(300, 300);
	canvas.center();
	video = createCapture(VIDEO);
	video.hide();
	classifier = ml5.imageClassifier('MobileNet', modelLoaded())
}

function modelLoaded(){
	console.log('model_is_LOAD')
}

function draw(){
	image(video, 0, 0, 300, 300)
	classifier.classify(video, gotResult)
}

function gotResult(error, results){
	if (error){
		consele.log(error)
	} else {
		tick += 1
		if (tick == MAX_TICKS){ 
			console.log(results)
			document.getElementById('resObj').innerHTML = results[0].label
			document.getElementById('resAcc').innerHTML = results[0].confidence.toFixed(2) * 100 + "%"
			tick = 0
		}
	}
}