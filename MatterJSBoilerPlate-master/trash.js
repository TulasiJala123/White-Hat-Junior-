class trash{
    constructor(x,y,width,height);{
        var options = {
        'density' =1.0;
        'restitution' = .8;
        'density' = 1.0;
    
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = 10;
        this.height = 10;
    }
        World.add(world, this.body);

    display(){
        var pos = this.body.position;
        rectMode(CENTER);
        fill('red');
        rect(pos.x,pos.y,this.width,this.height);
        pop();
    
    }
};