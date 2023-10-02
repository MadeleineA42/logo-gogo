const fs = require('fs');
const inquirer = require('inquirer');
const { Circle, Triangle, Square } = require('./lib');
const { log } = require('console');

// questions the user will answer to generate the logo
const questions = [
    {
        type: 'input',
        name: 'text',
        message: 'Choose 3 letters for your logo.',
    },
    {
        type: 'input',
        name: 'textColor',
        message: 'What color would you like the TEXT in the logo to be?',
    },
    {
        type: 'list',
        name: 'shape',
        message: 'Select the shape of the logo.',
        choices: ['circle', 'triangle', 'square'],
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'What color would you like the SHAPE to be?',
    },
];

async function main() {
    try {
        const userInput = await inquirer.prompt(questions);
        //uses a switch statement to create an instance of selected shape class
        let selectedShape;
        switch (userInput.shape) {
            case 'circle':
                selectedShape = new Circle(userInput.shapeColor);
                break;
            case 'triangle':
                selectedShape = new Triangle(userInput.shapeColor);
                break;
            case 'square':
                selectedShape = new Square(userInput.shapeColor);
                break;
            default:
                console.log('You must select a valid shape');
                return;
        }

        //Generate SVG code and save it to logo.svg
        
        const svgCode = `<svg version="1.1"
        width="300" height="200"
        xmlns="http://www.w3.org/2000/svg">
        ${selectedShape.render()}
        <text x="150" y="125" font-size="50" text-anchor="middle" fill="${userInput.textColor}">${userInput.text}</text>
</svg>`;
        fs.writeFileSync('logo.svg', svgCode);

        console.log('Generated logo.svg file');
    } catch (error) {
        console.error('An error occured', error);
    }
}
main();
