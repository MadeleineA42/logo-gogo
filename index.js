const fs = require('fs');
const inquirer = require('fs');

const questions = [
    {
        type: 'input',
        name: 'text',
        message: 'Choose 3 letters for your logo.',
    },
    {
        type: 'input',
        name: 'textColor',
        message: 'What color would you like the text in the logo to be?',
    },
    {
        type: 'list',
        name: 'shape',
        message: 'What shape would you like?',
        choices: ['Circle', 'Trianlge', 'Square'],
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'What color would you like the shape to be?',
    },
];