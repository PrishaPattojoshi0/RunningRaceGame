var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game, obstacle;

var players, player1, player2, player3, player4;

var track, player1_img, player2_img, player3_img, player4_img,obstacleImg;

function preload(){
  track = loadImage("track.png");
  player1_img = loadImage("racingGamePlayer1.png");
  player2_img = loadImage("player2.png");
  player3_img = loadImage("player3.png");
  player4_img = loadImage("player4.jpg");
  obstacleImg = loadImage("obstacle.jpg");
  ground = loadImage("ground.png");
}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
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
  if(gameState === 2){
    game.end();
  }
}
