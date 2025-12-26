import { motion } from 'framer-motion';

function Card({ card, onClick, isFlipped }) {
  if (!card) {
    return (
      <div className="w-20 h-28 bg-gradient-to-br from-slate-700 to-slate-800 rounded-lg border-2 border-dashed border-slate-600 flex items-center justify-center">
        <span className="text-slate-500 text-xs">?</span>
      </div>
    );
  }

  const isRed = card.color === 'red';

  return (
    <div 
      className="w-20 h-28 cursor-pointer perspective transition-transform hover:scale-105"
      onClick={onClick}
    >
      <motion.div
        className="w-full h-full relative"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, type: "spring", stiffness: 260, damping: 20 }}
        style={{ transformStyle: "preserve-3d" }}
      >
        <div
          className="absolute inset-0 w-full h-full bg-gradient-to-br from-red-700 to-red-900 rounded-lg border-4 border-white/80 flex items-center justify-center"
          style={{ backfaceVisibility: "hidden" }}
        >
          <div className="text-center">
            <div className="text-white text-3xl font-bold">♠</div>
            <div className="text-white text-xs opacity-70">Quẻ</div>
          </div>
        </div>

        <div
          className="absolute inset-0 w-full h-full bg-white rounded-lg border-4 border-gray-300 flex flex-col items-center justify-center"
          style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
        >
          <div className={`text-4xl font-bold ${isRed ? 'text-red-600' : 'text-black'}`}>
            {card.val === 1 ? 'A' : card.val}
          </div>
          <div className={`text-xl mt-1 ${isRed ? 'text-red-600' : 'text-black'}`}>
            {card.suit === 'Hearts' && '♥'}
            {card.suit === 'Diamonds' && '♦'}
            {card.suit === 'Spades' && '♠'}
            {card.suit === 'Clubs' && '♣'}
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Card;