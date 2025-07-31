"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Star, Search, Filter, ShoppingCart } from "lucide-react"

const products = [
  {
    id: 1,
    name: "Premium Sport Wheels",
    price: 899,
    category: "wheels",
    brand: "SportMax",
    size: "18x8",
    image: "/placeholder.svg?height=300&width=300",
    rating: 4.8,
    reviews: 124,
    inStock: true,
  },
  {
    id: 2,
    name: "All-Terrain Tires",
    price: 299,
    category: "tires",
    brand: "TerrainPro",
    size: "265/70R17",
    image: "/placeholder.svg?height=300&width=300",
    rating: 4.9,
    reviews: 89,
    inStock: true,
  },
  {
    id: 3,
    name: "Chrome Luxury Rims",
    price: 1299,
    category: "wheels",
    brand: "LuxuryLine",
    size: "20x9",
    image: "/placeholder.svg?height=300&width=300",
    rating: 4.7,
    reviews: 156,
    inStock: false,
  },
  {
    id: 4,
    name: "Performance Summer Tires",
    price: 399,
    category: "tires",
    brand: "SpeedGrip",
    size: "245/40R18",
    image: "/placeholder.svg?height=300&width=300",
    rating: 4.6,
    reviews: 203,
    inStock: true,
  },
  {
    id: 5,
    name: "Off-Road Beast Wheels",
    price: 1099,
    category: "wheels",
    brand: "OffRoadKing",
    size: "17x9",
    image: "/placeholder.svg?height=300&width=300",
    rating: 4.8,
    reviews: 78,
    inStock: true,
  },
  {
    id: 6,
    name: "Winter Snow Tires",
    price: 249,
    category: "tires",
    brand: "SnowMaster",
    size: "225/60R16",
    image: "/placeholder.svg?height=300&width=300",
    rating: 4.5,
    reviews: 134,
    inStock: true,
  },
]

export default function ShopPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [categoryFilter, setCategoryFilter] = useState("all")
  const [sortBy, setSortBy] = useState("name")
  const [cart, setCart] = useState<number[]>([])

  const filteredProducts = products
    .filter((product) => {
      const matchesSearch =
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.brand.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesCategory = categoryFilter === "all" || product.category === categoryFilter
      return matchesSearch && matchesCategory
    })
    .sort((a, b) => {
      switch (sortBy) {
        case "price-low":
          return a.price - b.price
        case "price-high":
          return b.price - a.price
        case "rating":
          return b.rating - a.rating
        default:
          return a.name.localeCompare(b.name)
      }
    })

  const addToCart = (productId: number) => {
    setCart((prev) => [...prev, productId])
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b">
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
              <Link href="/shop" className="font-medium">
                Shop
              </Link>
              <Link href="/services" className="text-muted-foreground hover:text-foreground">
                Services
              </Link>
              <Link href="/contact" className="text-muted-foreground hover:text-foreground">
                Contact
              </Link>
              <Button
                variant="outline"
                size="sm"
                className="relative bg-gradient-to-r from-blue-600 to-blue-700 text-white border-0 hover:from-blue-700 hover:to-blue-800"
              >
                <ShoppingCart className="w-4 h-4 mr-2" />
                Cart
                {cart.length > 0 && (
                  <Badge className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs">{cart.length}</Badge>
                )}
              </Button>
            </nav>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-4 text-gray-900">Performance Shop</h1>
          <p className="text-gray-600">Discover premium wheels and tires engineered for performance</p>
        </div>

        {/* Filters */}
        <div className="bg-white p-6 rounded-xl shadow-lg mb-8 border border-gray-100">
          <div className="grid md:grid-cols-4 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
              <Input
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={categoryFilter} onValueChange={setCategoryFilter}>
              <SelectTrigger>
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                <SelectItem value="wheels">Wheels</SelectItem>
                <SelectItem value="tires">Tires</SelectItem>
              </SelectContent>
            </Select>
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger>
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="name">Name</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
                <SelectItem value="rating">Rating</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline">
              <Filter className="w-4 h-4 mr-2" />
              More Filters
            </Button>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <Card
              key={product.id}
              className="overflow-hidden hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:scale-105"
            >
              <div className="aspect-square relative">
                <Image src={product.image || "/placeholder.svg"} alt={product.name} fill className="object-cover" />
                {!product.inStock && <Badge className="absolute top-4 left-4 bg-gray-500">Out of Stock</Badge>}
                <Badge className="absolute top-4 right-4 bg-blue-600">
                  {product.category === "wheels" ? "Wheels" : "Tires"}
                </Badge>
              </div>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-lg">{product.name}</CardTitle>
                    <p className="text-sm text-gray-600">
                      {product.brand} • {product.size}
                    </p>
                  </div>
                  <span className="text-2xl font-bold">${product.price}</span>
                </div>
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
                <Button className="w-full" disabled={!product.inStock} onClick={() => addToCart(product.id)}>
                  {product.inStock ? "Add to Cart" : "Out of Stock"}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No products found matching your criteria.</p>
          </div>
        )}
      </div>
    </div>
  )
}
