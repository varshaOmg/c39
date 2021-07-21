var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;
var trackimg , car1img ,car2img ,car3img,car4img,groundimg

var form, player, game;

var cars, car1, car2, car3, car4;

function preload(){
  trackimg = loadImage("images/track.jpg")
  car1img = loadImage("images/car1.png")
  car2img = loadImage("images/car2.png")
  car3img = loadImage("images/car3.png")
  car4img = loadImage("images/car4.png")
  //groundimg = loadImage("images/ground.png")
}
  

function setup(){
  canvas = createCanvas(displayWidth , displayHeight-10);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
}
