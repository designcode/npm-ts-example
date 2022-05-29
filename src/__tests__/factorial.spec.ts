import { factorial } from './../factorial';

describe(factorial.name, () => {
	it('returns factorial of provided number', () => {
		expect(factorial(2)).toBe(2);
		expect(factorial(3)).toBe(6);
	});
});
