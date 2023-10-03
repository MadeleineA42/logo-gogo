// Constructor is imported.
const { Circle, Triangle, Square } = require('./index');

// A testing suite for rendering shapes is created.
describe('Shapes', () => {
  // A test is created to check that a red circle will be rendered as an svg.
  describe('circle', () => {
    it('should render a red circle', () => {
    const shape = new Circle('red');
    const svg = shape.render();
      expect(svg).toEqual(`<circle cx="150" cy="100" r="50" fill="red" />`);
    });
  });
});

describe('Shapes', () => {
    //  A test is created to check that a blue triangle will be rendered as an svg.
    describe('triangle', () => {
      it('should render a blue triangle', () => {
      const shape = new Triangle('blue');
      const svg = shape.render();
        expect(svg).toEqual(`<polygon points="150, 18 244, 182 56, 182" fill="blue" />`);
      });
    });
  });

  describe('Shapes', () => {
    // A test is created to check that a green square will be rendered as an svg.
    describe('square', () => {
      it('should render a green square', () => {
      const shape = new Square('green');
      const svg = shape.render();
        expect(svg).toEqual(`<rect x="90" y="40" width="120" height="120" fill="green" />`);
      });
    });
  });

