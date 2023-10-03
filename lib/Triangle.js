// This is the code for generating a triangle shape for the logo
const Shape = require('./Shape');

class Triangle extends Shape{
    render(){
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`;
    }
}

module.exports = Triangle;