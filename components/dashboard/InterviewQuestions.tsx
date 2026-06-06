'use client';

import { motion } from 'framer-motion';
import { GlassCard } from '@/components/ui/GlassCard';
import { interviewQuestions } from '@/lib/mockData';

export function InterviewQuestions() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
    >
      <GlassCard className="p-6">
        <h3 className="text-xl font-semibold text-white mb-6">
          Interview Preparation
        </h3>

        <div className="space-y-4">
          {interviewQuestions.map((q, idx) => {
            const difficultyColor =
              q.difficulty === 'Hard'
                ? 'bg-red-500/20 text-red-300'
                : q.difficulty === 'Medium'
                ? 'bg-yellow-500/20 text-yellow-300'
                : 'bg-green-500/20 text-green-300';

            return (
              <motion.div
                key={q.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 + idx * 0.1 }}
                className="p-4 border border-white/10 bg-white/5 rounded-lg hover:bg-white/10 transition-all cursor-pointer group"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1 min-w-0">
                    <p className="text-white font-semibold group-hover:text-blue-300 transition-colors">
                      {q.question}
                    </p>
                    <div className="flex gap-2 mt-2">
                      <span className="text-xs px-2 py-1 bg-blue-500/20 text-blue-300 rounded-full">
                        {q.category}
                      </span>
                      <span className={`text-xs px-2 py-1 rounded-full ${difficultyColor}`}>
                        {q.difficulty}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </GlassCard>
    </motion.div>
  );
}
