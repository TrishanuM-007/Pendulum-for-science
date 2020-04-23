class Chain{
    constructor(bodyA,bodyB){
        var options ={
            stiffness: 0.5,
            length: 225,
            bodyA: bodyA,
            bodyB:bodyB
    
        }
       this.chain = Matter.Constraint.create(options)
       World.add(world,this.chain)
    }
    display(){
    var A = this.chain.bodyA.position
    var B = this.chain.bodyB.position
    strokeWeight(5)
    stroke("brown");
    line(A.x,A.y,B.x,B.y)
    
    }
    
    }