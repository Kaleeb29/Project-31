class Plinko{
    constructor(x,y,radius){
        var options = {
            'isStatic':true
        }
        this.radius = radius
        this.body = Bodies.circle(x,y,radius,options);
        World.add(world,this.body);
    }
    display(){
    ellipseMode(RADIUS);
    ellipse(0,0,this.radius,this.radius);
    }
};