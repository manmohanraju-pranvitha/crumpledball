class Ground{
    constuctpr(x,y,width,height){
        var option={
            isStatic:true
        }
        this.body=Bodies.rectangle(x,y,width,height,option);
        this.width=width;
        this.height=heigth;
        World.add(world,this.body);
    }
      display(){
        var pos=this.body.position;
        rectMode(CENTER);
        fill(255);
        rect(pos.x,position.y,his.width,this.heigth);
    }
}