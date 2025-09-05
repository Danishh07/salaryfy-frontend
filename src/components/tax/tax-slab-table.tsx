import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export function TaxSlabTable() {
  const taxSlabs = [
    { income: 'Up to ₹3,00,000', rate: '0%', tax: '₹0' },
    { income: '₹3,00,001 - ₹6,00,000', rate: '5%', tax: '₹0 - ₹15,000' },
    { income: '₹6,00,001 - ₹9,00,000', rate: '10%', tax: '₹15,000 - ₹45,000' },
    { income: '₹9,00,001 - ₹12,00,000', rate: '15%', tax: '₹45,000 - ₹90,000' },
    { income: '₹12,00,001 - ₹15,00,000', rate: '20%', tax: '₹90,000 - ₹1,50,000' },
    { income: 'Above ₹15,00,000', rate: '30%', tax: '₹1,50,000+' },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>Income Tax Slabs (FY 2023-24)</CardTitle>
        <CardDescription>
          New Tax Regime - Simplified tax structure without most deductions
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <th className="text-left py-3 px-2 font-semibold text-gray-900 dark:text-white">Income Range</th>
                <th className="text-left py-3 px-2 font-semibold text-gray-900 dark:text-white">Tax Rate</th>
                <th className="text-left py-3 px-2 font-semibold text-gray-900 dark:text-white">Tax Amount</th>
              </tr>
            </thead>
            <tbody>
              {taxSlabs.map((slab, index) => (
                <tr key={index} className="border-b border-gray-100 dark:border-gray-800">
                  <td className="py-3 px-2 text-gray-700 dark:text-gray-300">{slab.income}</td>
                  <td className="py-3 px-2 text-gray-700 dark:text-gray-300">{slab.rate}</td>
                  <td className="py-3 px-2 text-gray-700 dark:text-gray-300">{slab.tax}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
          <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">Important Notes:</h4>
          <ul className="text-sm text-blue-800 dark:text-blue-200 space-y-1">
            <li>• Standard deduction of ₹50,000 is available in the new tax regime</li>
            <li>• Health and Education Cess of 4% is applicable on total tax</li>
            <li>• You can choose between old and new tax regime</li>
            <li>• Tax rates may vary for senior citizens</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  )
}
