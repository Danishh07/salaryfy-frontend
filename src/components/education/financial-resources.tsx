import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { BookOpen, Calculator, PieChart, TrendingUp, Shield, DollarSign } from 'lucide-react'

export function FinancialResources() {
  const resources = [
    {
      icon: Calculator,
      title: 'Financial Calculators',
      description: 'Access various calculators for SIP, EMI, tax planning, and retirement planning.',
      items: ['SIP Calculator', 'EMI Calculator', 'Tax Calculator', 'Retirement Planner'],
      color: 'bg-blue-500'
    },
    {
      icon: BookOpen,
      title: 'Educational Courses',
      description: 'Comprehensive courses on personal finance, investing, and financial planning.',
      items: ['Personal Finance 101', 'Investment Basics', 'Tax Planning', 'Retirement Planning'],
      color: 'bg-green-500'
    },
    {
      icon: PieChart,
      title: 'Investment Guides',
      description: 'Detailed guides on different investment options and portfolio management.',
      items: ['Mutual Funds Guide', 'Stock Market Basics', 'Bond Investing', 'Real Estate'],
      color: 'bg-purple-500'
    },
    {
      icon: TrendingUp,
      title: 'Market Insights',
      description: 'Stay updated with market trends, economic indicators, and investment opportunities.',
      items: ['Market Analysis', 'Economic Reports', 'Sector Updates', 'Investment Trends'],
      color: 'bg-orange-500'
    },
    {
      icon: Shield,
      title: 'Insurance Planning',
      description: 'Understand different types of insurance and plan your coverage effectively.',
      items: ['Life Insurance', 'Health Insurance', 'Vehicle Insurance', 'Home Insurance'],
      color: 'bg-red-500'
    },
    {
      icon: DollarSign,
      title: 'Salary Negotiation',
      description: 'Tips and strategies for salary negotiation and career advancement.',
      items: ['Salary Research', 'Negotiation Tips', 'Career Planning', 'Skill Development'],
      color: 'bg-teal-500'
    }
  ]

  return (
    <section>
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          Financial Resources & Tools
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Comprehensive resources to support your financial journey
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {resources.map((resource, index) => (
          <Card key={index} className="h-full hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg ${resource.color} mb-4`}>
                <resource.icon className="h-6 w-6 text-white" />
              </div>
              <CardTitle className="text-xl mb-2">{resource.title}</CardTitle>
              <CardDescription>{resource.description}</CardDescription>
            </CardHeader>
            <CardContent className="pt-0">
              <ul className="space-y-2 mb-6">
                {resource.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                    <div className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-3"></div>
                    {item}
                  </li>
                ))}
              </ul>
              <Button variant="outline" className="w-full" size="sm">
                Explore Resources
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-12 bg-gradient-to-r from-primary-600 to-primary-700 dark:from-primary-800 dark:to-primary-900 rounded-lg p-8 text-center text-white">
        <h3 className="text-2xl font-bold mb-4">Need Personalized Financial Advice?</h3>
        <p className="text-primary-100 mb-6 max-w-2xl mx-auto">
          Our financial experts are here to help you create a personalized financial plan based on your goals and circumstances.
        </p>
        <Button 
          variant="secondary" 
          size="lg"
          className="bg-white text-primary-600 hover:bg-gray-100"
        >
          Schedule a Consultation
        </Button>
      </div>
    </section>
  )
}
