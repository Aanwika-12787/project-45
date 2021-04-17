class BaseClass{
    constructor(x,y,w,h){
        this.image=loadAnimation("images/cloud.png","images/ground2.png")
        this.sprite=createSprite(x,y,w,h)
    }
    display(){
        this.sprite.addAnimation("ing",this.image)
    }
}