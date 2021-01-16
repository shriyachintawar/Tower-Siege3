const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const World = Matter.World;
const Constraint = Matter.Constraint;

var world,engine;
var ground,stand1;
var box1,box2,box3,box4,box5,box6,box8,box9,box10,box11,box12,box13,box14,box15,box16;
var polygon,polygonimg,slingshot,score=0;
var backgroundImg;

function preload(){
    polygonimg = loadImage("polygon.png");
    getBackground();
}

function setup(){
    createCanvas(1300,500);
    engine = Engine.create();
    world = engine.world;
    ground = new Ground(650,490,1300,20);
    stand1 = new Stand(390,300,250,10);
    box1 = new Box(300,275);
    box2 = new Box(330,275);
    box3 = new Box(360,275);
    box4 = new Box(390,275);
    box5 = new Box(420,275);
    box6 = new Box(450,275);
    box7 = new Box(480,275);
    box8 = new Box(330,235);
    box9 = new Box(360,235);
    box10 = new Box(390,235);
    box11 = new Box(420,235);
    box12 = new Box(450,235);
    box13 = new Box(360,195);
    box14 = new Box(390,195);
    box15 = new Box(420,195);
    box16 = new Box(390,145);

    polygon = Bodies.circle(60,200,20);
    World.add(world,polygon);

    slingshot = new Slingshot(this.polygon,{x:100,y:200});
}
function draw(){
    if(backgroundImg)
    background(backgroundImg);

    textSize(30);
    fill("white");
    text("Score: "+score,600,50);
    Engine.update(engine);
    //text(mouseX+","+mouseY,mouseX,mouseY);
    ground.display();
    stand1.display();
    fill("pink");
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    fill("lightblue");
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    fill("turquoise");
    box13.display();
    box14.display();
    box15.display();
    fill("skyblue");
    box16.display();

    box1.score();
    box2.score();
    box3.score();
    box4.score();
    box5.score();
    box6.score();
    box7.score();
    box8.score();
    box9.score();
    box10.score();
    box11.score();
    box12.score();
    box13.score();
    box14.score();
    box15.score();
    box16.score();
   

    imageMode(CENTER);
    image(polygonimg,polygon.position.x,polygon.position.y,50,50);
 
    slingshot.display();
}

function mouseDragged(){
    Matter.Body.setPosition(this.polygon,{x:mouseX,y:mouseY});
}

function mouseReleased(){
    slingshot.fly();
}

function keyPressed(){
    if(keyCode === 32){
        slingshot.attach(this.polygon);
    }
}

async function getBackground(){
    var response = await fetch("https://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON = await response.json();
    var dt = responseJSON.datetime;
    var hour = dt.slice(11,13);

    if(hour>=06 && hour<=19){
        bg = "light.png";
    }
    else{
        bg = "dark.png";
    }
    backgroundImg = loadImage(bg);

}