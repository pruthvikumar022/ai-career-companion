'use client';

import { motion } from 'framer-motion';
import { GlassCard } from '@/components/ui/GlassCard';
import { suggestions } from '@/lib/mockData';
import * as Icons from 'lucide-react';

export function ResumeSuggestions() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
    >
      <GlassCard className="p-6">
        <h3 className="text-xl font-semibold text-white mb-6">
          Improvement Suggestions
        </h3>

        <div className="space-y-4">
          {suggestions.map((suggestion, idx) => {
            const IconComponent = Icons[suggestion.icon as keyof typeof Icons] as any;
            const priorityColor =
              suggestion.priority === 'high'
                ? 'bg-red-500/20 border-red-500/50 text-red-300'
                : 'bg-yellow-500/20 border-yellow-500/50 text-yellow-300';

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + idx * 0.1 }}
                className="p-4 border border-white/10 bg-white/5 rounded-lg hover:bg-white/10 transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <IconComponent size={20} className="text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="text-white font-semibold">
                        {suggestion.title}
                      </h4>
                      <span className={`text-xs px-2 py-1 rounded-full border ${priorityColor}`}>
                        {suggestion.priority}
                      </span>
                    </div>
                    <p className="text-gray-400 text-sm">
                      {suggestion.description}
                    </p>
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
