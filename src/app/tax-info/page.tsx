import { TaxSlabTable } from '@/components/tax/tax-slab-table'
import { TaxTips } from '@/components/tax/tax-tips'

export const metadata = {
  title: 'Tax Information - Salaryfy.io',
  description: 'Learn about income tax slabs, deductions, and tax planning strategies for financial success.',
}

export default function TaxInfoPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Tax Information
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Understand income tax slabs, deductions, and smart tax planning strategies to optimize your financial planning.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <TaxSlabTable />
          <TaxTips />
        </div>
      </div>
    </div>
  )
}
