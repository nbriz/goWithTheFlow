
function Statement( label, x, y ){
    // this._x = x;
    // this._y = y;
    this.x = x;
    this.y = y;
    this.w = 100;
    this.h = 55;
    this.clicked = false;
    this.hover = false;
    this.content = label;
    this.fillColor = "#55A35A";
    this.hoverColor = "#8BEF91"
    this.clickedColor = "#8BEF91";
    this.darkColor = "#55A35A";
    this.lightColor = "#8BEF91"
    //clickedColor that will be the line color : #00ff00
    this.strokeColor = "#000000";

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

// Object.defineProperty( Statement.prototype, "x", {
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

// Object.defineProperty( Statement.prototype, "y", {
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

Statement.prototype.draw = function(){

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
    ctx.rect( this.x - this.w/2, this.y - this.h/2, this.w, this.h );
    ctx.closePath();
    ctx.fill();
    ctx.stroke();

    ctx.fillStyle = "#000000";
    ctx.font = '20px Arial';
    ctx.textAlign = "center";
    ctx.textBaseline = 'middle';
    var txty = this.y - this.h/2 + this.h/2;
    var txtx = this.x - this.w/2 + this.w/2;
    ctx.fillText( this.content, txtx, txty );

};

Statement.prototype.mouseOver = function( mx, my ){

    if( 
        mx > this.x - this.w/2 && mx < this.x+this.w/2 &&
        my > this.y - this.h/2 && my < this.y+this.h/2
    ){
        this.hover = true;
    }
    else {
        this.hover = false;
    }

}

Statement.prototype.mouseClick = function( mx, my ){

    if( 
        mx > this.x - this.w/2 && mx < this.x+this.w/2 &&
        my > this.y - this.h/2 && my < this.y+this.h/2
    ){
        this.clicked = !this.clicked;
    }
}