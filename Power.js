class Power{  
    constructor(x,y){
       this.sprite=createSprite(x,y)
       var rand=Math.round(random(1,3))
       switch(rand){
           case 1:this.sprite.addImage("power", map)
           break
           case 2:this.sprite.addImage("power", heart)
           break
           case 3:this.sprite.addImage("power", tri)
           break
       }
       
       //this.sprite.addImage("power", this.Image)
    }
    
    
}