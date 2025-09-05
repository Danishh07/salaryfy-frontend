import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Lightbulb, PiggyBank, FileText, Calculator } from 'lucide-react'

export function TaxTips() {
  const tips = [
    {
      icon: PiggyBank,
      title: 'Invest in ELSS',
      description: 'Equity Linked Savings Schemes offer tax deduction up to ₹1.5 lakh under Section 80C with potential for good returns.',
      color: 'bg-green-500'
    },
    {
      icon: FileText,
      title: 'Keep Receipts',
      description: 'Maintain proper documentation for all your investments and expenses to claim legitimate deductions.',
      color: 'bg-blue-500'
    },
    {
      icon: Calculator,
      title: 'Plan Early',
      description: 'Start tax planning at the beginning of the financial year rather than rushing at the end.',
      color: 'bg-purple-500'
    },
    {
      icon: Lightbulb,
      title: 'Choose Wisely',
      description: 'Compare old vs new tax regime based on your deductions and choose the one that saves more tax.',
      color: 'bg-orange-500'
    }
  ]

  const deductions = [
    { section: 'Section 80C', description: 'PPF, ELSS, Life Insurance, Home Loan Principal', limit: '₹1,50,000' },
    { section: 'Section 80D', description: 'Health Insurance Premiums', limit: '₹25,000' },
    { section: 'Section 80TTA', description: 'Interest on Savings Account', limit: '₹10,000' },
    { section: 'Section 24', description: 'Home Loan Interest', limit: '₹2,00,000' },
  ]

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Tax Saving Tips</CardTitle>
          <CardDescription>
            Smart strategies to reduce your tax liability legally
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {tips.map((tip, index) => (
              <div key={index} className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:shadow-md transition-shadow">
                <div className={`inline-flex items-center justify-center w-10 h-10 rounded-lg ${tip.color} mb-3`}>
                  <tip.icon className="h-5 w-5 text-white" />
                </div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">{tip.title}</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">{tip.description}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Common Tax Deductions</CardTitle>
          <CardDescription>
            Available in the old tax regime
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {deductions.map((deduction, index) => (
              <div key={index} className="flex justify-between items-start p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">{deduction.section}</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">{deduction.description}</p>
                </div>
                <span className="text-sm font-medium text-primary-600 dark:text-primary-400 whitespace-nowrap">
                  {deduction.limit}
                </span>
              </div>
            ))}
          </div>
          <div className="mt-4 p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
            <p className="text-sm text-yellow-800 dark:text-yellow-200">
              <strong>Note:</strong> Most deductions are not available in the new tax regime. Choose the regime that offers better tax savings based on your situation.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
