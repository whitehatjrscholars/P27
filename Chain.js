class Chain {
    constructor(bodyA, bodyB, offsetX, offsetY){
        this.offsetX = offsetX;
        this.offsetY = offsetY;

        var options = {
            bodyA: bodyA,
            bodyB: bodyB,
            length: 250,
            stiffness: 1,
            pointB:{x: this.offsetX, y: this.offsetY},

        }

        this.chain = Constraint.create(options);
        World.add(world, this.chain)
    }
    display(){
        var posA = this.chain.bodyA.position;
        var posB = this.chain.bodyB.position;
        var pointB = this.chain.pointB
        line(posA.x, posA.y, posB.x + pointB.x, posB.y + pointB.y)
        //console.log(pointB.x)
        //console.log(posB.x)
    }
}