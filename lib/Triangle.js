const Shape = require('./Shape');

class Triangle extends Shape{
    render(){
        return `<polygon points="100,100 150,25 150,75 200,0" fill="${this.color}" />`;
    }
}

module.exports = Triangle;