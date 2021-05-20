var bg;
var multi, multiImg;
var single, singleImg;
var quiz, quizImg;

function preload(){
bg=loadImage("images/bg.jpg")
singleImg=loadImage("images/singleplayer.png")
multiImg=loadImage("images/multiplayer.png")
quizImg=loadImage("images/quiz.jpg")


}


function setup() {
  createCanvas(900,500);
  
multi=createSprite(450,300,10,10);
multi.addImage("multiplayer", multiImg);

single=createSprite(450,200,10,10);
single.addImage("singleplayer", singleImg);

quiz=createSprite(450,400,10,10);
quiz.addImage("quiz", quizImg);
quiz.scale=0.83;

}



function draw() {
  background(bg);  

textSize(50);
fill(50, 141, 168);
textFont('Georgia');
text("SEA POLLUTION GAME", 165,100)

drawSprites();
}