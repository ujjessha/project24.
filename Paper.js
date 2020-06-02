class Paper{
    constucture(x,y,radius){
        
        var options={
            isStatic:false,
            restituution:0.3,
            friction:0.5,
            density:1.2

        }
    }
    this.body = Bodies.circle(x, y, radius, options);
    this.width = width;
    this.height = height;
    
    World.add(world, this.body);
  

 display(){

    var pos=this.body.position
    push();
    translate(pos.x, pos.y);
    ellipse(0,0,this.width,this.height);
    pop();

}
}
