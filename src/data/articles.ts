export interface Article {
  id: string
  title: string
  description: string
  content: string
  category: string
  readTime: string
  publishDate: string
  author: string
  tags: string[]
  featured: boolean
}

export const articles: Article[] = [
  {
    id: '1',
    title: 'Understanding Your Salary Structure',
    description: 'Learn about the different components of your salary and how they affect your take-home pay and taxes.',
    content: `Understanding your salary structure is crucial for effective financial planning. Your salary typically consists of several components, each with different tax implications.

**Basic Salary**: This forms the foundation of your salary structure, usually 40-50% of your total CTC. It's fully taxable and forms the basis for calculating other allowances and deductions.

**House Rent Allowance (HRA)**: Usually 40-50% of basic salary for metro cities and 25% for non-metro cities. HRA can be partially exempt from tax if you're paying rent.

**Special Allowances**: These are additional components that make up the remaining salary. They're fully taxable but provide flexibility in salary structuring.

**Employee Provident Fund (EPF)**: 12% of your basic salary goes to EPF, which is a retirement savings scheme. This reduces your taxable income.

**Professional Tax**: A state-level tax that varies by state, typically around ₹200 per month.

Understanding these components helps you:
- Plan your taxes better
- Negotiate salary packages effectively
- Make informed decisions about salary restructuring
- Optimize your take-home pay

Remember, it's not just about the total CTC but how it's structured that affects your in-hand salary and long-term financial health.`,
    category: 'Salary Planning',
    readTime: '5 min read',
    publishDate: '2024-01-15',
    author: 'Financial Expert Team',
    tags: ['salary', 'tax planning', 'financial basics'],
    featured: true
  },
  {
    id: '2',
    title: 'Tax Planning Strategies for Salaried Employees',
    description: 'Discover effective tax-saving strategies and investment options to minimize your tax liability legally.',
    content: `Tax planning is essential for maximizing your savings and building wealth. Here are proven strategies for salaried employees:

**Section 80C Investments**:
- ELSS Mutual Funds: Best combination of tax saving and wealth creation
- Public Provident Fund (PPF): 15-year lock-in with tax-free returns
- Life Insurance: Term insurance for protection, avoid investment-linked policies
- Home Loan Principal: Counts towards 80C limit

**Health Insurance (Section 80D)**:
- ₹25,000 deduction for self and family
- Additional ₹25,000 for parents below 60
- ₹50,000 for parents above 60

**Other Deductions**:
- Home Loan Interest: Up to ₹2 lakhs under Section 24
- Education Loan Interest: Full deduction under Section 80E
- Donations: 50% or 100% deduction under Section 80G

**New vs Old Tax Regime**:
Calculate tax under both regimes and choose the beneficial one. Generally:
- Old regime is better if you have significant deductions
- New regime is better if you have minimal deductions

**Advanced Strategies**:
- Salary restructuring to include tax-efficient allowances
- Timing of investments and expenses
- Tax-loss harvesting in equity investments

Start planning early in the financial year to maximize benefits and avoid last-minute rushes.`,
    category: 'Tax Planning',
    readTime: '7 min read',
    publishDate: '2024-01-10',
    author: 'Tax Consultant',
    tags: ['tax planning', 'investments', 'deductions'],
    featured: true
  },
  {
    id: '3',
    title: 'Building an Emergency Fund',
    description: 'Learn why having an emergency fund is crucial and how to build one systematically.',
    content: `An emergency fund is your financial safety net. It protects you from unexpected expenses and provides peace of mind.

**Why You Need an Emergency Fund**:
- Job loss or income reduction
- Medical emergencies
- Major home or vehicle repairs
- Economic uncertainties

**How Much to Save**:
- Minimum: 3-6 months of expenses
- Conservative approach: 6-12 months
- Consider your job stability and family responsibilities

**Where to Keep Your Emergency Fund**:
- High-yield savings account: Easy access, decent returns
- Liquid mutual funds: Slightly higher returns, 1-day withdrawal
- Fixed deposits: Safe but lower liquidity
- Avoid: Stock markets, long-term investments

**Building Your Fund**:
1. Calculate your monthly expenses
2. Set a realistic savings target
3. Automate transfers to a separate account
4. Start small - even ₹1000/month helps
5. Use windfalls (bonus, tax refunds) to boost the fund

**Maintaining Your Fund**:
- Review and adjust the target amount annually
- Replenish immediately after using
- Keep it separate from other savings
- Don't use it for non-emergencies

Remember, an emergency fund is insurance, not an investment. Focus on liquidity and safety over returns.`,
    category: 'Financial Planning',
    readTime: '6 min read',
    publishDate: '2024-01-05',
    author: 'Personal Finance Expert',
    tags: ['emergency fund', 'savings', 'financial security'],
    featured: false
  },
  {
    id: '4',
    title: 'Investment Options for Beginners',
    description: 'A comprehensive guide to different investment options suitable for beginners starting their investment journey.',
    content: `Starting your investment journey can be overwhelming. Here's a beginner-friendly guide to various investment options:

**Mutual Funds**:
- Diversified portfolio managed by professionals
- SIP option for regular investments
- Types: Equity, Debt, Hybrid, ELSS
- Start with: Large-cap or index funds

**Public Provident Fund (PPF)**:
- 15-year lock-in period
- Tax deduction + tax-free returns
- Current rate: ~7.1% annually
- Maximum investment: ₹1.5 lakhs per year

**National Pension System (NPS)**:
- Retirement-focused investment
- Additional tax deduction of ₹50,000
- Mix of equity and debt
- Low cost, government backing

**Fixed Deposits**:
- Guaranteed returns
- No market risk
- Lower returns compared to inflation
- Good for short-term goals

**Direct Equity**:
- Higher potential returns
- Requires research and knowledge
- Start only after learning basics
- Never invest borrowed money

**Gold**:
- Hedge against inflation
- Digital gold or gold ETFs preferred
- Limit to 5-10% of portfolio

**Investment Principles**:
- Start early to benefit from compounding
- Diversify across asset classes
- Invest regularly through SIPs
- Review and rebalance annually
- Stay invested for long term

Begin with mutual funds through SIP and gradually explore other options as you learn more.`,
    category: 'Investments',
    readTime: '8 min read',
    publishDate: '2024-01-01',
    author: 'Investment Advisor',
    tags: ['investments', 'mutual funds', 'beginner guide'],
    featured: true
  },
  {
    id: '5',
    title: 'Understanding Credit Scores and How to Improve Them',
    description: 'Learn about credit scores, why they matter, and actionable steps to improve your creditworthiness.',
    content: `Your credit score is a three-digit number that can significantly impact your financial life. Here's everything you need to know:

**What is a Credit Score?**:
- Numerical representation of your creditworthiness
- Ranges from 300 to 900
- Calculated by credit bureaus (CIBIL, Experian, Equifax, CRIF)

**Score Ranges**:
- 750-900: Excellent
- 700-749: Good
- 650-699: Fair
- 550-649: Poor
- Below 550: Very Poor

**Factors Affecting Your Score**:
- Payment history (35%): Most important factor
- Credit utilization (30%): Keep below 30%
- Length of credit history (15%)
- Types of credit (10%)
- New credit inquiries (10%)

**How to Improve Your Score**:
1. Pay bills on time, every time
2. Keep credit utilization low
3. Don't close old credit cards
4. Limit new credit applications
5. Monitor your credit report regularly
6. Pay more than minimum on credit cards
7. Consider becoming an authorized user

**Common Mistakes**:
- Missing payment due dates
- Maxing out credit cards
- Applying for multiple loans/cards
- Not checking credit reports
- Closing old accounts

**Benefits of Good Credit**:
- Lower interest rates on loans
- Higher credit limits
- Better insurance premiums
- Easier loan approvals
- Sometimes affects job prospects

Check your credit score regularly and take steps to improve it. A good credit score saves money and opens financial opportunities.`,
    category: 'Credit Management',
    readTime: '6 min read',
    publishDate: '2023-12-28',
    author: 'Credit Expert',
    tags: ['credit score', 'loans', 'financial health'],
    featured: false
  },
  {
    id: '6',
    title: 'Retirement Planning in Your 20s and 30s',
    description: 'Why starting retirement planning early gives you a massive advantage and how to get started.',
    content: `Retirement might seem far away, but starting early is the best decision you can make for your future self.

**The Power of Starting Early**:
- A 25-year-old investing ₹5,000/month until 60 accumulates more than a 35-year-old investing ₹10,000/month
- Compounding works magic over long periods
- Lower financial pressure due to smaller required amounts

**Retirement Planning Tools**:

**Employee Provident Fund (EPF)**:
- Automatic deduction from salary
- Employer matching contribution
- Currently earning ~8.1% annually
- Tax-free on withdrawal

**Public Provident Fund (PPF)**:
- 15-year lock-in with extension options
- Tax deduction + tax-free returns
- Ideal for long-term wealth creation

**National Pension System (NPS)**:
- Additional ₹50,000 tax deduction
- Market-linked returns
- Mandatory annuity on withdrawal

**Mutual Funds (ELSS & Equity)**:
- Higher growth potential
- Systematic Investment Plans (SIPs)
- Tax benefits through ELSS

**Retirement Corpus Calculation**:
1. Estimate monthly expenses in retirement
2. Account for inflation (6-8% annually)
3. Calculate required corpus (25-30x annual expenses)
4. Work backwards to determine monthly investment

**Age-wise Asset Allocation**:
- 20s: 80% equity, 20% debt
- 30s: 70% equity, 30% debt
- 40s: 60% equity, 40% debt

**Action Steps**:
1. Maximize EPF contributions
2. Start a PPF account
3. Begin equity SIPs
4. Consider NPS for additional tax benefits
5. Review and increase investments annually

The earlier you start, the wealthier your retirement will be. Don't wait for the "perfect" time - start now!`,
    category: 'Retirement Planning',
    readTime: '7 min read',
    publishDate: '2023-12-20',
    author: 'Retirement Specialist',
    tags: ['retirement', 'long-term planning', 'wealth creation'],
    featured: true
  }
]

export const featuredArticles = articles.filter(article => article.featured)

export const categories = [
  'All',
  'Salary Planning',
  'Tax Planning',
  'Financial Planning',
  'Investments',
  'Credit Management',
  'Retirement Planning'
]
