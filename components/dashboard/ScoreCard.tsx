'use client';

import { motion } from 'framer-motion';
import { GlassCard } from '@/components/ui/GlassCard';
import * as Icons from 'lucide-react';

interface ScoreCardProps {
  title: string;
  score: number;
  icon: string;
  delay?: number;
}

export function ScoreCard({ title, score, icon, delay = 0 }: ScoreCardProps) {
  const IconComponent = Icons[icon as keyof typeof Icons] as any;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
    >
      <GlassCard className="p-6">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
            <IconComponent size={24} className="text-white" />
          </div>
          <h3 className="text-lg font-semibold text-gray-400">
            {title}
          </h3>
        </div>
        
        <div className="flex items-end gap-2">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: delay + 0.2, type: 'spring', stiffness: 100 }}
            className="text-4xl font-bold text-white"
          >
            {score}
          </motion.div>
          <span className="text-gray-400 text-sm mb-1">/100</span>
        </div>

        <div className="mt-4 w-full bg-white/10 rounded-full h-2 overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-blue-500 to-purple-600"
            initial={{ width: '0%' }}
            animate={{ width: `${score}%` }}
            transition={{ delay: delay + 0.3, duration: 0.8, ease: 'easeOut' }}
          />
        </div>
      </GlassCard>
    </motion.div>
  );
}
