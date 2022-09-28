class SmallestIntegerFinder {
	findSmallestInt(args) {
		let r = args[0]

		for (let i = 0; i < args.length; i++) {
			if (r > args[i]) {
				r = args[i]
			}
		}
		return r
	}
}