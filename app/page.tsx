'use client'

import { useState } from 'react'

export default function Home() {
  const [message, setMessage] = useState('Welcome to franGPT')

  return (
    <main className="min-h-screen bg-background text-foreground bg-grid">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-6xl font-bold text-center mb-8">
          <span className="text-gradient">{message}</span>
        </h1>
        <p className="text-xl text-center text-gray-300">
          AI-powered portfolio site coming soon...
        </p>
      </div>
    </main>
  )
}