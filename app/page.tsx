import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ChevronRight, DollarSign, PieChart, Calculator, TrendingUp, Check, Zap } from 'lucide-react'

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center bg-white dark:bg-gray-900">
        <Link className="flex items-center justify-center" href="#">
          <Zap className="h-6 w-6 text-purple-600 dark:text-purple-400" />
          <span className="ml-2 text-xl font-bold text-gray-900 dark:text-white">TipTracker</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#features">
            Features
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#testimonials">
            Testimonials
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#pricing">
            Pricing
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-br from-purple-600 via-purple-400 to-teal-400">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white">
                  Track Your Tips, Boost Your Income
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-100 md:text-xl dark:text-gray-200">
                  TipTracker helps servers like you manage earnings, calculate tipouts, and analyze income trends with ease.
                </p>
              </div>
              <div className="space-x-4">
                <Link href="/login?tab=signup">
                  <Button className="bg-white text-purple-600 hover:bg-gray-100">Get Started for Free</Button>
                </Link>
                <Button variant="outline" className="text-white border-white hover:bg-white/20 bg-purple-600/50">Learn More</Button>
              </div>
            </div>
          </div>
        </section>
        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-900">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12 text-gray-900 dark:text-white">Key Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="bg-white dark:bg-gray-800">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <DollarSign className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                    <span>Earnings Tracker</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  Log your daily tips and wages with ease, keeping a detailed record of your income.
                </CardContent>
              </Card>
              <Card className="bg-white dark:bg-gray-800">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Calculator className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                    <span>Tipout Calculator</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  Automatically calculate tipouts for support staff based on your restaurant's policies.
                </CardContent>
              </Card>
              <Card className="bg-white dark:bg-gray-800">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <TrendingUp className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                    <span>Income Analysis</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  Visualize your earnings over time with intuitive charts and gain insights into your financial trends.
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32 bg-purple-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12 text-gray-900 dark:text-white">What Servers Say</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="bg-white dark:bg-gray-700">
                <CardContent className="pt-8">
                  <p className="text-lg mb-4 text-gray-700 dark:text-gray-300">"TipTracker has revolutionized how I manage my income. It's a game-changer for any server!"</p>
                  <p className="font-semibold text-purple-600 dark:text-purple-400">- Sarah J., Fine Dining Server</p>
                </CardContent>
              </Card>
              <Card className="bg-white dark:bg-gray-700">
                <CardContent className="pt-8">
                  <p className="text-lg mb-4 text-gray-700 dark:text-gray-300">"I love how easy it is to calculate tipouts. This app saves me time and headaches every shift."</p>
                  <p className="font-semibold text-purple-600 dark:text-purple-400">- Mike T., Bartender</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section id="pricing" className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-gray-900">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12 text-gray-900 dark:text-white">Simple, Transparent Pricing</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <Card className="flex flex-col justify-between bg-white dark:bg-gray-800">
                <div>
                  <CardHeader>
                    <CardTitle className="text-2xl font-bold">Basic</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-4xl font-bold mb-4 text-purple-600 dark:text-purple-400">$0<span className="text-lg font-normal text-gray-600 dark:text-gray-400">/month</span></p>
                    <ul className="space-y-2">
                      <li className="flex items-center"><Check className="w-5 h-5 text-teal-500 mr-2" /> Daily tip logging</li>
                      <li className="flex items-center"><Check className="w-5 h-5 text-teal-500 mr-2" /> Basic income reports</li>
                    </ul>
                  </CardContent>
                </div>
                <CardContent>
                  <Link href="/login?tab=signup">
                    <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white">Get Started</Button>
                  </Link>
                </CardContent>
              </Card>
              <Card className="flex flex-col justify-between border-2 border-purple-600 bg-white dark:bg-gray-800">
                <div>
                  <CardHeader>
                    <CardTitle className="text-2xl font-bold">Pro</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-4xl font-bold mb-4 text-purple-600 dark:text-purple-400">$9.99<span className="text-lg font-normal text-gray-600 dark:text-gray-400">/month</span></p>
                    <ul className="space-y-2">
                      <li className="flex items-center"><Check className="w-5 h-5 text-teal-500 mr-2" /> Everything in Basic</li>
                      <li className="flex items-center"><Check className="w-5 h-5 text-teal-500 mr-2" /> Advanced tipout calculator</li>
                      <li className="flex items-center"><Check className="w-5 h-5 text-teal-500 mr-2" /> Detailed income analysis</li>
                    </ul>
                  </CardContent>
                </div>
                <CardContent>
                  <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white">Upgrade to Pro</Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-purple-600 to-teal-400">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center text-white">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Ready to Boost Your Income?</h2>
                <p className="mx-auto max-w-[700px] text-purple-100 md:text-xl/relaxed">
                  Join thousands of servers who are taking control of their finances with TipTracker.
                </p>
              </div>
              <Link href="/login?tab=signup">
                <Button className="bg-white text-purple-600 hover:bg-purple-50">Start Your Free Trial</Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t bg-white dark:bg-gray-900">
        <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 TipTracker. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4 text-gray-500 hover:text-purple-600 dark:text-gray-400 dark:hover:text-purple-400" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4 text-gray-500 hover:text-purple-600 dark:text-gray-400 dark:hover:text-purple-400" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}