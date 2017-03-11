function Enemy(){
	this.x = 520;
	this.y = 250;
	this.xspeed = 0;
	this.yspeed = 0;
	this.dirs = function(x,y){
		this.xspeed = 0;
		this.yspeed = y;

	}
	this.stays = function(){
		this.yspeed = 0;
	}
	this.updates = function (){
		
		
		this.x = this.x + this.xspeed*10;
		this.y = this.y + this.yspeed*10;
	
		this.y = constrain(this.y,0,height-100);
		this.x = constrain(this.x,0,width);
}
	this.shows = function (){
		fill(255);
		rect(this.x,this.y,10,100);
	}








}