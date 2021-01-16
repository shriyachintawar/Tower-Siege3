class Box{

    constructor(x,y){
        var options ={
            'restitution':0.4
           
           
        }
        this.body = Bodies.rectangle(x,y,30,40,options);
        this.width = 30;
        this.height = 40;
        this.Visiblity = 255;
        World.add(world,this.body);
    }
    display(){
       
        if(this.body.speed<3){
            var pos = this.body.position;
            var angle = this.body.angle;
        //angleMode(RADIANS);
        push();
       
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
       
        rect(0,0,this.width,this.height);
        pop();
        }
        else{
            World.remove(world,this.body);
            push();
            this.Visiblity = this.Visiblity - 5;
            pop();
        }
    }
    score(){
        if(this.Visiblity <0 && this.Visiblity> -105){
            score++;
        }
    }
}