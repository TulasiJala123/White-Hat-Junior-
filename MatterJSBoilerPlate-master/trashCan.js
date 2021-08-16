class trashCan{
    constructor(x,y,width,height){
        var options = {
            isStatic = true,
            'density':1.0,
            'friction':.8,
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = 10;
        this.height = 10;

        World.add(world, this.body);
    }
    display(){
    var pos = this.body.postion;
    rectMode(VARIED);
rect(pos.x,pos.y,width,height);
    }
}