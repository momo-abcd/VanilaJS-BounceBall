import {Ball} from './ball.js';
class App {
    constructor(){
        this.canvas = document.createElement("canvas");
        this.ctx = this.canvas.getContext('2d');

        document.body.appendChild(this.canvas);

        this.ball = new Ball(50,50,0.5);

        window.requestAnimationFrame(this.animate.bind(this));
    }

    animate(t) {
        window.requestAnimationFrame(this.animate.bind(this));
        this.ctx.clearRect(0,0,302,152);
        this.ball.draw(this.ctx,302,152);
    }

}
window.onload = () => {
    new App();
}