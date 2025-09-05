import { ArticleGrid } from '@/components/education/article-grid'
import { FinancialResources } from '@/components/education/financial-resources'

export const metadata = {
  title: 'Financial Education - Salaryfy.io',
  description: 'Improve your financial literacy with our comprehensive articles and resources on salary planning, investments, and financial planning.',
}

export default function FinancialEducationPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Financial Education
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Enhance your financial literacy with our curated articles, guides, and resources designed to help you make informed financial decisions.
          </p>
        </div>
        
        <div className="space-y-12">
          <ArticleGrid />
          <FinancialResources />
        </div>
      </div>
    </div>
  )
}
