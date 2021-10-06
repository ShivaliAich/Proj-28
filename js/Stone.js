class Stone {
    constructor (x,y,radius) {
       var options ={
          isStatic : false,
          restitution : 0,
          friction : 1,
          density : 1.2,
       } 
       
       this.radius = radius;
       this.body = Bodies.circle(x, y, this.radius,options);       
       this.stone = loadImage("images/stone.png");
       World.add(world, this.body);
    }
 
    display(){
       var pos = this.body.position;
       var angle = this.body.angle;
 
       push();
       translate(pos.x, pos.y);
       rotate(angle);
       noStroke();
       fill("white");
       imageMode(CENTER);
       image(this.stone,0, 0, this.radius,this.radius);
       pop();
    }
 }