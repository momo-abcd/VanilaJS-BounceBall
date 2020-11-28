import {Ball} from './ball.js';
class App {
    constructor(){
        this.canvas = document.createElement("canvas");
        // this.canvas.setAttribute("width","100px");
        // this.canvas.setAttribute("height","100px");
        this.canvas.style.width="100px;";
        this.canvas.style.backgroundCOlor="red;";
        this.ctx = this.canvas.getContext('2d');

        document.body.appendChild(this.canvas);

        window.requestAnimationFrame(this.animate.bind(this));
        this.animate();
    }

    animate() {
        new Ball().draw(this.ctx,);
    }

}
window.onload = () => {
    new App();
}