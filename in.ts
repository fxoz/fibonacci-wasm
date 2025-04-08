export function fib(n: u32): u64 {
	return fibPair(n).a;
}

class FibPair {
	constructor(
		public a: u64,
		public b: u64,
	) {}
}

function fibPair(n: u32): FibPair {
	if (n === 0) {
		return new FibPair(0, 1);
	}

	const pair = fibPair(n >> 1);
	const a: u64 = pair.a;
	const b: u64 = pair.b;

	const c: u64 = a * (2 * b - a);
	const d: u64 = a * a + b * b;

	if (n & 1) {
		return new FibPair(d, c + d);
	}
	return new FibPair(c, d);
}
