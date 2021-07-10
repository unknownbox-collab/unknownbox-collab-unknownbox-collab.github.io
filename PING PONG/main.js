class Element{
    constructor(x, y, width, height){
        this.x = x
        this.y = y
        this.width = width
        this.height = height
        this.shape = shape
    }

    ParseToRadian(degree){
        return Math.PI*degree/180
    }

    moveTo(x,y,delta,degree){
        return {x:x + Math.cos(this.ParseToRadian(degree))*delta, y:y + Math.cos(this.ParseToRadian(degree))*delta}
    }
    
    draw(){}
}

class Ball extends Element{
    constructor(x,y){
        super(x,y,10,10)
    }

    draw(){
        var canvas = document.getElementById("main");
        var ctx = canvas.getContext("2d");
        ctx.beginPath();
        ctx.fillStyle = "#FFFFFF";
        ctx.strokeStyle = "#FFFFFF";
        ctx.arc(x, y, width/2, 0, 2 * Math.PI);
        ctx.fill();
        ctx.stroke();
    }

}
var canvas = document.getElementById("main");
var ctx = canvas.getContext("2d");
ctx.beginPath();
ctx.fillStyle = "#000000";
ctx.strokeStyle = "#000000";
ctx.fillRect(0, 0, 1000, 500);
ctx.stroke();
a = new Ball(500,250);
a.draw();