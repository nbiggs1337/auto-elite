import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Phone, Mail, MapPin, Clock, MessageSquare, Wrench, Car, Navigation, Calendar } from "lucide-react"

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    details: "(555) 123-4567",
    description: "Call us for immediate assistance",
  },
  {
    icon: Mail,
    title: "Email",
    details: "info@autoelite.com",
    description: "Send us your questions anytime",
  },
  {
    icon: MapPin,
    title: "Location",
    details: "123 Performance Drive, Auto City, AC 12345",
    description: "Visit our showroom and service center",
  },
  {
    icon: Clock,
    title: "Hours",
    details: "Mon-Fri: 8AM-7PM, Sat: 9AM-5PM",
    description: "Sunday: Closed",
  },
]

const serviceAreas = [
  "Auto City",
  "Performance Valley",
  "Speed Town",
  "Racing Ridge",
  "Motor Heights",
  "Turbo Plains",
  "Chrome Hills",
  "Velocity Village",
]

const reasons = [
  {
    icon: Wrench,
    title: "Expert Installation",
    description: "Certified technicians with 15+ years experience",
  },
  {
    icon: Car,
    title: "All Vehicle Types",
    description: "From sports cars to trucks, we handle them all",
  },
  {
    icon: Navigation,
    title: "Mobile Service",
    description: "We come to you for installation and service",
  },
  {
    icon: Calendar,
    title: "Flexible Scheduling",
    description: "Same-day and weekend appointments available",
  },
]

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="border-b bg-white">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-lg">🏁</span>
              </div>
              <div>
                <span className="text-xl font-bold text-gray-900">AutoElite</span>
                <div className="text-xs text-gray-500 -mt-1">WHEELS & TIRES</div>
              </div>
            </Link>
            <nav className="hidden md:flex items-center space-x-6">
              <Link href="/" className="text-muted-foreground hover:text-foreground">
                Home
              </Link>
              <Link href="/shop" className="text-muted-foreground hover:text-foreground">
                Shop
              </Link>
              <Link href="/services" className="text-muted-foreground hover:text-foreground">
                Services
              </Link>
              <Link href="/contact" className="font-medium">
                Contact
              </Link>
              <Link href="/admin">
                <Button variant="outline" size="sm">
                  Admin
                </Button>
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Get in <span className="text-blue-400">Touch</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Ready to upgrade your ride? Our automotive experts are here to help you find the perfect wheels and tires.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">Contact Information</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Multiple ways to reach our team of automotive professionals
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:scale-105"
              >
                <CardHeader>
                  <div className="mx-auto w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center mb-4 shadow-lg">
                    <info.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-gray-900">{info.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="font-semibold text-gray-900 mb-2">{info.details}</p>
                  <CardDescription className="text-gray-600">{info.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <Card className="shadow-xl border-0">
                <CardHeader>
                  <CardTitle className="text-2xl text-gray-900">Send us a Message</CardTitle>
                  <CardDescription>Fill out the form below and we'll get back to you within 24 hours</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input id="firstName" className="mt-1" />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input id="lastName" className="mt-1" />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input id="email" type="email" className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" type="tel" className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="vehicle">Vehicle Information</Label>
                    <Input id="vehicle" placeholder="Year, Make, Model (e.g., 2023 BMW M3)" className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="service">Service Needed</Label>
                    <Select>
                      <SelectTrigger className="mt-1">
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="wheels">Custom Wheels</SelectItem>
                        <SelectItem value="tires">Performance Tires</SelectItem>
                        <SelectItem value="installation">Installation Service</SelectItem>
                        <SelectItem value="consultation">Free Consultation</SelectItem>
                        <SelectItem value="warranty">Warranty Support</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      className="mt-1 h-32"
                      placeholder="Tell us about your project, questions, or how we can help..."
                    />
                  </div>
                  <Button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white py-3 text-lg font-semibold shadow-lg">
                    <MessageSquare className="w-5 h-5 mr-2" />
                    Send Message
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Map & Additional Info */}
            <div className="space-y-8">
              {/* Map Placeholder */}
              <Card className="shadow-xl border-0">
                <CardHeader>
                  <CardTitle className="text-gray-900">Visit Our Showroom</CardTitle>
                  <CardDescription>See our products in person and meet our expert team</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="aspect-video bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg flex items-center justify-center mb-4">
                    <div className="text-center">
                      <MapPin className="w-12 h-12 text-gray-500 mx-auto mb-2" />
                      <p className="text-gray-600">Interactive Map</p>
                      <p className="text-sm text-gray-500">123 Performance Drive</p>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full bg-transparent">
                    <Navigation className="w-4 h-4 mr-2" />
                    Get Directions
                  </Button>
                </CardContent>
              </Card>

              {/* Service Areas */}
              <Card className="shadow-xl border-0">
                <CardHeader>
                  <CardTitle className="text-gray-900">Service Areas</CardTitle>
                  <CardDescription>We proudly serve customers throughout the region</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-2">
                    {serviceAreas.map((area, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                        <span className="text-sm text-gray-700">{area}</span>
                      </div>
                    ))}
                  </div>
                  <p className="text-sm text-gray-600 mt-4">
                    Don't see your area? Contact us - we may still be able to help!
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">Why Choose AutoElite?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Experience the difference of working with automotive professionals
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {reasons.map((reason, index) => (
              <Card key={index} className="text-center hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                <CardHeader>
                  <div className="mx-auto w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center mb-4 shadow-lg">
                    <reason.icon className="w-7 h-7 text-white" />
                  </div>
                  <CardTitle className="text-lg text-gray-900">{reason.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">{reason.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-16 bg-gradient-to-r from-slate-900 to-blue-900 text-white relative">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Need Emergency Service?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Tire blowout or wheel damage? We offer 24/7 emergency roadside assistance for our customers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 text-lg font-semibold">
                <Phone className="w-5 h-5 mr-2" />
                Emergency: (555) 911-TIRE
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white bg-transparent px-8 py-3 text-lg font-semibold"
              >
                <MessageSquare className="w-5 h-5 mr-2" />
                Live Chat Support
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-8 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-lg">🏁</span>
              </div>
              <div>
                <span className="text-xl font-bold text-gray-900">AutoElite</span>
                <div className="text-xs text-gray-500 -mt-1">WHEELS & TIRES</div>
              </div>
            </div>
            <p className="text-gray-600">© 2024 AutoElite. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
