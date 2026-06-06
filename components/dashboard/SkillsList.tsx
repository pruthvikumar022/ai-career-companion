'use client';

import { motion } from 'framer-motion';
import { GlassCard } from '@/components/ui/GlassCard';
import { presentSkills, missingSkills } from '@/lib/mockData';

export function SkillsList() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
    >
      <GlassCard className="p-6">
        <h3 className="text-xl font-semibold text-white mb-6">
          Skill Analysis
        </h3>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Present Skills */}
          <div>
            <h4 className="text-green-400 font-semibold mb-4 flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full" />
              Your Skills ({presentSkills.length})
            </h4>
            <div className="flex flex-wrap gap-2">
              {presentSkills.map((skill, idx) => (
                <motion.span
                  key={idx}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4 + idx * 0.05 }}
                  className="px-3 py-1 bg-green-500/20 border border-green-500/50 text-green-300 rounded-full text-sm"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </div>

          {/* Missing Skills */}
          <div>
            <h4 className="text-orange-400 font-semibold mb-4 flex items-center gap-2">
              <div className="w-2 h-2 bg-orange-400 rounded-full" />
              Skills to Learn ({missingSkills.length})
            </h4>
            <div className="flex flex-wrap gap-2">
              {missingSkills.map((skill, idx) => (
                <motion.span
                  key={idx}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4 + idx * 0.05 }}
                  className="px-3 py-1 bg-orange-500/20 border border-orange-500/50 text-orange-300 rounded-full text-sm"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </div>
        </div>
      </GlassCard>
    </motion.div>
  );
}
