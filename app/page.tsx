"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Laptop, Users, Zap, Shield } from "lucide-react";
import { useUser, SignInButton, SignOutButton } from "@clerk/nextjs";

export default function LandingPage() {
  const { isLoaded, isSignedIn, user } = useUser();

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-purple-50 via-white to-purple-100 dark:from-gray-900 dark:to-black">
      
      {/* Navbar */}
      <header className="w-full flex justify-between items-center px-8 py-6 shadow-md bg-transparent backdrop-blur-md fixed top-0 z-50">
        <h1 className="text-3xl font-bold text-purple-700 dark:text-purple-400">
          GALLMEEET
        </h1>
        <nav className="flex gap-8 text-md font-medium">
          <a href="#docs" className="hover:text-purple-700 transition">Docs</a>
          <a href="#meet" className="hover:text-purple-700 transition">Meet</a>

          {isLoaded && (
            isSignedIn ? (
              <SignOutButton>
                <button className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition">
                  Logout
                </button>
              </SignOutButton>
            ) : (
              <SignInButton>
                <button className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition">
                  Signup / Login
                </button>
              </SignInButton>
            )
          )}
        </nav>
      </header>

      {/* Hero Section */}
      <main className="flex-1 flex flex-col items-center justify-center text-center px-6 mt-28">
        <motion.h2
          className="text-4xl sm:text-6xl font-extrabold text-gray-900 dark:text-white"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Real-Time Meetings, <span className="text-purple-600">Smarter</span> Collaboration
        </motion.h2>
        <p className="mt-6 text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-2xl">
          GallMeet brings people together with real-time video, seamless collaboration, and AI-powered tools that make every meeting productive and engaging. No more boring calls – just meaningful conversations, personalized summaries, and smart features that keep your team connected.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4">
          {isLoaded && (
            isSignedIn ? (
              <>
                <Button size="lg" className="bg-purple-600 hover:bg-purple-700">Start Meeting</Button>
                <Button size="lg" variant="outline" className="border-purple-600 text-purple-600 hover:bg-purple-50">Join Meeting</Button>
              </>
            ) : (
              <>
                <SignInButton>
                  <Button size="lg" className="bg-purple-600 hover:bg-purple-700">Signup to Start</Button>
                </SignInButton>
                <SignInButton>
                  <Button size="lg" variant="outline" className="border-purple-600 text-purple-600 hover:bg-purple-50">Signup to Join</Button>
                </SignInButton>
              </>
            )
          )}
        </div>
      </main>

      {/* About Section */}
      <section id="docs" className="px-8 py-20 text-center bg-white dark:bg-gray-950">
        <h3 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">What is GALLMEET?</h3>
        <p className="max-w-3xl mx-auto text-gray-700 dark:text-gray-300">
          A modern online meeting platform built to combine real-time video conferencing with AI-powered summaries, instant translations, and smart meeting recaps.
        </p>
      </section>

      {/* Features Section */}
      <section id="meet" className="px-8 py-20 text-center">
        <h3 className="text-3xl font-bold mb-10 text-gray-900 dark:text-white">Key Features</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          <div className="p-6 rounded-2xl shadow-lg bg-purple-50 dark:bg-gray-900">
            <Users className="w-10 h-10 text-purple-600 mx-auto mb-4" />
            <h4 className="text-lg font-semibold mb-2">Community First</h4>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Build real connections with participants, not just video calls.
            </p>
          </div>
          <div className="p-6 rounded-2xl shadow-lg bg-purple-50 dark:bg-gray-900">
            <Zap className="w-10 h-10 text-purple-600 mx-auto mb-4" />
            <h4 className="text-lg font-semibold mb-2">Fast & Reliable</h4>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Low-latency streaming with modern tech stack for smooth meetings.
            </p>
          </div>
          <div className="p-6 rounded-2xl shadow-lg bg-purple-50 dark:bg-gray-900">
            <Shield className="w-10 h-10 text-purple-600 mx-auto mb-4" />
            <h4 className="text-lg font-semibold mb-2">Secure</h4>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              End-to-end encryption and role-based authentication for privacy.
            </p>
          </div>
        </div>
      </section>

      {/* How it works / Flow Diagram */}
      <section className="px-8 py-20 bg-gradient-to-r from-purple-600 to-purple-700 text-white text-center">
        <h3 className="text-3xl font-bold mb-10">How It Works</h3>
        <div className="flex flex-col md:flex-row justify-center items-center gap-12">
          <div className="flex flex-col items-center gap-2">
            <Laptop className="w-10 h-10" />
            <p>Login / Signup</p>
          </div>
          <span className="text-3xl font-bold">→</span>
          <div className="flex flex-col items-center gap-2">
            <Users className="w-10 h-10" />
            <p>Create / Join Meeting</p>
          </div>
          <span className="text-3xl font-bold">→</span>
          <div className="flex flex-col items-center gap-2">
            <Zap className="w-10 h-10" />
            <p>AI Summary & Action Items</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="signup" className="px-8 py-20 text-center bg-white dark:bg-gray-950">
        <h3 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Contact Us</h3>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          For any queries, reach us at:
        </p>
        <p className="font-mono text-purple-600">support@iwritetech.com</p>
      </section>

      {/* Footer */}
      <footer className="py-6 text-center text-sm text-gray-500 dark:text-gray-400">
        © 2025 Iwritetech. Built with ❤️ for smarter meetings.
      </footer>
    </div>
  );
}
