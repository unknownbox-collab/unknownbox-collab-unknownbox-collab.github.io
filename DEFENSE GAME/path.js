class Path{
    constructor(...point){
        this.points = []
        point.forEach(element => {
            this.points.push({x:element[0],y:element[1]})
        });
    }

    draw(){
        if (canvas.getContext){
            var ctx = canvas.getContext('2d');  
            for(i=0; i<this.points.length-1; i++){
                ctx.moveTo(this.points[i], this.points[i]);
                ctx.lineTo(this.points[i+1], this.points[i+1]);
                ctx.stroke();
            }
        }
    }
}
var maps = [
    new Path([0,0],[10,0],[100,400],[200,150])
]
console.log("path available");