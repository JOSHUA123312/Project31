class Plinko {
    constructor(x, y) {
      var options = {
          isStatic:true,
      }
      this.body = Bodies.circle(x,y,14, options);
      this.x=x
      this.y=y
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push();
      translate(pos.x,pos.y)
      ellipseMode(CENTER);
      fill("white");
      ellipse(0,0,14);
      pop();
    }
  };