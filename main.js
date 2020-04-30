'use strict';
let text = "text for div"
class Options{
    constructor(height, width, bg, fontSize, textAlign){
        this.height = height;
        this.width = width;
        this.bg = bg;
        this.fontSize = fontSize;
        this.textAlign = textAlign;
    }
    createDiv(){
        let elem = document.createElement('div');
        document.body.appendChild(elem);
        elem.innerHTML = text;
        let param = `height:${this.height}px; width:${this.width}px; background-color:${this.bg}; font-size:${this.fontSize}px; text-align:${this.textAlign}`;
        elem.style.cssText = param;
    }
}


const item = new Options(200, 200, "blue", 14, "center");

item.createDiv();