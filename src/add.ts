export const add = (...args: Array<number>): number =>
	args.reduce((acc, number) => acc + number, 0);
