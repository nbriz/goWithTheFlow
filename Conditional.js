
function Conditional( label, x, y ){
    // this._x = x;
    // this._y = y;
    this.x = x;
    this.y = y;
    this.w = 100;
    this.h = 100;
    this.clicked = false;
    this.hover = false;
    this.content = label;
    this.fillColor = "#cccc00";
    this.hoverColor = "#ffff00"
    this.clickedColor = "#ffff00"
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

// Object.defineProperty( StartEnd.prototype, "x", {
//  get: function() {
//      return this._x;
//  },
//  set: function( val ) {
//      this._x = val;
//      this.inlet = { 
//          x: val + this.w/2, 
//          y: this.y 
//      };
//      this.outlet = { 
//          x: val + this.w/2, 
//          y: this.y + this.h 
//      };  
//  }
// });

// Object.defineProperty( StartEnd.prototype, "y", {
//  get: function() {
//      return this._y;
//  },
//  set: function( val ) {
//      this._y = val;
//      this.inlet = { 
//          x: this.x + this.w/2, 
//          y: val 
//      };
//      this.outlet = { 
//          x: this.x + this.w/2, 
//          y: val + this.h 
//      };  
//  }
// });

Conditional.prototype.draw = function(){

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
    // ctx.rect( this.x, this.y, this.w, this.h );
    ctx.moveTo( this.x, this.y - this.h/2);
    ctx.lineTo( this.x + this.w/2, this.y);
    ctx.lineTo( this.x, this.y + this.h/2);
    ctx.lineTo( this.x - this.w/2, this.y);
    ctx.lineTo( this.x, this.y - this.h/2);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();

    ctx.fillStyle = "#000000";
    ctx.font = '20px Arial';
    ctx.textAlign = "center";
    ctx.textBaseline = 'middle';
    // var txty = this.y + this.h/2;
    // var txtx = this.x;
    ctx.fillText( this.content, this.x, this.y );

};

Conditional.prototype.mouseOver = function( mx, my ){

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

Conditional.prototype.mouseClick = function( mx, my ){

    if( 
        mx > this.x - this.w/2 && mx < this.x+this.w/2 &&
        my > this.y - this.h/2 && my < this.y+this.h/2
    ){
        this.clicked = !this.clicked;
    }


}