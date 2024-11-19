import { expect } from 'chai';
import { add, subtract, multiply, divide } from '../index.js';

describe('Math Functions', () => {
    it('should add two numbers', () => {
        expect(add(2, 3)).to.equal(5);
    });

    it('should subtract two numbers', () => {
        expect(subtract(5, 3)).to.equal(2);
    });

    it('should multiply two numbers', () => {
        expect(multiply(2, 3)).to.equal(6);
    });

    it('should divide two numbers', () => {
        expect(divide(6, 3)).to.equal(2);
    });

    it('should throw an error when dividing by zero', () => {
        expect(() => divide(6, 0)).to.throw("Cannot divide by zero");
    });

    // Additional tests
    it('should add negative numbers', () => {
        expect(add(-2, -3)).to.equal(-5);
    });

    it('should subtract negative numbers', () => {
        expect(subtract(-5, -3)).to.equal(-2);
    });

    it('should multiply by zero', () => {
        expect(multiply(2, 0)).to.equal(0);
    });

    it('should handle floating point addition', () => {
        expect(add(0.1, 0.2)).to.be.closeTo(0.3, 0.0001);
    });

    it('should handle floating point division', () => {
        expect(divide(1, 3)).to.be.closeTo(0.3333, 0.0001);
    });
});