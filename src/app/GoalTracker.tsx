'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const mockGoals = [
  {
    id: 1,
    title: 'Launch Marketing Campaign',
    progress: 75,
    milestones: ['Research', 'Design', 'Launch'],
    comments: [
      { user: 'https://randomuser.me/api/portraits/men/32.jpg', text: 'Looking great!' },
      { user: 'https://randomuser.me/api/portraits/women/45.jpg', text: 'Make sure to check the SEO content!' }
    ],
    data: [
      { name: 'Week 1', progress: 10 },
      { name: 'Week 2', progress: 40 },
      { name: 'Week 3', progress: 60 },
      { name: 'Week 4', progress: 75 }
    ]
  },
  {
    id: 2,
    title: 'Team Onboarding Completion',
    progress: 45,
    milestones: ['Docs Shared', 'First Meeting'],
    comments: [
      { user: 'https://randomuser.me/api/portraits/men/22.jpg', text: 'We need to finish training modules.' }
    ],
    data: [
      { name: 'Week 1', progress: 15 },
      { name: 'Week 2', progress: 35 },
      { name: 'Week 3', progress: 45 }
    ]
  }
];

export default function GoalTracker() {
 
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans">
      {/* Navbar */}
      <nav className="bg-white shadow px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-indigo-600">🎯 Goal Tracker</h1>
        <button className="text-sm bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition">Settings</button>
      </nav>

      {/* Hero */}
      <header className="text-center py-12 px-6 bg-gradient-to-r from-indigo-100 to-purple-100">
        <motion.h2 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-4xl font-bold mb-2">
          Stay on Track, Hit Your Goals
        </motion.h2>
        <p className="text-gray-600 max-w-xl mx-auto">
          Visualize progress, celebrate milestones, and get feedback from your team.
        </p>
      </header>

      {/* Goals Section */}
      <main className="max-w-6xl mx-auto py-10 px-6 grid grid-cols-1 md:grid-cols-2 gap-8">
        {mockGoals.map(goal => (
          <motion.div
            key={goal.id}
            className="bg-white rounded-xl shadow p-6 hover:shadow-lg transition"
            whileHover={{ scale: 1.02 }}
          >
            <h3 className="text-xl font-semibold mb-2">{goal.title}</h3>
            <div className="w-full bg-gray-200 rounded-full h-4 mb-3">
              <div className="bg-indigo-500 h-4 rounded-full transition-all" style={{ width: `${goal.progress}%` }}></div>
            </div>
            <div className="flex flex-wrap gap-2 mb-4">
              {goal.milestones.map((milestone, index) => (
                <span key={index} className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">
                  ✅ {milestone}
                </span>
              ))}
            </div>
            <ResponsiveContainer width="100%" height={150}>
              <LineChart data={goal.data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis hide />
                <Tooltip />
                <Line type="monotone" dataKey="progress" stroke="#6366f1" strokeWidth={3} />
              </LineChart>
            </ResponsiveContainer>
            <div className="mt-4">
              <h4 className="text-sm font-medium mb-1">💬 Feedback</h4>
              <div className="space-y-2">
                {goal.comments.map((comment, idx) => (
                  <div key={idx} className="flex items-center space-x-2">
                    <img src={comment.user} className="w-6 h-6 rounded-full" />
                    <p className="text-sm text-gray-700">{comment.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </main>

      {/* Footer */}
      <footer className="text-center py-6 text-sm text-gray-500">
        Built with ❤️ using Next.js, Tailwind CSS, Recharts, and Framer Motion
      </footer>
    </div>
  );
}
