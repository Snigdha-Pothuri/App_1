var a,logoimg ,button,b,bimg 
var score = 0;
var START = 0;
var PLAY = 1; 
var QUIZ =  2;
var gameState = START;

 function preload () {
   logoimg=loadImage("logo.png") 
   bimg = loadImage("i.jpg") 
   qimg1 = loadImage("q1 (1).png")
   qimg2 = loadImage("q2 (1).png") 
   qimg3 = loadImage("q3 (1).png") 
   qimg4 = loadImage("q4 (1).png")
   qimg5 = loadImage("q5 (1).jpg") 
   h=loadImage("home.jpg")
 }
function setup() {
  createCanvas(400,500); 

  a=createSprite(200, 300, 50, 50); 
  a.addImage("a1",logoimg)  
  a.scale = 0.35; 


  b=createSprite(200, 120, 50, 50); 
  b.addImage("b1",bimg)  
  b.scale = 0.35;

  button = createButton("Get Started :)"); 
  button.position (150,390); 
  
}

function draw() {   

if(gameState === START) { 
  background("#CB9BE2");   

  fill("black")
  textSize(20) 
  //textFont("Black Jack")
  text("Learn how to stop wasting your time &",20,450) 
  text("Develop your personality",20,470)

 

  
  button.mousePressed (()=>{
    gameState = PLAY;
      })
} 
 else if(gameState === PLAY) {
    background("#BEF0F4") 
    a.destroy();
    b.destroy();
   button.hide(); 

   /* fill("black") 
    textSize(25)
    text("What type of person are you?",20,50);
    textSize(30)
    text("Take this test to find out ",20,100)
    text("more about yourself",20,150) 
     textSize(20);
    text("Click on the below button to start the quiz",20,200) 
      
    button1 = createButton("Start Quiz"); 
    button1.position (150,250); */  

    c=createSprite(200, 120, 50, 50); 
    c.addImage("h1",h)  
    c.scale = 0.45;
  
    button1 = createButton("Personality Quiz"); 
    button1.position (20,250); 

    b1 = createButton("Tips to stop procastinating"); 
    b1.position (20,300);

    b2 = createButton("Chat"); 
    b2.position (20,350); 

    b3 = createButton("Talk to an expert"); 
    b3.position (20,400);

    button1.mousePressed (()=>{
      gameState = QUIZ;
        })
  
  } 

  if(gameState === QUIZ) { 
    background("#F6B6D1")
    c.destroy();
    button1.hide();
    b1.hide();
    b2.hide();
    b3.hide();

    button2 = createButton("A) Yes"); 
    button2.position (20,250); 

    button3 = createButton("B) No"); 
    button3.position (20,300); 
    
    button4 = createButton("C) Sometimes/Maybe"); 
    button4.position (20,350); 

    var q = createSprite(200,100,50,50); 
    q.addImage("1",qimg1)   

    
    button2.mousePressed (()=>{ 
      q.addImage("2",qimg2)
        })


  }

  drawSprites(); 
 
} 
function hide () {
  button1.hide();
}

