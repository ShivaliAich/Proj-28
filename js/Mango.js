class Mango {
    constructor (x,y,radius) {
       var options ={
          isStatic : true,
          restitution : 0,
          friction : 1,
       } 
       
       this.radius = radius;
       this.body = Bodies.circle(x, y, this.radius,options);       
       this.mango = loadImage("images/mango.png");
       World.add(world, this.body);
    }
 
    display(){
       var pos = this.body.position;
       var angle = this.body.angle;
 
       push();
       translate(pos.x, pos.y);
       rotate(angle);
       noStroke();
       fill("yellow");
       imageMode(CENTER);
       image(this.mango,0, 0, this.radius,this.radius);
       pop();
    }
 }