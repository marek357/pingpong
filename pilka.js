var licz1=0, licz2=0;
function Pilka(){
	e = new Enemy();
	s = new Snake();
	this.x = 300;
	this.y = 300;
	this.xspeed = 2;
	this.yspeed = 2;
	this.los = function (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
	}
this.updated = function (){
	if (this.x === e.x && (this.y === e.y || ((this.y > e.y) && (this.y < e.y+100)))) {
				
				this.xspeed = -2;
				this.yspeed = -2;
				

		}	else if( this.x === s.x && (this.y === s.y || ((this.y > s.y) && (this.y < s.y+100)))) {
				this.xspeed = 2;
				this.yspeed = 2;
		}	

						//console.log('nope');

			if(this.x<s.x){
			this.x = s.x;
			this.y = this.los(100,500);
			
			licz1++;
			this.xspeed = this.los(-2,2);
			this.yspeed = this.los(-2,2);
			while(this.xspeed === 0 || this.yspeed === 0){
				this.xspeed = this.los(-2,2);
				this.yspeed = this.los(-2,2);
			}
			console.log(licz1 + " : " + licz2);
		}else if(this.x > e.x){
			this.x = e.x;
			this.y = this.los(100,500);
			
			licz2++;
			this.xspeed = this.los(-2,2);
			this.yspeed = this.los(-2,2);
			while(this.xspeed === 0 || this.yspeed === 0){
				this.xspeed = this.los(-2,2);
				this.yspeed = this.los(-2,2);
			}
			console.log(licz1 + " : " + licz2);
		}
		if(this.y === height-10){
			this.yspeed = this.yspeed*(-1);
		}
		if(this.y === 0){
			this.yspeed = this.yspeed*(-1);
		}
					this.x = this.x + this.xspeed;
					this.y = this.y + this.yspeed;
		
		//console.log(licz1 + " : " + licz2);
		this.y = constrain(this.y,0,height-10);
		this.x = constrain(this.x,0,width-10);
    }
    
	this.showd = function (){
		fill(255);
		rect(this.x,this.y,10,10);
	}
	this.odb = function(a){
		console.log('afdsasdf');
		this.x = this.x + this.xspeed*a;
		this.y = this.y + this.yspeed*a;
	}



}