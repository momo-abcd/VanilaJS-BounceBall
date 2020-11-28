export class Ball {
    constructor(){

    }
    draw(ctx, stageWidth, stageHeight){
        stageHeight = 3;
        stageWidth = 3;
        ctx.beginPath();
        ctx.arc(stageWidth,stageHeight, 10,0,Math.PI*2,false);

        ctx.fillStyle = "red";  //채울 색상
        ctx.fill(); //채우기


    }
}