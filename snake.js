function Snake(){
	this.x = 80;
	this.y = 250;
	this.xspeed = 0;
	this.yspeed = 0;
	this.dir = function(x,y){
		this.xspeed = 0;
		this.yspeed = y;

	}
	this.stay = function(){
		this.yspeed = 0;
	}
	this.update = function (){
		check();
		
		this.x = this.x + this.xspeed*10;
		this.y = this.y + this.yspeed*10;
	
		this.y = constrain(this.y,0,height-100);
		this.x = constrain(this.x,0,width);
}
	this.show = function (){
		fill(255);
		rect(this.x,this.y,10,100);
	}
	//this.keyReleased = function(){
	//	this.y=this.y;
	//}
}