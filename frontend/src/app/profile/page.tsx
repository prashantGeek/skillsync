'use client';

import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export default function ProfilePage() {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.push('/');
    }
  }, [user, loading, router]);

  if (loading || !user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div>
      </div>
    );
  }

  const renderLearnerDashboard = () => (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
      <h3 className="text-xl font-bold mb-4">My Courses</h3>
      <p className="text-gray-600 mb-6">You haven&apos;t enrolled in any courses yet. Explore our catalog to get started!</p>
      <button onClick={() => router.push('/courses')} className="bg-purple-600 text-white px-4 py-2 rounded font-medium hover:bg-purple-700 transition">
        Browse Courses
      </button>
    </div>
  );

  const renderInstructorDashboard = () => (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-bold">Instructor Dashboard</h3>
        <button 
          onClick={() => router.push('/instructor/courses/create')}
          className="bg-purple-600 text-white px-4 py-2 rounded font-medium hover:bg-purple-700 transition"
        >
          Create New Course
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <div className="p-4 bg-purple-50 rounded-lg border border-purple-100">
          <p className="text-sm text-purple-600 font-bold mb-1">Total Students</p>
          <p className="text-3xl font-extrabold text-gray-900">0</p>
        </div>
        <div className="p-4 bg-blue-50 rounded-lg border border-blue-100">
          <p className="text-sm text-blue-600 font-bold mb-1">Active Courses</p>
          <p className="text-3xl font-extrabold text-gray-900">0</p>
        </div>
        <div className="p-4 bg-green-50 rounded-lg border border-green-100">
          <p className="text-sm text-green-600 font-bold mb-1">Total Revenue</p>
          <p className="text-3xl font-extrabold text-gray-900">$0</p>
        </div>
      </div>
      <h4 className="font-bold text-lg mb-4">Your Courses</h4>
      <p className="text-gray-600">You haven&apos;t published any courses yet.</p>
    </div>
  );

  const renderBusinessDashboard = () => (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
      <h3 className="text-xl font-bold mb-6">Enterprise Organization Dashboard</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
        <div className="border border-gray-200 p-6 rounded-lg shadow-sm flex items-center justify-between">
          <div>
            <p className="text-gray-600 font-medium">Team Members Enrolled</p>
            <p className="text-3xl font-bold text-gray-900 mt-2">0/50 seat limit</p>
          </div>
          <button className="text-purple-600 hover:underline font-medium">Manage Team</button>
        </div>
        <div className="border border-gray-200 p-6 rounded-lg shadow-sm">
          <p className="text-gray-600 font-medium">Overall Completion Rate</p>
          <p className="text-3xl font-bold text-gray-900 mt-2">0%</p>
        </div>
      </div>
    </div>
  );

  const renderAdminDashboard = () => (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 border-l-4 border-l-red-600">
      <h3 className="text-xl font-bold text-red-700 mb-2">Platform Administration</h3>
      <p className="text-gray-600 mb-6">System overview and platform management.</p>
      
      <div className="flex gap-4">
        <button className="border border-gray-300 bg-gray-50 text-gray-800 px-4 py-2 rounded font-medium hover:bg-gray-100 transition">
          Manage Users
        </button>
        <button className="border border-gray-300 bg-gray-50 text-gray-800 px-4 py-2 rounded font-medium hover:bg-gray-100 transition">
          Review Courses
        </button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      
      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full">
        <div className="mb-8">
          <div className="flex items-center gap-4 mb-2">
            <h1 className="text-3xl font-extrabold text-gray-900">
              Welcome back, {user.name || 'User'}!
            </h1>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-purple-100 text-purple-800">
              {user.role} Profile
            </span>
          </div>
          <p className="text-gray-600">Manage your account, settings, and view your personalized dashboard below.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1 border border-gray-200 bg-white rounded-lg p-6 shadow-sm h-fit">
            <div className="mb-6 pb-6 border-b border-gray-100">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-full flex items-center justify-center text-white text-xl font-bold mb-4">
                {user.name ? user.name.charAt(0).toUpperCase() : user.email.charAt(0).toUpperCase()}
              </div>
              <h2 className="font-bold text-lg text-gray-900">{user.name || 'No Name Set'}</h2>
              <p className="text-gray-500 text-sm truncate">{user.email}</p>
            </div>
            
            <nav className="space-y-2">
              <a href="#" className="block px-3 py-2 rounded-md bg-purple-50 text-purple-700 font-medium">
                Dashboard
              </a>
              <a href="#" className="block px-3 py-2 rounded-md text-gray-600 hover:bg-gray-50 hover:text-gray-900 font-medium transition">
                Account Settings
              </a>
              <a href="#" className="block px-3 py-2 rounded-md text-gray-600 hover:bg-gray-50 hover:text-gray-900 font-medium transition">
                Billing & Security
              </a>
            </nav>
          </div>

          {/* Main Dashboard Area */}
          <div className="lg:col-span-3">
            {user.role === 'LEARNER' && renderLearnerDashboard()}
            {user.role === 'INSTRUCTOR' && renderInstructorDashboard()}
            {user.role === 'BUSINESS' && renderBusinessDashboard()}
            {user.role === 'ADMIN' && renderAdminDashboard()}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}