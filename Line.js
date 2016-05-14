
function Line( start, end ){

	this.color = "#000000";
	this.width = 5;


	this.sx = start.x;
	this.sy = start.y;


	if( end == "terminate" ){
		this.ex = this.sx; // fix
		this.ey = this.sy; // fix
	} else {
		this.ex = end.x;
		this.ey = end.y;
	}

	this.draw();
}


Line.prototype.draw = function(){

	ctx.strokeStyle = this.color;
	ctx.lineWidth = this.width;
	ctx.beginPath();
	ctx.moveTo( this.sx, this.sy );
	ctx.lineTo( this.ex, this.ey );
	ctx.closePath();
	ctx.stroke();

};

