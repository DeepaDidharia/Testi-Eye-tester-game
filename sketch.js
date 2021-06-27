var bg,bg2,form,system,code,security , security2;
var score=0 , sound;
var pic1Img , pic1 , pic2Img , pic3Img , pic4Img , pic5Img , pic6Img ;
var pic2 , pic3 , pic4 , pic5 , pic6;
var end ;


function preload() {
  bg = loadImage("bg.jpg");
bg2 = loadImage("bg2.png");
pic1Img = loadImage("pic1.png");
pic2Img = loadImage("pic2.png");
pic3Img = loadImage("pic3.png");
pic4Img = loadImage("pic4.png");
pic5Img= loadImage("pic5.png");
pic6Img = loadImage("pic6.png");
sound = loadSound("click.wav")

}

function setup() {
  createCanvas(1200,1000);
  system = new System()
  security = new Security()
 

}

function draw() {
  background(bg);

  q1();
  q2();
  q3();
  q4();
  q5();
  q6();
  q7();
  q8();
  q9();
  q10();
  q11();
  q12();
  note();
  security.display();


  fill ("black")
  stroke("white")
  textSize(30);
  text("Score:"+ score , 534 ,48);



if(score === 12){
 clear();
 background(bg2)
  fill ("black")
  stroke("white")
  textSize(90);
  text("Well done !!!" , 50 , 200);
  text(" done !!!" , 50 , 600);
  textSize(80)
  text("Your eye " , 800 , 200);
  text(" power " , 800 , 400);
  text(" is awsome" , 800 , 600);
}


  drawSprites();

}

