const {Triangle, Square, Circle} = require("./shapes");

describe('Triangle', () => {
    describe('proper color', () => {
        it('should check to see if the Triangle in question is set to an existing color', () => {
            const Shape = new Triangle();
            Shape.setColor('blue');

            expect(Shape.render()).toEqual(`<polygon points="150, 18 244, 182 56, 182" fill="blue" />`);
        })
    })
})
describe('Square', () => {
    describe('proper color', () => {
        it('should check to see if the sqaure in question is set to an existing color', () => {
            const Shape = new Square();
            Shape.setColor('red');

            expect(Shape.render()).toEqual(`<rect x="73" y="40" width="160" height="160" fill="red" />`);
        })
    })
})
describe('Square', () => {
    describe('proper color', () => {
        it('should check to see if the sqaure in question is set to an existing color', () => {
            const Shape = new Circle();
            Shape.setColor('green');

            expect(Shape.render()).toEqual(`<circle cx ="150" cy="115" r="80" fill="green" />`);
        })
    })
})