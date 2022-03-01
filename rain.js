class RainDrop{
    constructor(){
        this.x = random(0, width);
        this.y = random(-height,0);
        this.speed = random(5,10);
        this.width = map(this.speed,5,10,0,3); //0-3
        this.height = map(this.speed,5,10,20,50); //20-50
        this.rainColor = map(this.speed,5,10,15,255); // 150-255
    }

    Move(){
        this.y = this.y += this.speed;
        if(this.y > height){
            this.Reset();
        }
    }

    Reset(){
        this.x = random(0, width);
        this.y = random(-height,0);
        this.speed = random(5,10);
        this.width = map(this.speed,5,10,0,3); //0-3
        this.height = map(this.speed,5,10,20,50); //20-50
        this.rainColor = map(this.speed,5,10,15,255); // 150-255
    }

    Show(){
        noFill();
        stroke(138,43,226,this.rainColor);
        strokeWeight(this.width);
        line(this.x, this.y, this.x, this.y + this.height);
    }
}