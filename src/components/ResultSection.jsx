import { motion } from 'framer-motion';
import { TRIGRAMS } from '../constants';

function ResultSection({ results }) {
  const renderHexagram = (upper, lower) => {
    const upperTrigram = TRIGRAMS[upper];
    const lowerTrigram = TRIGRAMS[lower];

    const renderLine = (line, idx) => {
      if (line === 1) {
        return (
          <div 
            key={`line-${idx}`} 
            className="w-24 h-2 bg-yellow-500 rounded-sm shadow-md"
          />
        );
      } else {
        return (
          <div 
            key={`line-${idx}`} 
            className="flex gap-3 items-center justify-center"
          >
            <div className="w-8 h-2 bg-yellow-500 rounded-sm shadow-md"></div>
            <div className="w-2 h-2 bg-slate-700 rounded-full"></div>
            <div className="w-8 h-2 bg-yellow-500 rounded-sm shadow-md"></div>
          </div>
        );
      }
    };

    return (
      <div className="flex flex-col items-center gap-3 p-4 bg-slate-800/40 rounded-lg border border-slate-700">
        {upperTrigram.lines.map((line, idx) => renderLine(line, idx))}
        <div className="border-b-2 border-slate-600 w-12 my-2"></div>
        {lowerTrigram.lines.map((line, idx) => renderLine(line, idx + 3))}
      </div>
    );
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 }
  };

  return (
    <motion.div
      className="w-full border-t border-slate-700 pt-8 mt-8"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <motion.div 
          className="p-6 bg-gradient-to-br from-yellow-900/40 to-yellow-900/20 border border-yellow-700/50 rounded-xl text-center"
          variants={itemVariants}
        >
          <h3 className="text-yellow-500 font-bold mb-4 uppercase text-sm tracking-widest">Quẻ Chính</h3>
          <div className="mb-4 flex justify-center">
            {results.mainUpper && results.mainLower && renderHexagram(results.mainUpper, results.mainLower)}
          </div>
          <p className="text-lg font-semibold text-yellow-100">{results.main.name}</p>
          <p className="text-xs text-yellow-300/70 mt-2">{results.main.meaning}</p>
        </motion.div>

        <motion.div 
          className="p-6 bg-gradient-to-br from-blue-900/40 to-blue-900/20 border border-blue-700/50 rounded-xl text-center"
          variants={itemVariants}
        >
          <h4 className="text-blue-400 font-bold mb-4 uppercase text-sm tracking-widest">Quẻ Động 1</h4>
          <div className="mb-4 flex justify-center">
            {results.d1Upper && results.d1Lower && renderHexagram(results.d1Upper, results.d1Lower)}
          </div>
          <p className="text-sm font-semibold text-blue-100">{results.d1.name}</p>
          <p className="text-xs text-blue-300/70 mt-2">{results.d1.meaning}</p>
        </motion.div>

        <motion.div 
          className="p-6 bg-gradient-to-br from-purple-900/40 to-purple-900/20 border border-purple-700/50 rounded-xl text-center"
          variants={itemVariants}
        >
          <h4 className="text-purple-400 font-bold mb-4 uppercase text-sm tracking-widest">Quẻ Động 2</h4>
          <div className="mb-4 flex justify-center">
            {results.d2Upper && results.d2Lower && renderHexagram(results.d2Upper, results.d2Lower)}
          </div>
          <p className="text-sm font-semibold text-purple-100">{results.d2.name}</p>
          <p className="text-xs text-purple-300/70 mt-2">{results.d2.meaning}</p>
        </motion.div>

        <motion.div 
          className="p-6 bg-gradient-to-br from-green-900/40 to-green-900/20 border border-green-700/50 rounded-xl text-center"
          variants={itemVariants}
        >
          <h4 className="text-green-400 font-bold mb-4 uppercase text-sm tracking-widest">Quẻ Động 3</h4>
          <div className="mb-4 flex justify-center">
            {results.d3Upper && results.d3Lower && renderHexagram(results.d3Upper, results.d3Lower)}
          </div>
          <p className="text-sm font-semibold text-green-100">{results.d3.name}</p>
          <p className="text-xs text-green-300/70 mt-2">{results.d3.meaning}</p>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default ResultSection;