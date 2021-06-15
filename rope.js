class Rope{
    constructor(bodyA,pointB){
        var options ={
            bodyA:bodyA,
            pointB:pointB,
            stiffness:0.03,
            length:150
        }
        this.sling=Constraint.create(options)
        this.pointB=pointB
        World.add(world,this.sling)
        
    }
    
    display(){
        
       
        push()
        strokeWeight(4)
        stroke("brown")
       

        
        line(this.sling.bodyA.position.x,this.sling.bodyA.position.y,this.pointB.x,this.pointB.y)
       
        pop()   
        }
    }
