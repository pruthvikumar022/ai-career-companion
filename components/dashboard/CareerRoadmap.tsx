'use client';

import { motion } from 'framer-motion';
import { GlassCard } from '@/components/ui/GlassCard';
import { careerRoadmap } from '@/lib/mockData';
import { CheckCircle2, Circle, Target } from 'lucide-react';

export function CareerRoadmap() {
  const getStatusIcon = (status: string) => {
    if (status === 'completed') return <CheckCircle2 className="text-green-400" size={24} />;
    if (status === 'in-progress') return <Circle className="text-blue-400 fill-blue-400" size={24} />;
    return <Circle className="text-gray-500" size={24} />;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.6 }}
    >
      <GlassCard className="p-6">
        <h3 className="text-xl font-semibold text-white mb-8">
          Career Progression Roadmap
        </h3>

        <div className="relative">
          {/* Connecting line */}
          <div className="absolute left-12 top-12 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-purple-600 to-transparent" />

          <div className="space-y-8">
            {careerRoadmap.map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7 + idx * 0.1 }}
                className="relative pl-20"
              >
                {/* Timeline dot */}
                <div className="absolute left-0 top-1">
                  {getStatusIcon(item.status)}
                </div>

                <div className={`p-4 border rounded-lg transition-all ${
                  item.status === 'completed'
                    ? 'bg-green-500/10 border-green-500/30'
                    : item.status === 'in-progress'
                    ? 'bg-blue-500/10 border-blue-500/30'
                    : 'bg-white/5 border-white/10'
                }`}>
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-gray-400 text-sm mb-1">
                        {item.year}
                      </p>
                      <h4 className="text-white font-semibold text-lg">
                        {item.title}
                      </h4>
                      <p className="text-gray-400 text-sm mt-2">
                        {item.description}
                      </p>
                    </div>
                    {item.status === 'in-progress' && (
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                        className="flex-shrink-0"
                      >
                        <Target className="text-blue-400" size={20} />
                      </motion.div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </GlassCard>
    </motion.div>
  );
}
