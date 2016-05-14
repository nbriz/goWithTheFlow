function StartEnd( label, x, y ){

	this.x = x;
    this.y = y;
    this.w = 100;
    this.h = 100;
    this.PI = 13.142
    this.clicked = false;
    this.hover = false;
    this.content = label;
    this.fillColor = "#D496D0";
    this.hoverColor = "#FFB3FA"
    this.clickedColor = "#00ff00";
    this.strokeColor = "#000000";



    // this._x = x;
    // this._y = y;
    // this.x = x;
    // this.y = y;
    // this.w = 100;
    // this.h = 100;
    // this.clicked = false;
    // this.hover = false;
    // this.content = label;
    // this.fillColor = "#cccc00";
    // this.hoverColor = "#ffff00"
    // this.clickedColor = "#00ff00";
    // this.strokeColor = "#000000";



    // this.inlet = { 
    // 	x: this.x+this.w/2, 
    // 	y: this.y 
    // };

    // this.outlet = { 
    // 	x: this.x+this.w/2, 
    // 	y: this.y + this.h 
    // };

    // draw node
    this.draw();

}

// Object.defineProperty( StartEnd.prototype, "x", {
// 	get: function() {
// 		return this._x;
// 	},
// 	set: function( val ) {
// 		this._x = val;
// 	    this.inlet = { 
// 	    	x: val + this.w/2, 
// 	    	y: this.y 
// 	    };
// 	    this.outlet = { 
// 	    	x: val + this.w/2, 
// 	    	y: this.y + this.h 
// 	    };	
// 	}
// });

// Object.defineProperty( StartEnd.prototype, "y", {
// 	get: function() {
// 		return this._y;
// 	},
// 	set: function( val ) {
// 		this._y = val;
// 	    this.inlet = { 
// 	    	x: this.x + this.w/2, 
// 	    	y: val 
// 	    };
// 	    this.outlet = { 
// 	    	x: this.x + this.w/2, 
// 	    	y: val + this.h 
// 	    };	
// 	}
// });

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
    ctx.arc(this.x, this.y, 50, 0, this.PI * 2);
    ctx.fill();
    ctx.stroke();
    ctx.closePath();

    ctx.fillStyle = "#000000";
    ctx.font = '20px Arial';
    ctx.textAlign = "center";
    ctx.textBaseline = 'middle';
    // var txty = this.y - this.h/2;
    // var txtx = this.x - this.w/2;
    ctx.fillText( this.content, this.x, this.y );

};

StartEnd.prototype.mouseOver = function( mx, my ){

	if( 
		mx > this.x - this.w / 2 && mx < this.x+this.w / 2 &&
		my > this.y - this.h / 2 && my < this.y+this.h / 2
	){
		this.hover = true;
	}
	else {
		this.hover = false;
	}

}

StartEnd.prototype.mouseClick = function( mx, my ){

	if( 
        mx > this.x - this.w / 2 && mx < this.x+this.w / 2 &&
        my > this.y - this.h / 2 && my < this.y+this.h / 2
	){
		this.clicked = !this.clicked;
	}


}