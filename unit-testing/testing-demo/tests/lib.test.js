const lib = require('../api/lib');

// first argumnet is test name.
// second argument is a function to run test.

describe('Absolute', () => {
    it('should return positive if input positive', () => {
        const result = lib.absolute(1)
        expect(result).toBe(1);
    });
    
    it('should return positive if input negative', () => {
        const result = lib.absolute(-1)
        expect(result).toBe(1);
    });
    
    it('should return 0 if input 0', () => {
        const result = lib.absolute(0)
        expect(result).toBe(0);
    });
});

describe('Greet', () => {
    it('should return greet message', () => {
        const result = lib.greet('salman');
        expect(result).toMatch(/salman/);
    });
});
