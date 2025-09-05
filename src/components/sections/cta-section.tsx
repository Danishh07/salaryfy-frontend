'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Calculator } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function CTASection() {
  return (
    <section className="bg-gradient-to-r from-primary-600 to-primary-700 dark:from-primary-800 dark:to-primary-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Take Control of Your Finances?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Start your journey towards financial awareness today. Calculate your salary breakdown, understand your taxes, and build your financial knowledge.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              variant="secondary"
              className="text-lg px-8 py-3 bg-white text-primary-600 hover:bg-gray-100"
              onClick={() => window.location.href = '/salary-calculator'}
            >
              <Calculator className="mr-2 h-5 w-5" />
              Start Calculating
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="text-lg px-8 py-3 border-white text-white hover:bg-white hover:text-primary-600"
              onClick={() => window.location.href = '/financial-education'}
            >
              Learn More
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
