class Dustbin{
    constructor(){
        var options ={
           isStatic : true
        }
    
      
        // Bodies.rectangle(x,y,width,height)
        this.wallBody1 = Bodies.rectangle(1180,760,20,100, {isStatic : true});
        World.add(world,this.wallBody1);

       this.wallBody2 = Bodies.rectangle(1150,760,20,100,{isStatic : true});	
        World.add(world,this.wallBody2);
            
       this.wallBody3 = Bodies.rectangle(1130,1800,200,20,{isStatic: true});
        World.add(world,this.wallBody3);
 
    }

    display(){
      

        rectMode(CENTER)
        fill("white");
        rect(this.wallBody1.position.x, this.wallBody1.position.y,20,100);
        rect(this.wallBody2.position.x, this.wallBody2.position.y,20,100);
        rect(this.wallBody3.position.x, this.wallBody3.position.y,200,20);
        
    }

}