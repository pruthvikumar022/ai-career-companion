  'use client';

  import { motion } from 'framer-motion';
  import Link from 'next/link';
  import { LogOut, Menu } from 'lucide-react';
  import { useEffect, useState } from 'react';
  import { ScoreCard } from '@/components/dashboard/ScoreCard';
  import { SkillGapChart } from '@/components/dashboard/SkillGapChart';
  import { SkillsList } from '@/components/dashboard/SkillsList';
  import { ResumeSuggestions } from '@/components/dashboard/ResumeSuggestions';
  import { InterviewQuestions } from '@/components/dashboard/InterviewQuestions';
  import { CareerRoadmap } from '@/components/dashboard/CareerRoadmap';


  export default function DashboardPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [analysis, setAnalysis] = useState<any>(null);

  useEffect(() => {
    const savedAnalysis = localStorage.getItem('analysis');

    if (savedAnalysis) {
      setAnalysis(JSON.parse(savedAnalysis));
    }
  }, []);
    return (
      <main className="min-h-screen bg-background">
        {/* Header */}
        <motion.header
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed w-full top-0 z-40 bg-background/80 backdrop-blur-md border-b border-white/10"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">AI</span>
              </div>
              <span className="text-xl font-bold text-white hidden sm:inline">CareerAI</span>
            </Link>

            <div className="hidden md:flex items-center gap-6">
              <span className="text-gray-400">Dashboard</span>
              <button className="p-2 rounded-lg hover:bg-white/10 transition-all">
                <LogOut size={20} className="text-gray-400 hover:text-white" />
              </button>
            </div>

            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="md:hidden text-white p-2 hover:bg-white/10 rounded-lg"
            >
              <Menu size={24} />
            </button>
          </div>
        </motion.header>

        {/* Main Content */}
        <div className="pt-24 pb-12 px-4 lg:px-8">
          <div className="max-w-7xl mx-auto">
            {/* Page Title */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
                Career Dashboard
              </h1>
              <p className="text-gray-400">
                Your personalized AI-powered career insights
              </p>
              {analysis && (
    <div className="mt-6 p-4 rounded-lg bg-white/10 border border-white/10">
      <h2 className="text-xl font-bold text-white mb-2">
        AI Resume Summary
      </h2>

      <p className="text-gray-300 mb-4">
        {analysis.summary}
      </p>

      <h3 className="text-white font-semibold mb-2">
        Skills
      </h3>

      <p className="text-gray-300">
     {analysis?.skills
  ? (() => {
      try {
        if (Array.isArray(analysis.skills)) {
          return analysis.skills.join(", ");
        }

        return JSON.parse(analysis.skills).join(", ");
      } catch {
        return analysis.skills;
      }
    })()
  : "No skills available"}  
      </p>
    </div>
  )}
            </motion.div>

            {/* Score Cards Section */}
    <div className="grid md:grid-cols-3 gap-6 mb-8">
    <ScoreCard
      title="Resume Score"
      score={analysis?.score || 0}
      icon="FileText"
      delay={0.1}
    />

    <ScoreCard
      title="ATS Score"
      score={analysis?.score || 0}
      icon="Target"
      delay={0.2}
    />

    <ScoreCard
      title="Job Match"
      score={analysis?.score || 0}
      icon="Zap"
      delay={0.3}
    />
  </div>

            {/* Skill Gap and Chart */}
            <div className="grid lg:grid-cols-2 gap-8 mb-8">
              <SkillGapChart />
              <SkillsList />
            </div>

            {/* Suggestions and Interview Questions */}
            <div className="grid lg:grid-cols-2 gap-8 mb-8">
              <ResumeSuggestions />
              <InterviewQuestions />
            </div>

            {/* Career Roadmap */}
            <CareerRoadmap />

            {/* Export Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="mt-8 flex gap-4 justify-center"
            >
              <button className="px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all">
                Download Report
              </button>
              <button className="px-6 py-2 border border-white/20 text-white rounded-lg font-semibold hover:bg-white/5 transition-all">
                Share Results
              </button>
            </motion.div>
          </div>
        </div>
      </main>
    );
  }
