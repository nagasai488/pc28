class launcher
{
	constructor(pointA ,pointB)
	{
		var options={
            pointA:pointA,
            pointB:pointB,
            stiffness:0.004,			
            lenght:10
        }
		this.pointB=pointB;
		
		this.launcher= constraint.create(options)
 		World.add(world, this.launcher);

	}
   fly(){

    this.launcher.bodyA=null
   }

   launch(bodyA){
       this.launcher.bodyA=bodyA
   }

	display()
	{}
			
	}
