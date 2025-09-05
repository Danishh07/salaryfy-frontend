import { SalaryCalculator } from '@/components/calculators/salary-calculator'

export const metadata = {
  title: 'Salary Calculator - Salaryfy.io',
  description: 'Calculate your salary breakdown including basic pay, HRA, PF, and tax deductions with our advanced salary calculator.',
}

export default function SalaryCalculatorPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Salary Calculator
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Get a detailed breakdown of your salary including taxes, deductions, and take-home pay.
          </p>
        </div>
        <SalaryCalculator />
      </div>
    </div>
  )
}
