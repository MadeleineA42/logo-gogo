class shape {
    constructor(color) {
        this.color = "";
    }
    setColor(color) {
        this.color = color;
    }
}

class Circle extends shape{
    render(){
        return `<circle cx="150" cy="100" r="50" fill="${this.color}" />`;
    }
}


