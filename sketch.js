
var Player
var Shooter
var Alien1
var Alien2
var bulletimg
var aliengrp1
var aliengrp2
var bulletgrp

function preload(){
  Shooter = loadImage("Gun2.png")
  Alien1 = loadImage("Alien 1.png")
  Alien2 = loadImage("Alien 2.png")
  bulletimg = loadImage("bullet-clipart-8.png")
}

function setup() {
  createCanvas(800, 800);
  
  Player = createSprite(400,700,20,30)
  Player.addImage(Shooter)
  aliengrp1 = new Group()
  aliengrp2 = new Group()
  bulletgrp = new Group()
 
  
  
 
}

function draw (){
  background("Black")
Player.x = mouseX
obstacle();
obstacle2();
if (keyDown("space")){
  var bullet = createSprite (Player.x,Player.y,10,10)
  bullet.velocityY = -6
  bullet.addImage(bulletimg)
  bullet.scale = 0.1
  bulletgrp.add(bullet)
}
if(bulletgrp.isTouching(aliengrp1)){
  aliengrp1.destroyEach()
}
if(bulletgrp.isTouching(aliengrp2)){
  aliengrp2.destroyEach()
}
for (var i=0;i<aliengrp1.length;i++){
console.log("hello")
 if(aliengrp1.get(i).isTouching(bulletgrp)){
   aliengrp1.get(i).destroy()
 console.log("hii")
 }
}
  drawSprites()

}

function obstacle (){
  if (frameCount%60  === 0) {
    
    var obstacle1 =createSprite(random(0,800),0,60,90) 
    obstacle1.velocityY = 4
    
    obstacle1.addImage("Alien1",Alien1)
    obstacle1.scale = 0.5
    aliengrp1.add(obstacle1)
  }


}

function obstacle2 (){
  if (frameCount%120 === 0){
    var obstacle2 = createSprite(random(0,800),0,30,40)
    obstacle2.velocityY = 4

    obstacle2.addImage("Alien2",Alien2)
    obstacle2.scale = 0.5
    aliengrp2.add(obstacle2)


  }
}
