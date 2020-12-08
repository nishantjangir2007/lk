class box{

    constructor(x,y){
        var options ={
            restitution: 1
        }
        this.body = Bodies.rectangle(x,y,50,50,options);
        World.add(world,this.body);
    }

    display(){

        var angle = this.body.angle;

        push();
        translate(this.body.position.x,this.body.position.y);
        rotate(angle);
        rectMode(CENTER);
        rect(0,0,50,50);
        pop();
    }
}
