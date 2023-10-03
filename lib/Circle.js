// This is the code for generating a circle shape for the logo
const Shape = require('./Shape');

class Circle extends Shape{
    render(){
        return `<circle cx="150" cy="100" r="50" fill="${this.color}" />`;
    }
}

module.exports = Circle;