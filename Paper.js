class Paper{
  constructor(x,y,r)
	{
	// assign options to the rubber ball
	var options={
        isStatic:false,
restitution:0.3,
friction:0,
density:1.2
	}
		this.x=x;
		this.y=y;
		this.r=r;
		this.body=Bodies.circle(this.x, this.y, (this.r-20)/2, options)
        this.img=loadImage("paper.png")
		World.add(world, this.body);

	}
	display()
	{
			var rubberpos=this.body.position;	
            var angle=this.body.angle;	
			push()
			translate(rubberpos.x, rubberpos.y);
rotate (angle)
imageMode(CENTER)
image(this.img,0,0,this.r,this.r)
pop ()}

}