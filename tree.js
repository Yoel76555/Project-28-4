class Tree {
    constructor(x,y,width,height){
         this.x=x;
         this.y=y;
         this.width=width;
         this.height=height;
         
         this.rightBody=Bodies.rectangle(710,640,20,100,{isStatic:true});
         World.add(world,this.rightBody);

         this.leftBody=Bodies.rectangle(840,640,20,100,{isStatic:true});
         World.add(world,this.leftBody);

         this.bottomBody=Bodies.rectangle(900,380,20,20,{isStatic:true});
         World.add(world,this.bottomBody);

         this.image=loadImage("tree.png");

         
    }
    display(){
        push();
        translate(this.rightBody.position.x,this.rightBody.position.y);
        rectMode(CENTER);
        pop();
        
        push();
        translate(this.leftBody.position.x,this.leftBody.position.y);
        rectMode(CENTER);
        pop();

        push();
        translate(this.bottomBody.position.x,this.bottomBody.position.y);
        rectMode(CENTER);
        imageMode(CENTER);
        image(this.image, 0,0,this.width-30, this.height-50);
        pop();
        }

}