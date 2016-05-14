
function Statement( output ){
    this._x = x;
    this._y = y;
    this.w = 100;
    this.h = 100;
    this.clicked = false;
    this.hover = false;
    this.content = label;
    this.fillColor = "#cccc00";
    this.hoverColor = "#ffff00"
    this.clickedColor = "#00ff00";
    this.strokeColor = "#000000";

    this.inlet = { 
    	x: this.x+this.w/2, 
    	y: this.y 
    };

    this.outlet = { 
    	x: this.x+this.w/2, 
    	y: this.y + this.h 
    };

    // draw node
    this.draw();

}

Object.defineProperty( StartEnd.prototype, "x", {
	get: function() {
		return this._x;
	},
	set: function( val ) {
		this._x = val;
	    this.inlet = { 
	    	x: val + this.w/2, 
	    	y: this.y 
	    };
	    this.outlet = { 
	    	x: val + this.w/2, 
	    	y: this.y + this.h 
	    };	
	}
});

Object.defineProperty( StartEnd.prototype, "y", {
	get: function() {
		return this._y;
	},
	set: function( val ) {
		this._y = val;
	    this.inlet = { 
	    	x: this.x + this.w/2, 
	    	y: val 
	    };
	    this.outlet = { 
	    	x: this.x + this.w/2, 
	    	y: val + this.h 
	    };	
	}
});

StartEnd.prototype.draw = function(){

	if( this.clicked ){
		ctx.fillStyle = this.clickedColor;
	}
    else if( this.hover ){
    	ctx.fillStyle = this.hoverColor;
    }
    else {
    	ctx.fillStyle = this.fillColor;
    }

    ctx.strokeStyle = this.strokeColor;
    ctx.beginPath();
    ctx.rect( this.x, this.y, this.w, this.h );
    ctx.closePath();
    ctx.fill();
    ctx.stroke();

    ctx.fillStyle = "#000000";
    ctx.font = '20px Arial';
    ctx.textAlign = "center";
    ctx.textBaseline = 'middle';
    var txty = this.y + this.h/2;
    var txtx = this.x + this.w/2;
    ctx.fillText( this.content, txtx, txty );

};

StartEnd.prototype.mouseOver = function( mx, my ){

	if( 
		mx > this.x && mx < this.x+this.w &&
		my > this.y && my < this.y+this.h
	){
		this.hover = true;
	}
	else {
		this.hover = false;
	}

}

StartEnd.prototype.mouseClick = function( mx, my ){

	if( 
		mx > this.x && mx < this.x+this.w &&
		my > this.y && my < this.y+this.h
	){
		this.clicked = !this.clicked;
	}


}