var bg
var map, heart, tri

function preload(){
   bg=loadImage('Images/BG.jpg')
   map=loadImage('Images/map.png')
   heart=loadImage('Images/heart.png')
   tri=loadImage('Images/tri.png')
}

function setup(){
    createCanvas(1500,680)

    box1=createSprite(580,237,1000,150)
    box2=createSprite(289,440,500,320)
    

    player=new Player()
    deer=new Deer()
    tiger1=new Tiger(650,450)
    power1=new Power(width/2,height/2)
    
}

function draw(){
    image(bg,0,0, width, height)

    

    if(keyDown('left')){
        player.sprite.x-=10
        player.sprite.y+=0
    }
    if(keyDown('right')){
        player.sprite.x+=10
        player.sprite.y+=0
    }
    if(keyDown('up')){
        player.sprite.x+=0
        player.sprite.y-=10
    }
    if(keyDown('down')){
        player.sprite.x+=0
        player.sprite.y+=10
    }
    
    console.log(mouseX)
    console.log(mouseY)

    camera.position.x=player.sprite.x
    camera.position.y=player.sprite.y
    
   
    drawSprites()
}   

