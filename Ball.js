class Ball {
    constructor(x, y, radius){

        var options = {
            isStatic: false,
            restitution: 1.2
        }

        this.body = Bodies.circle(x, y, radius/2, options)
        this.radius = radius;

        World.add(world, this.body)
    }
    display(){
        var pos = this.body.position
        push();
        fill("pink");
        ellipse(pos.x, pos.y, this.radius)
        pop()
    }
}