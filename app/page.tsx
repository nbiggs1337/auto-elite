import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Truck, Shield, Wrench, Phone, Mail, MapPin } from "lucide-react"

const featuredProducts = [
  {
    id: 1,
    name: "Premium Sport Wheels",
    price: 899,
    image: "/placeholder.svg?height=300&width=300",
    rating: 4.8,
    reviews: 124,
  },
  {
    id: 2,
    name: "All-Terrain Tires",
    price: 299,
    image: "/placeholder.svg?height=300&width=300",
    rating: 4.9,
    reviews: 89,
  },
  {
    id: 3,
    name: "Chrome Luxury Rims",
    price: 1299,
    image: "/placeholder.svg?height=300&width=300",
    rating: 4.7,
    reviews: 156,
  },
]

const services = [
  {
    icon: Wrench,
    title: "Professional Installation",
    description: "Expert installation by certified technicians",
  },
  {
    icon: Truck,
    title: "Free Shipping",
    description: "Free shipping on orders over $500",
  },
  {
    icon: Shield,
    title: "Warranty Protection",
    description: "Comprehensive warranty on all products",
  },
]

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-lg">🏁</span>
              </div>
              <div>
                <span className="text-xl font-bold text-gray-900">AutoElite</span>
                <div className="text-xs text-gray-500 -mt-1">WHEELS & TIRES</div>
              </div>
            </div>
            <nav className="hidden md:flex items-center space-x-6">
              <Link href="/" className="font-medium">
                Home
              </Link>
              <Link href="/shop" className="text-muted-foreground hover:text-foreground">
                Shop
              </Link>
              <Link href="/services" className="text-muted-foreground hover:text-foreground">
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
      <section className="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Premium <span className="text-blue-400">Performance</span>
                <br />
                Wheels & Tires
              </h1>
              <p className="text-xl mb-8 text-gray-300">
                Engineered for excellence. Built for performance. Transform your ride with our premium automotive solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/shop">
                  <Button
                    size="lg"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg font-semibold"
                  >
                    Shop Performance Parts
                  </Button>
                </Link>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white bg-transparent px-8 py-3 text-lg font-semibold"
                >
                  Professional Installation
                </Button>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=500&width=600"
                alt="Custom wheels showcase"
                width={600}
                height={500}
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">Why Choose AutoElite?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Professional automotive solutions with racing-grade quality and expert installation
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="text-center hover:shadow-xl transition-shadow border-0 shadow-lg">
                <CardHeader>
                  <div className="mx-auto w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center mb-4 shadow-lg">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-gray-900">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">{service.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Featured Products</h2>
            <p className="text-gray-600">Discover our most popular wheels and tires</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <Card key={product.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-square relative">
                  <Image src={product.image || "/placeholder.svg"} alt={product.name} fill className="object-cover" />
                  <Badge className="absolute top-4 left-4 bg-red-600">Featured</Badge>
                </div>
                <CardHeader>
                  <CardTitle className="text-lg">{product.name}</CardTitle>
                  <div className="flex items-center gap-2">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < Math.floor(product.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-600">({product.reviews})</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold">${product.price}</span>
                    <Button>Add to Cart</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/shop">
              <Button size="lg" variant="outline">
                View All Products
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gradient-to-r from-slate-900 to-blue-900 text-white relative">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
              <p className="text-gray-300 mb-8">
                Ready to upgrade your ride? Contact us for expert advice and professional installation.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-red-400" />
                  <span>(555) 123-4567</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-red-400" />
                  <span>info@wheeltechpro.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-red-400" />
                  <span>123 Auto Street, Car City, CC 12345</span>
                </div>
              </div>
            </div>
            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Send us a Message</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium">First Name</label>
                      <input className="w-full mt-1 px-3 py-2 border rounded-md" />
                    </div>
                    <div>
                      <label className="text-sm font-medium">Last Name</label>
                      <input className="w-full mt-1 px-3 py-2 border rounded-md" />
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium">Email</label>
                    <input type="email" className="w-full mt-1 px-3 py-2 border rounded-md" />
                  </div>
                  <div>
                    <label className="text-sm font-medium">Message</label>
                    <textarea className="w-full mt-1 px-3 py-2 border rounded-md h-24"></textarea>
                  </div>
                  <Button className="w-full bg-red-600 hover:bg-red-700">Send Message</Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-8">
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
            <p className="text-gray-600">© 2024 WheelTech Pro. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
