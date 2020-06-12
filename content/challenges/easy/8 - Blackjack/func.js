// Create a function that takes an array of card numbers and checks if the hand of their value exceeds 21. If the hand exceeds 21, true and if the hand is under or equal to 21, false. Values of the cards are as follows:

// 2-10 are their value.
// J-K (face cards) count as 10.
// Aces count either as 1 or 11 - play conservatively, so that if giving an ace a value of 11 causes you to lose and 1 allows you to win, then go with 1.

module.exports = (cards) => {
    let hand = 0;
    let acePresent = false;
    cards.forEach(hit => {
        switch (hit) {
            case "J":
            case "Q":
            case "K":
                hand += 10;
                break;
            case "A":
                acePresent = true;
                hand += 11;
                break;
            default:
                hand += hit;
                break;
        }
    })
    console.log(hand);
    if (hand > 21 && acePresent == true) {
        hand -= 10;
    }
    return hand > 21;
};
