function defineSuit(card) {
	// good luck
	return {
		'♣': 'clubs',
		'♦': 'diamonds',
		'♥': 'hearts',
		'♠': 'spades'
	}[card[card.length - 1]]
}