class Mango{
 
    constructor(x,y,r){
     var options={
          isStatic:true,
          restitution:0,
          friction:1,
     }
     this.x=x;
     this.y=y;
     this.r=r;
     this.body=Bodies.circle(this.x,this.y,this.r/3,options);
     World.add(world,this.body);
     this.image=loadImage("mango.png");
    }
    display(){
       var mangopos=this.body.position;
       var angle= this.body.angle;
       push();
       translate(mangopos.x,mangopos.y);
      rotate(angle);
      rotate(this.body.angle);
       //rectMode(CENTER);
       strokeWeight(3);
       //fill("red");
       imageMode(CENTER);
       ellipseMode(RADIUS);
       image(this.image,0,0,this.r*2,this.r*2);
       pop();
      }
    };

