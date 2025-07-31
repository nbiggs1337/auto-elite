import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Wrench, Shield, Truck, CheckCircle, Settings, Gauge, Car, Zap, Award, Phone } from "lucide-react"

const mainServices = [
  {
    icon: Wrench,
    title: "Professional Installation",
    description: "Expert mounting, balancing, and alignment services",
    features: ["Precision mounting", "Computer balancing", "Wheel alignment", "TPMS programming"],
    price: "Starting at $25/wheel",
    duration: "30-60 minutes",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    icon: Settings,
    title: "Custom Wheel Fitting",
    description: "Perfect fitment for your specific vehicle",
    features: ["Fitment consultation", "Offset calculation", "Load rating verification", "Clearance testing"],
    price: "Free consultation",
    duration: "15-30 minutes",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    icon: Gauge,
    title: "Performance Tuning",
    description: "Optimize your setup for maximum performance",
    features: ["Suspension tuning", "Pressure optimization", "Performance testing", "Track preparation"],
    price: "Starting at $150",
    duration: "1-2 hours",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    icon: Shield,
    title: "Tire Protection Plans",
    description: "Comprehensive coverage for your investment",
    features: ["Road hazard protection", "Replacement guarantee", "Free repairs", "24/7 roadside assistance"],
    price: "Starting at $49/tire",
    duration: "Instant coverage",
    image: "/placeholder.svg?height=300&width=400",
  },
]

const additionalServices = [
  {
    icon: Car,
    title: "Mobile Installation",
    description: "We come to your location for installation",
    price: "$50 service fee",
  },
  {
    icon: Zap,
    title: "Same-Day Service",
    description: "Get back on the road quickly",
    price: "No extra charge",
  },
  {
    icon: Award,
    title: "Lifetime Balancing",
    description: "Free rebalancing for life of tires",
    price: "Included with purchase",
  },
  {
    icon: Truck,
    title: "Free Shipping",
    description: "On orders over $500",
    price: "Free",
  },
]

const warranties = [
  {
    title: "Workmanship Guarantee",
    description: "100% satisfaction guarantee on all installation work",
    duration: "Lifetime",
    coverage: "Full labor and reinstallation",
  },
  {
    title: "Product Warranty",
    description: "Manufacturer warranties on all wheels and tires",
    duration: "Varies by brand",
    coverage: "Defects and premature wear",
  },
  {
    title: "Road Hazard Protection",
    description: "Coverage against road damage and punctures",
    duration: "Up to 5 years",
    coverage: "Replacement and repair costs",
  },
]

const processSteps = [
  {
    step: "01",
    title: "Consultation",
    description: "We discuss your needs, vehicle specs, and performance goals",
  },
  {
    step: "02",
    title: "Selection",
    description: "Choose from our extensive inventory of premium wheels and tires",
  },
  {
    step: "03",
    title: "Installation",
    description: "Professional mounting, balancing, and alignment by certified technicians",
  },
  {
    step: "04",
    title: "Quality Check",
    description: "Final inspection and test drive to ensure perfect performance",
  },
]

export default function ServicesPage() {
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
              <Link href="/services" className="font-medium">
                Services
              </Link>
              <Link href="/contact" className="text-muted-foreground hover:text-foreground">
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
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Professional <span className="text-blue-400">Automotive</span> Services
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              From expert installation to performance tuning, we provide comprehensive automotive services to keep you
              performing at your peak.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg font-semibold">
                  Schedule Service
                </Button>
              </Link>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white bg-transparent px-8 py-3 text-lg font-semibold"
              >
                Free Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">Our Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive automotive solutions delivered by certified professionals
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-8">
            {mainServices.map((service, index) => (
              <Card
                key={index}
                className="overflow-hidden hover:shadow-xl transition-all duration-300 border-0 shadow-lg"
              >
                <div className="grid md:grid-cols-2">
                  <div className="aspect-video md:aspect-square relative">
                    <Image
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center mr-4 shadow-lg">
                        <service.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <CardTitle className="text-lg text-gray-900">{service.title}</CardTitle>
                        <Badge variant="outline" className="mt-1">
                          {service.duration}
                        </Badge>
                      </div>
                    </div>
                    <CardDescription className="text-gray-600 mb-4">{service.description}</CardDescription>
                    <ul className="space-y-2 mb-4">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-700">
                          <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-bold text-blue-600">{service.price}</span>
                      <Button size="sm">Learn More</Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">Additional Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Extra conveniences to make your experience even better</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalServices.map((service, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:scale-105"
              >
                <CardHeader>
                  <div className="mx-auto w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center mb-4 shadow-lg">
                    <service.icon className="w-7 h-7 text-white" />
                  </div>
                  <CardTitle className="text-lg text-gray-900">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 mb-3">{service.description}</CardDescription>
                  <Badge className="bg-green-100 text-green-800">{service.price}</Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Service Process */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">Our Service Process</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">A streamlined approach to delivering exceptional results</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center mx-auto shadow-lg">
                    <span className="text-2xl font-bold text-white">{step.step}</span>
                  </div>
                  {index < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-blue-300 to-blue-500 transform -translate-y-1/2"></div>
                  )}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Warranties */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">Warranty & Protection</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Comprehensive coverage to protect your investment</p>
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            {warranties.map((warranty, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <CardTitle className="text-lg text-gray-900">{warranty.title}</CardTitle>
                    <Badge className="bg-blue-100 text-blue-800">{warranty.duration}</Badge>
                  </div>
                  <CardDescription className="text-gray-600">{warranty.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center text-sm text-gray-700">
                    <Shield className="w-4 h-4 text-green-600 mr-2" />
                    <span className="font-medium">Coverage: </span>
                    <span className="ml-1">{warranty.coverage}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-slate-900 to-blue-900 text-white relative">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Experience the AutoElite difference. Schedule your service today and discover why we're the preferred
              choice for automotive enthusiasts.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg font-semibold">
                  Schedule Service
                </Button>
              </Link>
              <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 text-lg font-semibold">
                <Phone className="w-5 h-5 mr-2" />
                Call Now: (555) 123-4567
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
