var s;
function setup() {
	createCanvas(600,600);
	s = new Snake();
	e = new Enemy();
	b = new Pilka();
}

function draw() {
 	background(51);
 	b.updated();
 	b.showd(); 
 	e.updates();
 	e.shows();
 	s.update();
 	s.show();
}
function check(){
	if (b.x < e.x + e.width  && b.x + b.width  > e.x &&
		b.y < e.y + e.height && b.y + b.height > e.y) {
		b.odb(-1);

}else if(b.x < s.x + s.width  && b.x + b.width  > s.x &&
		b.y < s.y + s.height && b.y + b.height > s.y){
		b.odb(-1);
}
}
function keyReleased(){
	s.stay();
	e.stays();
}
function keyPressed(){
		if (b.x < e.x + e.width  && b.x + b.width  > e.x &&
		b.y < e.y + e.height && b.y + b.height > e.y) {
		b.odb(-1);

}else if(b.x < s.x + s.width  && b.x + b.width  > s.x &&
		b.y < s.y + s.height && b.y + b.height > s.y){
		b.odb(-1);
}
	var sa = keyCode;
	switch(sa){
		case UP_ARROW:
		s.dir(0,-1);
		//e.dirs(0,-1);
		break;
		
		case 87:
		e.dirs(0,-1);
		break;
		case 83:
		e.dirs(0,1); 
		break;
		case DOWN_ARROW:
		s.dir(0,1);
		//e.dirs(0,1);
		break;
		case keyReleased():
		s.dir(0,0);
		e.dirs(0,0);
		break;
		/*case LEFT_ARROW:
		s.dir(-1,0);
		break;
		case RIGHT_ARROW:
		s.dir(1,0);
		break;*/
	}
}

