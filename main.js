
 
function preload() {

	// ------------------- FUNCIONES DE SONIDO------------------
	mario_gameover = loadSound("gameover.wav");
	mario_jump = loadSound("jump.wav")
	mario_coin = loadSound("coin.wav")
	mario_kick = loadSound("kick.wav")
	mario_die =  loadSound("mariodie.wav")
    world_start = loadSound("world_start.wav")
	
	setSprites();
	MarioAnimation();
    
}

function setup() {
	canvas = createCanvas(1240,336);
	canvas.parent("lienzo");
	video = createCapture(VIDEO);
	video.size(800,400);
	video.parent("camara");
	pozenet = ml5.poseNet(video,modelLoaded);
	pozenet.on("pose",gotPoses);

//-----------CREA TU LIENZO CON MEDIDAS 1240 X 336 --------------------------




   
instializeInSetup(mario);

//---------------CARGA TU LIENZO EN UN DIV PARA PODER VERLO ----------------




//---------------CARGA TU CAMARA CON VIDEO Y PONLE EL TAMAÑO DEL LIENZO ------------



//---------------CARGA LA CÁMARA SOBRE UN DIV PARA VERLA -------------------
	


//---------------CARGA Y ACTIVA EL MODELO POSENET PARA QUE DETECTE TU NARIZ-----------------




}


//-------COMPLETA LA FUNCION DE MODELO CARGADO ------------

function modelLoaded() 
{
	console.log("El modelo se cargo exitosamente");
}



//------------CREA LA FUNCIÓN gotPoses PARA LEER LA POSICION DE LA NARIZ --------------

function gotPoses(results)
{
	console.log(results);
	if(results.length>0){
		console.log(results);
		noseX = results[0].pose.nose.x
		noseY = results[0].pose.nose.y
	}
}
   

function draw() 
{
	game();
}





