'use client'

import { useState, FormEvent } from 'react'
import { motion } from 'framer-motion'
import { HiOutlinePaperAirplane } from 'react-icons/hi'

interface FormData {
  name: string
  email: string
  subject: string
  message: string
}

interface FormStatus {
  type: 'idle' | 'loading' | 'success' | 'error'
  message?: string
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const [status, setStatus] = useState<FormStatus>({ type: 'idle' })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus({ type: 'loading' })

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setStatus({
          type: 'success',
          message: 'Message sent successfully! I'll get back to you soon.',
        })
        setFormData({ name: '', email: '', subject: '', message: '' })
      } else {
        setStatus({
          type: 'error',
          message: 'Failed to send message. Please try again.',
        })
      }
    } catch (error) {
      console.error('Error sending message:', error)
      setStatus({
        type: 'error',
        message: 'An error occurred. Please try again later.',
      })
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {status.message && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className={`p-4 rounded-lg ${
            status.type === 'success'
              ? 'bg-green-100 dark:bg-green-900/20 text-green-700 dark:text-green-400'
              : 'bg-red-100 dark:bg-red-900/20 text-red-700 dark:text-red-400'
          }`}
        >
          {status.message}
        </motion.div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="glass px-6 py-3 rounded-lg border border-gray-300 dark:border-gray-700 focus:border-primary focus:outline-none transition-colors"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
          className="glass px-6 py-3 rounded-lg border border-gray-300 dark:border-gray-700 focus:border-primary focus:outline-none transition-colors"
        />
      </div>

      <input
        type="text"
        name="subject"
        placeholder="Subject"
        value={formData.subject}
        onChange={handleChange}
        required
        className="w-full glass px-6 py-3 rounded-lg border border-gray-300 dark:border-gray-700 focus:border-primary focus:outline-none transition-colors"
      />

      <textarea
        name="message"
        placeholder="Your Message"
        rows={5}
        value={formData.message}
        onChange={handleChange}
        required
        className="w-full glass px-6 py-3 rounded-lg border border-gray-300 dark:border-gray-700 focus:border-primary focus:outline-none transition-colors resize-none"
      />

      <motion.button
        type="submit"
        disabled={status.type === 'loading'}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="w-full btn-primary justify-center disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status.type === 'loading' ? 'Sending...' : 'Send Message'}
        <HiOutlinePaperAirplane className="w-5 h-5" />
      </motion.button>
    </form>
  )
}
