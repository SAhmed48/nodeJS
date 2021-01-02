const lib = require('../api/lib');

// first argumnet is test name.
// second argument is a function to run test.

describe('absolute', () => {
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

describe('greet', () => {
    it('should return greet message', () => {
        const result = lib.greet('salman');
        expect(result).toMatch(/salman/);
    });
});


describe('getCurrencies', () => {
    it('should return array contain currency', () => {
        const result = lib.getCurrencies();
        expect(result).toEqual(expect.arrayContaining(['USD', 'EURO', 'AUD', 'RUPEE']));
    });
});


describe('getProduct', () => {
    it('should return product object given product id with price and product id.', () => {
        const result = lib.getProduct(1);
        expect(result).toMatchObject({'id': 1, price: 10 });
        expect(result).toHaveProperty('id', 1);
    });
});


describe('registerUser', () => {
    it('should return execption if username is falsy', () => {
        args = [null, undefined, NaN, '', false, 0];
        args.forEach(a => {
            expect((a) => {
                lib.registerUser(a);
            }).toThrow();
        });
    });

    it('should return user object if username is correct.', () => {
        const result = lib.registerUser('salman042');
        expect(result).toHaveProperty('username');
    });
});