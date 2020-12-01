export class Ball {
    constructor(stageWidth, stageHeight, speed){
        this.vx = speed;
        this.vy = speed;
        
        this.x = stageWidth;
        this.y = stageHeight;
    }
    draw(ctx, stageWidth, stageHeight){
        this.x += this.vx;
        this.y += this.vy;

        this.bounceball(stageWidth,stageHeight,10);
        ctx.beginPath();
        ctx.arc(this.x,this.y, 10,0,Math.PI*2,false);

        ctx.fillStyle = "red";  //채울 색상
        ctx.fill(); //채우기
    }

    bounceball(stageWidth, stageHeight,radius){
        if(this.x-radius == 0){
            this.vx = -this.vx;
        }
        if(this.x+radius == stageWidth){
            this.vx = -this.vx;
        }
        if(this.y-radius == 0){
            this.vy = -this.vy;
        }
        if(this.y+radius == stageHeight){
            this.vy = -this.vy;
        }
    }
}