'use client'

import { motion } from 'framer-motion'
import { Calculator, PieChart, BookOpen, Users, Shield, Zap } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export function FeaturesSection() {
  const features = [
    {
      icon: Calculator,
      title: 'Advanced Salary Calculator',
      description: 'Get detailed breakdowns of your salary including basic pay, HRA, PF, and tax deductions with real-time calculations.',
      color: 'bg-blue-500'
    },
    {
      icon: PieChart,
      title: 'Tax Planning Tools',
      description: 'Understand different tax slabs, exemptions, and deductions to optimize your tax planning strategy.',
      color: 'bg-green-500'
    },
    {
      icon: BookOpen,
      title: 'Financial Education',
      description: 'Access comprehensive resources and articles to improve your financial literacy and make informed decisions.',
      color: 'bg-purple-500'
    },
    {
      icon: Users,
      title: 'Community Support',
      description: 'Connect with fellow professionals and financial experts to share knowledge and get advice.',
      color: 'bg-orange-500'
    },
    {
      icon: Shield,
      title: 'Privacy Focused',
      description: 'Your financial data is processed locally and never stored on our servers, ensuring complete privacy.',
      color: 'bg-red-500'
    },
    {
      icon: Zap,
      title: 'Real-time Updates',
      description: 'Stay updated with the latest tax rules, salary structures, and financial policies in India.',
      color: 'bg-yellow-500'
    }
  ]

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Everything You Need for Financial Success
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Comprehensive tools and resources designed to help you understand, plan, and optimize your financial journey.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300 border-0 shadow-md">
                <CardHeader>
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg ${feature.color} mb-4`}>
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-xl mb-2">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
