'use client';

import { motion } from 'framer-motion';
import { GlassCard } from '@/components/ui/GlassCard';
import { skillGapData } from '@/lib/mockData';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';

const COLORS = ['#3b82f6', '#8b5cf6'];

export function SkillGapChart() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <GlassCard className="p-6">
        <h3 className="text-xl font-semibold text-white mb-6">
          Skill Gap Overview
        </h3>

        <div className="flex justify-center">
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={skillGapData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, value }) => `${name} (${value}%)`}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {skillGapData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip
                formatter={(value) => [`${value}%`, 'Percentage']}
                contentStyle={{
                  backgroundColor: 'rgba(26, 26, 46, 0.95)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '8px',
                  color: '#ffffff',
                }}
              />
              <Legend
                wrapperStyle={{
                  paddingTop: '20px',
                }}
                formatter={(value) => <span style={{ color: '#ffffff' }}>{value}</span>}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-4">
          <div className="text-center">
            <p className="text-gray-400 text-sm mb-1">Present</p>
            <p className="text-2xl font-bold text-blue-400">65%</p>
          </div>
          <div className="text-center">
            <p className="text-gray-400 text-sm mb-1">Missing</p>
            <p className="text-2xl font-bold text-purple-400">35%</p>
          </div>
        </div>
      </GlassCard>
    </motion.div>
  );
}
