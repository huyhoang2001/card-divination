import Card from './Card';

function CardPair({ cards, onFlip, pairIndex, revealedCount }) {
  const handleFlip = (idx) => {
    if (!cards[idx].isFlipped) {
      onFlip(pairIndex * 2 + idx);
    }
  };

  return (
    <div className="flex flex-col items-center gap-4 p-4 border border-slate-700 rounded-xl bg-slate-800/30 backdrop-blur">
      <div className="text-xs text-slate-400 uppercase tracking-widest font-semibold">
        Cặp {pairIndex + 1}
      </div>
      <div className="flex gap-4">
        {cards.map((card, idx) => (
          <div key={idx} onClick={() => handleFlip(idx)}>
            <Card 
              card={card} 
              isFlipped={card.isFlipped}
              onClick={() => handleFlip(idx)}
            />
          </div>
        ))}
      </div>
      <div className="text-xs text-slate-500 mt-2">
        {cards[0].isFlipped && cards[1].isFlipped ? '✓ Hoàn tất' : '← Nhấp để lật'}
      </div>
    </div>
  );
}

export default CardPair;