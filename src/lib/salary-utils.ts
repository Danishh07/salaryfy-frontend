// Salary calculation utilities

export interface SalaryBreakdown {
  grossSalary: number
  basicPay: number
  hra: number
  specialAllowance: number
  pf: number
  professionalTax: number
  incomeTax: number
  netSalary: number
}

export function calculateSalaryBreakdown(grossSalary: number): SalaryBreakdown {
  // Basic Pay - typically 40% of gross salary
  const basicPay = grossSalary * 0.4
  
  // HRA - typically 20% of gross salary
  const hra = grossSalary * 0.2
  
  // Special Allowance - remaining amount
  const specialAllowance = grossSalary - basicPay - hra
  
  // PF - 12% of basic pay (both employee and employer contribute)
  const pf = basicPay * 0.12
  
  // Professional Tax - fixed amount per year (varies by state, using Karnataka as example)
  const professionalTax = 2400
  
  // Income Tax - simplified calculation based on new tax regime
  const incomeTax = calculateIncomeTax(grossSalary)
  
  // Net Salary
  const netSalary = grossSalary - pf - professionalTax - incomeTax
  
  return {
    grossSalary,
    basicPay: Math.round(basicPay),
    hra: Math.round(hra),
    specialAllowance: Math.round(specialAllowance),
    pf: Math.round(pf),
    professionalTax,
    incomeTax: Math.round(incomeTax),
    netSalary: Math.round(netSalary)
  }
}

function calculateIncomeTax(grossSalary: number): number {
  // New Tax Regime (FY 2023-24) - simplified calculation
  // Standard deduction: ₹50,000
  const standardDeduction = 50000
  const taxableIncome = Math.max(0, grossSalary - standardDeduction)
  
  let tax = 0
  
  // Tax slabs for new regime
  if (taxableIncome <= 300000) {
    tax = 0
  } else if (taxableIncome <= 600000) {
    tax = (taxableIncome - 300000) * 0.05
  } else if (taxableIncome <= 900000) {
    tax = 15000 + (taxableIncome - 600000) * 0.10
  } else if (taxableIncome <= 1200000) {
    tax = 45000 + (taxableIncome - 900000) * 0.15
  } else if (taxableIncome <= 1500000) {
    tax = 90000 + (taxableIncome - 1200000) * 0.20
  } else {
    tax = 150000 + (taxableIncome - 1500000) * 0.30
  }
  
  // Add 4% Health and Education Cess
  tax = tax * 1.04
  
  return tax
}

export function calculateTaxSavings(investmentAmount: number): number {
  // Calculate tax savings based on 30% tax bracket (simplified)
  return investmentAmount * 0.3
}

export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(amount)
}
