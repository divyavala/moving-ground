class Ground {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true
      }
      this.groundImage = loadImage('ground.png');
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      pos.x-=3
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      imageMode(CENTER);
      image(this.groundImage, 0, 0, this.width, this.height);
      pop();
    }
  };
