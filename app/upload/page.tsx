'use client';

import { useState, type ChangeEvent, type DragEvent } from 'react';
import { motion } from 'framer-motion';
import { Upload, FileText, CheckCircle2, AlertCircle } from 'lucide-react';
import { Navbar } from '@/components/landing/Navbar';
import { GlassCard } from '@/components/ui/GlassCard';

type UploadState = 'idle' | 'uploading' | 'success' | 'error';

export default function UploadPage() {
  const [state, setState] = useState<UploadState>('idle');
  const [dragActive, setDragActive] = useState(false);
  const [fileName, setFileName] = useState('');
  const [progress, setProgress] = useState(0);

  const handleDrag = (e: DragEvent<HTMLElement>) => {
    e.preventDefault();
    e.stopPropagation();

    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const handleDrop = (e: DragEvent<HTMLElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    const files = e.dataTransfer.files;
    if (files?.[0]) {
      void handleFile(files[0]);
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files?.[0]) {
      void handleFile(files[0]);
    }
  };

  const handleFile = async (file: File) => {
  if (file.type !== 'application/pdf') {
    setState('error');
    return;
  }

  try {
    setFileName(file.name);
    setState('uploading');
    setProgress(10);

    const formData = new FormData();
    formData.append('file', file);

    // Upload Resume
    const uploadResponse = await fetch('/api/upload', {
      method: 'POST',
      body: formData,
    });

    const uploadData = await uploadResponse.json();

    if (!uploadResponse.ok) {
      throw new Error(uploadData.error ?? 'Upload failed.');
    }

    setProgress(50);

    localStorage.setItem(
      'resumeText',
      String(uploadData.text ?? '')
    );

    // Analyze Resume
    const analyzeResponse = await fetch('/api/analyze', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        resumeText: uploadData.text,
      }),
    });

    const analyzeData = await analyzeResponse.json();

    if (!analyzeResponse.ok) {
      throw new Error(
        analyzeData.error ?? 'Analysis failed.'
      );
    }

    console.log('Analysis Success:', analyzeData);

    setProgress(100);
    setState('success');

    setTimeout(() => {
      window.location.href = '/dashboard';
    }, 1500);

  } catch (error) {
    console.error(error);
    setState('error');
    setProgress(0);
  }
};

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      <div className="pt-32 pb-20 px-4">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Upload Your Resume
            </h1>
            <p className="text-gray-400 text-lg">
              Upload your resume as a PDF file to get started with your AI career analysis.
            </p>
          </motion.div>

          {state === 'idle' || state === 'error' ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <GlassCard
                className={`p-12 border-2 border-dashed transition-all cursor-pointer ${
                  dragActive
                    ? 'border-blue-400 bg-blue-500/10'
                    : state === 'error'
                      ? 'border-red-400 bg-red-500/10'
                      : 'border-white/20'
                }`}
                onDragEnter={handleDrag}
                onDragLeave={handleDrag}
                onDragOver={handleDrag}
                onDrop={handleDrop}
              >
                <div className="flex flex-col items-center justify-center">
                  {state === 'error' ? (
                    <>
                      <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mb-4">
                        <AlertCircle className="text-red-400" size={32} />
                      </div>
                      <p className="text-red-400 font-semibold mb-4">Please upload a PDF file</p>
                    </>
                  ) : (
                    <>
                      <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mb-4">
                        <Upload className="text-blue-400" size={32} />
                      </div>
                      <p className="text-white font-semibold mb-2">Drag your resume here</p>
                    </>
                  )}
                  <p className="text-gray-400 text-sm mb-6">or click to select file</p>
                  <input
                    type="file"
                    accept=".pdf"
                    onChange={handleChange}
                    className="hidden"
                    id="file-input"
                  />
                  <label
                    htmlFor="file-input"
                    className="px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all cursor-pointer"
                  >
                    Select File
                  </label>
                </div>
              </GlassCard>
            </motion.div>
          ) : null}

          {state === 'uploading' && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
            >
              <GlassCard className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center">
                    <FileText className="text-blue-400" size={24} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-white font-semibold truncate">{fileName}</p>
                    <p className="text-gray-400 text-sm">Uploading and analyzing...</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="w-full bg-white/10 rounded-full h-2 overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-blue-500 to-purple-600"
                      initial={{ width: '0%' }}
                      animate={{ width: `${progress}%` }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                  <p className="text-center text-gray-400 text-sm">{Math.round(progress)}%</p>
                </div>
              </GlassCard>
            </motion.div>
          )}

          {state === 'success' && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
            >
              <GlassCard className="p-8">
                <div className="flex flex-col items-center text-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: 'spring', stiffness: 150 }}
                    className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mb-4"
                  >
                    <CheckCircle2 className="text-green-400" size={32} />
                  </motion.div>
                  <h2 className="text-2xl font-bold text-white mb-2">Resume Uploaded Successfully!</h2>
                  <p className="text-gray-400 mb-6">Redirecting to your dashboard...</p>
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                    className="inline-block"
                  >
                    <div className="w-8 h-8 border-2 border-blue-500 border-t-purple-600 rounded-full" />
                  </motion.div>
                </div>
              </GlassCard>
            </motion.div>
          )}
        </div>
      </div>
    </main>
  );
}