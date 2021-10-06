class String{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness : 0.004,
            length : 1,
        }
        this.string = Matter.Constraint.create(options);
        World.add(world, this.string);
    }

    display(){
        if(this.string.bodyA){
        var pointA = this.string.bodyA.position;
        var pointB = this.string.pointB;
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }
    fly (){
        this.string.bodyA = null;
    }
}