var ball;
var database;
var position;

function setup(){
    createCanvas(500,500);
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";
    database = firebase.database();
    var loc = database.ref("Ball/Position");
    loc.on("value", readon, showerror);
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        changePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        changePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        changePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        changePosition(0,+1);
    }
    drawSprites();
}
function readon(data){
    position  = data.val();
    ball.x = position.x;
    ball.y = position.y;

}
function showerror(){
console.log("100, 100");
}

function changePosition(x,y){
    database.ref("Ball/Position").set({
        x: position.x+x, 
        y: position.y+y
    })
}
