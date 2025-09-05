import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Mail, Phone, MapPin, Clock, MessageCircle, Users } from 'lucide-react'

export function ContactInfo() {
  const contactMethods = [
    {
      icon: Mail,
      title: 'Email Us',
      details: 'contact@salaryfy.io',
      description: 'Send us an email and we&apos;ll respond within 24 hours',
      color: 'bg-blue-500'
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: '+91 98765 43210',
      description: 'Available Monday to Friday, 9 AM to 6 PM IST',
      color: 'bg-green-500'
    },
    {
      icon: MessageCircle,
      title: 'Live Chat',
      details: 'Chat Support',
      description: 'Get instant help with our live chat feature',
      color: 'bg-purple-500'
    }
  ]

  const officeInfo = [
    {
      icon: MapPin,
      title: 'Headquarters',
      details: 'Bangalore, Karnataka, India',
      description: 'Innovation Hub, Tech Park'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: 'Monday - Friday: 9:00 AM - 6:00 PM IST',
      description: 'Saturday: 10:00 AM - 2:00 PM IST'
    },
    {
      icon: Users,
      title: 'Support Team',
      details: 'Dedicated financial experts',
      description: 'Ready to help with your queries'
    }
  ]

  const faqs = [
    {
      question: 'Is the salary calculator accurate?',
      answer: 'Our calculator uses the latest tax slabs and deduction rules. However, consult a tax professional for complex situations.'
    },
    {
      question: 'Is my data secure?',
      answer: 'Yes, all calculations are performed locally in your browser. We don&apos;t store any personal financial information.'
    },
    {
      question: 'Do you provide financial advice?',
      answer: 'We provide educational content and tools. For personalized advice, we recommend consulting certified financial advisors.'
    }
  ]

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Get in Touch</CardTitle>
          <CardDescription>
            Choose the best way to reach us
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {contactMethods.map((method, index) => (
              <div key={index} className="flex items-start space-x-4 p-4 rounded-lg border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow">
                <div className={`inline-flex items-center justify-center w-10 h-10 rounded-lg ${method.color}`}>
                  <method.icon className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">{method.title}</h4>
                  <p className="text-primary-600 dark:text-primary-400 font-medium">{method.details}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-300">{method.description}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Office Information</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {officeInfo.map((info, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-gray-100 dark:bg-gray-800">
                  <info.icon className="h-4 w-4 text-gray-600 dark:text-gray-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">{info.title}</h4>
                  <p className="text-gray-700 dark:text-gray-300">{info.details}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{info.description}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Frequently Asked Questions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-gray-200 dark:border-gray-700 pb-4 last:border-b-0">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">{faq.question}</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">{faq.answer}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
