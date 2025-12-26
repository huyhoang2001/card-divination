import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HEXAGRAM_MAP, TRIGRAMS, SUITS } from './constants';
import CardPair from './components/CardPair';
import ResultSection from './components/ResultSection';

function App() {
  const [age, setAge] = useState('25');
  const [drawnCards, setDrawnCards] = useState([]);
  const [isShuffling, setIsShuffling] = useState(false);
  const [revealedCount, setRevealedCount] = useState(0);
  const [results, setResults] = useState(null);
  const [showResults, setShowResults] = useState(false);

  const initDeck = () => {
    const newDeck = [];
    SUITS.forEach(suit => {
      for (let i = 1; i <= 8; i++) {
        newDeck.push({
          id: `${suit.name}-${i}`,
          val: i,
          color: suit.color,
          suit: suit.name,
          isFlipped: false,
        });
      }
    });
    return newDeck;
  };

  const findTrigramId = (lines) => {
    for (const [key, trigram] of Object.entries(TRIGRAMS)) {
      if (JSON.stringify(trigram.lines) === JSON.stringify(lines)) {
        return parseInt(key);
      }
    }
    return 1;
  };

  const handleStart = async () => {
    if (!age || parseInt(age) < 1) {
      alert('Vui lòng nhập tuổi hợp lệ');
      return;
    }

    setIsShuffling(true);
    setResults(null);
    setShowResults(false);
    setRevealedCount(0);

    await new Promise(resolve => setTimeout(resolve, 2000));

    let currentDeck = initDeck();
    const totalShuffles = 10 + parseInt(age);

    for (let i = 0; i < totalShuffles; i++) {
      for (let j = currentDeck.length - 1; j > 0; j--) {
        const k = Math.floor(Math.random() * (j + 1));
        [currentDeck[j], currentDeck[k]] = [currentDeck[k], currentDeck[j]];
      }
    }

    const drawn = currentDeck.slice(0, 6).map(c => ({
      ...c,
      isFlipped: false,
    }));

    setDrawnCards(drawn);
    setIsShuffling(false);
  };

  const handleFlipCard = (index) => {
    if (isShuffling || drawnCards[index]?.isFlipped) return;

    const newCards = [...drawnCards];
    newCards[index].isFlipped = true;
    setDrawnCards(newCards);
    setRevealedCount(prev => prev + 1);
  };

  useEffect(() => {
    if (revealedCount === 6 && drawnCards.length === 6) {
      const getLine = (color) => color === 'red' ? 1 : 0;

      const upperLines = [
        getLine(drawnCards[0].color),
        getLine(drawnCards[1].color),
        getLine(drawnCards[2].color),
      ];
      const lowerLines = [
        getLine(drawnCards[3].color),
        getLine(drawnCards[4].color),
        getLine(drawnCards[5].color),
      ];

      const mainUpper = findTrigramId(upperLines);
      const mainLower = findTrigramId(lowerLines);

      const d1Upper = drawnCards[0].val;
      const d1Lower = drawnCards[1].val;
      const d2Upper = drawnCards[2].val;
      const d2Lower = drawnCards[3].val;
      const d3Upper = drawnCards[4].val;
      const d3Lower = drawnCards[5].val;

      const qChinh = `${mainUpper}-${mainLower}`;
      const qDong1 = `${d1Upper}-${d1Lower}`;
      const qDong2 = `${d2Upper}-${d2Lower}`;
      const qDong3 = `${d3Upper}-${d3Lower}`;

      const resultData = {
        main: HEXAGRAM_MAP[qChinh] || { name: 'Quẻ Chính', meaning: 'Chưa biết' },
        mainUpper,
        mainLower,
        d1: HEXAGRAM_MAP[qDong1] || { name: 'Quẻ Động 1', meaning: 'Chưa biết' },
        d1Upper,
        d1Lower,
        d2: HEXAGRAM_MAP[qDong2] || { name: 'Quẻ Động 2', meaning: 'Chưa biết' },
        d2Upper,
        d2Lower,
        d3: HEXAGRAM_MAP[qDong3] || { name: 'Quẻ Động 3', meaning: 'Chưa biết' },
        d3Upper,
        d3Lower,
      };

      setResults(resultData);
      setShowResults(true);
    }
  }, [revealedCount, drawnCards]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-2">
            <span className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-orange-500 bg-clip-text text-transparent">
              BÀI TÂY DỊCH SỐ
            </span>
          </h1>
          <p className="text-slate-400 text-lg">Khám phá số phận qua lá bài phương Tây</p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-8">
          <div className="flex-1">
            <AnimatePresence>
              {isShuffling && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="mb-8 p-8 bg-gradient-to-r from-blue-900/30 to-purple-900/30 border border-blue-700/50 rounded-xl text-center"
                >
                  <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ repeat: Infinity, duration: 1 }}
                    className="text-2xl font-bold text-blue-300"
                  >
                    ✨ Đang tráo bài...
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>

            {drawnCards.length > 0 && !isShuffling && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-8 mb-8"
              >
                <div className="flex flex-col md:flex-row justify-between gap-4 md:gap-6">
                  {[0, 2, 4].map((idx) => (
                    <CardPair
                      key={idx}
                      cards={[drawnCards[idx], drawnCards[idx + 1]]}
                      onFlip={handleFlipCard}
                      pairIndex={idx / 2}
                      revealedCount={revealedCount}
                    />
                  ))}
                </div>
              </motion.div>
            )}

            {showResults && results && (
              <ResultSection results={results} />
            )}
          </div>

          <div className="w-full lg:w-80 h-fit">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="p-8 bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-2xl sticky top-8"
            >
              <h2 className="text-xl font-bold mb-6 text-slate-200">Bốc Lá Số</h2>

              <div className="space-y-4 mb-6">
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    Nhập tuổi của bạn:
                  </label>
                  <input
                    type="number"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                    disabled={isShuffling}
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 disabled:opacity-50"
                    min="1"
                    max="120"
                  />
                  <p className="text-xs text-slate-400 mt-2">
                    Sẽ tráo: <span className="font-semibold text-yellow-400">{parseInt(age || 0) + 10}</span> lần
                  </p>
                </div>
              </div>

              <button
                onClick={handleStart}
                disabled={isShuffling || drawnCards.length > 0}
                className="w-full py-4 px-6 bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 disabled:from-slate-700 disabled:to-slate-700 text-white font-bold rounded-lg transition-all duration-200 transform hover:scale-105 disabled:hover:scale-100 disabled:cursor-not-allowed text-lg mb-4"
              >
                {isShuffling ? 'Đang Tráo Bài...' : drawnCards.length > 0 ? 'Đang Chờ...' : 'BỐC LÁ SỐ'}
              </button>

              {drawnCards.length > 0 && (
                <button
                  onClick={() => {
                    setDrawnCards([]);
                    setResults(null);
                    setShowResults(false);
                    setRevealedCount(0);
                    setAge('25');
                  }}
                  className="w-full py-3 px-6 bg-slate-700 hover:bg-slate-600 text-slate-200 font-semibold rounded-lg transition-all duration-200 text-sm"
                >
                  Làm Lại
                </button>
              )}

              <div className="mt-8 pt-8 border-t border-slate-700 space-y-4 text-sm text-slate-400">
                <div>
                  <h3 className="font-semibold text-slate-300 mb-2">Hướng Dẫn:</h3>
                  <ul className="space-y-1 text-xs">
                    <li>1. Nhập tuổi của bạn</li>
                    <li>2. Bấm nút "BỐC LÁ SỐ"</li>
                    <li>3. Nhấp từng lá để lật</li>
                    <li>4. Xem kết quả quẻ</li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;