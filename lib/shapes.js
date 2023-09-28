class shape {
    constructor(color) {
        this.color = "";
    }
    setColor(color) {
        this.color = color;
    }
}
//renders the circle shape with the color selected by the user
class Circle extends shape{
    render(){
        return `<circle cx="150" cy="100" r="50" fill="${this.color}" />`;
    }
}
//renders the triangle shape with the color selected by the user
class Triangle extends shape{
    render(){
        return `<polygon points="100,100 150,25 150,75 200,0" fill="${this.color}" />`;
    }
}
//renders square based on the user input
class Square extends shape{
    render(){
        return `<rect x="50" y="50" width="100" height="100 "fill="${this.color}" />`;
    }
}

module.exports = { Circle, Triangle, Square };

