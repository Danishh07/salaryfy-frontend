'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { calculateSalaryBreakdown } from '@/lib/salary-utils'

interface SalaryData {
  grossSalary: number
  basicPay: number
  hra: number
  specialAllowance: number
  pf: number
  professionalTax: number
  incomeTax: number
  netSalary: number
}

export function SalaryCalculator() {
  const [grossSalary, setGrossSalary] = useState('')
  const [salaryData, setSalaryData] = useState<SalaryData | null>(null)

  const handleCalculate = () => {
    const salary = parseFloat(grossSalary)
    if (salary && salary > 0) {
      const breakdown = calculateSalaryBreakdown(salary)
      setSalaryData(breakdown)
    }
  }

  const handleReset = () => {
    setGrossSalary('')
    setSalaryData(null)
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Input Section */}
      <Card>
        <CardHeader>
          <CardTitle>Enter Your Salary Details</CardTitle>
          <CardDescription>
            Enter your gross annual salary to get a detailed breakdown
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <label htmlFor="gross-salary" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Gross Annual Salary (₹)
            </label>
            <input
              id="gross-salary"
              type="number"
              value={grossSalary}
              onChange={(e) => setGrossSalary(e.target.value)}
              placeholder="e.g., 1200000"
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:text-white"
            />
          </div>
          <div className="flex space-x-4">
            <Button onClick={handleCalculate} className="flex-1">
              Calculate
            </Button>
            <Button onClick={handleReset} variant="outline" className="flex-1">
              Reset
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Results Section */}
      <Card>
        <CardHeader>
          <CardTitle>Salary Breakdown</CardTitle>
          <CardDescription>
            Detailed breakdown of your salary components
          </CardDescription>
        </CardHeader>
        <CardContent>
          {salaryData ? (
            <div className="space-y-4">
              <div className="border-b border-gray-200 dark:border-gray-700 pb-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Income Components</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-300">Gross Annual Salary:</span>
                    <span className="font-medium">₹{salaryData.grossSalary.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-300">Basic Pay (40%):</span>
                    <span className="font-medium">₹{salaryData.basicPay.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-300">HRA (20%):</span>
                    <span className="font-medium">₹{salaryData.hra.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-300">Special Allowance:</span>
                    <span className="font-medium">₹{salaryData.specialAllowance.toLocaleString()}</span>
                  </div>
                </div>
              </div>

              <div className="border-b border-gray-200 dark:border-gray-700 pb-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Deductions</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-300">PF (12% of Basic):</span>
                    <span className="font-medium text-red-600">-₹{salaryData.pf.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-300">Professional Tax:</span>
                    <span className="font-medium text-red-600">-₹{salaryData.professionalTax.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-300">Income Tax (Est.):</span>
                    <span className="font-medium text-red-600">-₹{salaryData.incomeTax.toLocaleString()}</span>
                  </div>
                </div>
              </div>

              <div className="bg-primary-50 dark:bg-primary-900/20 p-4 rounded-lg">
                <div className="flex justify-between items-center">
                  <span className="text-lg font-semibold text-gray-900 dark:text-white">Net Annual Salary:</span>
                  <span className="text-2xl font-bold text-primary-600 dark:text-primary-400">
                    ₹{salaryData.netSalary.toLocaleString()}
                  </span>
                </div>
                <div className="flex justify-between items-center mt-2">
                  <span className="text-sm text-gray-600 dark:text-gray-300">Monthly Take-home:</span>
                  <span className="text-lg font-semibold text-primary-600 dark:text-primary-400">
                    ₹{Math.round(salaryData.netSalary / 12).toLocaleString()}
                  </span>
                </div>
              </div>
            </div>
          ) : (
            <div className="text-center py-8">
              <p className="text-gray-500 dark:text-gray-400">
                Enter your salary details to see the breakdown
              </p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
