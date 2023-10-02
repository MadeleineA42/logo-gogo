const Shape = require('./Shape');

class Triangle extends Shape{
    render(){
        return `<polygon points="100,10 190,190 10,190" fill="${this.color}" />`;
    }
}

module.exports = Triangle;