import Link from "next/link"
import { Star, Check } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { CustomerLogo } from "@/components/customer-logo"

export default function Home() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Virtual Assistants for Ecommerce
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Hire a dedicated virtual assistant to handle your customer service, order management, and administrative tasks.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button asChild size="lg">
                    <Link href="/contact">Get Started</Link>
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="overflow-hidden rounded-lg shadow-lg">
                  <div className="aspect-video h-full w-full bg-muted"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted-foreground/20 px-3 py-1 text-sm">
                  Trusted by ecommerce brands
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Streamline Your Operations
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our virtual assistants are trained to handle your customer service, order management, and administrative tasks.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle>Customer Service</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Our VAs handle customer inquiries, returns, and complaints with professionalism and care.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Order Management</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    From processing orders to tracking shipments, our VAs ensure your fulfillment process runs smoothly.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Administrative Tasks</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Our VAs handle data entry, email management, and other administrative tasks to free up your time.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Social Media</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Our VAs create and schedule content, engage with your audience, and monitor your social media presence.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Email Marketing</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Our VAs create and send email campaigns, manage your subscriber list, and track performance.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Inventory Management</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Our VAs monitor stock levels, place orders with suppliers, and help optimize your inventory.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                  How it works
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Simple, Transparent Pricing
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Choose the plan that fits your needs. All plans include a dedicated virtual assistant.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle>Standard</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">$1,200</div>
                  <div className="text-sm text-muted-foreground">per month</div>
                  <ul className="mt-6 space-y-2">
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-primary" />
                      <span>20 hours per week</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-primary" />
                      <span>Dedicated VA</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-primary" />
                      <span>Customer service</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-primary" />
                      <span>Order management</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-primary" />
                      <span>Administrative tasks</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-primary" />
                      <span>Onboarding into your systems</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-primary" />
                      <span>Performance reviews</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-primary" />
                      <span>EOD reporting</span>
                    </li>
                  </ul>
                  <Button className="mt-8 w-full" asChild>
                    <Link href="/contact">Get started</Link>
                  </Button>
                </CardContent>
              </Card>
              <Card className="relative">
                <div className="absolute -top-4 left-0 right-0 mx-auto w-fit rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
                  Popular
                </div>
                <CardHeader>
                  <CardTitle>Pro</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">$2,200</div>
                  <div className="text-sm text-muted-foreground">per month</div>
                  <ul className="mt-6 space-y-2">
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-primary" />
                      <span>40 hours per week</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-primary" />
                      <span>Dedicated VA</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-primary" />
                      <span>Customer service</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-primary" />
                      <span>Order management</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-primary" />
                      <span>Administrative tasks</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-primary" />
                      <span>Social media management</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-primary" />
                      <span>Email marketing</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-primary" />
                      <span>Inventory management</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-primary" />
                      <span>Onboarding into your systems</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-primary" />
                      <span>Performance reviews</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-primary" />
                      <span>EOD reporting</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-primary" />
                      <span>Whatsapp group for daily comms</span>
                    </li>
                  </ul>
                  <Button className="mt-8 w-full" asChild>
                    <Link href="/contact">Get started</Link>
                  </Button>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Enterprise</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">Custom</div>
                  <div className="text-sm text-muted-foreground">Contact for pricing</div>
                  <ul className="mt-6 space-y-2">
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-primary" />
                      <span>Multiple VAs</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-primary" />
                      <span>Customer service</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-primary" />
                      <span>Order management</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-primary" />
                      <span>Administrative tasks</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-primary" />
                      <span>Social media management</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-primary" />
                      <span>Email marketing</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-primary" />
                      <span>Inventory management</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-primary" />
                      <span>Onboarding into your systems</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-primary" />
                      <span>Performance reviews</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-primary" />
                      <span>EOD reporting</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-primary" />
                      <span>Whatsapp group for daily comms</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-primary" />
                      <span>SOP creation of tasks</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-primary" />
                      <span>Screen monitoring of VA & analytics</span>
                    </li>
                  </ul>
                  <Button className="mt-8 w-full" asChild>
                    <Link href="/contact">Get started</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Reviews */}
        <section className="w-full py-12 md:py-24 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Reviews</h2>
              </div>
            </div>
            <div className="mx-auto grid gap-6 pt-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
              <Card className="flex flex-col justify-between">
                <div className="p-6">
                  <div className="flex items-center gap-1 text-yellow-500 mb-4">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-6">
                    "New to VIAA but already impressed! The onboarding was smooth, and our VA delivers exceptional value. Now I can focus on strategic growth while knowing the daily operations are in capable hands."
                  </p>
                  <div>
                    <p className="text-sm font-medium">Kirsty</p>
                    <p className="text-xs text-muted-foreground">Founder | The Booty Co</p>
                  </div>
                </div>
              </Card>
              
              <Card className="flex flex-col justify-between">
                <div className="p-6">
                  <div className="flex items-center gap-1 text-yellow-500 mb-4">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-6">
                    "Having worked with Callum previously, I knew VIAA would deliver excellence. Their customer support solutions have exceeded expectations, bringing efficiency and quality to our operations."
                  </p>
                  <div>
                    <p className="text-sm font-medium">Brad CM</p>
                    <p className="text-xs text-muted-foreground">Founder | Matcha Made</p>
                  </div>
                </div>
              </Card>
              
              <Card className="flex flex-col justify-between">
                <div className="p-6">
                  <div className="flex items-center gap-1 text-yellow-500 mb-4">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-6">
                    "Our VA's expertise in lead generation has been remarkable. The seamless onboarding process led to immediate results, and their ability to identify quality prospects in Sydney has been invaluable."
                  </p>
                  <div>
                    <p className="text-sm font-medium">Lachlan Beale</p>
                    <p className="text-xs text-muted-foreground">Founder | Presence Productions</p>
                  </div>
                </div>
              </Card>
              
              <Card className="flex flex-col justify-between">
                <div className="p-6">
                  <div className="flex items-center gap-1 text-yellow-500 mb-4">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-6">
                    "VIAA's innovative approach to LinkedIn networking has been exceptional. Their VA's expertise with AI tools and custom GPT integration has revolutionized our outreach strategy and connection building."
                  </p>
                  <div>
                    <p className="text-sm font-medium">Matteo Castiello</p>
                    <p className="text-xs text-muted-foreground">Managing Director | Insurgence AI</p>
                  </div>
                </div>
              </Card>
              
              <Card className="flex flex-col justify-between">
                <div className="p-6">
                  <div className="flex items-center gap-1 text-yellow-500 mb-4">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-6">
                    "Working with VIAA has been seamless. With their help handling customer inquiries, we've expanded order volume without compromising service quality—a standout team that feels like an integral part of our business."
                  </p>
                  <div>
                    <p className="text-sm font-medium">Scarlet Robertson</p>
                    <p className="text-xs text-muted-foreground">Founder | Scarlet & Sam</p>
                  </div>
                </div>
              </Card>
              
              <Card className="flex flex-col justify-between">
                <div className="p-6">
                  <div className="flex items-center gap-1 text-yellow-500 mb-4">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-6">
                    "Our social media presence has flourished with VIAA's assistance. Their VAs' expertise with ShipHero and seamless coordination with Future Fulfillment ensures smooth operations and quick issue resolution."
                  </p>
                  <div>
                    <p className="text-sm font-medium">Alicia Parr</p>
                    <p className="text-xs text-muted-foreground">Founder | Keep That Pump</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Success Story */}
        <section id="success-story" className="w-full py-16 md:py-28">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
              <div className="flex items-center justify-center order-last lg:order-first">
                <div className="overflow-hidden rounded-lg shadow-lg">
                  <div className="aspect-square h-full w-full bg-muted"></div>
                </div>
              </div>
              <div className="space-y-8">
                <div className="space-y-4">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Success Story</h2>
                  <p className="text-muted-foreground md:text-xl leading-relaxed">
                    How VIAA helped PrePlay scale without the growing pains.
                  </p>
                </div>
                <div className="space-y-6">
                  <p className="text-lg">
                    PrePlay, a fast-growing intimacy brand, was overwhelmed with customer service inquiries and order management. They needed a solution that could scale with their business without compromising on quality.
                  </p>
                  <p className="text-lg">
                    VIAA provided a dedicated team of virtual assistants who handled customer inquiries, order management, and administrative tasks. This allowed the PrePlay team to focus on product development and marketing.
                  </p>
                  <p className="text-lg">
                    The result? PrePlay was able to scale their business by 300% in just 6 months without hiring additional in-house staff. Their customer satisfaction scores improved by 25%, and their team was able to focus on strategic growth initiatives.
                  </p>
                </div>
                <Button size="lg" asChild>
                  <Link href="/contact">Get Started</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full py-6 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="space-y-4">
              <h3 className="text-lg font-medium">VIAA</h3>
              <p className="text-sm text-muted-foreground">
                Virtual assistant services for ecommerce businesses.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-medium">Links</h3>
              <nav className="flex flex-col space-y-2 text-sm">
                <Link href="/" className="text-muted-foreground hover:text-foreground">
                  Home
                </Link>
                <Link href="/contact" className="text-muted-foreground hover:text-foreground">
                  Contact
                </Link>
              </nav>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-medium">Contact</h3>
              <p className="text-sm text-muted-foreground">
                Email: support@viaa.so
              </p>
            </div>
          </div>
          <div className="mt-6 border-t border-border pt-6 text-center text-sm text-muted-foreground">
            © 2025 VIAA. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}