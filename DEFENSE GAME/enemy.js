class Enemy{
    constructor(x,y,path){
        this.x = x;
        this.y = y;
        this.path = path;
        this.hp;
        this.speed;
        this.moveProgress;
    }

    move(){
        incline = ((this.path[this.moveProgress[0]].points.x - this.path[this.moveProgress[0]+1].points.x)/(this.path[this.moveProgress[0]].points.y - this.path[this.moveProgress[0]+1].points.y))
        theta = Math.atan(incline)
        this.x += Math.cos(Math.PI*theta/180)*this.speed
        this.y += Math.cos(Math.PI*theta/180)*this.speed
    }
}
console.log("enemy available");