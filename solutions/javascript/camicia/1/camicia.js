//
// This is only a SKELETON file for the 'Camicia' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const simulateGame = (playerA, playerB) => {
  const pA = [...playerA];
  const pB = [...playerB];

  const penalties = { J: 1, Q: 2, K: 3, A: 4};
  const isPayment = (c) => c === 'J' || c === 'Q' || c === 'K' || c === 'A';

  const normalizeLoop = (deck) => deck.map((c) => (isPayment(c) ? c : 'N')).join(',');
  
  let pile = [];
  let currentPlayer = 0; // pA = 0, pB = 1
  let remainingCards = 0; 
  let lastPaymentPlayer = null;
  let cardsPlayed = 0;
  let tricks = 0;

  const seen = new Set();

  const deckOf = (p) => (p === 0 ? pA : pB);
  const other = (p) => (p === 0 ? 1 : 0);
  
  const collectPile = (winner) => {
    deckOf(winner).push(...pile);
    pile = [];
    tricks += 1;

    if(pA.length === 0 || pB.length === 0){
      return {status: 'finished', cards: cardsPlayed, tricks};
    }

    currentPlayer = winner;
    remainingCards = 0; 
    lastPaymentPlayer = null;
    return null;
  };

  while(true){
    if(pile.length === 0){
      const state = `${normalizeLoop(pA)}|${normalizeLoop(pB)}|${currentPlayer}|${remainingCards}|${lastPaymentPlayer}`;
      if(seen.has(state)){
        return { status: 'loop', cards: cardsPlayed, tricks };
      }
      seen.add(state);
    }

    const deck = deckOf(currentPlayer);

    if(deck.length === 0){
      const res = collectPile(other(currentPlayer));
      if(res) return res;

      continue;
    }

    const card = deck.shift();
    pile.push(card);
    cardsPlayed += 1;

    if(isPayment(card)){
      remainingCards = penalties[card];
      lastPaymentPlayer = currentPlayer;
      currentPlayer = other(currentPlayer);
      continue;
    }

    if(remainingCards > 0){
      remainingCards -= 1;

      if(remainingCards === 0){
        const winner = lastPaymentPlayer ?? other(currentPlayer);
        const res = collectPile(winner);
        if(res) return res;
        continue;
      }

      continue;
    }
    
    currentPlayer = other(currentPlayer);
  }
  
};
