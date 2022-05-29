import { add } from './../add';

describe(add.name, () => {
	it('adds and returns sum of all the arguments', () => {
		expect(add(2, 3)).toBe(5);
		expect(add(2, 3, 5)).toBe(10);
	});
});
