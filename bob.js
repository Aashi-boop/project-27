class bob
{
    constructor(x,y)
    {
        var options={
            'isStatic':false,
            'density':0.5,
            'restitution':1,
            'friction':0.2
        }
        this.body=Bodies.circle(x,y,40,options)

        World.add(world,this.body)
    }

    display()
    {
        rectMode(CENTER)
        fill("blue")
        ellipse(this.body.position.x,this.body.position.y,80,80)
    }
}